import {actionsFor} from '../../../src/catwalk';
import people from '../reducers/people';

export function createPerson(model) {

    const event = actionsFor(people);

    return dispatch => {

        Promise.resolve(model).then(model => {
            dispatch({ type: event.CREATE, model });
        });

    };

}

export function readPerson(model) {

    const event = actionsFor(people);

    return dispatch => {

        Promise.resolve(model).then(model => {
            dispatch({ type: event.READ, model });
        });

    };

}

export function updatePerson(index, model) {

    const event = actionsFor(people);

    return dispatch => {

        Promise.resolve(model).then(model => {
            dispatch({ type: event.UPDATE, model, index });
        });

    };

}

export function deletePerson(model) {

    const event = actionsFor(people);

    return dispatch => {

        Promise.resolve(model).then(model => {
            dispatch({ type: event.DELETE, model });
        });

    };

}
