// პროდუქტების მონაცემთა ბაზა (ka = ქართული, en = ინგლისური)
const products = [
    {id: 1, cat: 'Audio', price: 549, emoji: '🎧', stars: 5, reviews: 2341, badge: 'Hot', weight: 0.5, width: 20, height: 20, depth: 10,
        name: { ka: 'AirPods Pro Max - Space Gray', en: 'AirPods Pro Max - Space Gray' },
        desc: { ka: 'უმაღლესი ხარისხის აუდიო სისტემა აქტიური ხმაურის დახშობის (ANC) ტექნოლოგიით.', en: 'Premium audio system with Active Noise Cancellation (ANC) technology.' },
        specs: { ka: { 'ბრენდი': 'Apple', 'მოდელი': 'AirPods Pro Max', 'ელემენტი': '20 საათი' }, en: { 'Brand': 'Apple', 'Model': 'AirPods Pro Max', 'Battery': '20 hours' } }},
    {id: 2, cat: 'Phones', price: 1199, emoji: '📱', stars: 5, reviews: 1820, badge: 'New', weight: 0.3, width: 17, height: 9, depth: 1,
        name: { ka: 'Galaxy S25 Ultra 512GB', en: 'Galaxy S25 Ultra 512GB' },
        desc: { ka: 'ინოვაციური სმარტფონი 200MP კამერით და ჩაშენებული S Pen-ით.', en: 'Innovative smartphone with a 200MP camera and built-in S Pen.' },
        specs: { ka: { 'ბრენდი': 'Samsung', 'ეკრანი': '6.8" Dynamic AMOLED' }, en: { 'Brand': 'Samsung', 'Screen': '6.8" Dynamic AMOLED' } }},
    {id: 3, cat: 'Laptops', price: 1299, emoji: '💻', stars: 5, reviews: 987, badge: 'New', weight: 1.5, width: 35, height: 25, depth: 2,
        name: { ka: 'MacBook Air M4 - Titanium', en: 'MacBook Air M4 - Titanium' },
        desc: { ka: 'ულტრა თხელი და მძლავრი ლეპტოპი Apple M4 ჩიპით.', en: 'Ultra-thin and powerful laptop with the Apple M4 chip.' },
        specs: { ka: { 'ბრენდი': 'Apple', 'ჩიპსეტი': 'Apple M4' }, en: { 'Brand': 'Apple', 'Chipset': 'Apple M4' } }},
    {id: 4, cat: 'Wearables', price: 799, emoji: '⌚', stars: 4, reviews: 654, badge: '', weight: 0.15, width: 10, height: 10, depth: 8,
        name: { ka: 'Apple Watch Ultra 3', en: 'Apple Watch Ultra 3' },
        desc: { ka: 'ყველაზე გამძლე ჭკვიანი საათი ტიტანის კორპუსით.', en: 'The most durable smartwatch with a titanium case.' },
        specs: { ka: { 'ბრენდი': 'Apple', 'კორპუსი': 'ტიტანი' }, en: { 'Brand': 'Apple', 'Case': 'Titanium' } }},
    {id: 5, cat: 'Cameras', price: 3499, emoji: '📷', stars: 5, reviews: 412, badge: 'Pro', weight: 2, width: 15, height: 11, depth: 10,
        name: { ka: 'Sony A7 V Mirrorless Camera', en: 'Sony A7 V Mirrorless Camera' },
        desc: { ka: 'პროფესიონალური სრული კადრის უსარკო კამერა.', en: 'Professional full-frame mirrorless camera.' },
        specs: { ka: { 'ბრენდი': 'Sony', 'სენსორი': '61 MP Full-Frame' }, en: { 'Brand': 'Sony', 'Sensor': '61 MP Full-Frame' } }},
    {id: 6, cat: 'Audio', price: 329, emoji: '🎵', stars: 4, reviews: 1123, badge: 'Sale', weight: 0.6, width: 20, height: 18, depth: 9,
        name: { ka: 'Bose QuietComfort Ultra', en: 'Bose QuietComfort Ultra' },
        desc: { ka: 'მსოფლიო დონის ხმაურის დახშობა და იმერსიული აუდიო ფორმატი.', en: 'World-class noise cancellation and immersive audio format.' },
        specs: { ka: { 'ბრენდი': 'Bose', 'ტიპი': 'Over-Ear' }, en: { 'Brand': 'Bose', 'Type': 'Over-Ear' } }},
    {id: 7, cat: 'Audio', price: 179, emoji: '🎧', stars: 5, reviews: 410, badge: 'Sale', weight: 0.1, width: 6, height: 6, depth: 3,
        name: { ka: 'Samsung Galaxy Buds 3 Pro', en: 'Samsung Galaxy Buds 3 Pro' },
        desc: { ka: 'ინტელექტუალური ხმის დახშობა.', en: 'Intelligent active noise cancellation.' },
        specs: { ka: { 'ბრენდი': 'Samsung' }, en: { 'Brand': 'Samsung' } }},
    {id: 8, cat: 'Phones', price: 899, emoji: '📱', stars: 5, reviews: 1205, badge: 'Sale', weight: 0.25, width: 16, height: 8, depth: 1,
        name: { ka: 'iPhone 15 Pro 256GB', en: 'iPhone 15 Pro 256GB' },
        desc: { ka: 'ტიტანის ერგონომიული დიზაინი.', en: 'Ergonomic titanium design.' },
        specs: { ka: { 'ბრენდი': 'Apple' }, en: { 'Brand': 'Apple' } }},
    {id: 9, cat: 'Laptops', price: 1450, emoji: '💻', stars: 5, reviews: 312, badge: 'Sale', weight: 1.8, width: 32, height: 23, depth: 2,
        name: { ka: 'Asus ROG Zephyrus G14', en: 'Asus ROG Zephyrus G14' },
        desc: { ka: 'უმაღლესი დონის გეიმერული ნოუთბუქი.', en: 'Top-tier gaming laptop.' },
        specs: { ka: { 'ბრენდი': 'Asus' }, en: { 'Brand': 'Asus' } }},
    {id: 10, cat: 'Wearables', price: 299, emoji: '⌚', stars: 4, reviews: 189, badge: 'Sale', weight: 0.15, width: 9, height: 9, depth: 8,
        name: { ka: 'Google Pixel Watch 3', en: 'Google Pixel Watch 3' },
        desc: { ka: 'Android-ის საუკეთესო ჭკვიანი საათი.', en: "The best smartwatch for Android." },
        specs: { ka: { 'ბრენდი': 'Google' }, en: { 'Brand': 'Google' } }},
    {id: 11, cat: 'Cameras', price: 1599, emoji: '📷', stars: 5, reviews: 245, badge: 'Sale', weight: 1.2, width: 14, height: 11, depth: 9,
        name: { ka: 'Fujifilm X-T5 Mirrorless', en: 'Fujifilm X-T5 Mirrorless' },
        desc: { ka: 'რეტრო დიზაინის მქონე პროფესიონალური ფოტოაპარატი.', en: 'Professional camera with a retro-inspired design.' },
        specs: { ka: { 'ბრენდი': 'Fujifilm' }, en: { 'Brand': 'Fujifilm' } }},
    {id: 12, cat: 'Audio', price: 149, emoji: '🔊', stars: 5, reviews: 856, badge: 'Sale', weight: 1, width: 22, height: 10, depth: 10,
        name: { ka: 'JBL Charge 5 Wi-Fi', en: 'JBL Charge 5 Wi-Fi' },
        desc: { ka: 'წყალგამძლე პორტატული დინამიკი.', en: 'Waterproof portable speaker.' },
        specs: { ka: { 'ბრენდი': 'JBL' }, en: { 'Brand': 'JBL' } }},
    {id: 13, cat: 'Phones', price: 699, emoji: '📱', stars: 4, reviews: 540, badge: 'Sale', weight: 0.25, width: 16, height: 8, depth: 1,
        name: { ka: 'OnePlus 12 5G 256GB', en: 'OnePlus 12 5G 256GB' },
        desc: { ka: 'ულტრა სწრაფი დამუხტვა.', en: 'Ultra-fast charging.' },
        specs: { ka: { 'ბრენდი': 'OnePlus' }, en: { 'Brand': 'OnePlus' } }},
    {id: 14, cat: 'Laptops', price: 1099, emoji: '💻', stars: 5, reviews: 422, badge: 'Sale', weight: 1.3, width: 30, height: 21, depth: 2,
        name: { ka: 'Dell XPS 13 OLED', en: 'Dell XPS 13 OLED' },
        desc: { ka: 'პრემიუმ კლასის ულტრაბუქი.', en: 'Premium-class ultrabook.' },
        specs: { ka: { 'ბრენდი': 'Dell' }, en: { 'Brand': 'Dell' } }},
    {id: 15, cat: 'Wearables', price: 119, emoji: '⌚', stars: 4, reviews: 310, badge: 'Sale', weight: 0.1, width: 9, height: 9, depth: 8,
        name: { ka: 'Xiaomi Watch S3', en: 'Xiaomi Watch S3' },
        desc: { ka: 'ელეგანტური საათი დიდი ელემენტით.', en: 'Elegant watch with a long-lasting battery.' },
        specs: { ka: { 'ბრენდი': 'Xiaomi' }, en: { 'Brand': 'Xiaomi' } }},
    {id: 16, cat: 'Audio', price: 289, emoji: '🎧', stars: 5, reviews: 3412, badge: 'Sale', weight: 0.5, width: 20, height: 18, depth: 9,
        name: { ka: 'Sony WH-1000XM5', en: 'Sony WH-1000XM5' },
        desc: { ka: 'ბაზრის ლიდერი ხმაურის დახშობაში.', en: 'Market leader in noise cancellation.' },
        specs: { ka: { 'ბრენდი': 'Sony' }, en: { 'Brand': 'Sony' } }},
    {id: 17, cat: 'Phones', price: 799, emoji: '📱', stars: 5, reviews: 745, badge: 'Sale', weight: 0.25, width: 16, height: 8, depth: 1,
        name: { ka: 'Samsung Galaxy S24+', en: 'Samsung Galaxy S24+' },
        desc: { ka: 'ბრწყინვალე ეკრანი და გაუმჯობესებული AI.', en: 'Brilliant display with enhanced AI features.' },
        specs: { ka: { 'ბრენდი': 'Samsung' }, en: { 'Brand': 'Samsung' } }}
];

// კატეგორიების ჯგუფები (ტოპ მენიუსთვის): წვრილი/მსხვილი ტექნიკა, ციფრული, IT
const categoryGroups = {
    small:   { cats: ['Audio', 'Wearables'] },
    large:   { cats: ['Appliances'] },
    digital: { cats: ['Phones', 'Cameras'] },
    it:      { cats: ['Laptops'] }
};

// პროდუქტის მიწოდების წონის გამოთვლა: რეალური წონა ან მოცულობითი წონა (სიგანე x სიმაღლე x სიღრმე / 6000), რომელიც მეტია
function getItemDeliveryWeight(p) {
    const volumetric = ((p.width || 0) * (p.height || 0) * (p.depth || 0)) / 6000;
    return Math.max(p.weight || 0, volumetric);
}

const DELIVERY_RATE_PER_KG = 2; // ₾ თითო კილოგრამზე
const DELIVERY_MIN_FEE = 5; // მინიმალური მიწოდების ღირებულება ₾

function calcCartDeliveryCost() {
    if (!cart.length) return 0;
    const totalWeight = cart.reduce((sum, i) => sum + getItemDeliveryWeight(i) * i.qty, 0);
    return Math.max(DELIVERY_MIN_FEE, Math.round(totalWeight * DELIVERY_RATE_PER_KG));
}

function pName(p) { return p.name[currentLang] || p.name.ka; }
function pDesc(p) { return p.desc[currentLang] || p.desc.ka; }
function pSpecs(p) { return p.specs[currentLang] || p.specs.ka; }
function pBrand(p) { return p.specs.ka['ბრენდი'] || Object.values(p.specs.ka)[0]; }

// თარგმანების ბაზა
const translations = {
    ka: {
        buy: "ყიდვა", addToCart: "კალათაში დამატება", total: "ჯამი", subtotal: "პროდუქტების ფასი",
        emptyCart: "თქვენი კალათა ცარიელია", backToCatalog: "კატალოგში დაბრუნება", searchPlaceholder: "მოძებნე სასურველი პროდუქტი...",
        allCats: "ყველა კატეგორია", allBrands: "ყველა ბრენდი", similarProducts: "მსგავსი პროდუქტები",
        recentlyViewed: "ბოლოს ნანახი პროდუქტები", chatHeader: "მეგი — ონლაინ მხარდაჭერა", chatWelcome: "გამარჯობა! მე ვარ მეგი, თქვენი ასისტენტი. რით შემიძლია დაგეხმაროთ?",
        chatInputPlaceholder: "ჩაწერეთ შეტყობინება...", chatAiReply: "გმადლობთ კავშირისთვის! ჩვენი სმარტ AI ასისტენტი ან ოპერატორი მეგი მალე გიპასუხებთ დეტალურად.",
        noProductsFound: "პროდუქტი ვერ მოიძებნა.",
        navHome: "მთავარი", navDiscounts: "% ფასდაკლებები", navAbout: "ჩვენ შესახებ", navCart: "🛒 კალათა",
        navLoginBtn: "🔑 შესვლა", navCategoriesMenu: "კატეგორიები",
        groupSmall: "წვრილი ტექნიკა", groupLarge: "მსხვილი ტექნიკა", groupDigital: "ციფრული ტექნიკა", groupIT: "IT და კომპიუტერები",
        bannerBadge: "სუპერ შეთავაზება", bannerTitle: "გრანდიოზული ფასდაკლება ციფრულ ტექნიკაზე!",
        bannerText: "მიიღე საუკეთესო ფასები, სწრაფი მიწოდება მთელ საქართველოში (ღირებულება დამოკიდებულია წონაზე) და ონლაინ განვადება 0%-დან.",
        bannerCta: "იხილეთ ფასდაკლებები",
        promoAudioTitle: "Premium Audio", promoAudioText: "საუკეთესო ჟღერადობა ყოველდღიურობისთვის.", promoAudioLink: "ნახვა →",
        promoLaptopTitle: "Smart Laptops", promoLaptopText: "აკონტროლე შენი სამუშაო პროცესი მძლავრად.", promoLaptopLink: "აღმოაჩინე →",
        filterCategories: "კატეგორიები", filterBrands: "ბრენდები", filterPrice: "ფასის ფილტრი (₾)", filterDiscountOnly: "მხოლოდ ფასდაკლებული",
        discountsTitle: "🔥 ცხელი ფასდაკლებები", discountsSubtitle: "მხოლოდ აქცია/Sale სტატუსის მქონე ექსკლუზიური შეთავაზებები.",
        backToCatalogArrow: "← კატალოგში დაბრუნება",
        authTitleLogin: "სისტემაში შესვლა", authTitleRegister: "რეგისტრაცია",
        authSubmitLogin: "შესვლა", authSubmitRegister: "დარეგისტრირება",
        authSubtitle: "მიიღე წვდომა პრემიუმ ფუნქციებზე.", authEmailLabel: "ელ-ფოსტა", authPasswordLabel: "პაროლი",
        authOr: "ან", authGoogle: "Google-ით ავტორიზაცია",
        authToggleToRegister: "არ გაქვს ანგარიში? დარეგისტრირდი", authToggleToLogin: "უკვე გაქვს ანგარიში? შესვლა",
        aboutKicker: "TechShop Electronics", aboutTitle: "ინოვაციური ონლაინ პლატფორმა",
        aboutP1: "**TechShop** წარმოადგენს თანამედროვე, სრულად ავტომატიზებულ ელექტრონული კომერციის პლატფორმას, რომელიც მომხმარებელს სთავაზობს პრემიუმ კლასის ციფრულ ტექნიკას, სმარტფონებსა და აქსესუარებს საუკეთესო პირობებით.",
        aboutNotice: "🚚 მნიშვნელოვანი შეტყობინება: ჩვენთან მიწოდება ხდება საქართველოს მასშტაბით (თბილისსა და ნებისმიერ რეგიონში), ღირებულება გამოითვლება ნივთის წონის მიხედვით და აისახება კალათაში შეკვეთის გაფორმებისას.",
        aboutFeature1Title: "მიწოდება წონის მიხედვით", aboutFeature1Text: "ღირებულება დამოკიდებულია ნივთის წონასა და მოცულობაზე.",
        aboutFeature2Title: "ონლაინ განვადება", aboutFeature2Text: "BOG, TBC და Credo ბანკების მხარდაჭერა.",
        aboutFeature3Title: "ოფიციალური გარანტია", aboutFeature3Text: "მინიმუმ 1 წლიანი სერვის-გარანტია.",
        checkoutTitle: "შეკვეთის გაფორმება", checkoutStep1: "1. კალათის პროდუქტები",
        checkoutStep2: "2. მიწოდების ინფორმაცია", checkoutStep3: "3. გადახდის ან განვადების მეთოდი",
        formFirstName: "სახელი", formLastName: "გვარი", formPhone: "ტელეფონის ნომერი", formAddress: "სრული მისამართი (მაგ: ბათუმი, რუსთაველის 5)",
        tabCard: "💳 საბანკო ბარათი", tabInstallment: "🏦 ონლაინ განვადება", cardNumberLabel: "ბარათის ნომერი",
        chooseBankText: "აირჩიეთ სასურველი ბანკი განვადების მისაღებად:",
        bankBOG: "BOG განვადება", bankTBC: "TBC განვადება", bankCredo: "CREDO განვადება",
        orderSummary: "შეკვეთის რეზიუმე", summaryProducts: "პროდუქტები:", summaryDelivery: "მიწოდება:",
        summaryDeliveryFree: "უფასო (საქართველო)", summaryTotalLabel: "სულ:",
        footerDeliveryText: "ღირებულება წონის მიხედვით (საქართველოს მასშტაბით)",
        placeOrderBtn: "შეკვეთის განთავსება", requestInstallmentBtn: "განვადების მოთხოვნა",
        footerAbout: "პრემიუმ კლასის ონლაინ მარკეტპლეისი. მიიღეთ საუკეთესო ხარისხი, სწრაფი მომსახურება და გარანტირებული კმაყოფილება.",
        footerCustomerTitle: "მომხმარებლისთვის", footerTerms: "📄 წესები და პირობები", footerWarranty: "🛡️ საგარანტიო პირობები",
        footerReturn: "🔄 ნივთის დაბრუნების პოლიტიკა", footerServicesTitle: "სერვისები",
        footerDeliveryLabel: "🚚 მიწოდება:", footerInstallmentLabel: "🏦 განვადება: საქართველოს ბანკი, თიბისი, კრედო",
        footerRights: "ყველა უფლება დაცულია.",
        toastAddedToCart: (name) => `✅ ${name} დაემატა კალათაში!`,
        toastEmptyCart: "⚠️ კალათა ცარიელია!", toastCardInvalid: "⚠️ გთხოვთ, შეიყვანოთ ბარათის ნომერი სწორად.",
        toastSelectBank: "⚠️ გთხოვთ, აირჩიოთ რომელიმე ბანკი განვადებისთვის.",
        toastFillRequired: "⚠️ გთხოვთ, შეავსოთ სახელი, გვარი, ტელეფონი და მისამართი.",
        toastProcessing: "🔄 ტრანზაქცია მუშავდება...",
        toastRedirecting: (bank) => `🔄 გადამისამართება ${bank}-ის ონლაინ განვადებაზე...`,
        alertPaymentSuccess: "🎉 გადახდა წარმატებით დასრულდა! მადლობთ შეკვეთისთვის.",
        alertInstallmentSuccess: "🎉 განვადების მოთხოვნა წარმატებით გაიგზავნა ბანკში!",
        toastLoginSuccess: "🔒 ავტორიზაცია წარმატებულია!", toastGoogleSuccess: "🌐 Google ავტორიზაცია წარმატებულია!",
        toastLogout: "🚪 გამოხვედით სისტემიდან.",
        userMenuLabel: (name) => `👤 ${name} (გამოსვლა)`
    },
    en: {
        buy: "Buy Now", addToCart: "Add to Cart", total: "Total", subtotal: "Subtotal",
        emptyCart: "Your cart is empty", backToCatalog: "Back to Catalog", searchPlaceholder: "Search products...",
        allCats: "All Categories", allBrands: "All Brands", similarProducts: "Similar Products",
        recentlyViewed: "Recently Viewed Products", chatHeader: "Megi — Live Support", chatWelcome: "Hello! I am Megi, your live assistant. How can I help you today?",
        chatInputPlaceholder: "Type a message...", chatAiReply: "Thank you for reaching out! Our smart AI assistant or Megi will reply to you shortly.",
        noProductsFound: "No products found.",
        navHome: "Home", navDiscounts: "% Discounts", navAbout: "About Us", navCart: "🛒 Cart",
        navLoginBtn: "🔑 Log In", navCategoriesMenu: "Categories",
        groupSmall: "Small Appliances", groupLarge: "Large Appliances", groupDigital: "Digital Devices", groupIT: "IT & Computers",
        bannerBadge: "Super Deal", bannerTitle: "Huge discounts on the latest tech!",
        bannerText: "Get the best prices, fast delivery across Georgia (cost depends on weight), and online installments from 0%.",
        bannerCta: "View Discounts",
        promoAudioTitle: "Premium Audio", promoAudioText: "The best sound for everyday life.", promoAudioLink: "View →",
        promoLaptopTitle: "Smart Laptops", promoLaptopText: "Power through your workflow with ease.", promoLaptopLink: "Discover →",
        filterCategories: "Categories", filterBrands: "Brands", filterPrice: "Price Filter (₾)", filterDiscountOnly: "Discounted only",
        discountsTitle: "🔥 Hot Discounts", discountsSubtitle: "Exclusive offers with an active Sale status only.",
        backToCatalogArrow: "← Back to Catalog",
        authTitleLogin: "Sign In", authTitleRegister: "Create Account",
        authSubmitLogin: "Sign In", authSubmitRegister: "Register",
        authSubtitle: "Get access to premium features.", authEmailLabel: "Email", authPasswordLabel: "Password",
        authOr: "OR", authGoogle: "Sign in with Google",
        authToggleToRegister: "Don't have an account? Sign up", authToggleToLogin: "Already have an account? Sign in",
        aboutKicker: "TechShop Electronics", aboutTitle: "An Innovative Online Platform",
        aboutP1: "**TechShop** is a modern, fully automated e-commerce platform that offers customers premium-class digital devices, smartphones, and accessories on the best terms.",
        aboutNotice: "🚚 Important notice: delivery is available across all of Georgia (Tbilisi and any region). The cost is calculated based on the item's weight and shown at checkout.",
        aboutFeature1Title: "Weight-Based Delivery", aboutFeature1Text: "Cost depends on the item's weight and volume.",
        aboutFeature2Title: "Online Installments", aboutFeature2Text: "Supported by BOG, TBC, and Credo banks.",
        aboutFeature3Title: "Official Warranty", aboutFeature3Text: "At least 1 year of service warranty.",
        checkoutTitle: "Checkout", checkoutStep1: "1. Items in Cart",
        checkoutStep2: "2. Delivery Information", checkoutStep3: "3. Payment or Installment Method",
        formFirstName: "First Name", formLastName: "Last Name", formPhone: "Phone Number", formAddress: "Full address (e.g. Batumi, Rustaveli St. 5)",
        tabCard: "💳 Bank Card", tabInstallment: "🏦 Online Installments", cardNumberLabel: "Card Number",
        chooseBankText: "Choose a bank to apply for installments:",
        bankBOG: "BOG Installments", bankTBC: "TBC Installments", bankCredo: "CREDO Installments",
        orderSummary: "Order Summary", summaryProducts: "Products:", summaryDelivery: "Delivery:",
        summaryDeliveryFree: "Free (Georgia)", summaryTotalLabel: "Total:",
        footerDeliveryText: "Cost based on weight (across Georgia)",
        placeOrderBtn: "Place Order", requestInstallmentBtn: "Request Installment",
        footerAbout: "A premium-class online marketplace. Get the best quality, fast service, and guaranteed satisfaction.",
        footerCustomerTitle: "For Customers", footerTerms: "📄 Terms & Conditions", footerWarranty: "🛡️ Warranty Terms",
        footerReturn: "🔄 Return Policy", footerServicesTitle: "Services",
        footerDeliveryLabel: "🚚 Delivery:", footerInstallmentLabel: "🏦 Installments: Bank of Georgia, TBC, Credo",
        footerRights: "All rights reserved.",
        toastAddedToCart: (name) => `✅ ${name} added to cart!`,
        toastEmptyCart: "⚠️ Your cart is empty!", toastCardInvalid: "⚠️ Please enter a valid card number.",
        toastSelectBank: "⚠️ Please select a bank for installments.",
        toastFillRequired: "⚠️ Please fill in your first name, last name, phone, and address.",
        toastProcessing: "🔄 Processing transaction...",
        toastRedirecting: (bank) => `🔄 Redirecting to ${bank} online installments...`,
        alertPaymentSuccess: "🎉 Payment completed successfully! Thank you for your order.",
        alertInstallmentSuccess: "🎉 Installment request was successfully sent to the bank!",
        toastLoginSuccess: "🔒 Signed in successfully!", toastGoogleSuccess: "🌐 Google sign-in successful!",
        toastLogout: "🚪 You have been logged out.",
        userMenuLabel: (name) => `👤 ${name} (Log Out)`
    }
};

const policyData = {
    terms: {
        title: { ka: "წესები და პირობები", en: "Terms & Conditions" },
        text: {
            ka: "<p>**1. ზოგადი პირობები**<br>წინამძღობარე ხელშეკრულება არეგულირებს მომხმარებლის მიერ TechShop-ის პლატფორმის გამოყენების წესებს.</p>",
            en: "<p>**1. General Terms**<br>This agreement governs the rules for a user's use of the TechShop platform.</p>"
        }
    },
    warranty: {
        title: { ka: "საგარანტიო პირობები", en: "Warranty Terms" },
        text: {
            ka: "<p>**1. გარანტიის ხანგრძლივობა**<br>ყველა ტექნიკურ მოწყობილობაზე ვრცელდება ოფიციალური **1-დან 3 წლამდე** გარანტია.</p>",
            en: "<p>**1. Warranty Duration**<br>All technical devices come with an official warranty ranging from **1 to 3 years**.</p>"
        }
    },
    return: {
        title: { ka: "ნივთის დაბრუნების პოლიტიკა", en: "Return Policy" },
        text: {
            ka: "<p>**1. დაბრუნების ვადები**<br>მომხმარებელს უფლება აქვს დააბრუნოს ან შეცვალოს შეძენილი ნივთი **14 კალენდარული დღის** განმავლობაში.</p>",
            en: "<p>**1. Return Window**<br>Customers may return or exchange a purchased item within **14 calendar days**.</p>"
        }
    }
};

let cart = JSON.parse(localStorage.getItem('techshop_cart')) || [];
let selectedCategory = 'all';
let selectedGroup = 'all';
let selectedBrand = 'all';
let showDiscountOnly = false;
let authMode = 'login';
let paymentMethod = 'card'; 
let currentUser = JSON.parse(localStorage.getItem('techshop_user')) || null;
let currentLang = localStorage.getItem('techshop_lang') || 'ka';

function t(key) { return translations[currentLang][key]; }

function handleRouting() {
    const hash = window.location.hash;
    document.querySelectorAll('.view-section').forEach(v => v.classList.add('hidden'));
    window.scrollTo(0,0);

    if (hash.startsWith('#product/')) {
        const id = parseInt(hash.replace('#product/', ''));
        renderProductDetail(id);
        trackRecentlyViewed(id);
        document.getElementById('detailView').classList.remove('hidden');
    } else if (hash === '#cart') {
        renderCartPage();
        document.getElementById('cartView').classList.remove('hidden');
    } else if (hash === '#about') {
        document.getElementById('aboutView').classList.remove('hidden');
    } else if (hash === '#discounts') {
        renderDiscountsPage();
        document.getElementById('discountsView').classList.remove('hidden');
    } else if (hash === '#auth') {
        document.getElementById('authView').classList.remove('hidden');
    } else {
        document.getElementById('homeView').classList.remove('hidden');
        filterProducts();
    }
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', () => {
    applyStaticTranslations();
    initLangSelector();
    initFilters();
    initBrandFilters();
    initPromoMarquee();
    initCardMask(); 
    initLiveChat();
    updateCartBadge(); 
    updateAuthUI();
    switchPaymentTab('card');
    handleRouting();
});

window.navigateTo = function(path) { window.location.hash = path; }

// 🈯 ყველა სტატიკური (HTML-ში ჩაწერილი) ტექსტის თარგმნა data-i18n ატრიბუტების მიხედვით
function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key] !== undefined) {
            el.textContent = translations[currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key] !== undefined) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // ელემენტები, რომლებიც დამოკიდებულია მდგომარეობაზე (login/register, tabs, payment button)
    document.getElementById('authTitle').textContent = authMode === 'register' ? t('authTitleRegister') : t('authTitleLogin');
    document.getElementById('authSubmitBtn').textContent = authMode === 'register' ? t('authSubmitRegister') : t('authSubmitLogin');
    document.getElementById('authToggleBtn').textContent = authMode === 'register' ? t('authToggleToLogin') : t('authToggleToRegister');
    document.getElementById('mainSubmitBtn').textContent = paymentMethod === 'card' ? t('placeOrderBtn') : t('requestInstallmentBtn');

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');

    // ღია პოლიტიკის მოდალის ხელახლა თარგმნა, თუ ღიაა
    const policyModal = document.getElementById('policyModal');
    if (policyModal && !policyModal.classList.contains('hidden')) {
        const openType = policyModal.getAttribute('data-open-type');
        if (openType) openPolicy(openType);
    }

    updateAuthUI();
}

// 🌐 ენის გადამრთველის ინიციალიზაცია და ინტერფეისის განახლება
function initLangSelector() {
    let langContainer = document.getElementById('langSelectorContainer');
    if (!langContainer) {
        langContainer = document.createElement('div');
        langContainer.id = "langSelectorContainer";
        langContainer.className = "fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur border border-slate-200 p-1.5 rounded-xl shadow-sm";
        document.body.appendChild(langContainer);
    }
    langContainer.innerHTML = `
        <button onclick="window.changeLanguage('ka')" class="px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${currentLang === 'ka' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}">GE</button>
        <button onclick="window.changeLanguage('en')" class="px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${currentLang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}">EN</button>
    `;
}

window.changeLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('techshop_lang', lang);
    applyStaticTranslations();
    initLangSelector();
    initFilters();
    initBrandFilters();
    initPromoMarquee();
    renderCategoriesMenu();
    filterProducts();
    if (window.location.hash.startsWith('#product/')) {
        renderProductDetail(parseInt(window.location.hash.replace('#product/', '')));
    } else if (window.location.hash === '#discounts') {
        renderDiscountsPage();
    } else if (window.location.hash === '#cart') {
        renderCartPage();
    }
    const chatHeaderTitle = document.getElementById('chatHeaderTitle');
    if (chatHeaderTitle) chatHeaderTitle.innerText = t('chatHeader');
    const chatInputField = document.getElementById('chatInputField');
    if (chatInputField) chatInputField.placeholder = t('chatInputPlaceholder');
}

// კატეგორიები
function initFilters() {
    const container = document.getElementById('categoryFilters');
    if (!container) return;
    const categories = ['all', ...new Set(products.map(p => p.cat))];
    const geoLabels = {
        ka: { 'all': 'ყველა კატეგორია', 'Audio': 'აუდიო', 'Phones': 'სმარტფონები', 'Laptops': 'ლეპტოპები', 'Wearables': 'აქსესუარები', 'Cameras': 'კამერები' },
        en: { 'all': 'All Categories', 'Audio': 'Audio', 'Phones': 'Smartphones', 'Laptops': 'Laptops', 'Wearables': 'Accessories', 'Cameras': 'Cameras' }
    };
    container.innerHTML = categories.map(c => `
        <li class="flex items-center gap-3 py-1">
            <input type="radio" name="cat" id="cat_${c}" ${selectedCategory===c?'checked':''} onclick="setCategory('${c}')" class="w-4 h-4 text-slate-900 border-slate-300 accent-slate-900 cursor-pointer">
            <label for="cat_${c}" class="select-none cursor-pointer text-slate-600 hover:text-slate-900 text-sm font-medium">${geoLabels[currentLang][c] || c}</label>
        </li>
    `).join('');
}
window.setCategory = function(cat) { selectedCategory = cat; selectedGroup = 'all'; filterProducts(); }

// ბრენდები
function initBrandFilters() {
    const container = document.getElementById('brandFilters');
    if (!container) return;
    const brands = ['all', ...new Set(products.map(p => pBrand(p)))];
    container.innerHTML = brands.map(b => `
        <li class="flex items-center gap-3 py-1">
            <input type="radio" name="brand" id="brand_${b}" ${selectedBrand===b?'checked':''} onclick="setBrand('${b}')" class="w-4 h-4 text-slate-900 border-slate-300 accent-slate-900 cursor-pointer">
            <label for="brand_${b}" class="select-none cursor-pointer text-slate-600 hover:text-slate-900 text-sm font-medium">${b === 'all' ? t('allBrands') : b}</label>
        </li>
    `).join('');
}
window.setBrand = function(brand) { selectedBrand = brand; filterProducts(); }

window.filterProducts = function() {
    const searchInput = document.getElementById('searchInput');
    const searchQ = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const priceMinEl = document.getElementById('priceMin');
    const priceMaxEl = document.getElementById('priceMax');
    const minP = priceMinEl ? (parseFloat(priceMinEl.value) || 0) : 0;
    const maxP = priceMaxEl ? (parseFloat(priceMaxEl.value) || Infinity) : Infinity;

    const filtered = products.filter(p => {
        const matchCat = (selectedCategory === 'all' || p.cat === selectedCategory);
        const matchGroup = (selectedGroup === 'all') || (categoryGroups[selectedGroup] && categoryGroups[selectedGroup].cats.includes(p.cat));
        const matchBrand = (selectedBrand === 'all' || pBrand(p) === selectedBrand);
        const matchSearch = !searchQ || pName(p).toLowerCase().includes(searchQ) || pDesc(p).toLowerCase().includes(searchQ) || pBrand(p).toLowerCase().includes(searchQ) || p.cat.toLowerCase().includes(searchQ);
        const matchPrice = p.price >= minP && p.price <= maxP;
        const matchDiscount = !showDiscountOnly || (p.badge === 'Sale' || p.badge === 'Hot');
        return matchCat && matchGroup && matchBrand && matchSearch && matchPrice && matchDiscount;
    });
    renderCatalog(filtered);
}

// ძებნის ველიდან ტექსტის აკრეფისას — თუ სხვა გვერდზეა მომხმარებელი, გადავიდეთ კატალოგზე და გავფილტროთ
window.handleSearchInput = function() {
    if (window.location.hash && window.location.hash !== '#') {
        window.location.hash = '';
    } else {
        filterProducts();
    }
}

// ფასდაკლების ჩექბოქსის გადართვა
window.toggleDiscountFilter = function() {
    const cb = document.getElementById('discountOnly');
    showDiscountOnly = cb ? cb.checked : false;
    filterProducts();
}

// ტოპ მენიუს კატეგორიების ჯგუფის არჩევა (წვრილი/მსხვილი/ციფრული/IT ტექნიკა)
window.setCategoryGroup = function(group) {
    selectedGroup = group;
    selectedCategory = 'all';
    closeCategoriesMenus();
    if (window.location.hash && window.location.hash !== '#') {
        window.location.hash = '';
    }
    initFilters();
    filterProducts();
}

function closeCategoriesMenus() {
    ['categoriesMenuPanel', 'categoriesMenuPanelMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
}

window.toggleCategoriesMenu = function(panelId) {
    renderCategoriesMenu();
    const panel = document.getElementById(panelId);
    if (!panel) return;
    const isHidden = panel.classList.contains('hidden');
    closeCategoriesMenus();
    if (isHidden) panel.classList.remove('hidden');
}

// კატეგორიების ჯგუფების მენიუს რენდერი ორივე (დესქტოპ/მობაილ) პანელისთვის
function renderCategoriesMenu() {
    const groups = [
        { key: 'small', emoji: '🔌', label: t('groupSmall') },
        { key: 'large', emoji: '🧊', label: t('groupLarge') },
        { key: 'digital', emoji: '📱', label: t('groupDigital') },
        { key: 'it', emoji: '💻', label: t('groupIT') }
    ];
    const html = groups.map(g => `
        <button type="button" onclick="window.setCategoryGroup('${g.key}')" class="w-full text-left px-4 py-2 text-sm font-semibold hover:bg-slate-50 flex items-center gap-2">
            <span>${g.emoji}</span><span>${g.label}</span>
        </button>
    `).join('');
    ['categoriesMenuPanel', 'categoriesMenuPanelMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    });
}

document.addEventListener('click', function(e) {
    const wrap1 = document.getElementById('categoriesMenuPanel');
    const wrap2 = document.getElementById('categoriesMenuPanelMobile');
    const clickedInsideMenu = (wrap1 && wrap1.contains(e.target)) || (wrap2 && wrap2.contains(e.target)) || (e.target.closest && e.target.closest('[onclick*="toggleCategoriesMenu"]'));
    if (!clickedInsideMenu) closeCategoriesMenus();
});

function initPromoMarquee() {
    const container = document.getElementById('promoMarquee');
    if (!container) return;
    const saleProducts = products.filter(p => p.badge === 'Sale' || p.badge === 'Hot');
    const doubleList = [...saleProducts, ...saleProducts];
    container.innerHTML = doubleList.map(p => `
        <div onclick="window.location.hash='#product/${p.id}'" class="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all flex-shrink-0 select-none">
            <span class="text-2xl">${p.emoji}</span>
            <div>
                <h4 class="text-xs font-black text-rose-600 truncate max-w-[140px]">${pName(p)}</h4>
                <p class="text-[10px] font-bold text-slate-900">₾${p.price}</p>
            </div>
            <span class="text-[9px] bg-rose-500 text-white px-1.5 py-0.5 font-extrabold rounded uppercase">${p.badge}</span>
        </div>
    `).join('');
}

function renderCatalog(list) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    if(!list.length) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 font-medium text-sm">${t('noProductsFound')}</div>`;
        return;
    }
    generateCards(list, grid);
}

function renderDiscountsPage() {
    const grid = document.getElementById('discountsGrid');
    if (!grid) return;
    const saleList = products.filter(p => p.badge === 'Sale' || p.badge === 'Hot');
    grid.innerHTML = '';
    generateCards(saleList, grid);
}

function generateCards(list, targetGrid) {
    list.forEach(p => {
        const badgeColor = p.badge === 'Hot' ? 'bg-rose-500 text-white' : 'bg-blue-600 text-white';
        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group";
        card.innerHTML = `
            <a href="#product/${p.id}" class="block relative aspect-square bg-slate-50 flex items-center justify-center text-6xl border-b border-slate-100 select-none">
                ${p.badge ? `<span class="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2 py-1 rounded-md shadow-sm ${badgeColor}">${p.badge}</span>` : ''}
                <span class="group-hover:scale-110 transition-transform duration-300">${p.emoji}</span>
            </a>
            <div class="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">${p.cat}</span>
                    <a href="#product/${p.id}" class="block text-sm font-bold text-slate-900 mt-1 hover:text-amber-600 transition-colors line-clamp-2">${pName(p)}</a>
                    <div class="flex items-center gap-1 text-amber-500 text-xs mt-2"><span>${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</span><span class="text-slate-400 font-semibold ml-1">(${p.reviews})</span></div>
                </div>
                <div class="flex items-center justify-between mt-5 gap-2">
                    <span class="text-base font-black text-slate-900 flex-shrink-0">₾${p.price.toLocaleString()}</span>
                    <div class="flex items-center gap-1.5">
                        <button onclick="window.buyNow(${p.id})" class="h-9 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-sm">${t('buy')}</button>
                        <button id="btn-add-${p.id}" onclick="window.addToCart(${p.id})" class="h-9 w-9 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center text-lg transition-all shadow-sm">+</button>
                    </div>
                </div>
            </div>
        `;
        targetGrid.appendChild(card);
    });
}

// 📦 პროდუქტის დეტალური გვერდის რენდერი (Cross-selling-ით და ბოლოს ნანახებით)
function renderProductDetail(id) {
    const p = products.find(x => x.id === id);
    const container = document.getElementById('productDetailContainer');
    if(!container || !p) return;
    const specs = pSpecs(p);
    let specsHTML = '';
    for(let key in specs) { specsHTML += `<tr class="border-b border-slate-100"><td class="py-3 text-slate-400 text-sm w-1/3">${key}</td><td class="py-3 text-slate-800 text-sm font-semibold">${specs[key]}</td></tr>`; }
    
    // ძირითადი კონტენტი
    let mainHTML = `
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center text-[140px] select-none">${p.emoji}</div>
            <div>
                <span class="text-xs font-bold text-amber-500 uppercase">${p.cat}</span>
                <h1 class="text-3xl font-extrabold text-slate-900 mt-2 mb-3">${pName(p)}</h1>
                <div class="text-3xl font-black text-slate-900 mb-6">₾${p.price.toLocaleString()}</div>
                <p class="text-slate-600 text-sm mb-8">${pDesc(p)}</p>
                <table class="w-full mb-8">${specsHTML}</table>
                <button onclick="window.addToCart(${p.id}); window.navigateTo('cart')" class="w-full md:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all">${t('addToCart')} &amp; ${t('buy')}</button>
            </div>
        </div>
    `;

    // 🔗 ჭკვიანი მსგავსი პროდუქტები (Cross-Selling ლოგიკა)
    let relatedCat = p.cat;
    if (p.cat === 'Phones') relatedCat = 'Wearables'; // სმარტფონებზე აქსესუარები
    else if (p.cat === 'Laptops') relatedCat = 'Audio';
    
    let similarList = products.filter(item => item.cat === relatedCat && item.id !== p.id).slice(0, 3);
    if(similarList.length === 0) similarList = products.filter(item => item.id !== p.id).slice(0, 3);

    let similarHTML = `
        <div class="mt-16">
            <h3 class="text-xl font-bold text-slate-900 mb-6">${t('similarProducts')}</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6" id="similarGrid"></div>
        </div>
    `;

    // 🕒 ბოლოს ნანახი ნივთების ბლოკი
    let recentlyViewedHTML = `
        <div class="mt-16 border-t border-slate-100 pt-12">
            <h3 class="text-xl font-bold text-slate-900 mb-6">${t('recentlyViewed')}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6" id="recentGrid"></div>
        </div>
    `;

    container.innerHTML = mainHTML + similarHTML + recentlyViewedHTML;

    // შიდა ბადეების შევსება
    const similarGrid = document.getElementById('similarGrid');
    if(similarGrid) generateCards(similarList, similarGrid);

    const recentGrid = document.getElementById('recentGrid');
    if(recentGrid) {
        let recentIds = JSON.parse(localStorage.getItem('techshop_recent')) || [];
        let recentList = recentIds.filter(rid => rid !== p.id).map(rid => products.find(x => x.id === rid)).filter(Boolean).slice(0, 4);
        if(recentList.length) {
            generateCards(recentList, recentGrid);
        } else {
            recentGrid.parentElement.classList.add('hidden');
        }
    }
}

// ბოლოს ნანახი ნივთების თრექინგი
function trackRecentlyViewed(id) {
    let recent = JSON.parse(localStorage.getItem('techshop_recent')) || [];
    recent = recent.filter(x => x !== id);
    recent.unshift(id);
    localStorage.setItem('techshop_recent', JSON.stringify(recent.slice(0, 8)));
}

// 💬 Live Chat მოდული (Megi & Smart AI Assistant) — საიტის ერთადერთი ჩატის ვიჯეტი
function initLiveChat() {
    if(document.getElementById('liveChatWidget')) return;

    const widget = document.createElement('div');
    widget.id = "liveChatWidget";
    widget.className = "fixed bottom-6 right-6 z-50 font-sans text-sm select-none";
    widget.innerHTML = `
        <button onclick="window.toggleChatWindow()" id="chatTriggerBtn" class="w-14 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95 relative">
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span class="text-2xl">💬</span>
        </button>
        <div id="chatWindow" class="hidden absolute bottom-16 right-0 w-80 h-96 bg-white border border-slate-200 shadow-2xl rounded-2xl flex flex-col overflow-hidden transition-all">
            <div class="bg-slate-900 text-white px-4 py-3 flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-amber-400 overflow-hidden flex items-center justify-center border border-white/20">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Megi" class="w-full h-full object-cover">
                </div>
                <div>
                    <div class="font-bold text-xs" id="chatHeaderTitle">${t('chatHeader')}</div>
                    <div class="text-[10px] text-emerald-400 flex items-center gap-1">● Online</div>
                </div>
                <button onclick="window.toggleChatWindow()" class="ml-auto text-white/60 hover:text-white font-bold text-base">&times;</button>
            </div>
            <div id="chatMessages" class="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
                <div class="flex gap-2 max-w-[85%]">
                    <div class="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-3 shadow-sm text-xs text-slate-700">${t('chatWelcome')}</div>
                </div>
            </div>
            <form onsubmit="window.sendChatMessage(event)" class="border-t border-slate-100 p-2 bg-white flex gap-2">
                <input type="text" id="chatInputField" required placeholder="${t('chatInputPlaceholder')}" class="flex-1 px-3 py-1.5 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 text-xs text-slate-800">
                <button type="submit" class="bg-slate-900 text-white px-3 py-1.5 rounded-xl font-bold text-xs hover:bg-slate-800">→</button>
            </form>
        </div>
    `;
    document.body.appendChild(widget);
}

window.toggleChatWindow = function() {
    const win = document.getElementById('chatWindow');
    if(win) win.classList.toggle('hidden');
}

window.sendChatMessage = function(e) {
    e.preventDefault();
    const input = document.getElementById('chatInputField');
    const container = document.getElementById('chatMessages');
    if(!input || !input.value.trim() || !container) return;

    const userText = input.value.trim();
    
    // მომხმარებლის შეტყობინება
    container.innerHTML += `
        <div class="flex gap-2 max-w-[85%] ml-auto justify-end">
            <div class="bg-slate-900 text-white rounded-2xl rounded-tr-none p-3 shadow-sm text-xs">${userText}</div>
        </div>
    `;
    input.value = '';
    container.scrollTop = container.scrollHeight;

    // AI პასუხის იმიტაცია
    setTimeout(() => {
        container.innerHTML += `
            <div class="flex gap-2 max-w-[85%]">
                <div class="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-3 shadow-sm text-xs text-slate-700">
                    <span class="font-bold text-[10px] text-amber-600 block mb-1">AI Assistant</span>
                    ${t('chatAiReply')}
                </div>
            </div>
        `;
        container.scrollTop = container.scrollHeight;
    }, 1000);
}

// 💳 განვადებისა და გადახდის ტაბების სისტემა
window.switchPaymentTab = function(type) {
    paymentMethod = type;
    const tabCard = document.getElementById('tab-card');
    const tabInst = document.getElementById('tab-installment');
    const cardBlock = document.getElementById('payment-card-block');
    const instBlock = document.getElementById('payment-installment-block');
    const submitBtn = document.getElementById('mainSubmitBtn');
    if (!tabCard || !tabInst || !cardBlock || !instBlock || !submitBtn) return;

    if (type === 'card') {
        tabCard.className = "py-2 px-4 text-slate-900 border-b-2 border-slate-900";
        tabInst.className = "py-2 px-4 text-slate-400 hover:text-slate-600";
        cardBlock.classList.remove('hidden');
        instBlock.classList.add('hidden');
        submitBtn.textContent = t('placeOrderBtn');
    } else {
        tabInst.className = "py-2 px-4 text-slate-900 border-b-2 border-slate-900";
        tabCard.className = "py-2 px-4 text-slate-400 hover:text-slate-600";
        cardBlock.classList.add('hidden');
        instBlock.classList.remove('hidden');
        submitBtn.textContent = t('requestInstallmentBtn');
    }
}

// მომხმარებლის მიწოდების მონაცემების (სახელი, გვარი, ტელეფონი, მისამართი) ამოღება ფორმიდან
function getCheckoutCustomerData() {
    return {
        firstName: (document.getElementById('checkoutFirstName')?.value || '').trim(),
        lastName: (document.getElementById('checkoutLastName')?.value || '').trim(),
        phone: (document.getElementById('checkoutPhone')?.value || '').trim(),
        address: (document.getElementById('checkoutAddress')?.value || '').trim()
    };
}

// გადახდის / განვადების დამუშავება
window.processPayment = function() {
    if(!cart.length) {
        showToast(t('toastEmptyCart'));
        return;
    }

    const customer = getCheckoutCustomerData();
    if (!customer.firstName || !customer.lastName || !customer.phone || !customer.address) {
        showToast(t('toastFillRequired'));
        return;
    }

    if (paymentMethod === 'card') {
        const cardInput = document.getElementById('cardNumber');
        if(!cardInput || cardInput.value.replace(/\s/g, '').length < 16) {
            showToast(t('toastCardInvalid'));
            return;
        }
        showToast(t('toastProcessing'));
    } else {
        const selectedBank = document.querySelector('input[name="bank_inst"]:checked');
        if (!selectedBank) {
            showToast(t('toastSelectBank'));
            return;
        }
        showToast(t('toastRedirecting')(selectedBank.value));
    }

    // შეკვეთის მონაცემების შენახვა (მომხმარებლის სახელი/გვარი/ტელეფონი/მისამართი + კალათა + მიწოდების ღირებულება)
    const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const deliveryCost = calcCartDeliveryCost();
    const order = {
        customer,
        items: cart,
        subtotal,
        deliveryCost,
        total: subtotal + deliveryCost,
        paymentMethod,
        createdAt: new Date().toISOString()
    };
    localStorage.setItem('techshop_last_order', JSON.stringify(order));

    setTimeout(() => {
        alert(paymentMethod === 'card' ? t('alertPaymentSuccess') : t('alertInstallmentSuccess'));
        cart = []; 
        saveCart(); 
        updateCartBadge(); 
        navigateTo('');
    }, 2000);
}

window.openPolicy = function(type) {
    const data = policyData[type];
    if(!data) return;
    document.getElementById('policyModalTitle').innerText = data.title[currentLang];
    document.getElementById('policyModalContent').innerHTML = data.text[currentLang];
    const modal = document.getElementById('policyModal');
    modal.setAttribute('data-open-type', type);
    modal.classList.remove('hidden');
}
window.closePolicy = function() {
    const modal = document.getElementById('policyModal');
    modal.classList.add('hidden');
    modal.removeAttribute('data-open-type');
}

// ავტორიზაცია
window.toggleAuthMode = function() {
    authMode = authMode === 'login' ? 'register' : 'login';
    document.getElementById('authTitle').innerText = authMode === 'register' ? t('authTitleRegister') : t('authTitleLogin');
    document.getElementById('authSubmitBtn').innerText = authMode === 'register' ? t('authSubmitRegister') : t('authSubmitLogin');
    document.getElementById('authToggleBtn').innerText = authMode === 'register' ? t('authToggleToLogin') : t('authToggleToRegister');
}
window.handleAuthSubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('authEmail').value;
    currentUser = { email: email, name: email.split('@')[0] };
    localStorage.setItem('techshop_user', JSON.stringify(currentUser));
    updateAuthUI();
    showToast(t('toastLoginSuccess'));
    navigateTo('');
}
window.handleGoogleLogin = function() {
    currentUser = { email: 'google.user@gmail.com', name: 'Google User' };
    localStorage.setItem('techshop_user', JSON.stringify(currentUser));
    updateAuthUI();
    showToast(t('toastGoogleSuccess'));
    navigateTo('');
}
window.logoutUser = function() {
    currentUser = null; localStorage.removeItem('techshop_user');
    updateAuthUI(); showToast(t('toastLogout'));
}
function updateAuthUI() {
    const btn = document.getElementById('navAuthBtn');
    if(!btn) return;
    if(currentUser) { btn.innerHTML = t('userMenuLabel')(currentUser.name); btn.onclick = () => logoutUser(); }
    else { btn.innerHTML = t('navLoginBtn'); btn.onclick = () => navigateTo('auth'); }
}

function saveCart() { localStorage.setItem('techshop_cart', JSON.stringify(cart)); }

window.addToCart = function(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const exist = cart.find(x => x.id === id);
    if(exist) { exist.qty++; } else { cart.push({...p, qty: 1}); }
    saveCart(); 
    updateCartBadge(); 
    showToast(t('toastAddedToCart')(pName(p)));
}

window.buyNow = function(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const exist = cart.find(x => x.id === id);
    if(!exist) { cart.push({...p, qty: 1}); }
    saveCart(); 
    updateCartBadge(); 
    navigateTo('cart');
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if(badge) badge.textContent = cart.reduce((acc, curr) => acc + curr.qty, 0);
}

window.chQty = function(id, delta) {
    const item = cart.find(x => x.id === id);
    if(!item) return;
    item.qty += delta;
    if(item.qty <= 0) cart = cart.filter(x => x.id !== id);
    saveCart(); 
    updateCartBadge(); 
    renderCartPage();
}

function renderCartPage() {
    const listContainer = document.getElementById('cartItemsList');
    const layout = document.getElementById('checkoutLayout');
    const cartView = document.getElementById('cartView');
    if(!cartView) return;
    const oldEmptyBlock = cartView.querySelector('.empty-cart-notice');
    if(oldEmptyBlock) oldEmptyBlock.remove();

    if(!cart.length) {
        if(layout) layout.classList.add('hidden');
        const emptyBlock = document.createElement('div');
        emptyBlock.className = "empty-cart-notice text-center py-20 bg-white border border-slate-200 rounded-2xl p-8 w-full";
        emptyBlock.innerHTML = `<p class="font-bold text-slate-900 text-lg">${t('emptyCart')}</p><button onclick="navigateTo('')" class="mt-6 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm">${t('backToCatalog')}</button>`;
        cartView.appendChild(emptyBlock);
        return;
    }

    if(layout) layout.classList.remove('hidden');
    if(listContainer) {
        listContainer.innerHTML = cart.map(item => `
            <div class="flex items-center justify-between gap-4 py-4 border-b border-slate-100 last:border-0">
                <div class="flex items-center gap-4 min-w-0 flex-1">
                    <div class="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">${item.emoji}</div>
                    <div class="min-w-0 flex-1">
                        <div class="font-bold text-sm text-slate-900 truncate">${pName(item)}</div>
                        <div class="text-xs font-bold text-amber-600 mt-0.5">₾${item.price}</div>
                    </div>
                </div>
                <div class="flex items-center border border-slate-200 rounded-lg bg-slate-50 overflow-hidden flex-shrink-0">
                    <button onclick="window.chQty(${item.id}, -1)" class="px-3 py-1 font-bold text-slate-500">−</button>
                    <span class="px-2 text-xs font-bold text-slate-800 min-w-[20px] text-center">${item.qty}</span>
                    <button onclick="window.chQty(${item.id}, 1)" class="px-3 py-1 font-bold text-slate-500">+</button>
                </div>
            </div>
        `).join('');
    }

    const finalPrice = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const deliveryCost = calcCartDeliveryCost();
    const grandTotal = finalPrice + deliveryCost;
    const subtotalEl = document.getElementById('summarySubtotal');
    const deliveryEl = document.getElementById('summaryDeliveryCost');
    const totalEl = document.getElementById('summaryTotal');
    if(subtotalEl) subtotalEl.textContent = '₾' + finalPrice.toLocaleString();
    if(deliveryEl) deliveryEl.textContent = '₾' + deliveryCost.toLocaleString();
    if(totalEl) totalEl.textContent = '₾' + grandTotal.toLocaleString();
}

function showToast(msg) {
    const t = document.getElementById('toast');
    if(!t) return;
    t.textContent = msg;
    t.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    t.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
        t.classList.remove('opacity-100', 'translate-y-0');
        t.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 3000);
}

function initCardMask() {
    document.addEventListener('input', function (e) {
        if (e.target && e.target.id === 'cardNumber') {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let matches = value.match(/\d{4,16}/g);
            let match = matches && matches[0] || '';
            let parts = [];

            for (let i=0, len=match.length; i<len; i+=4) {
                parts.push(match.substring(i, i+4));
            }

            if (parts.length > 0) {
                e.target.value = parts.join(' ');
            } else {
                e.target.value = value;
            }
        }
    });
}
