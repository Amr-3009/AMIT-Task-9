const request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products");

request.addEventListener("load", function () {
  if (request.status >= 200 && request.status < 300) {
    const { products } = JSON.parse(this.responseText);
    // console.log(products);
    const productsHolder = document.createElement("div");
    productsHolder.classList.add("products-holder");
    document.body.appendChild(productsHolder);
    products.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <div class="product-info">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p class="price">$${product.price}</p>
        </div>
      `;
      productsHolder.appendChild(div);
    });
  } else {
    const error = document.createElement("h1");
    error.textContent = "Error";
    document.body.appendChild(error);
  }
});

request.send();
