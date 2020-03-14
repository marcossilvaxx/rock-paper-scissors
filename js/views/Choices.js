import App from '../App.js';
import Result from './Result.js';

class Choices{
    constructor(){
        this.registerHandlers();     
    }

    registerHandlers(){
        document.querySelector('.hand-paper').onclick = () => this.choose('paper');
        document.querySelector('.hand-scissors').onclick = () => this.choose('scissors');
        document.querySelector('.hand-rock').onclick = () => this.choose('rock');
    }

    choose(choice){
        const hands = ['paper', 'scissors', 'rock'];
        const numRandom = Math.floor((Math.random() * 3));

        const computerChoice = hands[numRandom];

        console.log('Computador escolheu:', computerChoice);

        if((choice === 'paper' && computerChoice === 'rock') || (choice === 'scissors' && computerChoice === 'paper') || (choice === 'rock' && computerChoice === 'scissors')){
            console.log('ganhou');
            App.render(Result, 'player');
        }else if(choice === computerChoice){
            console.log('empatou');
            App.render(Result, null);
        }else{
            console.log('perdeu');
            App.render(Result, 'computer');
        }

    }

    static render(props){
        return (
            "<div class='hand hand-paper'></div>\n\
            <div class='hand hand-scissors'></div>\n\
            <div class='hand hand-rock'></div>"
        )
    }
}

export default Choices;