import { useState, useEffect } from 'react';
// import StopWatch from './components/StopWatch';
function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    // useEffect #2 — fetch on mount, empty deps = runs once
    useEffect(() => {
        let cancelled = false; // prevents state update if component unmounts mid-fetch

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                if (!cancelled) {
                    setPosts(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (!cancelled) {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => { cancelled = true; }; // cleanup for fetch too
    }, []); // empty array = mount only

    const filtered = posts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>📄 Posts</h2>
            <input
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <p>{filtered.length} of {posts.length} posts</p>
            <ul>
                {filtered.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body.slice(0, 80)}…</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;