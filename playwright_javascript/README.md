# Shopify Scraper using Playwright Javascript

 Step 1:  Clone/download the repo to your local system.

Step 2: cd into the `playwright_javascript` directory.

Step 3: Install the dependencies mentioned in the `package.json` file using the command.

        npm install

Step 4: Install the necessary browsers required for playwright.

        playwright install

Step 5: Run the scraper code using.

        node main.js

> :memo: ***More resources on scraping and other related topics can be found [here](https://www.scrapehero.com/articles/)***.

>:bulb: ***To collect product data from any Shopify powered website on scale and without code visit [Scrapehero Cloud](https://www.scrapehero.com/marketplace/shopify-scraper/)***.

The results will be stored into a `shopifyData.json` in your project directory.
Using the search_term as `Texas Homes for Sale` in Zillow, we get the sample data shown below.
```json
    {
        "description": "Originally designed for one of Norway’s most monumental buildings, the Oslo Stock Exchange, Merkur is a modern take on the archetypal dining chair.Using traditional woodworking techniques to create its timeless form, the solid wood design is also available without armrests and can be partially upholstered in a range of beautiful fabrics and leather to add further comfort. Details MaterialsSolid oak &amp; plywood DimensionsW46 x D52 x H78 cm Seat Height 46cmArmrest Height 66cm UpholsteryAvailable in selected fabrics and leathers from the AUDO Upholstery Program below - please contact us to discuss upholstery options and to see samples. We are always happy to advise. Textile Group 1Barnum Bouclé, Audo - click to viewRemix by Kvadrat - click to viewMaple by Kvadrat - click to viewRe-Wool by Kvadrat - click to viewChampion Velvet by JAB - click to view Textile Group 2Fiord by Kvadrat - click to viewClay by Kvadrat - click to viewMoss by Kvadrat - click to viewCanvas by Kvadrat - click to viewColline by Kvadrat - click to viewHallingdal 65 by Kvadrat - click to viewSteelcut by Kvadrat - click to viewSteelcut Trio by Kvadrat - click to viewTextile Group 3Safire by Kvadrat - click to viewVidar by Kvadrat x Raf Simons - click to viewLeather Group 1Ultra by Sørensen Leather - click to viewDakar by Nevotex - click to view",
        "images": [
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MerkurBlackArmchairBoucle06.jpg?v=1686158946",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MerkurNatArmchairHallingdal0200.jpg?v=1686158946",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/Menu_Merkur_EHeier_8_8399e605-5fba-404b-a534-c355ab2ba0d4.jpg?v=1686158470",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MENU_Merkur_Dining_Chair_Androgyne_Table_4_c284c12f-b0be-4a74-8586-0fe3ecba979d.jpg?v=1686158470",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MerkurUpholsteredSeat_cf5cbd77-0b41-41e2-b7f3-f7078570cf1d.jpg?v=1686158466"
        ],
        "input_url": "https://hauslondon.com",
        "product_name": "Merkur Upholstered Dining Armchair By Skogstad & Wærnes",
        "product_type": "Furniture",
        "product_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes",
        "tags": [
            "Designed-By-Skogstad & Wærnes",
            "lead-time-6",
            "new-arrivals"
        ],
        "variants": [
            {
                "id": 44091322990847,
                "image_url": null,
                "price": "765.00",
                "sku": null,
                "title": "Natural Oak / Fabric Group 1",
                "variant_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes?44091322990847"
            },
            {
                "id": 44091348844799,
                "image_url": null,
                "price": "825.00",
                "sku": "",
                "title": "Natural Oak / Fabric Group 2",
                "variant_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes?44091348844799"
            },
            {
                "id": 44091348877567,
                "image_url": null,
                "price": "885.00",
                "sku": "",
                "title": "Natural Oak / Fabric Group 3",
                "variant_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes?44091348877567"
            },
            {
                "id": 44091348910335,
                "image_url": null,
                "price": "825.00",
                "sku": "",
                "title": "Natural Oak / Leather Group 1",
                "variant_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes?44091348910335"
            },
            {
                "id": 44091323023615,
                "image_url": null,
                "price": "765.00",
                "sku": null,
                "title": "Black Painted Oak / Fabric Group 1",
                "variant_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes?44091323023615"
            },
            {
                "id": 44091348943103,
                "image_url": null,
                "price": "825.00",
                "sku": "",
                "title": "Black Painted Oak / Fabric Group 2",
                "variant_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes?44091348943103"
            },
            {
                "id": 44091348975871,
                "image_url": null,
                "price": "885.00",
                "sku": "",
                "title": "Black Painted Oak / Fabric Group 3",
                "variant_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes?44091348975871"
            },
            {
                "id": 44091349008639,
                "image_url": null,
                "price": "825.00",
                "sku": "",
                "title": "Black Painted Oak / Leather Group 1",
                "variant_url": "https://hauslondon.com/products/merkur-upholstered-dining-armchair-by-skogstad-waernes?44091349008639"
            }
        ]
    },
    {
        "description": "Inspired by architecture, Eave Modular Sofa takes its name from “eaves” – the lower edges of the roof that overhang a wall. The sofa’s distinctive detail is its internal “eaves” – curved upholstered armrests that lend the sofa its expressive character.A perfect blend of style and comfort, Eave is a generous sofa that will encourage owners to relax.Available in two depths to suit you and your space. You can also use the available modules (and two depths, 86 or 96 cm) to create your own perfect sofa configuration here. Please contact us to discuss your requirements - we are always happy to advise. Details MaterialsStructural frame made from pine, plywood and MDFSeat, backrest and armrests consist of a double foam layer with no-sag springs. UpholsteryAvailable in selected fabrics and leathers from the AUDO Upholstery Program below - please contact us to discuss upholstery options and to see samples. We are always happy to advise. Textile Group 1Barnum Bouclé, Audo - click to viewRemix by Kvadrat - click to viewMaple by Kvadrat - click to viewRe-Wool by Kvadrat - click to viewChampion Velvet by JAB - click to view Textile Group 2Fiord by Kvadrat - click to viewClay by Kvadrat - click to viewMoss by Kvadrat - click to viewCanvas by Kvadrat - click to viewColline by Kvadrat - click to viewHallingdal 65 by Kvadrat - click to viewSteelcut by Kvadrat - click to viewSteelcut Trio by Kvadrat - click to viewTextile Group 3Safire by Kvadrat - click to viewVidar by Kvadrat x Raf Simons - click to view DimensionsEave 3 Seater Sofa Depth 86cm - W247 x D86 x H70cmSeat Depth 56cm x Seat Height 40cmEave 3 Seater Sofa Depth 96cm - W267 x D96 x H70cmSeat Depth 66cm x Seat Height 40cm",
        "images": [
            "https://cdn.shopify.com/s/files/1/0053/2792/files/9976000-000400ZZ_Eave_Modular_Sofa_86_3_Seater_Boucle_02_Front.jpg?v=1686152453",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/9976000-000400ZZ_Eave_Modular_Sofa_86_3_Seater_Boucle_02_Back.jpg?v=1686155734",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/Eave3SeaterLifestyle.jpg?v=1686155734",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MENU_Eave_Modular_Sofa_Boucle_Eave_Androgyne_Side_Table_Reverse_Table_Lamp_NNDW_Houkime_Rug_1_36a08ca3-a7b7-4466-8383-e7a9895e2b1d.jpg?v=1686155731",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/9976000-000400ZZ_Eave_Modular_Sofa_86_3_Seater_Boucle_02_Angle.jpg?v=1686155731",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MENU_Eave_Modular_Sofa_Boucle_Androgyne_Lounge_Table_Cyclades_Vase_Houkime_Rug_1_9e18bd92-60f2-47ff-816f-ecb8061ce385.jpg?v=1686155731",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MENU_Yana_Brewing_Pot_Balcony_Serving_Tray_Eave_Modular_Sofa_Androgyne_Lounge_Table_Abacus_Candle_Holder_4.jpg?v=1686155731"
        ],
        "input_url": "https://hauslondon.com",
        "product_name": "Eave 3 Seater Sofa by Norm Architects",
        "product_type": "Furniture",
        "product_url": "https://hauslondon.com/products/eave-3-seater-sofa-by-norm-architects",
        "tags": [
            "designed-by-Norm Architects",
            "made-to-order-9",
            "new-arrivals"
        ],
        "variants": [
            {
                "id": 44091034173695,
                "image_url": null,
                "price": "4595.00",
                "sku": null,
                "title": "Eave 3 Seater Sofa Depth 86cm / Fabric Category 1",
                "variant_url": "https://hauslondon.com/products/eave-3-seater-sofa-by-norm-architects?44091034173695"
            },
            {
                "id": 44091034206463,
                "image_url": null,
                "price": "5775.00",
                "sku": null,
                "title": "Eave 3 Seater Sofa Depth 86cm / Fabric Category 2",
                "variant_url": "https://hauslondon.com/products/eave-3-seater-sofa-by-norm-architects?44091034206463"
            },
            {
                "id": 44091034239231,
                "image_url": null,
                "price": "6400.00",
                "sku": null,
                "title": "Eave 3 Seater Sofa Depth 86cm / Fabric Category 3",
                "variant_url": "https://hauslondon.com/products/eave-3-seater-sofa-by-norm-architects?44091034239231"
            },
            {
                "id": 44091034271999,
                "image_url": null,
                "price": "4910.00",
                "sku": null,
                "title": "Eave 3 Seater Sofa Depth 96cm / Fabric Category 1",
                "variant_url": "https://hauslondon.com/products/eave-3-seater-sofa-by-norm-architects?44091034271999"
            },
            {
                "id": 44091034337535,
                "image_url": null,
                "price": "6195.00",
                "sku": null,
                "title": "Eave 3 Seater Sofa Depth 96cm / Fabric Category 2",
                "variant_url": "https://hauslondon.com/products/eave-3-seater-sofa-by-norm-architects?44091034337535"
            },
            {
                "id": 44091034370303,
                "image_url": null,
                "price": "6790.00",
                "sku": null,
                "title": "Eave 3 Seater Sofa Depth 96cm / Fabric Category 3",
                "variant_url": "https://hauslondon.com/products/eave-3-seater-sofa-by-norm-architects?44091034370303"
            }
        ]
    },
    {
        "description": "Item 485 - 1 × Cutter Coat Rack in Oak available - Medium 100cm size. New Condition, Opened box. These Cutter coat racks form part of the iconic Cutter collection inspired by the Bauhaus movement. A well designed simple range of furniture that is both beautifully crafted and functional. The compact design of the Cutter Coat Rack is perfect for rooms where layout or limited space prevents the use of the deeper Cutter Wardrobe. The simple clean cut design is available in two sizes with 2 bars in the 72cm length and 3 bars in the 100cm length. Also available in the wider Cutter collection are stools, benches, and a coat rack / wardrobe. Details DimensionsMedium: L100cm x D12cm x H7cm MaterialsFSC 100% Oak, Stainless steel",
        "images": [
            "https://cdn.shopify.com/s/files/1/0053/2792/files/S1920480CutterRack100_Oak07_c2185a09-14da-4d97-a2d9-ff5a41f8aed5.png?v=1685100582",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/S1920403S1920423S1920489Cutter_black_M_7364f067-e733-41eb-ba21-57c423980be7.jpg?v=1685100497"
        ],
        "input_url": "https://hauslondon.com",
        "product_name": "Clearance Cutter Coat Rack / Oak / 100cm by Skagerak",
        "product_type": "Clearance",
        "product_url": "https://hauslondon.com/products/clearance-cutter-coat-rack-oak-100cm-by-skagerak",
        "tags": [
            "clearance",
            "designed-by-Niels Hvass",
            "flag-30% off",
            "r-cutter"
        ],
        "variants": [
            {
                "id": 44060317876479,
                "image_url": null,
                "price": "129.00",
                "sku": "",
                "title": "Clearance Cutter Coat Rack / Oak / 100cm by Skagerak",
                "variant_url": "https://hauslondon.com/products/clearance-cutter-coat-rack-oak-100cm-by-skagerak?44060317876479"
            }
        ]
    },
    {
        "description": "The restrained, conical shape of the Taper Bowl has a familiar feel, perfectly balanced and symmetrical, and reminiscent of ancient vessels. The oversize metal design features a brass finish that lends warmth to interiors.Versatile in use, it works equally well as a catch-all for small items as it does left unfilled as a decorative object.Professionally trained as a dancer - designer Colin King found himself at the intersection between a dancer’s awareness of space and a stylist’s impulse to bring it to life.Currently based in Tribeca NYC, he finds himself in a balance between styling and designing from his studio, and being inspired by life’s everyday imperfections, rituals and gestures. Details MaterialsMoulded aluminum - brass finishDimensionsØ 26 cmHeight 13 cm0.83 kg",
        "images": [
            "https://cdn.shopify.com/s/files/1/0053/2792/files/TaperBowl.jpg?v=1686078690",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/TaperBowlLifestyle2.jpg?v=1686078690",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/TaperBowlLifestyle1.jpg?v=1686078690",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/TaperBowlLifestyle3.jpg?v=1686078690"
        ],
        "input_url": "https://hauslondon.com",
        "product_name": "Taper Bowl by Colin King Studio",
        "product_type": "Accessories",
        "product_url": "https://hauslondon.com/products/taper-bowl-by-colin-king-studio",
        "tags": [
            "designed-by-Colin King",
            "lead-time-4",
            "new-arrivals"
        ],
        "variants": [
            {
                "id": 44089380536575,
                "image_url": null,
                "price": "175.00",
                "sku": "",
                "title": "Taper Bowl by Colin King Studio",
                "variant_url": "https://hauslondon.com/products/taper-bowl-by-colin-king-studio?44089380536575"
            }
        ]
    },
    {
        "description": "Item 490 - 1 x Palissade Rectangular Dining Table in Anthracite available. New Condition. A modern classic already - Palissade is a collection of outdoor furniture for HAY in powdercoated or hot galvanised steel. NEW for 2023 is the rich Iron Red colourway, a perfect contrast for greenery.The products in the Palissade Collection have a two component coating; a primer and an outdoor powder coating which provides a barrier to corrosive elements making it suitable for outdoor use. The Palissade Collection is also available with a hot-dip galvanised finish, offering maintenance-free longevity. Details MaterialPowder coated or hot-dip galvanised steel. Suitable for outdoor use. With standard glider. DimensionsL170 x W90 x H75 cm",
        "images": [
            "https://cdn.shopify.com/s/files/1/0053/2792/files/AA693-A377-AA96_PalissadeTableL170xW90xH75anthracite_30279b15-0a3e-492b-b7b6-6ad0f217ff6c.jpg?v=1685095927",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/PalissadeTableanthracite_GlassJug_TintGlassgreen_TintTumblergreen_ServingTraygolden_SoftIcecerealbowl_4589e483-4ed8-4fd3-81aa-e76a18ed26bb.png?v=1685095928",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/PalissadeTableanthracite_PalissadeChairanthracite_PalissadeStoolanthracite_ApolloPortable01_d1543cc1-cfca-4043-8bf5-49b9372b7e99.jpg?v=1685095928"
        ],
        "input_url": "https://hauslondon.com",
        "product_name": "Clearance Palissade Rectangular Dining Table / Anthracite by Hay",
        "product_type": "Clearance",
        "product_url": "https://hauslondon.com/products/clearance-palissade-rectangular-dining-table-anthracite-by-hay",
        "tags": [
            "clearance",
            "designed-by-Ronan & Erwan Bouroullec",
            "flag-30% off",
            "Hay-Outdoor",
            "outdoor-furniture"
        ],
        "variants": [
            {
                "id": 44060268134655,
                "image_url": null,
                "price": "664.00",
                "sku": "",
                "title": "Clearance Palissade Rectangular Dining Table / Anthracite by Hay",
                "variant_url": "https://hauslondon.com/products/clearance-palissade-rectangular-dining-table-anthracite-by-hay?44060268134655"
            }
        ]
    },
    {
        "description": "Originally designed for one of Norway’s most monumental buildings, the Oslo Stock Exchange, Merkur is a modern take on the archetypal dining chair. Using traditional woodworking techniques to create its timeless form, the solid wood design is also available with armrests and can be partially upholstered in a range of beautiful fabrics and leather to add further comfort. Details MaterialsSolid oak &amp; plywood DimensionsW46 x D52 x H78 cm Seat Height 46cm",
        "images": [
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MerkurNaturalOak.jpg?v=1686156512",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MerkurDiningChairLifestyle1.jpg?v=1686156512",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MENU_Merkur_Dining_Chair_17.jpg?v=1686156519",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/Menu_Merkur_EHeier_18.jpg?v=1686156519",
            "https://cdn.shopify.com/s/files/1/0053/2792/files/MerkurBlackOak.jpg?v=1686156512"
        ],
        "input_url": "https://hauslondon.com",
        "product_name": "Merkur Dining Chair By Skogstad & Wærnes",
        "product_type": "Furniture",
        "product_url": "https://hauslondon.com/products/merkur-dining-chair-by-skogstad-waernes",
        "tags": [
            "Designed-By-Skogstad & Wærnes",
            "lead-time-6",
            "new-arrivals"
        ],
        "variants": [
            {
                "id": 44091207287039,
                "image_url": "https://cdn.shopify.com/s/files/1/0053/2792/files/MerkurNaturalOak.jpg?v=1686156512",
                "price": "530.00",
                "sku": null,
                "title": "Natural Oak",
                "variant_url": "https://hauslondon.com/products/merkur-dining-chair-by-skogstad-waernes?44091207287039"
            },
            {
                "id": 44091207385343,
                "image_url": "https://cdn.shopify.com/s/files/1/0053/2792/files/MerkurBlackOak.jpg?v=1686156512",
                "price": "530.00",
                "sku": null,
                "title": "Black Painted Oak",
                "variant_url": "https://hauslondon.com/products/merkur-dining-chair-by-skogstad-waernes?44091207385343"
            }
        ]
    },
```
