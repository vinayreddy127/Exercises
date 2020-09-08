fetch("https://articles-server.herokuapp.com/articles").
then(function(response){
    return response.json();
}).then(function(articles){
    console.log(articles);
    const tbody = <HTMLElement>document.querySelector("tbody");
    articles.forEach((article: { imageUrl: any; name: any; location: { city: any; }; description: any; }) => {
        tbody.innerHTML += `<tr>
                                <td>
                                    <img class= "thumbnail"src="${article.imageUrl}" alt="">
                                </td>
                                <td>${article.name}</td>
                                <td>${article.location.city}</td>
                                <td>${article.description}</td>
                            </tr>`
    });
}).catch(error=>console.log(error));

