import { useState } from 'react'

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');

    const addTodo = () => {
        if (inputValue.trim() === '') return;
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const getFilteredTodos = () => {
        if (filter === 'active') return todos.filter(t => !t.completed);
        if (filter === 'completed') return todos.filter(t => t.completed);
        return todos;
    };

    const activeCount = todos.filter(t => !t.completed).length;

    return (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-16 px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">

                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                    📝 Todo List
                </h1>

             
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                        placeholder="What needs to be done?"
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button
                        onClick={addTodo}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                    >
                        Add
                    </button>
                </div>

                {/* FILTER BUTTONS */}
                <div className="flex gap-2 mb-4">
                    {['all', 'active', 'completed'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition
                ${filter === f
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

               
                <ul className="space-y-2 mb-6">
                    {getFilteredTodos().length === 0 && (
                        <p className="text-center text-gray-400 text-sm py-4">No todos here!</p>
                    )}
                    {getFilteredTodos().map(todo => (
                        <li
                            key={todo.id}
                            className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg"
                        >
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="w-4 h-4 accent-indigo-600 cursor-pointer"
                            />
                            <span className={`flex-1 text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                {todo.text}
                            </span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-red-400 hover:text-red-600 text-lg transition"
                            >
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>

                {/* FOOTER */}
                <div className="flex items-center justify-between text-sm text-gray-400 border-t pt-4">
                    <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
                    <button
                        onClick={clearCompleted}
                        className="text-red-400 hover:text-red-600 transition font-medium"
                    >
                        Clear Completed
                    </button>
                </div>

            </div>
        </div>
    );
}

export default TodoApp;