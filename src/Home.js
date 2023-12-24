import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/G/01/home/awr/2023_Projects/GiftLists/CGL21_A009_OwnerViewHeader_GenderNeutralGifting_421.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Lancôme La Vie Est Belle Eau de Parfum - Long Lasting Fragrance with Notes of Iris, Earthy Patchouli, Warm Vanilla & Spun Sugar - Floral & Sweet Women's Perfume,"
                        price={85}
                        rating={5}
                        image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/f1d3e66e-03b1-405e-aad8-868a978dfbec._CR0%2C0%2C1920%2C1920_.jpg"
                    />
                    <Product
                        id="12321341"
                        title="BAIMEI Jade Roller & Gua Sha, Face Roller, Facial Beauty Roller Skin Care Tools, Self Care Gift for Men Women, Massager for Face, Eyes, Neck, Relieve Fine Lines and Wrinkles - Green Aventurine"
                        price={32.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61kpzJZJb8L._SY355_.jpg"
                    />
                    <Product
                        id="4903850"
                        title="Apple Watch Series 9 [GPS 41mm] Smartwatch with Pink Aluminum Case with Pink Sport Loop. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Carbon Neutral"
                        price={329}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71fcQhXazBL._AC_SX522_.jpg"
                    />
                    <Product
                        id="4903850"
                        title="Vintage Art Deco Gin and Tonic Balloon Glasses | Set of 4 | 13.5 oz Stemless Crystal Copas for Drinking Gin Cocktails | Retro Gift Goblets for Gin Lovers | Bubble Cups for Bar Drinks"
                        price={329}
                        rating={3}
                        image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/7e2bcabf-ad01-4ac3-b520-5df34e2b975e.__CR0,193,4000,2474_PT0_SX970_V1___.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="ASUS 2023 Vivobook Go 15 Laptop, 15.6” FHD Display, AMD Ryzen 5 7520U Processor, 8GB RAM, 512GB SSD, Windows 11 Home, Mixed Black, E1504FA-AS52"
                        price={369.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/41dN7eFrA6L._AC_SY164_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Govee Outdoor LED Strip Lights Bundle LED Spot Lights Outdoor, IP65 Waterproof Outdoor Spotlights for Yard, Smart WiFi Low Voltage Landscape Lighting"
                        price={154.}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/718tHsUpioL._AC_UF894,1000_QL80_FMwebp_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="RIVOVA Upholstered Accent Arm Chairs Set of 2, Faux Sherpa Mid Century Modern Dining Chairs for Kitchen Dining Room Side Chairs with Wood Legs, White"
                        price={209.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91XxcMXxKBL._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR, Dual LED, Object Tracking Sound Lite, Q-Symphony, Motion Xcelerator, Gaming Hub, Smart TV with Alexa Built-in (QN32Q60C, 2023 Model),Titan Gray"
                        price={397.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/417-xFFaDVL._AC_SY328_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Lusper Adjustable Weight Bench Foldable - 660 Lb Stable Workout Bench, Extended head and neck protection design, 3 Sec Fast Folding Multi-Purpose for Full Body Workout"
                        price={75.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/6162FxOpgqL._AC_SX466_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
