let itemsSave = JSON.parse(localStorage.getItem("article"));
    
        
    fetch('http://localhost:3000/api/products/order')
.then((res)=> {
    
    const response = res.json();
    
    response.then(product =>{  
    
    itemsSave.forEach(value => {
        let article = document.createElement("article");
            article.classList.add("cart__item");
            article.dataset.id= (value.idItem);
        let cartImg = document.createElement("div");
            cartImg.classList.add("cart__item__img");
            article.appendChild(cartImg);
            
        let imgItem = document.createElement("img");
            cartImg.appendChild(imgItem);
            imgItem.src = value.imageItem;
            imgItem.alt = value.altTxt;        //a revoir 
        
        let cartContent = document.createElement("div");
            cartContent.classList.add("cart__item__content");
            article.appendChild(cartContent);
        
        let contenTitlePrice = document.createElement("div");
            contenTitlePrice.classList.add("cart__item__content__titlePrice");
            cartContent.appendChild(contenTitlePrice);
        let nameItem = document.createElement("h2")
            nameItem.innerHTML = value.nameItem;
        let priceItem = document.createElement("p");
            priceItem.innerHTML= value.priceItem +" "+"€";
            contenTitlePrice.appendChild(nameItem);
            contenTitlePrice.appendChild(priceItem);
        
        let itemSettings = document.createElement("div");
            itemSettings.classList.add("cart__item__content__settings");
            cartContent.appendChild(itemSettings);
        
        let settingsQuantity = document.createElement("div");
            settingsQuantity.classList.add("cart__item__content__settings__quantity");
            itemSettings.appendChild(settingsQuantity);
        let p = document.createElement("p");
            p.innerHTML ="Qté:" ;
            settingsQuantity.appendChild(p);
        let input = document.createElement("input");
            input.classList.add("itemQuantity");
            input.type="number";
            input.name="itemQuantity";
            input.min="1";
            input.max="100";
            input.value="value.quantity";
    
            settingsQuantity.appendChild(input);
        
        let settingsDelete = document.createElement("div");
            settingsDelete.classList.add("cart__item__content__settings__delete");
            cartContent.appendChild(settingsDelete);
        let textDelete = document.createElement("p")
            textDelete.classList.add("deleteItem");
            textDelete.innerHTML="Supprimer";
            settingsDelete.appendChild(textDelete); 
        
            localStorage.getItem(itemsSave);
    console.log(itemsSave);
        });
    });
});