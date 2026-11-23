import { useEffect, useOptimistic, useState, useTransition } from 'react';
import { Link } from 'react-router';
import { postsApi } from '../../api/endpoints';
import type { Post } from '../../types';

export function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [optimisticPosts, removeOptimistic] = useOptimistic(
    posts,
    (current, deletedId: number) => current.filter((p) => p.id !== deletedId)
  );
  const [, startTransition] = useTransition();

  useEffect(() => {
    postsApi
      .getAll()
      .then((res) => setPosts(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  async function handleDelete(id: number) {
    startTransition(async () => {
      removeOptimistic(id);
      try {
        await postsApi.delete(String(id));
        setPosts((prev) => prev.filter((p) => p.id !== id));
      } catch {
        // Optimistic state reverts automatically when transition settles.
      }
    });
  }

  return (
    <div>
      <h1>Posts</h1>
      <Link to="/posts/new">Create Post</Link>
      {optimisticPosts.map((post) => (
        <article key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content.slice(0, 150)}...</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </article>
      ))}
    </div>
  );
}
