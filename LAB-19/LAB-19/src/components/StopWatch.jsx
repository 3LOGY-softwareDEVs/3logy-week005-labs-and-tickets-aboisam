import { useState, useEffect } from 'react'
// import PostList from './components/PostList';



function StopWatch() {
    const [elapsed, setElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);


    useEffect(() => {
        if (!isRunning) return;

        const id = setInterval(() => {
            setElapsed(prev => prev + 100);
        }, 100);

        return () => clearInterval(id);
    }, [isRunning]);

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        const tenths = String(ms % 1000).padStart(3, '0');
        return `${minutes}:${seconds}.${tenths}`;
    };

    const reset = () => {
        setIsRunning(false);
        setElapsed(0);
        setLaps([]);
    };

    const recordLap = () => {
        setLaps([...laps, elapsed]);
    };

    return (
        <div>

            <h2>⏱️ Stopwatch</h2>
            <p>{formatTime(elapsed)}</p>
            <button onClick={() => setIsRunning(r => !r)}>
                {isRunning ? 'Pause' : elapsed > 0 ? 'Resume' : 'Start'}
            </button>
            <button onClick={recordLap} disabled={!isRunning}>Lap</button>
            <button onClick={reset}>Reset</button>
            <ul>
                {laps.map((t, i) => {
                    const lapTime = t - (laps[i - 1] ?? 0);
                    return <li key={i}>Lap {i + 1}: {formatTime(lapTime)} ({formatTime(t)})</li>;
                })}
            </ul>
        </div>
    );

}
export default StopWatch;
