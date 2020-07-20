

const INITIAL_STATE = []

export default function AddShoppingCarReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_SHOPPING_CAR':
            return [...state,  action.car]
        default:
            return state;
    }
}

export const addShoppingCar = car => {
    return {
        type: 'ADD_SHOPPING_CAR',
        car
    }
}