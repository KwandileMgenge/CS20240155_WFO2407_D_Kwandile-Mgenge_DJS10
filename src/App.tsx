import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    const fetchPosts = async (): Promise<void> => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      
    </>
  )
}

export default App
