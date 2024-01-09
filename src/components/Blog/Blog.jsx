import "./Blog.css";
import BlogCard from "./BlogCard";
import { dataBlog } from "../../data/blog";

const Blog = () => {
  return (
    <>
      <div className="section__header">Latest Blog</div>
      <div className="blog__grid">
        {dataBlog.map((data) => (
          <BlogCard key={data.id} blog={data} />
        ))}
      </div>
    </>
  );
};

export default Blog;
