const fetchBtn = document.getElementById("fetchBtn")
fetchBtn.addEventListener("click", fetchProducts)

async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products")
    
    if(!response.ok){
        throw new Error ("Failed to fetch products")
    }
    
    const data = await response.json()
    const products = data.products.slice(0,10);
    displayProducts(products)
}

async function displayProducts(products) {
    
    //clear previous html html content
    productContainer.innerHTML = '';

    //get the the id of the div where the products will be displayed
    const productContainer =  document.getElementById("productContainer")

    
    products.forEach((product) =>{

    //create a new element
    const productDiv = document.createElement("div");

    //set innerHTML attribute
    productDiv.innerHTML = `
            <img src="${product.thumbnail}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
        `
    //append each of the product attributes to the parent container
    productContainer.appendChild(productDiv);

    })
}
