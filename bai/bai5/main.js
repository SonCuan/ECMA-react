
const productsListElement = document.getElementById("productsList");

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.products.length; i++) {
            let product = data.products[i];
            productsListElement.innerHTML += `
                <div class="products">
                    <div class="product">
                    <h5 >Name: ${product.title}</h5>
                    <h5> Price: ${product.price}</h5>
                    <h5>Đánh giá  : ${product.rating}</h5>
                    <h5>Brand : ${product.brand}</h5>
                        <img width="300px" src="${product.images[0]}" class="imgs" alt="...">
                    </div>
                </div>`;
        }
        console.log(data)
    })
    .catch((error) => console.log(error));