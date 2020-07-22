
var randNumber= 3 + Math.ceil(Math.random()*2)
var game

async function getWeatherAW(){
    let word= await fetch('https://puzzle.mead.io/puzzle?wordCount')
                  .then(data => data.json())
                  .then(data =>  data.puzzle)
                  .catch(err => console.log(err))
    return word
}
getWeatherAW().then(word => {
    game= new Hangman(word, randNumber)
    game.show()
})

window.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        location.assign('../index.html')
    }
    game.makeGuess(e.key)
    game.calculateStatus()
    game.show()
})
