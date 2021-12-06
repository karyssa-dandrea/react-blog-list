import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getBlogs } from './services/blogs';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //important to await this data because when we get the data is it coming from an async function
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      <main>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </main>
      <Footer />
    </section>
  );
}

export default App;
