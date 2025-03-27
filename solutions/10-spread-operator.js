// BEGIN
const create = (name, { state = 'moderating', createdAt = Date.now(), ...rest } = {}) => {
    return {
        name,
        state,
        createdAt,
        ...rest,
    };
};

export default create;
// END