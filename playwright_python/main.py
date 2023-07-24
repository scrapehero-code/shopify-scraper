import asyncio
import json

from playwright.async_api import Playwright, async_playwright

search_keyword = "furniture"
page_limit = 3
data = []


def save_data():
    """Save the data as a json file"""
    with open("shopify_scraper.json", "w") as file:
        json.dump(data, file, indent=2)


async def parse_product_page(page):
    """
    This function will extract the data from the product page
    Args:
        page (page object): The product page object to extract the data
    Returns:
        Save the extracted data to a global object
    """

    xpath_title = "//h1[contains(@class, 'product-title')]"
    xpath_subtitle = "//h1[contains(@class, 'product-title')]/following-sibling::h2/a"
    xpath_sale_price = "//span[@class='c__sale']"
    xpath_listing_price = "//span[@class='c__sale']/../s"

    title = page.locator(xpath_title)
    subtitle = page.locator(xpath_subtitle)
    sale_price = page.locator(xpath_sale_price)
    listing_price = page.locator(xpath_listing_price)

    title = await title.inner_text() if await title.count() else None
    title = title.encode("ascii", errors="ignore").decode()
    subtitle = await subtitle.inner_text() if await subtitle.count() else None
    sale_price = await sale_price.inner_text() if await sale_price.count() else None
    listing_price = (
        await listing_price.inner_text() if await listing_price.count() else None
    )
    url = page.url

    data_to_save = {
        "title": title,
        "subtitle": subtitle,
        "sale_price": sale_price,
        "listing_price": listing_price,
        "url": url,
    }
    data.append(data_to_save)
    return page


async def parse_listing_page(page, current_page, page_limit):
    """
    This function will parse the listing page and click each products
    Also this fuction will handle the pagination of the listing page
    Args:
        page (page object): The listig page object
        current_page (int): Current page number
        page_limit (_type_): Number of pages that need to be paginated

    Returns:
        page: current page obejct
    """

    # Initializing necessary xpaths
    xpath_products = "//div[@class='link--product']"
    xpath_next_page_button = "//span[@class='sp-nav-arrow-right']"
    all_products = page.locator(xpath_products)
    next_page_button = page.locator(xpath_next_page_button)

    # Iterating thorough each products and clicking it
    for product_index in range(await all_products.count()):
        product = all_products.nth(product_index)
        await product.click()
        await page.wait_for_load_state()
        await parse_product_page(page)
        await page.go_back()
        await page.wait_for_load_state()

    # Pagninating
    if current_page < page_limit and await next_page_button.count():
        current_page += 1
        await next_page_button.click()
        await page.wait_for_load_state()
        await parse_listing_page(page, current_page=current_page, page_limit=page_limit)

    else:
        return page


async def run(playwright: Playwright) -> None:
    """
    This function will create a browser and page object
    Args:
        playwright (Playwright): Playwright object
    """

    # Initiating a browser instance and getting a new page
    browser = await playwright.chromium.launch(headless=False, proxy={
        "server": "http://myproxy.com:3128",
        "username": "usr",
        "password": "pwd"
        })
    context = await browser.new_context()
    page = await context.new_page()

    # Initialising necessary xpath locators
    xpath_search_button_icon = "//span[@class='sp sp-search']"
    xpath_search_box = "//input[@id='SearchInput']"
    xpath_view_all = "//li[@class='search-results--more']/a"

    # Navigating to homepage
    await page.goto("https://hauslondon.com/")

    # Clicking the search icon
    await page.locator(xpath_search_button_icon).click()

    # Clicking the input search box
    await page.locator(xpath_search_box).click()

    # Typing the search keyword
    await page.locator(xpath_search_box).type(search_keyword, delay=200)
    await page.wait_for_load_state(timeout=10)

    # Clicking the viewall button for getting into the listing page
    await page.locator(xpath_view_all).click()
    await page.wait_for_timeout(10000)
    page = await parse_listing_page(page=page, current_page=1, page_limit=page_limit)

    save_data()

    # ---------------------
    await context.close()
    await browser.close()


async def main() -> None:
    async with async_playwright() as playwright:
        await run(playwright)


asyncio.run(main())
