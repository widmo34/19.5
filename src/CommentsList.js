import React from 'react';
import Comment from './Comment';

const CommentsList = ({comments}) => <ul>{comments.map((comment, index) => <Comment key={index} {...comment} /> )}</ul>

export default CommentsList;