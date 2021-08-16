const deposit = () => {
    return {
        type: "DEPOSIT_MONEY",
        paylod: 10
    }
}

const withdraw = () => {
    return {
        type: "WITHDRAW_MONEY",
        paylod: -10
    }
}

export {
    deposit,
    withdraw
}