import React, { useEffect } from 'react'

export default function Base() {

  useEffect(() => {
    fetch("https://kekambas-blog.herokuapp.com//blog/posts")//, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  }  
  )

  return (
    <div>This is Home.jsx</div>
  )
}



