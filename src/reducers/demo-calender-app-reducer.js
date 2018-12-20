import { ADD_REMINDER } from '../constant/actionTypes'

const DemoCalenderAppReducer =  (state = [], action) => {
    switch (action.type) {
        case ADD_REMINDER: return Object.assign({}, state, {month : action.data});
        default: return state;
    }
}

export default DemoCalenderAppReducer;