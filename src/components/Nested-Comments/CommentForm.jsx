import React, { useState } from 'react';

const CommentForm = ({ addComment, onCancel }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text);
      setText('');
      if (onCancel) onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit">Submit</button>
      {onCancel && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default CommentForm;
