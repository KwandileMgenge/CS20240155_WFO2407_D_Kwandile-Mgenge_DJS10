# DJS10 - Asynchrony

This project is a React application that demonstrates how to fetch and display blog posts from an API asynchronously. The goal is to practice handling API calls with the Fetch API, managing state using React hooks, and gracefully handling errors.

The project fetches data from the `https://jsonplaceholder.typicode.com/posts` API and displays the titles and bodies of the posts. If there are any errors during the fetch process, the error message is displayed in the UI.

---

## Features

- **Asynchronous Data Fetching**: Uses the Fetch API to asynchronously retrieve blog posts.
- **Error Handling**: Catches and displays error messages when the fetch request fails.
- **State Management**: Uses React hooks (`useState` and `useEffect`) to manage the state of posts, loading, and errors.
- **Conditional Rendering**: Displays loading messages, error messages, or the list of posts based on the state.
