export const INITIAL_STATE = {
    Loading: false,
    post: {},
    error: false,
    counter: 0,
    form: {
        name: '',
        email: '',
        password: ''
    },
    formSubmitted: false,
    tags: []
}

export const postReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_START':
            return {
                Loading: true,
                post: {},
                error: false
            }
        case 'FETCH_SUCESS':
            return {
                Loading: false,
                post: action.payload,
                error: false
            }
        case 'FETCH_ERROR':
            return {
                Loading: false,
                post: {},
                error: true
            }
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter+1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter-1
            }
        case 'INPUTVALUE':
            return {
                ...state,
                form: {...state.form, ...action.payload}
            }
        case 'FORMSUBMIT':
            const { name, email, password } = state.form;
            if(name !=='' && email !== '' && password !== '') {
                return{
                    ...state,
                    formSubmitted: true
                }
            }else {
                return {
                    ...state,
                    formSubmitted: false
                }
            }
        case 'TAGS':
            return {
                ...state,
                tags: action.payload
            }

        default: 
        return state
    }
}