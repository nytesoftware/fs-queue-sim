'use strict';

const http = require('http');
const crypto = require('crypto');

const express = require('express');
const cookieParser = require('cookie-parser');

const cpus = require('os').cpus();
const cluster = require('cluster');

const app = express();
app.server = http.createServer(app);

const isFastly = !!process.env.FASTLY_WR;

const PORT = 6666;
const WR_COOKIE = isFastly ? 'waiting_room' : 'akavpwr_NYTE';
const PASS_COOKIE = isFastly ? 'waiting_room' : 'akavpau_NYTE';

const getCookie = () =>
    `${Date.now()}~${crypto
        .createHash('md5')
        .update(Math.random().toString(36).slice(2))
        .digest('hex')}`;

if (cluster.isMaster) {
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork();
    }
} else {
    app.disable('x-powered-by');
    app.use(cookieParser());

    app.get('/ap/products/pdp/*', (req, res) => {
        res.json({
            brand: 'Nike',
            categories: [
                {
                    code: '400372',
                    name: 'No Show Socks',
                },
                {
                    code: '200008',
                    name: 'Accessories',
                },
                {
                    code: '200039',
                    name: 'Nike',
                },
                {
                    code: '300135',
                    name: 'Training',
                },
                {
                    code: '200000',
                    name: "Men's",
                },
            ],
            description:
                '<p>Power through your workout with the Nike Everyday Plus Cushion No-Show Training Socks (6 Pair).</p> <p>&bull; Dri-FIT technology helps you stay dry and comfortable.</p> <p>&bull; Breathable mesh at the top of the foot for enhanced ventilation.</p> <p>&bull; Arch band contours around the foot for a locked in fit.</p> <p>&bull; No-show silhouette provides a low-profile feel.</p> <p>&bull; 70% cotton/27% polyester/2% spandex/1% nylon. Imported.</p>',
            dropShip: false,
            freeShipping: false,
            giftCosts: [50.0, 100.0, 150.0, 200.0, 250.0],
            images: [
                {
                    code: '21622891',
                    variations: [
                        {
                            altText: 'X6898010_cart',
                            format: 'cart',
                            url:
                                'https://images.footlocker.com/pi/X6898010/cart/X6898010.jpeg',
                        },
                        {
                            altText: 'X6898010_small',
                            format: 'small',
                            url:
                                'https://images.footlocker.com/pi/X6898010/small/X6898010.jpeg',
                        },
                        {
                            altText: 'X6898010_large',
                            format: 'large',
                            url:
                                'https://images.footlocker.com/pi/X6898010/large/X6898010.jpeg',
                        },
                        {
                            altText: 'X6898010_large_wide',
                            format: 'large_wide',
                            url:
                                'https://images.footlocker.com/pi/X6898010/large_wide/X6898010.jpeg',
                        },
                        {
                            altText: 'X6898010_zoom',
                            format: 'zoom',
                            url:
                                'https://images.footlocker.com/pi/X6898010/zoom/X6898010.jpeg',
                        },
                    ],
                },
            ],
            isNewProduct: false,
            isSaleProduct: true,
            modelNumber: '304218',
            name: "Nike 6 Pack Dri-FIT Plus No Show Socks - Men's",
            sellableUnits: [
                {
                    attributes: [
                        {
                            id: '21624010',
                            type: 'size',
                            value: 'M',
                        },
                        {
                            id: '21622891',
                            type: 'style',
                            value: 'Black/White',
                        },
                    ],
                    barCode: '888408260994',
                    code: '21624010',
                    isBackOrderable: false,
                    isPreOrder: false,
                    isRecaptchaOn: false,
                    price: {
                        currencyIso: 'USD',
                        formattedOriginalPrice: '$22.00',
                        formattedValue: '$17.99',
                        originalPrice: 22.0,
                        value: 17.99,
                    },
                    singleStoreInventory: false,
                    sizeAvailableInStores: false,
                    stockLevelStatus: 'inStock',
                },
                {
                    attributes: [
                        {
                            id: '21624009',
                            type: 'size',
                            value: 'L',
                        },
                        {
                            id: '21622891',
                            type: 'style',
                            value: 'Black/White',
                        },
                    ],
                    barCode: '888408261007',
                    code: '21624009',
                    isBackOrderable: false,
                    isPreOrder: false,
                    isRecaptchaOn: false,
                    price: {
                        currencyIso: 'USD',
                        formattedOriginalPrice: '$22.00',
                        formattedValue: '$17.99',
                        originalPrice: 22.0,
                        value: 17.99,
                    },
                    singleStoreInventory: false,
                    sizeAvailableInStores: false,
                    stockLevelStatus: 'inStock',
                },
            ],
            sizeChartGridMap: [
                {
                    label: 'SIZE',
                    sizes: ['XS', 'S', 'M', 'L', 'XL'],
                },
                {
                    label: "MEN'S SHOE SIZE",
                    sizes: ['N/A', 'N/A', '6-8', '8-12', '12-15'],
                },
                {
                    label: "WOMEN'S SHOE SIZE",
                    sizes: ['N/A', '4-6', '6-10', '10-13', 'N/A'],
                },
                {
                    label: 'YOUTH SHOE SIZE',
                    sizes: ['13C-3Y', '3Y-5Y', '5Y-7Y', 'N/A', 'N/A'],
                },
            ],
            sizeChartImage: 'sizing_blank.jpg',
            sizeChartTipTx:
                'If you still have questions about fit or sizing please contact Customer Service.|If your measurements fall between two sizes, choose the smaller size for a tighter fit or the larger size for a looser fit.',
            variantAttributes: [
                {
                    code: '21622891',
                    displayCountDownTimer: false,
                    eligiblePaymentTypesForProduct: [
                        'CREDITCARD',
                        'GIFTCARD',
                        'PAYPAL',
                        'klarna_account',
                    ],
                    freeShipping: true,
                    freeShippingMessage: 'Free Shipping',
                    isSelected: true,
                    launchProduct: false,
                    mapEnable: false,
                    price: {
                        currencyIso: 'USD',
                        formattedOriginalPrice: '$22.00',
                        formattedValue: '$17.99',
                        originalPrice: 22.0,
                        value: 17.99,
                    },
                    recaptchaOn: false,
                    riskified: false,
                    shipToAndFromStore: false,
                    shippingRestrictionExists: false,
                    sku: 'X6898010',
                    skuExclusions: true,
                    stockLevelStatus: 'inStock',
                    webOnlyLaunch: false,
                },
            ],
        });
    });

    app.all('*', (req, res) => {
        const cookies = req.cookies;
        const seed = Math.random();

        console.log(req.originalUrl, req.headers, cookies);

        if (isFastly) {
            const passCookie = req.cookies[WR_COOKIE];
            if (!passCookie) {
                res.cookie(WR_COOKIE, Math.random().toString());

                return res.sendStatus(503);
            }

            const parsed = parseFloat(passCookie);

            if (parsed > 0.9) {
                return res.sendStatus(200);
            } else {
                res.cookie(WR_COOKIE, Math.random().toString());

                return res.sendStatus(503);
            }
        } else {
            if (cookies[PASS_COOKIE]) {
                return res.sendStatus(200);
            }

            if (!cookies[WR_COOKIE]) {
                res.cookie(WR_COOKIE, getCookie());

                return res.sendStatus(503);
            }

            if (seed > 0.9) {
                res.cookie(PASS_COOKIE, getCookie());

                return res.sendStatus(200);
            }
        }

        // console.log(cookies);

        return res.sendStatus(503);
    });

    app.server.listen(process.env.PORT || PORT, () =>
        console.info(`Listening @: ${app.server.address().port}`)
    );
}
