import Types from '../../../action/types';
const defaultState = {
    theme: 'red'
};
export default function (state = defaultState, action) {

    switch(action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme
            }

        default: 
        return state;
    }
}