

const {createStore, applyMiddleware} = require("redux");

const thunk = require('redux-thunk').default;

const axios = require('axios');

const ACTIONS = {
    FETCH_USERS_REQUEST:'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS:'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAIL:'FETCH_USERS_FAIL'
}

const initialState = {
    users : [],
    error:'',
    isLoading:false
} 

const fetchUsersRequest = () => {
    return {
        type:ACTIONS.FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type:ACTIONS.FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFail = (error) => {
    return {
        type:ACTIONS.FETCH_USERS_FAIL,
        payload:error
    }
}

const users = (state=initialState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading:true,  
            }

        case ACTIONS.FETCH_USERS_SUCCESS:
            return {
                isLoading:false,
                users:action.payload,
                error:'',
            }

        case ACTIONS.FETCH_USERS_FAIL:
            return{
                isLoading:false,
                users:[],
                error:action.payload
            }
    
        default:
            return state;
    }
}


const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                let users = response.data.map(user => user.name);
                
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFail(error))
            })
    }
}

const store = createStore(users, applyMiddleware(thunk));
store.subscribe(() => {console.log(store.getState())});

store.dispatch(fetchUsers())
