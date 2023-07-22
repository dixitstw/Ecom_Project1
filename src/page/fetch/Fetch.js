import React from 'react'

const Fetch = () => {
    let[posts, setPosts] = ([])
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
  return (
    <div>Fetch</div>
  )
}

export default Fetch