var word=['Cat dog', 'Dhaka Bangladesh','Polao Biriyani','Warm Hole','Game Of Thrones','Breaking Bad','End Game']
var guessLimit=[3,4,5,3,4,4,3]
var randNumber=Math.floor(Math.random()*7)

var game= new Hangman(word[randNumber], guessLimit[randNumber])

game.show()

window.addEventListener('keypress', function(e){
    game.makeGuess(e.key)
    game.calculateStatus()
    game.show()
})
