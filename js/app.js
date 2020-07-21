var word=['Cat dog', 'Dhaka Bangladesh','Polao Biriyani','Warm Hole','Game Of Thrones','Breaking Bad','End Game']
var randNumber= 3 + Math.ceil(Math.random()*2)
var game

async function getWeatherAW(){
    let word= await fetch('http://puzzle.mead.io/puzzle?wordCount')
                  .then(data => data.json())
                  .then(data =>  data.puzzle)
                  .catch(err => console.log(err))
    return word
}
getWeatherAW().then(word => {
    game= new Hangman(word, randNumber)
    game.show()
    // console.log(word);
})


window.addEventListener('keypress', function(e){
    game.makeGuess(e.key)
    game.calculateStatus()
    game.show()
})
