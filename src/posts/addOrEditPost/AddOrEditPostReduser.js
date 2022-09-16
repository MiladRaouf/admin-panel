const init = {
    postData: {
        "userId": '',
        "id": '',
        "title": '',
        "body": ''
    },
    users: []
}

const reduser = (state, action) => {
    switch (action.type) {
        case 'isUpdate':
            return { ...state, postData: action.payload };
        case 'changeUsers':
            return { ...state, users: action.payload };
        case 'setInputValue':
            return {
                ...state, postData: {
                    ...state.postData, [action.propName]: action.propValue
                }
            };
        default:
            return state;
    }
}

export {init, reduser};