import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Owencodes.dev', body: 'lorem ipsum...', author: 'Owencodes (Full Stack Dev)', id: 1 },
    { title: 'SinfulSloth.art', body: 'lorem ipsum...', author: 'Owencodes & Sinful (Artist)', id: 2 },
    { title: 'FlipTekTa.com', body: 'lorem ipsum...', author: 'Owencodes & FlipTek (Trader)', id: 3 },
    { title: 'Thunderz - dao', body: 'lorem ipsum...', author: 'Scrumpy, Gatty, Mukee, Owencodes, (Traders)', id: 4 }
  ])

  const handleDelete = (id) => { 
    const newBlogs = blogs.filter(blog => {})
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
     <BlogList blogs={blogs} title="Owens Projects" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;