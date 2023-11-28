// Fetch products from the API
fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(products => {
    // Render products in HTML
    const productListDiv = document.getElementById('productList');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card col-md-4'; // Use Bootstrap column class
        // Create HTML content for each product
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
            <button class="btn">Add to Cart</button>
        `;
        // Append the product card to the product list
        productListDiv.appendChild(productCard);
    });
})
.catch(error => console.error('Error fetching products:', error));