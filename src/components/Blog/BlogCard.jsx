import "./BlogCard.css";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  const { image, title, date, comment, content } = blog;

  return (
    <div className="blog__card">
      <img src={image} alt="Blog Photo" />
      <div className="blog__header">
        <h4>{title}</h4>
        <div className="blog__card__footer">
          <div>
            <span className="ri-time-line"></span>
            {date}
          </div>
          <div>
            <span className="ri-chat-4-fill"></span>
            {comment}
          </div>
        </div>
      </div>
      <div className="blog__content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
