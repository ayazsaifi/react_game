import logo from '../assets/logo.svg'
import cross from '../assets/cross.svg'
import circle from '../assets/circle.svg'
import { checkWinner } from '../utility/checkWinner'

const INITIAL_STATE = {
    gameArray : Array(9).fill({'scr' : logo , 'tick' : null}), 
    isNext : true, 
    chanceCount : 0,
    gameStatus : ''
}

const tickPositionReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case 'TICKPOSITION':
            const {gameArray , isNext , chanceCount} = state
            const index = action.index
            if (!gameArray[index].tick) {
                const newGameArray = gameArray.slice()
                newGameArray[index] = isNext ? {'scr' : cross, 'tick' : 'x'} : {'scr' : circle, 'tick' : 'o'};
                const status = checkWinner(newGameArray , chanceCount + 1);
                return {
                    ...state ,  gameArray : newGameArray , isNext : !isNext, chanceCount : chanceCount + 1, gameStatus : status
                }
            }
            return state;
        case 'RESET':
            return INITIAL_STATE;
        default: 
            return state;
    }
}

export default tickPositionReducer