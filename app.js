// We are putting the products directly in the frontend to skip the terminal!
const products = [
    { id: 1, name: "Clover Jewelry Set (Available in colors)", price: 12000, image: "IMG-20261019-WA0064.jpg" },
    { id: 2, name: "Joggers", price: 13000, image: "IMG-20261019-WA0065.jpg" },
    { id: 3, name: "Menstrual Cramps Relief Belt", price: 15000, image: "IMG-20261019-WA0093.jpg" },
    { id: 4, name: "Face Masks", price: 1000, image: "IMG-20261019-WA0067.jpg" },
    { id: 5, name: "VC Bracelet", price: 4000, image: "IMG-20261019-WA0068.jpg" },
    { id: 6, name: "Streetwear Graphic Tee", price: 15000, image: "IMG-20261019-WA0069.jpg" },
    { id: 7, name: "Checkered Shirt", price: 20000, image: "IMG-20261019-WA0070.jpg" },
    { id: 8, name: "Pink Self-Care Beauty Box", price: 0, image: "IMG-20261019-WA0071.jpg" }, 
    { id: 9, name: "Blue Beauty & Skincare Box", price: 0, image: "IMG-20261019-WA0072.jpg" },
    { id: 10, name: "Purple Luxury Gift Box", price: 0, image: "IMG-20261019-WA0073.jpg" },
    { id: 11, name: "MK Tote Bag", price: 13000, image: "IMG-20261019-WA0074.jpg" },
    { id: 12, name: "Selfie Stick Tripod", price: 10000, image: "IMG-20261019-WA0075.jpg" },
    { id: 13, name: "Casio Watch & Cross Combo", price: 20000, image: "IMG-20261019-WA0076.jpg" },
    { id: 14, name: "P9 Headset", price: 12000, image: "IMG-20261019-WA0077.jpg" },
    { id: 15, name: "Casio Watch", price: 12000, image: "IMG-20261019-WA0078.jpg" },
    { id: 16, name: "Denim Shorts", price: 17000, image: "IMG-20261019-WA0079.jpg" },
    { id: 17, name: "Sweater Vest", price: 9000, image: "IMG-20261019-WA0080.jpg" },
    { id: 18, name: "Vintage Button-Up Shirts", price: 9000, image: "IMG-20261019-WA0081.jpg" },
    { id: 19, name: "Luxury Perfume Gift Set", price: 11000, image: "IMG-20261019-WA0082.jpg" },
    { id: 20, name: "Fake Piercing Studs", price: 5500, image: "IMG-20261019-WA0083.jpg" },
    { id: 21, name: "Infinity Watch Stack", price: 20000, image: "IMG-20261019-WA0084.jpg" },
    { id: 22, name: "Black Chronograph Watch", price: 13000, image: "IMG-20261019-WA0085.jpg" },
    { id: 23, name: "Marvel Spider-Man Crocs", price: 20000, image: "IMG-20261019-WA0087.jpg" },
    { id: 24, name: "Stanley Quencher Tumbler Cup", price: 19000, image: "IMG-20261019-WA0088.jpg" },
    { id: 25, name: "BYC Polo Shirts", price: 8000, image: "IMG-20261019-WA0089.jpg" },
    { id: 26, name: "Cartel Necklace", price: 12000, image: "IMG-20261019-WA0090.jpg" },
    { id: 27, name: "Nike Air Force 1 (Sizes 42-46)", price: 20000, image: "IMG-20261019-WA0091.jpg" }
];

const grid = document.getElementById('product-grid');
        
products.forEach(product => {
    let displayPrice = "";
    if (product.price === 0) {
        displayPrice = "Contact for Price";
    } else {
        displayPrice = new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0
        }).format(product.price);
    }

    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x280?text=Image+Not+Found';">
        <h3>${product.name}</h3>
        <p class="price">${displayPrice}</p>
        <button class="buy-btn" onclick="orderProduct('${product.name}')">Order on WhatsApp</button>
    `;
    grid.appendChild(card);
});

function orderProduct(productName) {
    const phoneNumber = '2348147110130';
    const message = `Hello Esty's Deluxe! I want to order: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
