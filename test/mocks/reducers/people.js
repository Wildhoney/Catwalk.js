import {actionsFor, attachSchema} from '../../../src/index';
import {field, cast, option} from '../../../src/field';

function reducer(state = [], action) {

    const {CREATE, READ, UPDATE, DELETE} = actionsFor(reducer);

    switch (action.type) {

        case CREATE: case READ:
            return [...state, ...[action.model]];

        case UPDATE:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], action.model),
                ...state.slice(action.index + 1)
            ];

        case DELETE:
            return state.filter(model => model.name !== action.model.name);

        default:
            return state;

    }

}

export default attachSchema(reducer, {

    name: field(cast.string()),
    age:  field(cast.integer()),
    pets: field(cast.array())

});
