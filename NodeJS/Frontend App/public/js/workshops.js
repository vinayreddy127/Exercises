"use strict";
fetch("https://articles-server.herokuapp.com/articles").
    then(function (response) {
    return response.json();
}).then(function (articles) {
    console.log(articles);
    var tbody = document.querySelector("tbody");
    articles.forEach(function (article) {
        tbody.innerHTML += "<tr>\n                                <td>\n                                    <img class= \"thumbnail\"src=\"" + article.imageUrl + "\" alt=\"\">\n                                </td>\n                                <td>" + article.name + "</td>\n                                <td>" + article.location.city + "</td>\n                                <td>" + article.description + "</td>\n                            </tr>";
    });
}).catch(function (error) { return console.log(error); });
