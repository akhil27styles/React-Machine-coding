import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import commentsData from './data.json';

const CommentApp = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(commentsData);
  }, []);

  const addComment = (text, parentId = null) => {
    const newComment = {
      id: Date.now(),
      text,
      likes: 0,
      replies: [],
    };
    
    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      setComments(addReplyToComment(comments, parentId, newComment));
    }
  };

  const addReplyToComment = (comments, parentId, newComment) => {
    return comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, newComment],
        };
      }
      if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReplyToComment(comment.replies, parentId, newComment),
        };
      }
      return comment;
    });
  };

  const likeComment = (id) => {
    setComments(likeCommentById(comments, id));
  };

  const likeCommentById = (comments, id) => {
    return comments.map(comment => {
      if (comment.id === id) {
        return { ...comment, likes: comment.likes + 1 };
      }
      if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: likeCommentById(comment.replies, id),
        };
      }
      return comment;
    });
  };

  return (
    <div>
      <h2>Comments</h2>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} addComment={addComment} likeComment={likeComment} />
    </div>
  );
};

export default CommentApp;
