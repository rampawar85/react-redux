import { ADD_CARD, REMOVE_CARD } from '../constant';

const initialState = {
    cardData: []
}

export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_CARD:
            //    console.warn('reducer', action);
            return [
                ...state,
                { cardData: action.data }
            ]
        case REMOVE_CARD:
            //    console.warn('reducer', action);
            state.pop();
            return [
                ...state
            ]
            break;
        default:
            return state;
    }
}