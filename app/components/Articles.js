export default function Articles({ articles }) {
  return (
    <div className="blogs">
      {articles &&
        articles.map(article => {
          return (
            <div className="blog" key={article.id}>
              <img src={article.social_image} alt={article.tags} />
              <div className="blog-text">
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
