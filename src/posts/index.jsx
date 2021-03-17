
import {PostCard}from '../components/PostCard'

import './style.css';

export const Posts = ({posts}) => (

    <div className="posts">

        {posts.map((post) => (
          <PostCard 
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          cover={post.cover}
          post={post}
          />
         
        ))}
      </div>
);