// Define products array with descriptions
const products = [
    { name: 'Hammer', image: 'assets/images/hardware/hammer.jpeg', category: 'Plywood & Hardware', description: 'A sturdy hammer for all your construction needs.' },
    { name: 'Drill', image: 'assets/images/hardware/drill.jpeg', category: 'Plywood & Hardware', description: 'Powerful drill for precise holes and fasteners.' },
    { name: 'Screwdriver', image: 'assets/images/hardware/screwdriver.jpeg', category: 'Plywood & Hardware', description: 'Versatile screwdriver for tightening and loosening screws.' },
    { name: 'Wrench', image: 'assets/images/hardware/wrench.jpeg', category: 'Plywood & Hardware', description: 'Durable wrench for loosening and tightening bolts.' },
    { name: 'Pliers', image: 'assets/images/hardware/pliers.jpeg', category: 'Plywood & Hardware', description: 'Handy pliers for gripping and cutting.' },
    { name: 'Chisel', image: 'assets/images/hardware/chisel.jpeg', category: 'Plywood & Hardware', description: 'Sharp chisel for precise wood and metal carving.' },
    { name: 'Saw', image: 'assets/images/hardware/saw.jpeg', category: 'Plywood & Hardware', description: 'High-quality saw for cutting through tough materials.' },
    { name: 'Nail Gun', image: 'assets/images/hardware/nail-gun.jpeg', category: 'Plywood & Hardware', description: 'Fast and powerful nail gun for quick construction jobs.' },
    { name: 'Oak Plywood', image: 'assets/images/plywood/oak-plywood.jpeg', category: 'Plywood & Hardware', description: 'Premium oak plywood for durable furniture.' },
    { name: 'Cherry Plywood', image: 'assets/images/plywood/cherry-plywood.jpeg', category: 'Plywood & Hardware', description: 'Elegant cherry plywood for a smooth finish.' },
    { name: 'Mahogany Plywood', image: 'assets/images/plywood/mahogany-plywood.jpeg', category: 'Plywood & Hardware', description: 'Luxurious mahogany plywood for premium designs.' },
    { name: 'Pine Plywood', image: 'assets/images/plywood/pine-plywood.jpeg', category: 'Plywood & Hardware', description: 'Affordable and versatile pine plywood.' },
    { name: 'Fir Plywood', image: 'assets/images/plywood/fir-plywood.jpeg', category: 'Plywood & Hardware', description: 'Strong fir plywood for heavy-duty applications.' },
    { name: 'Beech Plywood', image: 'assets/images/plywood/beech-plywood.jpeg', category: 'Plywood & Hardware', description: 'Durable beech plywood for high-performance use.' },
    { name: 'Laminated Plywood', image: 'assets/images/plywood/laminated-plywood.jpeg', category: 'Plywood & Hardware', description: 'Weather-resistant laminated plywood for outdoor use.' },
    { name: 'Veneered Plywood', image: 'assets/images/plywood/veneered-plywood.jpeg', category: 'Plywood & Hardware', description: 'Smooth veneered plywood for decorative finishes.' },
    { name: 'Living Room', image: 'assets/images/interior/living-room.jpg', category: 'Interior Designs', description: 'Modern and stylish living room designs.' },
    { name: 'Bedroom', image: 'assets/images/interior/bedroom.jpg', category: 'Interior Designs', description: 'Comfortable and elegant bedroom setups.' },
    { name: 'Kitchen', image: 'assets/images/interior/kitchen.jpg', category: 'Interior Designs', description: 'Functional and beautiful kitchen interiors.' },
    { name: 'Bathroom', image: 'assets/images/interior/bathroom.jpg', category: 'Interior Designs', description: 'Luxurious bathroom designs for relaxation.' },
    { name: 'Dining Room', image: 'assets/images/interior/dining-room.jpg', category: 'Interior Designs', description: 'Elegant dining room spaces for gatherings.' },
    { name: 'Home Office', image: 'assets/images/interior/home-office.jpg', category: 'Interior Designs', description: 'Productive and ergonomic home office designs.' },
    { name: 'Entrance', image: 'assets/images/interior/entrance.jpg', category: 'Interior Designs', description: 'Welcoming and stylish entrance designs.' },
    { name: 'Garden', image: 'assets/images/interior/garden.jpg', category: 'Interior Designs', description: 'Lush garden designs to bring nature home.' },
    { name: 'Patio', image: 'assets/images/interior/patio.jpg', category: 'Interior Designs', description: 'Relaxing patio setups for outdoor enjoyment.' },
    { name: 'Balcony', image: 'assets/images/interior/balcony.jpg', category: 'Interior Designs', description: 'Cozy and stylish balcony spaces.' }
];

// Function to load products dynamically
function loadProducts() {
    const productList = document.querySelector('.products .product-list');
    const interiorList = document.querySelector('#interior-items .interior-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.setAttribute('onclick', `showProductDetails('${product.name}', '${product.description}')`);

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        `;

        // Append to the correct section
        if (product.category === 'Plywood & Hardware') {
            productList.appendChild(productItem);
        } else if (product.category === 'Interior Designs') {
            interiorList.appendChild(productItem);
        }
    });
}

// Call the loadProducts function on page load
window.onload = loadProducts;

// Function to display product details
function showProductDetails(name, description) {
    alert(`${name}: ${description}`);
}
