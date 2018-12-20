import { ADD_REMINDER } from '../constant/actionTypes';

export const addReminder = (data) => {
    return {type: ADD_REMINDER, data}
}