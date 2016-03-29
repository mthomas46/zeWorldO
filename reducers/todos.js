import {TEST_ACTION} from "../constants/ActionTypes";

const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case TEST_ACTION:
            return state;
        
        default:
            return state
    }
}