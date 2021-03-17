import './style.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    
    <div  className="post-content">
    <img src={cover} alt={title} />
      <h1>{title} </h1>
      <p>{body}</p>
    </div>
  </div>
);
