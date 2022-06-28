import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Owencodes.dev', body: 'lorem ipsum...', author: 'Owencodes', id: 1 },
    { title: 'SinfulSloth.art', body: 'lorem ipsum...', author: 'Owencodes', id: 2 },
    { title: 'FlipTekTa', body: 'lorem ipsum...', author: 'Owencodes', id: 3 }
  ])

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Made by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;