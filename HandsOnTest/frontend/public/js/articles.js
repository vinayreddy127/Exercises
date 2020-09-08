"use strict";
fetch("http://locolhost4201/articles")
    .then(function (response) {
        return response.json();
    })
    .then(function (articles) {
        console.log(articles);
        var tbody = document.querySelector('tbody');
      
        articles.forEach(function (article) {
            tbody.innerHTML += "<tr>\n  <td>\n   <img src=\"" + article.imageUrl + 
            "\" style=\"width: 200px;\" />\  </td>\n   <td>" + article.author + "</td>\n <td>"
             + article.title +"</td>\n </tr>";
        });
    })
    .catch(function (error) {
        console.log(error.message);
    });
