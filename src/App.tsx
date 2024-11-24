import { useState, useEffect } from 'react'
import './App.css'

function App() {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  const [posts, setPosts] = useState<Post[]>([]);  // Array of posts
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string | null>(null);  // Error state

  // Fetching posts asynchronously
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data: Post[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <p style={{ fontSize: '2em' }}>Loading posts...</p>}  {/* Show loading text while fetching */}
      {error && <p style={{ color: 'red', fontSize: '2em' }}>{error}</p>}  {/* Display error if it occurs */}

      {/* Display the posts if available */}
      {posts.length > 0 && !loading && !error && (
        <div>
          <h1>Posts</h1>
          {posts.map((post, index) => (
            <div key={post.id} className="post">
              <h2>{`${index + 1}. ${post.title}`}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default App
