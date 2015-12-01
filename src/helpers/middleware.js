import {findSchemaByActionType} from './registry';

/**
 * @method typecast
 * @return {Function}
 */
export function typecast() {

    return next => action => {

        const {type, model} = action;

        if (type && model) {

            const schema = findSchemaByActionType(type);

            if (schema) {

                const modifiedModel = Object.keys(model).reduce((accumulator, key) => {

                    const castFn = schema[key];

                    if (!castFn) {

                        // Property doesn't belong in the model, because it hasn't been
                        // described in the associated schema.
                        return accumulator;

                    }

                    // Cast the property based on the defined schema.
                    accumulator[key] = castFn(model[key]);

                    return accumulator;

                }, {});

                // Move the immutable model along the middleware chain.
                return void next(Object.assign({}, action, { model: modifiedModel }));

            }

        }

        next(action);

    };

}
