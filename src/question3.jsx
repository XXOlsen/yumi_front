import React from 'react';

const Card = ({ title, content, imageUrl }) => (
  <div className="card">
    <img src={imageUrl} alt="Card" style={{ width: '100%' }} />
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  </div>
);

const Question3 = () => (
  <div>
    <Card
      title="Example Card 1"
      content="This is some content for the first card."
      imageUrl="https://via.placeholder.com/300"
    />

    <Card
      title="Example Card 2"
      content="This is some content for the second card."
      imageUrl="https://via.placeholder.com/300"
    />
  </div>
);

export default Question3;
