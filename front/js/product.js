const url_id = window.location.search;
const urlSearchParams  = new URLSearchParams(url_id);
const id = urlSearchParams.get('id');


fetch('http://localhost:3000/api/products/'+ id)
.then((res)=> {
    
    const response = res.json();
    
    response.then(product =>{    
        
        // Création du DOM 

        let addToCart = document.getElementById("addToCart");
        let colors = document.getElementById("colors");
        let img = document.createElement("img");
        let quantity = document.querySelector("#quantity");
        let price = document.getElementById("price").innerHTML = product.price;
        let name = document.getElementById("title").innerHTML = product.name;
        document.querySelector(".item__img").appendChild(img);
        document.querySelector("#colors").insertAdjacentHTML("beforeend", product.colors.map(color => `<option id= "valueColor" value="${color}">${color}</option>`));
        document.getElementById("description").innerHTML = product.description;
        img.src = product.imageUrl;
        img.alt= product.altTxt;
        let image = img.src ;
        let imageAlt= img.alt;
        
        // évènement au click du bouton "ajouter au panier"

        addToCart.addEventListener("click",(e)=>{
            e.preventDefault();
            let color = colors.value;
            let quantities = Number(quantity.value);

            // création des données à stocker dans un  tableau
            let infoProduct = {
                id,
                image,
                imageAlt,               
                name,
                price,
                color ,
                quantities,
            }; 
            // création du tableau pour récupérer les données
            let registerItem = []; 

            // condition si le local storage à un produit
            if (localStorage.getItem("product")) {
                registerItem = JSON.parse(localStorage.getItem("product")) ;
                // localStorage.setItem("product",JSON.stringify(registerItem));

                // let newRegisterItem = [...registerItem];
                let objIndex = registerItem.findIndex((item=> item.id === infoProduct.id && infoProduct.color === item.color));

                if (objIndex !== -1) {
                  registerItem[objIndex].quantities += quantities;
                }
                else if (objIndex === -1) {
                    registerItem.push(infoProduct)
                }
                localStorage.setItem("product",JSON.stringify(registerItem));
                console.log(registerItem[0].quantities);
               
            }
            else{
                registerItem.push(infoProduct);
                localStorage.setItem("product",JSON.stringify(registerItem));
            }
        });
    });
});