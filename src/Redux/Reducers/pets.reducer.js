const petsReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_PETS':
            return action.payload;

        default:
            return state;
    }
}