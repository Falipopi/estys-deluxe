// Your products array (keep adding your new ones here)
const products = [
    { id: 1, name: "Clover Jewelry Set (Available in colors)", price: 12000, category: "Jewelry", image: "IMG-20261019-WA0064.jpg" },
    { id: 2, name: "Grey Wide-Leg Joggers", price: 13000, category: "Clothing", image: "IMG-20261019-WA0065.jpg" },
    { id: 3, name: "Menstrual Cramps Relief Belt", price: 15000, category: "Beauty", image: "IMG-20261019-WA0093.jpg" },
    { id: 4, name: "Korean Face Masks", price: 1000, category: "Beauty", image: "IMG-20261019-WA0067.jpg" },
    { id: 5, name: "Clover Bracelet", price: 4000, category: "Jewelry", image: "IMG-20261019-WA0068.jpg" },
    { id: 6, name: "Streetwear Graphic Tee", price: 15000, category: "Clothing", image: "IMG-20261019-WA0069.jpg" },
    { id: 7, name: "Orange Checkered Shirt", price: 20000, category: "Clothing", image: "IMG-20261019-WA0070.jpg" },
    { id: 8, name: "Pink Self-Care Beauty Box", price: 0, category: "Beauty", image: "IMG-20261019-WA0071.jpg" }, 
    { id: 9, name: "Blue Beauty & Skincare Box", price: 0, category: "Beauty", image: "IMG-20261019-WA0072.jpg" },
    { id: 10, name: "Purple Luxury Gift Box", price: 0, category: "Beauty", image: "IMG-20261019-WA0073.jpg" },
    { id: 11, name: "MK Tote Bag", price: 13000, category: "Accessories", image: "IMG-20261019-WA0074.jpg" },
    { id: 12, name: "Selfie Stick Tripod", price: 10000, category: "Accessories", image: "IMG-20261019-WA0075.jpg" },
    { id: 13, name: "Casio Watch & Cross Combo", price: 20000, category: "Jewelry", image: "IMG-20261019-WA0076.jpg" },
    { id: 14, name: "Casio Square Watch", price: 12000, category: "Jewelry", image: "IMG-20261019-WA0077.jpg" },
    { id: 15, name: "Distressed Yellow Denim Jorts", price: 12000, category: "Clothing", image: "IMG-20261019-WA0078.jpg" },
    { id: 16, name: "Argyle Sweater Vest", price: 17000, category: "Clothing", image: "IMG-20261019-WA0079.jpg" },
    { id: 17, name: "Mountain Graphic Shirt", price: 9000, category: "Clothing", image: "IMG-20261019-WA0080.jpg" },
    { id: 18, name: "Vintage Button-Up Shirts", price: 9000, category: "Clothing", image: "IMG-20261019-WA0081.jpg" },
    { id: 19, name: "Luxury Perfume Gift Set", price: 11000, category: "Beauty", image: "IMG-20261019-WA0082.jpg" },
    { id: 20, name: "Fake Piercing Studs", price: 5500, category: "Jewelry", image: "IMG-20261019-WA0083.jpg" },
    { id: 21, name: "Infinity Watch Stack", price: 20000, category: "Jewelry", image: "IMG-20261019-WA0084.jpg" },
    { id: 22, name: "Black Chronograph Watch", price: 13000, category: "Jewelry", image: "IMG-20261019-WA0085.jpg" },
    { id: 23, name: "Marvel Spider-Man Crocs", price: 20000, category: "Shoes", image: "IMG-20261019-WA0087.jpg" },
    { id: 24, name: "Stanley Quencher Tumbler", price: 19000, category: "Accessories", image: "IMG-20261019-WA0088.jpg" },
    { id: 25, name: "BYC Polo Shirts", price: 8000, category: "Clothing", image: "IMG-20261019-WA0089.jpg" },
    { id: 26, name: "ICY Cartel Necklace", price: 12000, category: "Jewelry", image: "IMG-20261019-WA0090.jpg" },
    { id: 27, name: "Nike Air Force 1 (Sizes 42-46)", price: 20000, category: "Shoes", image: "IMG-20261019-WA0091.jpg" },
    { id: 28, name: "Women's 3-in-1 heart print pajama set (Available in black and red)", price: 0, category: "clothing", image: "new-img23.jpg " },
    { id: 29, name: "Dr. Martens Boots (Sizes 40-45 Fully Boxed)", price: 38000, category: "Shoes", image: "IMG-20261019-WA0220.jpg" },
    { id: 30, name: "Combo", price: 18000, category: "Clothing", image: "new-img24.jpg" },
    { id: 31, name: "Korean-style Casual Square Macaron Quartz watch", price: 8000, category: "Accessories", image: "new-img1.jpg" },
    { id: 32, name: "Agency's Collections 1001", price: 0000, category: "Clothing", image: "new-img2.jpg" },
    { id: 33, name: "Storm Elixir Perfumed Deodorant Body Spray", price: 15000, category: "Accessories", image: "new-img3.jpg" },
    { id: 34, name: "LYN Fineness Re-Edit Top Handle Satchel Bag", price: 0000, category: "Bags", image: "new-img4.jpg" },
    { id: 35, name: "i20 Ultra Max Suit (10-in-1 Smartwatch & Earphones Combo Set)", price: 20000, category: "Beauty", image: "new-img5.jpg" },
    { id: 36, name: "Curated women's souvenir gift box", price: 0000, category: "Clothing", image: "new-img6.jpg" },
    { id: 37, name: "Fate Love Stainless Steel Necklace, Bangle, and wrist watch Gift Set", price: 0000, category: "Jewelry", image: "new-img7.jpg" },
    { id: 38, name: "Prada Black and white Two-Tone Leather Penny Loafers (Sizes 40-46)", price: 42000, category: "Shoes", image: "new-img8.jpg" },
    { id: 39, name: "Cooperate Dress", price: 17000, category: "Clothing", image: "new-img9.jpg" },
    { id: 40, name: "Fashion Stone Ice Men's Wrist Watch", price: 15000, category: "Accessories", image: "new-img10.jpg" },
    { id: 41, name: "3in1 Water Bottle", price: 10000, category: "Beauty", image: "new-img11.jpg" },
    { id: 42, name: "Flower of Story CIQ 4-in-1 Perfume Gift Set", price: 0000, category: "Beauty", image: "new-img12.jpg" },
    { id: 43, name: "Angel Elves 4-in-1 Perfume Gift Set for Women", price: 0000, category: "Beauty", image: "new-img13.jpg" },
    { id: 44, name: "Jewelery Set", price: 0000, category: "Accessories", image: "new-img14.jpg" },
    { id: 45, name: "Available", price: 0000, category: "Clothing", image: "new-img15.jpg" },
    { id: 46, name: "Stainless steel tulip vine jewelry", price: 0000, category: "Jewelry", image: "new-img16.jpg" },
    { id: 47, name: "Lip Care Set", price: 9000, category: "Beauty", image: "new-img17.jpg" },
    { id: 48, name: "Calvin Klein (CK) Unisex Wrist Watch", price: 0000, category: "Accessories", image: "new-img18.jpg" },
    { id: 49, name: "Smartwatch and matching bead bracelet combo set", price: 7500, category: "Accessories", image: "new-img19.jpg" },
    { id: 50, name: "Cubic Zirconia Stainless Steel Halo Jewelry Set", price: 7500, category: "Accessories", image: "new-img20.jpg" },
    { id: 51, name: "Quality Shirt", price: 0000, category: "Clothing", image: "new-img21.jpg" },
    { id: 52, name: "High-waisted denim jorts", price: 0000, category: "Clothing", image: "new-img22.jpg" },
];

const grid = document.getElementById('product-grid');
let currentCategory = 'All'; 

function displayProducts() {
    grid.innerHTML = ''; 
    
    // Grab the search text and remove any extra spaces
    const searchText = document.getElementById('searchInput').value.toLowerCase().trim();
    
    let foundAny = false; // Track if we find any matching products

    products.forEach(product => {
        // If the user is searching, ignore the category filter and search everything.
        // Otherwise, respect the category button they clicked.
        const matchesCategory = searchText !== "" ? true : (currentCategory === 'All' || product.category === currentCategory);
        const matchesSearch = product.name.toLowerCase().includes(searchText);

        if (matchesCategory && matchesSearch) {
            foundAny = true;
            
            let displayPrice = product.price === 0 ? "Contact for Price" : new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(product.price);

            const card = document.createElement('div');
            card.className = 'product-card';
            
            card.innerHTML = `
                <img src="${product.image.startsWith('http') ? product.image : 'images/' + product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x280?text=Image+Not+Found';">
                <h3>${product.name}</h3>
                <p class="price">${displayPrice}</p>
                <button class="buy-btn" onclick="orderProduct('${product.name}')">Order on WhatsApp</button>
            `;
            grid.appendChild(card);
        }
    });

    // If no products matched the search, show a message
    if (!foundAny) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 0;">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #ccc; margin-bottom: 15px;"></i>
                <h3 style="color: var(--charcoal);">No products found!</h3>
                <p style="color: #888;">Try searching for something else.</p>
            </div>
        `;
    }
}

function filterProducts(category, event) {
    currentCategory = category; 
    
    // Clear the search bar when a category icon is clicked
    document.getElementById('searchInput').value = '';
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if(event) event.currentTarget.classList.add('active');
    
    displayProducts(); 
}

function searchProducts() {
    displayProducts(); 
}

// Load everything when the page first opens
displayProducts();

function orderProduct(productName) {
    const phoneNumber = '2348147110130';
    const message = `Hello Esty's Deluxe! I want to order: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}