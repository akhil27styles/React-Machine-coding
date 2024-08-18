import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList'
const Comment = ({ comment, addComment, likeComment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <li>
      <div>
        <p>{comment.text}</p>
        <button onClick={() => likeComment(comment.id)}>Like ({comment.likes})</button>
        <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
      </div>
      {showReplyForm && (
        <CommentForm
          addComment={(text) => addComment(text, comment.id)}
          onCancel={() => setShowReplyForm(false)}
        />
      )}
      {comment.replies.length > 0 && (
        <CommentList
          comments={comment.replies}
          addComment={addComment}
          likeComment={likeComment}
        />
      )}
    </li>
  );
};

export default Comment;
