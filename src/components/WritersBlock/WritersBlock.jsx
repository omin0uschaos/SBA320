import React, { useState } from 'react';
import './WritersBlock.css';

function WritersBlock() {
  const [writerTitle, setWriterTitle] = useState('');
  const [writerBlock, setWriterBlock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to localStorage
    localStorage.setItem(writerTitle, writerBlock);
    setWriterTitle('');
    setWriterBlock('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="writerTitle"
        id='writerTitle'
        value={writerTitle}
        onChange={(e) => setWriterTitle(e.target.value)}
        placeholder="Enter title"
        required
      />
      <textarea
        name="writerBlock"
        value={writerBlock}
        onChange={(e) => setWriterBlock(e.target.value)}
        placeholder="Write anything you want"
      ></textarea>
      <input id='writerSubmit' type="submit" value="Submit" />
    </form>
  );
}

export default WritersBlock;
