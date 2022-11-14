import React, { useState, useEffect } from 'react'
import PostCard from './PostCard';

export default function Base(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://kekambas-blog.herokuapp.com//blog/posts")//, requestOptions)
    .then(response => response.json())
    .then(result => {
      setPosts(result)
    })

    .catch(error => console.log('error', error));

  }, [])

  return (

    <>
    <div className='mt-5'>
      {posts.map(post => <PostCard key={post.id} post = {post} />)}
    </div>
    </>
  )
}