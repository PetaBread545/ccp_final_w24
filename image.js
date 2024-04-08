function fullScreenImage(){
    var images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById("fullScreenImg").style.backgroundImage = 'url(' + img.src + ')';
            document.getElementById("fullScreenImg").style.display = 'block';
            document.getElementById("exitButton").style.display = "block";
            console.log("here")
        });
    });
}

function exitFullScreen(){
    var button = document.getElementById("exitButton");
    document.getElementById("fullScreenImg").style.display = 'none';
    button.style.display ='none';
        console.log("button");

}