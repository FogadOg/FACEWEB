function sur()
    {
    document.getElementById('bilde').src="./img/sur.jpg";    
    }

function trist()
    {
    document.getElementById('bilde').src="./img/trist.jpg";    
    }

function glad(){
    document.getElementById('bilde').src="./img/glad.jpg";    
}
function redd(){
    document.getElementById('bilde').src="./img/redd.jpg";    
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function tilfeldig(){
    const rndInt = randomInt(0, 3)
    const moods=["sur", "trist", "glad", "redd"]
    
    document.getElementById('bilde').src=`./img/${moods[rndInt]}.jpg`;   
}






   
    