const url_id = window.location.search;
const urlSearchParams  = new URLSearchParams(url_id);
const id = urlSearchParams.get('id');



fetch('http://localhost:3000/api/products/'+ id)
.then((res)=> {
    
    const response = res.json();
    
    response.then(product =>{    
        
        let color = document.getElementById("colors");
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
        let  registerItem= JSON.parse(localStorage.getItem("article"));
        let valueColor = color.value;
        let quantity = document.querySelector("#quantity").value;
        let infoProduct = {
            idItem: product._id,
            imageItem: product.imageUrl,                
            nameItem : product.name, 
            priceItem : product.price,
            colorsItem : valueColor,
            quantity: quantity,                
        }   
        function addToLocalStorage(params){
            registerItem.push(infoProduct);
            localStorage.setItem("article",JSON.stringify(registerItem));
        }
       
        function moreQuantity(registerItem,) {
            
        }
        
        // for (const article of registerItem) {
        //     if (article.idItem === article.idItem && article.colorsItem === article.colorsItem) {
        //          quantity= parsInt(article.quantity,1) + parsInt(article.quantity,1);
                
        //     }};
        
        if (registerItem) {
            addToLocalStorage();
        }else{
            registerItem = [];
            addToLocalStorage();
        }
            
       
        });
    });

});