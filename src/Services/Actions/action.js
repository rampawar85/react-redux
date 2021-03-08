import { ADD_CARD, REMOVE_CARD } from '../constant';
export const addCard = (data) => {
    //    console.warn('action', data);

    return {
        type: ADD_CARD,
        data: data
    }
}

export const removeCard = () => {
    console.warn('ACTION');


    return {
        type: REMOVE_CARD,
    }
} 