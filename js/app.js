const game= new Hangman('Alamgir Akash', 4)

game.show()

window.addEventListener('keypress', function(e){
    game.makeGuess(e.key)
    game.calculateStatus()
    game.show()
})
