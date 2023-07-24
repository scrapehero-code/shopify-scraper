// importing required modules
const fs = require('fs');
const playwright = require('playwright');

const searchKeyword = "furniture"
const pageLimit = 3
productData = []


/**
 * Validates whether the Locator contains any data.
 * Returns the innerHTML if its a valid one, other wise returns null
 * @param {locator} data 
 * @returns 
 */
async function processData(data) {
  count = await data.count()
  if (count) {
    data = await data.innerText()
  } else {
    data = null;
  }
  return data
}


/**
 * This function used to save the data as json file.
 * @param {[object]} data the data to be write as json file.
 */
function saveData() {
  let dataStr = JSON.stringify(data, null, 2)
  fs.writeFile("shopifyData.json", dataStr, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
}


/**
 * This function will extract the data from the product page
 * and store it to a global variable
 * @param {*} page 
 * @returns page
 */
async function parseProductPage(page) {
  // Initializing necessary xpaths
  const xpathTitle = "//h1[contains(@class, 'product-title')]"
  const xpathSubtitle = "//h1[contains(@class, 'product-title')]/following-sibling::h2/a"
  const xpathSalePrice = "//span[@class='c__sale']"
  const xpathListingPrice = "//span[@class='c__sale']/../s"

  // Locating the elements
  let productTitle = page.locator(xpathTitle)
  let subtitle = page.locator(xpathSubtitle)
  let salePrice = page.locator(xpathSalePrice)
  let listingPrice = page.locator(xpathListingPrice)

  //Extracting the necessary data
  productTitle = await processData(productTitle)
  subtitle = await processData(subtitle)
  salePrice = await processData(salePrice)
  listingPrice = await processData(listingPrice)
  url = page.url

  const dataToSave = {
    "title": productTitle,
    "subtitle": subtitle,
    "sale_price": salePrice,
    "listing_price": listingPrice,
    "url": url
  }
  // Saving to a global variable
  productData.push(dataToSave)
  return page
}


/**
 * This function will parse the listing page and click each products
  Also this fuction will handle the pagination of the listing page
 * @param {page} page  Page object
 * @param {int} currentPage Current page number
 * @param {int} pageLimit Number of pages that need to be paginated
 * @returns 
 */
async function parseListingPage(page, currentPage, pageLimit) {

  const xpathProducts = "//div[@class='link--product']"
  const xpathNextPageButton = "//span[@class='sp-nav-arrow-right']"
  let allProducts = page.locator(xpathProducts)
  let nextPageButton = page.locator(xpathNextPageButton)

  const allProductsCount = await allProducts.count();

  // Clicking each product and passing the page object to 
  // the parseProduct Function.
  for (var index = 0; index < allProductsCount; index++) {
    const product = await allProducts.nth(index);
    await product.click()
    await page.waitForLoadState()
    await parseProductPage(page)
    await page.goBack()
    await page.waitForLoadState()
  }

  // Pagination usng recursion
  if (currentPage < pageLimit && await nextPageButton.count()) {
    currentPage += 1
    await nextPageButton.click()
    await page.waitForLoadState()
    await parseListingPage(page, currentPage, pageLimit)
  } else {
    return page;
  }
}

/**
 * Open browser, goto given url and collect data
 */
async function run() {
  const browser = await playwright.chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    proxy: { server: 'http://<server:port>' }
  });

  // Initializing necessary xpaths
  const xpathSearchButtonIcon = "//span[@class='sp sp-search']"
  const xpathSearchBox = "//input[@id='SearchInput']"
  const xpathViewAll = "//li[@class='search-results--more']/a"

  // Open new page
  let page = await context.newPage()

  // Navigating to the home page
  await page.goto('https://hauslondon.com/', { waitUntil: 'load', timeout: 0 });

  // Clicking the search button
  await page.locator(xpathSearchButtonIcon).click()

  // Clicking the search box
  await page.locator(xpathSearchBox).click({ waitUntil: 'load' })

  // Typing the keyword
  await page.locator(xpathSearchBox).type(searchKeyword, delay = 200)
  await page.waitForLoadState()
  await page.waitForTimeout(30000);

  // Clicking view all button
  await page.locator(xpathViewAll).click()
  await page.waitForLoadState()

  // parsing the listing page
  page = await parseListingPage(page = page, currentPage = 1, pageLimit = pageLimit)

  // Saving the data
  saveData();
  // Closing browser context after use
  await context.close();
  await browser.close();
};

run();
