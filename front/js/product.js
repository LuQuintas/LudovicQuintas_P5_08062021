const url_id = window.location.search;
const urlSearchParams  = new URLSearchParams(url_id);
const id = urlSearchParams.get('id');
let color = document.getElementById("colors");



fetch('http://localhost:3000/api/products/'+ id)
    .then((res)=> {
        
        const response = res.json();
        
        response.then(product =>{    
            
            
            let img = document.createElement("img");
            document.querySelector(".item__img").appendChild(img);
            img.src = product.imageUrl;
            img.alt= product.altTxt;
            document.querySelector("#colors").insertAdjacentHTML("beforeend", product.colors.map(color => ` <option id= "valueColor" value="${color}">${color}</option>`));
            
            
            
            document.getElementById("title").innerHTML = product.name;
            document.getElementById("price").innerHTML = product.price;
            document.getElementById("description").innerHTML = product.description;
            
            let addToCart = document.getElementById("addToCart");
            addToCart.addEventListener("click",(e)=>{
                e.preventDefault();
                let valueColor = color.value
                let quantity = document.querySelector("#quantity").value
                let infoProduct = {
                    idItem: product._id,
                    imageItem: product.imageUrl,                
                    nameItem : product.name, 
                    priceItem : product.price,
                    colorsItem : valueColor,
                    quantity: quantity,                
                };  
                // console.log(typeof quantity);
                
                let  registerLocalStorage= JSON.parse(localStorage.getItem("product"));

                function addToLocalStorage(params){
                registerLocalStorage.push(infoProduct);
                localStorage.setItem("product",JSON.stringify(registerLocalStorage));
                }
                for (const oneproduct of registerLocalStorage) {
                     if (id === product.id && colorsItem === product.colorsItem){
                    product.quantity =	parseInt(product.quantity) + parseInt(product.quantity);
                    found	=	true;
                 }
                }
                if (registerLocalStorage) {
                    addToLocalStorage();
                }else{
                    registerLocalStorage = [];
                    addToLocalStorage();
                }
            });
                
        });
    });
