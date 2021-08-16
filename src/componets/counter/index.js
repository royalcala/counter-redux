import { deposit, withdraw } from "../../store/amount/action";
import { connect } from 'react-redux'

const mapStateToProps = (
    state //reducer
    )=>{
    return {
        amount:state.amountReducer.amount 
    }
}

const Counter = ({amount,deposit,withdraw}) => {

    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={() => deposit()}>Deposit 10</button>
            <button onClick={() => withdraw()}>withdraw -10</button>
        </div>
    )
}

export default connect(mapStateToProps, { deposit, withdraw })(Counter)