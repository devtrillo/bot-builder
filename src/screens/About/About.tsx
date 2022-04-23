import fetch from "cross-fetch";
import { useEffect, useState } from "react";

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};
const About = () => {
  const [post, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async (): Promise<Post[]> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return await response.json();
    };

    fetchPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>About screen</h1>
      <section className="flex flex-wrap">
        {post?.map((post) => (
          <span key={post.title}>{post.title}</span>
        ))}
      </section>
    </div>
  );
};

export default About;
