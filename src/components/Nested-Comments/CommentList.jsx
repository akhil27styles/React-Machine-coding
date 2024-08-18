import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, addComment, likeComment }) => {
  return (
    <ul>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          addComment={addComment}
          likeComment={likeComment}
        />
      ))}
    </ul>
  );
};

export default CommentList;
