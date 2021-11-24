fetch('http://localhost:3000/api/products')
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function (datas){
       datas.forEach(product => {

        let items =document.getElementById('items');
            a = document.createElement('a');
            article = document.createElement('article');
                article.classList.add("productCard")
            img = document.createElement('img');
                img.classList.add("productImage")
            h3 = document.createElement('h3');
                h3.classList.add("productName");
            p = document.createElement('p');
                p.classList.add("productDescription");
            productUrl = "./product.html?id=" + product._id;

        items.appendChild(a);
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        a.setAttribute ('href', productUrl);

        a= product._id;
        img.src= product.imageUrl;
        img.alt = product.altTxt;
        h3.innerHTML = product.name;
        p.innerHTML = product.description;
        console.log(product);
        })
    });
