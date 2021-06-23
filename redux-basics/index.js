const {createStore, combineReducers, applyMiddleware} = require('redux');
const logger = require('redux-logger').default;


const ACTIONS = {
    BUY_LAPTOP:"BUY_LAPTOP",
    BUY_MOBILE:"BUY_MOBILE"
}

const initialLaptopState = {
    noOfLaptops : 100,
}

const initialMobileState = {
    noOfMobiles : 100,
}

const buyLaptop = () =>{
    return {
        type:ACTIONS.BUY_LAPTOP
    }
} 

const buyMobile = () =>{
    return {
        type:ACTIONS.BUY_MOBILE
    }
}

const laptopReducer = (state = initialLaptopState, action) => {
    switch(action.type){
        case ACTIONS.BUY_LAPTOP:
            return {
                numOfLaptops : state.noOfLaptops -1
            }
        default:
            return state;
    }
}

const mobileReducer = (state = initialMobileState, action) => {
    switch(action.type){
        case ACTIONS.BUY_MOBILE:
            return {
                noOfMobiles : state.noOfMobiles -1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    laptopReducer,
    mobileReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
store.subscribe(() => {console.log(store.getState())});

store.dispatch(buyLaptop());
store.dispatch(buyMobile());