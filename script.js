function sendApiRequest(){
    var userInput = document.getElementById("input").value.trim();

    var giphyApiKey = "VKQNQ6Ap1jXsHW2cfSVkx3Yd4QmKsUE1"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`
    fetch(giphyApiURL)
        .then(function(response){
            return response.json()
        })
        .then(function(json){
            var gifs = json.data;
            var gifsContainer = document.getElementById('gifs-container');
            gifsContainer.innerHTML = ''; 

            
            gifs.forEach(function(gif){
                var imgPath = gif.images.fixed_height.url;
                var img = document.createElement("img");
                img.setAttribute("src", imgPath);
                img.classList.add('gif-image'); 
                gifsContainer.appendChild(img);
            });
        })
        .catch(function(error) {
            console.log("error ", error);
        });
}
