document.addEventListener('DOMContentLoaded', () => {
    const shopSection = document.getElementById('shop-section');

    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            // Generate HTML for each product dynamically
            products.forEach(product => {
                const productBox = document.createElement('div');
                productBox.classList.add('box');
                productBox.innerHTML = `
                    <div class="box-content">
                        <h2>${product.title}</h2>
                        <div class="box-img" style="background-image: url('${product.image}');"></div>
                        <p>Price: $${product.price}</p>
                        <p>See more</p>
                    </div>
                `;
                shopSection.appendChild(productBox);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});
