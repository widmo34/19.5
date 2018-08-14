import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}









