import Image from "next/image";
import Link from "next/link";

export default function Articles({ articles }) {
  return (
    <div className="blogs">
      {articles &&
        articles.map(article => {
          return (
            <div className="blog" key={article.id}>
              <Image
                src={article.social_image}
                alt={article.tags}
                width="640"
                height="640"
              />
              <div className="blog-text">
                <Link href={`${article.url}`} target="_blank" rel="noreferrer">
                  <h4>{article.title}</h4>
                </Link>
                <p>{article.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
