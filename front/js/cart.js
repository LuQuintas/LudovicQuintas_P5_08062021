let article = document.createElement("article");
    article.classList.add("cart__item");
    article.dataset.id=("{product-ID}");
let cartImg = document.createElement("div");
    cartImg.classList.add("cart__item__img");
    article.appendChild(cartImg);
    
let img = document.createElement("img");
    cartImg.appendChild(img);

let cartContent = document.createElement("div");
    cartContent.classList.add("cart__item__content");
    article.appendChild(cartContent);

let titlePrice = document.createElement("div");
    titlePrice.classList.add("cart__item__content__titlePrice");
    cartContent.appendChild(titlePrice);
let nameProduct = document.createElement("h2");
let priceProduct = document.createElement("p");
    titlePrice.appendChild(nameProduct);
    titlePrice.appendChild(priceProduct);

let itemSettings = document.createElement("div");
    itemSettings.classList.add("cart__item__content__settings");
    cartContent.appendChild(itemSettings);

let settingsQuantity = document.createElement("div");
    settingsQuantity.classList.add("cart__item__content__settings__quantity");
    itemSettings.appendChild(settingsQuantity);
let p = document.createElement("p");
    p.innerHTML ="Qté: "
    settingsQuantity.appendChild(p);
let input = document.createElement("input");
    input.setAttribute('type', 'number' , 'min', 'max', 'value');
    settingsQuantity.appendChild(input);

let settingsDelete = document.createElement("div");
    settingsDelete.classList.add("cart__item__content__settings__delete");
    cartContent.appendChild(settingsDelete);
let textDelete = document.createElement("p")
    textDelete.classList.add("deleteItem");
    textDelete.innerHTML="Supprimer";
    settingsDelete.appendChild(textDelete);





// console.log(article);