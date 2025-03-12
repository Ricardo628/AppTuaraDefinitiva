// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('App Tu Ara está lista para usar.');
});

const productsByCategory = {
    'Frutas y Verduras': ['Manzanas', 'Plátanos', 'Aguacates', 'Zanahorias', 'Espinacas'],
    'Carnes y Pescados': ['Pollo', 'Carne de Res', 'Salmón', 'Pescado Azul'],
    'Lácteos': ['Leche', 'Queso', 'Yogur', 'Mantequilla'],
    'Granos y Pastas': ['Arroz', 'Lentejas', 'Espaguetis', 'Quinoa'],
    'Bebidas': ['Agua', 'Refrescos', 'Jugos Naturales', 'Café'],
    'Snacks y Dulces': ['Papas Fritas', 'Chocolates', 'Dulces'],
    'Productos de Aseo': ['Detergente', 'Jabón', 'Papel Higiénico']
};

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

function showProducts(category) {
    const productList = document.getElementById('product-list');
    const categoryTitle = document.getElementById('category-title');

    categoryTitle.textContent = category;
    productList.innerHTML = '';

    productsByCategory[category].forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        productList.appendChild(li);
    });

    toggleSection('product-section');
}

function showCategories() {
    toggleSection('categories');
}

function showFeatured() {
    toggleSection('featured-products');
}

function showContact() {
    toggleSection('contact-section');
}
