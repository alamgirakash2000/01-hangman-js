class Hangman {
    constructor(word,guessAllowed){
        this.word=word.toLowerCase().split('')
        this.guessAllowed=guessAllowed
        this.guessedLetters=[]
        this.status='Playing'
    }

    calculateStatus(){
        let finished=true
        this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter) || letter===' ' || letter===this.word[0] || letter===this.word[this.word.length-1]){
    
            }else{
                finished=false
            }
        })
        if(this.guessAllowed==0){
            this.status='Failed'
        }else if(finished){
            this.status='Completed'
        }
    }

    makeGuess(guess){
        guess=guess.toLowerCase()
        let isUniqe=!this.guessedLetters.includes(guess)
        let isBadGuess=!this.word.includes(guess)
        if(this.status==='Playing'){
            if(isUniqe){
                this.guessedLetters.push(guess)
            }
            if(isUniqe && isBadGuess){
                this.guessAllowed--
            }
        }
    }

    getPuzzle(){
        let newStr= ''
        newStr+=this.word[0]
        for( var i=1;i<this.word.length-1;i++){
            if(this.guessedLetters.includes(this.word[i])||this.word[i]===' '){
                newStr+= this.word[i]
            }else{
                newStr+= "*"
            }
        }
        newStr+=this.word[this.word.length-1]
       return newStr.toUpperCase()
    }

    show(){
        let placeForWord=document.querySelector('#word-here')
        placeForWord.innerHTML=''
        let placeFormessege=document.querySelector('#msg-here')
        placeFormessege.innerHTML=''
    
        let status=document.createElement('strong')
        let letters=this.getPuzzle()

        for(var i=0;i < letters.length;i++ ){
            let word=document.createElement('div')
            word.textContent=letters[i]
            placeForWord.appendChild(word)
        }

        if(this.status==='Playing'){
            status.textContent=`You have ${this.guessAllowed} wrong guess left`
        }else if(this.status==='Failed'){
            status.textContent=`Nice try! The word was "${this.word.join('').toUpperCase()}"`
        }else if(this.status==='Completed'){
            status.textContent=`Congratulation! You've won the game`
        }
        placeFormessege.appendChild(status)
    }
}
  