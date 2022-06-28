import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Owencodes.dev', body: 'lorem ipsum...', author: 'Owencodes (Full Stack Dev)', id: 1 },
    { title: 'SinfulSloth.art', body: 'lorem ipsum...', author: 'Owencodes & Sinful (Artist)', id: 2 },
    { title: 'FlipTekTa.com', body: 'lorem ipsum...', author: 'Owencodes & FlipTek (Trader)', id: 3 },
    { title: 'Thunderz dao', body: 'lorem ipsum...', author: 'Scrumpy, Gatty, Mukee, Owencodes, (Traders)', id: 4 }
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