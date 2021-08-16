const initialState = {
    amount: 0
}

export default (state = initialState, action) => {
    console.log({action})
    if (action.type === 'DEPOSIT_MONEY') {
        return {
            ...state,
            amount: state.amount + action.paylod
        }
    }

    if (action.type === 'WITHDRAW_MONEY') {
        return {
            ...state,
            amount: state.amount + action.paylod
        }
    }

    return state
}