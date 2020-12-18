let url = new URLSearchParams(window.location.search);
let offset = parseInt(url.get("offset")) || 0;
let limit = parseInt(url.get("limit")) || 5;

fetch(`https://osteapi.herokuapp.com/api/v1/cheeses?limit=${limit}&offset=${offset}`)
.then(res => res.json())
.then(function(data) {
    //console.log(data);

    let next = document.querySelector("#next");
    let previous = document.querySelector("#previous");

    if (offset + limit >= data.count) {
        next.removeAttribute("href")
        next.style.opacity = "0.5";
    } else {
        next.href = `?offset=${(offset + limit)}#p`;
    }

    if (offset - limit < 0) {
        previous.removeAttribute("href")
        previous.style.opacity = "0.5";
    } else {
        previous.href = `?offset=${(offset - limit)}#p`;
    }

    
    
    let products = document.querySelector(".products");
    data.results.forEach(result => {
        const product = document.createElement('div');
        product.classList.add('product');
        
        product.innerHTML = `
        <img src="./media/products/rejeost.png" alt="">
        <div class="product-text">
            <h3>${result.name}</h3>
            <p>${result.weight}g</p>
            <p>${result.strength}</p>
            <h4>${result.price.$numberDecimal} DDK.</h4>
        </div>
        `;
        
        products.appendChild(product);
    });

    getImage()
    function getImage() {
        let productImgs = document.querySelectorAll(".product img");
        let images = ["./media/products/baconost.png","./media/products/rejeost.png","./media/products/lillebror.png","./media/products/gouda.png", "./media/products/havarti.png","./media/products/baconost.png","./media/products/klovborg.png","./media/products/brie.png", "./media/products/paprika-chili.png","./media/products/baconost.png","./media/products/smelteost.png","./media/products/rejeost.png"];
        let counter = parseInt(url.get("offset")) || 0;

        productImgs.forEach(function(productImg){
            productImg.src = images[counter]
            counter++
        })
    }

    
});