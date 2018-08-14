import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export default addComment;







