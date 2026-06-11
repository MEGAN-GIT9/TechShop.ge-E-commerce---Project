// 1. პროდუქტების მონაცემთა ბაზა (TechShop-ის პროდუქტები)
const products = [
    {id: 1, name: 'AirPods Pro Max - Space Gray', cat: 'Audio', price: 549, emoji: '🎧', stars: 5, reviews: 2341, badge: 'Hot', desc: 'უმაღლესი ხარისხის აუდიო სისტემა აქტიური ხმაურის დახშობის (ANC) ტექნოლოგიით. უზრუნველყოფს კინემატოგრაფიულ ხმას და 20 საათამდე მუშაობას ერთი დამუხტვით.', specs: { 'ბრენდი': 'Apple', 'მოდელი': 'AirPods Pro Max', 'ელემენტი': '20 საათი', 'კავშირი': 'Bluetooth 5.0' }},
    {id: 2, name: 'Galaxy S25 Ultra 512GB', cat: 'Phones', price: 1199, emoji: '📱', stars: 5, reviews: 1820, badge: 'New', desc: 'ინოვაციური სმარტფონი 200MP კამერით, ჩაშენებული S Pen-ით და Snapdragon-ის უახლესი პროცესორით, რომელიც შექმნილია მრავალმხრივი მუშაობისთვის.', specs: { 'ბრენდი': 'Samsung', 'ეკრანი': '6.8" Dynamic AMOLED', 'მეხსიერება': '512 GB', 'ოპერატიული': '12 GB' }},
    {id: 3, name: 'MacBook Air M4 - Titanium', cat: 'Laptops', price: 1299, emoji: '💻', stars: 5, reviews: 987, badge: 'New', desc: 'ულტრა თხელი და მძლავრი ლეპტოპი Apple M4 ჩიპით. იდეალურია დეველოპერებისთვის, დიზაინერებისთვის და ყოველდღიური დატვირთული მუშაობისთვის.', specs: { 'ბრენდი': 'Apple', 'ჩიპსეტი': 'Apple M4', 'ელემენტი': '18 საათი', 'წონა': '1.24 კგ' }},
    {id: 4, name: 'Apple Watch Ultra 3', cat: 'Wearables', price: 799, emoji: '⌚', stars: 4, reviews: 654, badge: '', desc: 'ყველაზე გამძლე ჭკვიანი საათი ტიტანის კორპუსით, ორსიხშირიანი ზუსტი GPS-ით და 72 საათამდე მუშაობის ხანგრძლივობით ექსტრემალურ პირობებში.', specs: { 'ბრენდი': 'Apple', 'კორპუსი': 'ტიტანი', 'წყალგამძლეობა': '100 მეტრი', 'ეკრანი': 'Always-On Retina' }},
    {id: 5, name: 'Sony A7 V Mirrorless Camera', cat: 'Cameras', price: 3499, emoji: '📷', stars: 5, reviews: 412, badge: 'Pro', desc: 'პროფესიონალური სრული კადრის (Full-Frame) უსარკო კამერა ხელოვნური ინტელექტის ავტოფოკუსითა და 8K ვიდეოს ჩაწერის მხარდაჭერით.', specs: { 'ბრენდი': 'Sony', 'სენსორი': '61 MP Full-Frame', 'ვიდეო ხარისხი': '8K 30p / 4K 120p', 'სტაბილიზაცია': '5-ღერძიანი ჩაშენებული' }},
    {id: 6, name: 'Bose QuietComfort Ultra', cat: 'Audio', price: 329, emoji: '🎵', stars: 4, reviews: 1123, badge: 'Sale', desc: 'მსოფლიო დონის ხმაურის დახშობა და იმერსიული აუდიო ფორმატი. შექმნილია მაქსიმალური კომფორტისთვის ხანგრძლივი მგზავრობისას.', specs: { 'ბრენდი': 'Bose', 'ტიპი': 'Over-Ear', 'ხმაურის დახშობა': 'Active Ultra', 'წონა': '250 გრ' }}
];

// კალათის მონაცემები ინახება LocalStorage-ში
let cart = JSON.parse(localStorage.getItem('techshop_cart')) || [];
let selectedCategory = 'all';

// როუტინგის სისტემა (SPA ხედები)
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
    } else {
        document.getElementById('homeView').classList.remove('hidden');
        filterProducts();
    }
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', () => {
    initFilters();
    initCardMask(); 
    updateCartBadge(); 
    handleRouting();
});

// გლობალური ნავიგაციის ფუნქციები HTML ივენთებისთვის
window.navigateTo = function(path) { window.location.hash = path; }
window.syncAndFilter = function(el) { 
    const mainSearch = document.getElementById('searchInput');
    if (mainSearch) mainSearch.value = el.value; 
    filterProducts(); 
}

// კატეგორიების რადიო-ფილტრების ინიციალიზაცია
function initFilters() {
    const container = document.getElementById('categoryFilters');
    if (!container) return;
    
    const categories = ['all', ...new Set(products.map(p => p.cat))];
    const geoLabels = { 'all': 'ყველა კატეგორია', 'Audio': 'აუდიო', 'Phones': 'სმარტფონები', 'Laptops': 'ლეპტოპები', 'Wearables': 'აქსესუარები', 'Cameras': 'კამერები' };

    container.innerHTML = categories.map(c => `
        <li class="flex items-center gap-3 py-1">
            <input type="radio" name="cat" id="cat_${c}" ${c==='all'?'checked':''} onclick="setCategory('${c}')" class="w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-900 accent-slate-900 cursor-pointer">
            <label for="cat_${c}" class="select-none cursor-pointer text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">${geoLabels[c] || c}</label>
        </li>
    `).join('');
}

window.setCategory = function(cat) { selectedCategory = cat; filterProducts(); }

window.filterProducts = function() {
    const searchInput = document.getElementById('searchInput');
    const searchQ = searchInput ? searchInput.value.toLowerCase() : '';
    
    const minP = parseFloat(document.getElementById('priceMin').value) || 0;
    const maxP = parseFloat(document.getElementById('priceMax').value) || Infinity;

    const filtered = products.filter(p => {
        const matchCat = (selectedCategory === 'all' || p.cat === selectedCategory);
        const matchSearch = p.name.toLowerCase().includes(searchQ);
        const matchPrice = p.price >= minP && p.price <= maxP;
        return matchCat && matchSearch && matchPrice;
    });

    renderCatalog(filtered);
}

// კატალოგის ბარათების რენდერი
function renderCatalog(list) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    if(!list.length) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 font-medium text-sm">პროდუქტი მითითებული კრიტერიუმებით ვერ მოიძებნა.</div>`;
        return;
    }
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
                    <div class="flex items-center gap-1 text-amber-500 text-xs mt-2">
                        <span>${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</span>
                        <span class="text-slate-400 font-semibold ml-1">(${p.reviews})</span>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-5 gap-2">
                    <span class="text-base font-black text-slate-900 flex-shrink-0">$${p.price.toLocaleString()}</span>
                    <div class="flex items-center gap-1.5">
                        <button onclick="buyNow(${p.id})" class="h-9 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-sm">ყიდვა</button>
                        <button id="btn-add-${p.id}" onclick="addToCart(${p.id}, this)" class="h-9 w-9 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center text-lg transition-all shadow-sm">+</button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// პროდუქტის შიდა გვერდის რენდერი
function renderProductDetail(id) {
    const p = products.find(x => x.id === id);
    const container = document.getElementById('productDetailContainer');
    if(!container) return;
    if(!p) { container.innerHTML = 'პროდუქტი ვერ მოიძებნა.'; return; }

    let specsHTML = '';
    for(let key in p.specs) {
        specsHTML += `<tr class="border-b border-slate-100 last:border-0"><td class="py-3 pr-4 text-slate-400 text-sm font-medium w-1/3">${key}</td><td class="py-3 text-slate-800 text-sm font-semibold">${p.specs[key]}</td></tr>`;
    }

    container.innerHTML = `
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="aspect-square bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-[140px] select-none">${p.emoji}</div>
            <div>
                <span class="text-xs font-bold text-amber-500 uppercase tracking-widest">${p.cat}</span>
                <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 mt-2 mb-3">${p.name}</h1>
                <div class="flex items-center gap-2 text-sm text-amber-500 mb-6"><span>${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</span><span class="text-slate-400 font-medium">(${p.reviews} მომხმარებლის შეფასება)</span></div>
                <div class="text-3xl font-black text-slate-900 mb-6">$${p.price.toLocaleString()}</div>
                <p class="text-slate-600 text-sm leading-relaxed mb-8">${p.desc}</p>
                
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">ტექნიკური მონაცემები</h4>
                <table class="w-full mb-8">${specsHTML}</table>
                
                <button onclick="buyNow(${p.id})" class="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold rounded-xl shadow-md transition-all">კალათაში დამატება და ყიდვა</button>
            </div>
        </div>
    `;
}

function saveCart() { localStorage.setItem('techshop_cart', JSON.stringify(cart)); }

// კალათაში დამატების ფუნქცია ანიმაციით
window.addToCart = function(id, buttonElement = null) {
    const p = products.find(x => x.id === id);
    const exist = cart.find(x => x.id === id);
    if(exist) { exist.qty++; } else { cart.push({...p, qty: 1}); }
    saveCart();
    updateCartBadge();
    showToast(`✅ ${p.name} წარმატებით დაემატა კალათაში!`);

    // თუ ფუნქცია ბარათიდან იქნა გამოძახებული, ვრთავთ მწვანე პწიჩკის ეფექტს
    const targetButton = buttonElement || document.getElementById(`btn-add-${id}`);
    if (targetButton) {
        const originalHTML = targetButton.innerHTML;
        const originalBg = targetButton.className;
        
        targetButton.innerHTML = '✓';
        targetButton.className = "h-9 w-9 bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center text-base transition-all shadow-sm scale-105 pointer-events-none";
        
        setTimeout(() => {
            targetButton.innerHTML = originalHTML;
            targetButton.className = originalBg;
        }, 1000);
    }
}

// „იყიდე ახლავე“ პირდაპირი ღილაკის ფუნქციონალი
window.buyNow = function(id) {
    const p = products.find(x => x.id === id);
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

// კალათის გვერდის რენდერი
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
        emptyBlock.className = "empty-cart-notice text-center py-20 bg-white border border-slate-200 rounded-2xl max-w-xl mx-auto p-8 shadow-sm w-full";
        emptyBlock.innerHTML = `
            <div class="text-5xl mb-4">🛒</div>
            <p class="font-bold text-slate-900 text-lg">თქვენი კალათა ცარიელია</p>
            <button onclick="navigateTo('')" class="mt-6 px-6 py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold rounded-xl text-sm transition-all shadow-sm">კატალოგში დაბრუნება</button>
        `;
        cartView.appendChild(emptyBlock);
        return;
    }

    if(layout) layout.classList.remove('hidden');

    if(listContainer) {
        listContainer.innerHTML = cart.map(item => `
            <div class="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0 border-b border-slate-100 last:border-0">
                <div class="flex items-center gap-4 min-w-0 flex-1">
                    <div class="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-2xl select-none flex-shrink-0">${item.emoji}</div>
                    <div class="min-w-0 flex-1">
                        <div class="font-bold text-sm text-slate-900 truncate">${item.name}</div>
                        <div class="text-xs font-bold text-amber-600 mt-0.5">$${item.price}</div>
                    </div>
                </div>
                <div class="flex items-center border border-slate-200 rounded-lg bg-slate-50 overflow-hidden flex-shrink-0">
                    <button onclick="chQty(${item.id}, -1)" class="px-3 py-1 font-bold text-slate-500 hover:bg-slate-200/60 transition-all">−</button>
                    <span class="px-2 text-xs font-bold text-slate-800 min-w-[20px] text-center">${item.qty}</span>
                    <button onclick="chQty(${item.id}, 1)" class="px-3 py-1 font-bold text-slate-500 hover:bg-slate-200/60 transition-all">+</button>
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

// Toast შეტყობინებები
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

// გადახდის პროცესი
window.processPayment = function() {
    const cardInput = document.getElementById('cardNumber');
    if(!cardInput) return;

    const cleanCardNum = cardInput.value.replace(/\s/g, '');
    
    if(cleanCardNum.length < 16) {
        showToast('⚠️ გთხოვთ, შეიყვანოთ ბარათის მონაცემები სწორად.');
        return;
    }
    
    showToast('🔄 ტრანზაქცია მუშავდება... გთხოვთ დაელოდოთ.');
    setTimeout(() => {
        alert('🎉 გადახდა წარმატებით დასრულდა! შეკვეთა მიღებულია.');
        cart = [];
        saveCart();
        updateCartBadge();
        cardInput.value = '';
        navigateTo('');
    }, 2000);
}

// უსაფრთხო Live Card Input Mask
function initCardMask() {
    document.addEventListener('input', function (e) {
        if (e.target && e.target.id === 'cardNumber') {
            e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
        }
    });
}
  