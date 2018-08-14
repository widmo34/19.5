import React from 'react';
import Comment from 'Comment';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={id} {...comment} /> )}</ul>

export default CommentsList;