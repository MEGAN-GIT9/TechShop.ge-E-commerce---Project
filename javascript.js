// პროდუქტების მონაცემთა ბაზა
const products = [
    {id: 1, name: 'AirPods Pro Max - Space Gray', cat: 'Audio', price: 549, emoji: '🎧', stars: 5, reviews: 2341, badge: 'Hot', desc: 'უმაღლესი ხარისხის აუდიო სისტემა აქტიური ხმაურის დახშობის (ANC) ტექნოლოგიით.', specs: { 'ბრენდი': 'Apple', 'მოდელი': 'AirPods Pro Max', 'ელემენტი': '20 საათი' }},
    {id: 2, name: 'Galaxy S25 Ultra 512GB', cat: 'Phones', price: 1199, emoji: '📱', stars: 5, reviews: 1820, badge: 'New', desc: 'ინოვაციური სმარტფონი 200MP კამერით და ჩაშენებული S Pen-ით.', specs: { 'ბრენდი': 'Samsung', 'ეკრანი': '6.8" Dynamic AMOLED' }},
    {id: 3, name: 'MacBook Air M4 - Titanium', cat: 'Laptops', price: 1299, emoji: '💻', stars: 5, reviews: 987, badge: 'New', desc: 'ულტრა თხელი და მძლავრი ლეპტოპი Apple M4 ჩიპით.', specs: { 'ბრენდი': 'Apple', 'ჩიპსეტი': 'Apple M4' }},
    {id: 4, name: 'Apple Watch Ultra 3', cat: 'Wearables', price: 799, emoji: '⌚', stars: 4, reviews: 654, badge: '', desc: 'ყველაზე გამძლე ჭკვიანი საათი ტიტანის კორპუსით.', specs: { 'ბრენდი': 'Apple', 'კორპუსი': 'ტიტანი' }},
    {id: 5, name: 'Sony A7 V Mirrorless Camera', cat: 'Cameras', price: 3499, emoji: '📷', stars: 5, reviews: 412, badge: 'Pro', desc: 'პროფესიონალური სრული კადრის უსარკო კამერა.', specs: { 'ბრენდი': 'Sony', 'სენსორი': '61 MP Full-Frame' }},
    {id: 6, name: 'Bose QuietComfort Ultra', cat: 'Audio', price: 329, emoji: '🎵', stars: 4, reviews: 1123, badge: 'Sale', desc: 'მსოფლიო დონის ხმაურის დახშობა და იმერსიული აუდიო ფორმატი.', specs: { 'ბრენდი': 'Bose', 'ტიპი': 'Over-Ear' }},
    {id: 7, name: 'Samsung Galaxy Buds 3 Pro', cat: 'Audio', price: 179, emoji: '🎧', stars: 5, reviews: 410, badge: 'Sale', desc: 'ინტელექტუალური ხმის დახშობა.', specs: { 'ბრენდი': 'Samsung' }},
    {id: 8, name: 'iPhone 15 Pro 256GB', cat: 'Phones', price: 899, emoji: '📱', stars: 5, reviews: 1205, badge: 'Sale', desc: 'ტიტანის ერგონომიული დიზაინი.', specs: { 'ბრენდი': 'Apple' }},
    {id: 9, name: 'Asus ROG Zephyrus G14', cat: 'Laptops', price: 1450, emoji: '💻', stars: 5, reviews: 312, badge: 'Sale', desc: 'უმაღლესი დონის გეიმერული ნოუთბუქი.', specs: { 'ბრენდი': 'Asus' }},
    {id: 10, name: 'Google Pixel Watch 3', cat: 'Wearables', price: 299, emoji: '⌚', stars: 4, reviews: 189, badge: 'Sale', desc: 'Android-ის საუკეთესო ჭკვიანი საათი.', specs: { 'ბრენდი': 'Google' }},
    {id: 11, name: 'Fujifilm X-T5 Mirrorless', cat: 'Cameras', price: 1599, emoji: '📷', stars: 5, reviews: 245, badge: 'Sale', desc: 'რეტრო დიზაინის მქონე პროფესიონალური ფოტოაპარატი.', specs: { 'ბრენდი': 'Fujifilm' }},
    {id: 12, name: 'JBL Charge 5 Wi-Fi', cat: 'Audio', price: 149, emoji: '🔊', stars: 5, reviews: 856, badge: 'Sale', desc: 'წყალგამძლე პორტატული დინამიკი.', specs: { 'ბრენდი': 'JBL' }},
    {id: 13, name: 'OnePlus 12 5G 256GB', cat: 'Phones', price: 699, emoji: '📱', stars: 4, reviews: 540, badge: 'Sale', desc: 'ულტრა სწრაფი დამუხტვა.', specs: { 'ბრენდი': 'OnePlus' }},
    {id: 14, name: 'Dell XPS 13 OLED', cat: 'Laptops', price: 1099, emoji: '💻', stars: 5, reviews: 422, badge: 'Sale', desc: 'პრემიუმ კლასის ულტრაბუქი.', specs: { 'ბრენდი': 'Dell' }},
    {id: 15, name: 'Xiaomi Watch S3', cat: 'Wearables', price: 119, emoji: '⌚', stars: 4, reviews: 310, badge: 'Sale', desc: 'ელეგანტური საათი დიდი ელემენტით.', specs: { 'ბრენდი': 'Xiaomi' }},
    {id: 16, name: 'Sony WH-1000XM5', cat: 'Audio', price: 289, emoji: '🎧', stars: 5, reviews: 3412, badge: 'Sale', desc: 'ბაზრის ლიდერი ხმაურის დახშობაში.', specs: { 'ბრენდი': 'Sony' }},
    {id: 17, name: 'Samsung Galaxy S24+', cat: 'Phones', price: 799, emoji: '📱', stars: 5, reviews: 745, badge: 'Sale', desc: 'ბრწყინვალე ეკრანი და გაუმჯობესებული AI.', specs: { 'ბრენდი': 'Samsung' }}
];

// საიტის პოლიტიკების მონაცემთა ბაზა (ფუტერისთვის)
const policyData = {
    terms: {
        title: "წესები და პირობები",
        text: "<p>**1. ზოგადი პირობები**<br>წინამძღობარე ხელშეკრულება არეგულირებს მომხმარებლის მიერ TechShop-ის პლატფორმის გამოყენების წესებს. ვებ-გვერდზე შეკვეთის განთავსებით თქვენ ეთანხმებით აღნიშნულ პირობებს.</p><p>**2. უფასო მიწოდება**<br>მიწოდება ხორციელდება სრულიად უფასოდ საქართველოს მასშტაბით. თბილისში მიწოდება ხდება 1-2 სამუშაო დღეში, ხოლო რეგიონებში 2-4 სამუშაო დღეში.</p>"
    },
    warranty: {
        title: "საგარანტიო პირობები",
        text: "<p>**1. გარანტიის ხანგრძლივობა**<br>ყველა ტექნიკურ მოწყობილობაზე ვრცელდება ოფიციალური **1-დან 3 წლამდე** გარანტია, პროდუქტის სპეციფიკაციიდან გამომდინარე.</p><p>**2. საგარანტიო შემთხვევა**<br>გარანტია ფარავს ქარხნულ დეფექტებს. გარანტია არ მოქმედებს მექანიკური დაზიანების, სითხის მოხვედრის ან არასერტიფიცირებული დამტენების გამოყენების შემთხვევაში.</p>"
    },
    return: {
        title: "ნივთის დაბრუნების პოლიტიკა",
        text: "<p>**1. დაბრუნების ვადები**<br>მომხმარებელს უფლება აქვს დააბრუნოს ან შეცვალოს შეძენილი ნივთი **14 კალენდარული დღის** განმავლობაში, თუ ნივთს არ უფიქსირდება გამოყენების კვალი, შენარჩუნებული აქვს სასაქონლო იერსახე და ქარხნული შეფუთვა გაუხსნელია.</p>"
    }
};

let cart = JSON.parse(localStorage.getItem('techshop_cart')) || [];
let selectedCategory = 'all';
let selectedBrand = 'all';
let authMode = 'login';
let paymentMethod = 'card'; // 'card' ან 'installment'
let currentUser = JSON.parse(localStorage.getItem('techshop_user')) || null;

function handleRouting() {
    const hash = window.location.hash;
    document.querySelectorAll('.view-section').forEach(v => v.classList.add('hidden'));
    window.scrollTo(0,0);

    if (hash.startsWith('#product/')) {
        const id = parseInt(hash.replace('#product/', ''));
        renderProductDetail(id);
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
    initFilters();
    initBrandFilters();
    initPromoMarquee();
    initCardMask(); 
    updateCartBadge(); 
    updateAuthUI();
    handleRouting();
});

window.navigateTo = function(path) { window.location.hash = path; }

// კატეგორიები
function initFilters() {
    const container = document.getElementById('categoryFilters');
    if (!container) return;
    const categories = ['all', ...new Set(products.map(p => p.cat))];
    const geoLabels = { 'all': 'ყველა კატეგორია', 'Audio': 'აუდიო', 'Phones': 'სმარტფონები', 'Laptops': 'ლეპტოპები', 'Wearables': 'აქსესუარები', 'Cameras': 'კამერები' };
    container.innerHTML = categories.map(c => `
        <li class="flex items-center gap-3 py-1">
            <input type="radio" name="cat" id="cat_${c}" ${c==='all'?'checked':''} onclick="setCategory('${c}')" class="w-4 h-4 text-slate-900 border-slate-300 accent-slate-900 cursor-pointer">
            <label for="cat_${c}" class="select-none cursor-pointer text-slate-600 hover:text-slate-900 text-sm font-medium">${geoLabels[c] || c}</label>
        </li>
    `).join('');
}
window.setCategory = function(cat) { selectedCategory = cat; filterProducts(); }

// ბრენდები
function initBrandFilters() {
    const container = document.getElementById('brandFilters');
    if (!container) return;
    const brands = ['all', ...new Set(products.map(p => p.specs['ბრენდი']))];
    container.innerHTML = brands.map(b => `
        <li class="flex items-center gap-3 py-1">
            <input type="radio" name="brand" id="brand_${b}" ${b==='all'?'checked':''} onclick="setBrand('${b}')" class="w-4 h-4 text-slate-900 border-slate-300 accent-slate-900 cursor-pointer">
            <label for="brand_${b}" class="select-none cursor-pointer text-slate-600 hover:text-slate-900 text-sm font-medium">${b === 'all' ? 'ყველა ბრენდი' : b}</label>
        </li>
    `).join('');
}
window.setBrand = function(brand) { selectedBrand = brand; filterProducts(); }

window.filterProducts = function() {
    const searchInput = document.getElementById('searchInput');
    const searchQ = searchInput ? searchInput.value.toLowerCase() : '';
    const minP = parseFloat(document.getElementById('priceMin').value) || 0;
    const maxP = parseFloat(document.getElementById('priceMax').value) || Infinity;

    const filtered = products.filter(p => {
        const matchCat = (selectedCategory === 'all' || p.cat === selectedCategory);
        const matchBrand = (selectedBrand === 'all' || p.specs['ბრენდი'] === selectedBrand);
        const matchSearch = p.name.toLowerCase().includes(searchQ) || p.desc.toLowerCase().includes(searchQ);
        const matchPrice = p.price >= minP && p.price <= maxP;
        return matchCat && matchBrand && matchSearch && matchPrice;
    });
    renderCatalog(filtered);
}

// პრომო კარუსელი წითელი სათაურებით
function initPromoMarquee() {
    const container = document.getElementById('promoMarquee');
    if (!container) return;
    const saleProducts = products.filter(p => p.badge === 'Sale' || p.badge === 'Hot');
    const doubleList = [...saleProducts, ...saleProducts];
    container.innerHTML = doubleList.map(p => `
        <div onclick="window.location.hash='#product/${p.id}'" class="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all flex-shrink-0 select-none">
            <span class="text-2xl">${p.emoji}</span>
            <div>
                <h4 class="text-xs font-black text-rose-600 truncate max-w-[140px]">${p.name}</h4>
                <p class="text-[10px] font-bold text-slate-900">$${p.price}</p>
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
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 font-medium text-sm">პროდუქტი ვერ მოიძებნა.</div>`;
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
                    <a href="#product/${p.id}" class="block text-sm font-bold text-slate-900 mt-1 hover:text-amber-600 transition-colors line-clamp-2">${p.name}</a>
                    <div class="flex items-center gap-1 text-amber-500 text-xs mt-2"><span>${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</span><span class="text-slate-400 font-semibold ml-1">(${p.reviews})</span></div>
                </div>
                <div class="flex items-center justify-between mt-5 gap-2">
                    <span class="text-base font-black text-slate-900 flex-shrink-0">$${p.price.toLocaleString()}</span>
                    <div class="flex items-center gap-1.5">
                        <button onclick="buyNow(${p.id})" class="h-9 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-sm">ყიდვა</button>
                        <button id="btn-add-${p.id}" onclick="addToCart(${p.id}, this)" class="h-9 w-9 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center text-lg transition-all shadow-sm">+</button>
                    </div>
                </div>
            </div>
        `;
        targetGrid.appendChild(card);
    });
}

function renderProductDetail(id) {
    const p = products.find(x => x.id === id);
    const container = document.getElementById('productDetailContainer');
    if(!container) return;
    let specsHTML = '';
    for(let key in p.specs) { specsHTML += `<tr class="border-b border-slate-100"><td class="py-3 text-slate-400 text-sm w-1/3">${key}</td><td class="py-3 text-slate-800 text-sm font-semibold">${p.specs[key]}</td></tr>`; }
    container.innerHTML = `
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center text-[140px] select-none">${p.emoji}</div>
            <div>
                <span class="text-xs font-bold text-amber-500 uppercase">${p.cat}</span>
                <h1 class="text-3xl font-extrabold text-slate-900 mt-2 mb-3">${p.name}</h1>
                <div class="text-3xl font-black text-slate-900 mb-6">$${p.price.toLocaleString()}</div>
                <p class="text-slate-600 text-sm mb-8">${p.desc}</p>
                <table class="w-full mb-8">${specsHTML}</table>
                <button onclick="buyNow(${p.id})" class="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-md">კალათაში დამატება და ყიდვა</button>
            </div>
        </div>
    `;
}

// 💳 განვადებისა და გადახდის ტაბების სისტემა
window.switchPaymentTab = function(type) {
    paymentMethod = type;
    const tabCard = document.getElementById('tab-card');
    const tabInst = document.getElementById('tab-installment');
    const cardBlock = document.getElementById('payment-card-block');
    const instBlock = document.getElementById('payment-installment-block');
    const submitBtn = document.getElementById('mainSubmitBtn');

    if (type === 'card') {
        tabCard.className = "py-2 px-4 text-slate-900 border-b-2 border-slate-900";
        tabInst.className = "py-2 px-4 text-slate-400 hover:text-slate-600";
        cardBlock.classList.remove('hidden');
        instBlock.classList.add('hidden');
        submitBtn.innerText = "შეკვეთის განთავსება";
    } else {
        tabInst.className = "py-2 px-4 text-slate-900 border-b-2 border-slate-900";
        tabCard.className = "py-2 px-4 text-slate-400 hover:text-slate-600";
        cardBlock.classList.add('hidden');
        instBlock.classList.remove('hidden');
        submitBtn.innerText = "განვადების მოთხოვნა";
    }
}

// გადახდის / განვადების დამუშავება
window.processPayment = function() {
    if (paymentMethod === 'card') {
        const cardInput = document.getElementById('cardNumber');
        if(!cardInput || cardInput.value.replace(/\s/g, '').length < 16) {
            showToast('⚠️ გთხოვთ, შეიყვანოთ ბარათის ნომერი სწორად.');
            return;
        }
        showToast('🔄 ტრანზაქცია მუშავდება...');
    } else {
        const selectedBank = document.querySelector('input[name="bank_inst"]:checked');
        if (!selectedBank) {
            showToast('⚠️ გთხოვთ, აირჩიოთ რომელიმე ბანკი განვადებისთვის.');
            return;
        }
        showToast(`🔄 გადამისამართება ${selectedBank.value}-ის ონლაინ განვადებაზე...`);
    }

    setTimeout(() => {
        alert(paymentMethod === 'card' ? '🎉 გადახდა წარმატებით დასრულდა! მიწოდება უფასოა.' : '🎉 განვადების მოთხოვნა წარმატებით გაიგზავნა ბანკში!');
        cart = []; saveCart(); updateCartBadge(); navigateTo('');
    }, 2000);
}

// 📄 წესებისა და გარანტიების მოდალები
window.openPolicy = function(type) {
    const data = policyData[type];
    if(!data) return;
    document.getElementById('policyModalTitle').innerText = data.title;
    document.getElementById('policyModalContent').innerHTML = data.text;
    document.getElementById('policyModal').classList.remove('hidden');
}
window.closePolicy = function() { document.getElementById('policyModal').classList.add('hidden'); }

// ავტორიზაცია
window.toggleAuthMode = function() {
    authMode = authMode === 'login' ? 'register' : 'login';
    document.getElementById('authTitle').innerText = authMode === 'register' ? 'რეგისტრაცია' : 'სისტემაში შესვლა';
    document.getElementById('authSubmitBtn').innerText = authMode === 'register' ? 'დარეგისტრირება' : 'შესვლა';
}
window.handleAuthSubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('authEmail').value;
    currentUser = { email: email, name: email.split('@')[0] };
    localStorage.setItem('techshop_user', JSON.stringify(currentUser));
    updateAuthUI();
    showToast('🔒 ავტორიზაცია წარმატებულია!');
    navigateTo('');
}
window.handleGoogleLogin = function() {
    currentUser = { email: 'google.user@gmail.com', name: 'Google User' };
    localStorage.setItem('techshop_user', JSON.stringify(currentUser));
    updateAuthUI();
    showToast('🌐 Google ავტორიზაცია წარმატებულია!');
    navigateTo('');
}
window.logoutUser = function() {
    currentUser = null; localStorage.removeItem('techshop_user');
    updateAuthUI(); showToast('🚪 გამოხვედით სისტემიდან.');
}
function updateAuthUI() {
    const btn = document.getElementById('navAuthBtn');
    if(!btn) return;
    if(currentUser) { btn.innerHTML = `👤 ${currentUser.name} (გამოსვლა)`; btn.onclick = () => logoutUser(); }
    else { btn.innerHTML = '🔑 შესვლა'; btn.onclick = () => navigateTo('auth'); }
}

function saveCart() { localStorage.setItem('techshop_cart', JSON.stringify(cart)); }
window.addToCart = function(id, buttonElement = null) {
    const p = products.find(x => x.id === id);
    const exist = cart.find(x => x.id === id);
    if(exist) { exist.qty++; } else { cart.push({...p, qty: 1}); }
    saveCart(); updateCartBadge(); showToast(`✅ ${p.name} დაემატა კალათაში!`);
}
window.buyNow = function(id) {
    const p = products.find(x => x.id === id);
    const exist = cart.find(x => x.id === id);
    if(!exist) { cart.push({...p, qty: 1}); }
    saveCart(); updateCartBadge(); navigateTo('cart');
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
    saveCart(); updateCartBadge(); renderCartPage();
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
        emptyBlock.innerHTML = `<p class="font-bold text-slate-900 text-lg">თქვენი კალათა ცარიელია</p><button onclick="navigateTo('')" class="mt-6 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm">კატალოგში დაბრუნება</button>`;
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
                        <div class="font-bold text-sm text-slate-900 truncate">${item.name}</div>
                        <div class="text-xs font-bold text-amber-600 mt-0.5">$${item.price}</div>
                    </div>
                </div>
                <div class="flex items-center border border-slate-200 rounded-lg bg-slate-50 overflow-hidden flex-shrink-0">
                    <button onclick="chQty(${item.id}, -1)" class="px-3 py-1 font-bold text-slate-500">−</button>
                    <span class="px-2 text-xs font-bold text-slate-800 min-w-[20px] text-center">${item.qty}</span>
                    <button onclick="chQty(${item.id}, 1)" class="px-3 py-1 font-bold text-slate-500">+</button>
                </div>
            </div>
        `).join('');
    }

    const finalPrice = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const subtotalEl = document.getElementById('summarySubtotal');
    const totalEl = document.getElementById('summaryTotal');
    if(subtotalEl) subtotalEl.textContent = '$' + finalPrice.toLocaleString();
    if(totalEl) totalEl.textContent = '$' + finalPrice.toLocaleString();
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
            let cursorPosition = e.target.selectionStart;
            let originalLength = e.target.value.length;
            let sanitized = e.target.value.replace(/[^\d]/g, '');
            let formatted = sanitized.replace(/(.{4})/g, '$1 ').trim();
            e.target.value = formatted.substring(0, 19);
            cursorPosition = cursorPosition + (e.target.value.length - originalLength);
            e.target.setSelectionRange(cursorPosition, cursorPosition);
        }
    });
}