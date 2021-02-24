const ownersReducer = (state = [], action) => {
    switch (action.type) {

        case 'STORE_OWNERS':
            return action.payload;

        default:
            return state;
    }
};

export default ownersReducer;