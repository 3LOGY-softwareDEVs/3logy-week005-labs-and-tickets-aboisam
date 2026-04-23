import { useState } from 'react'

const MIN = 0
const MAX = 10

/**
 * LimitedCounter - demonstrates useState with boundary conditions,
 * disabled buttons, progress bar, and conditional messages
 */
function LimitedCounter() {
    const [count, setCount] = useState(0)

    // Progress percentage for the bar
    const progress = ((count - MIN) / (MAX - MIN)) * 100

    const increment = () => { if (count < MAX) setCount(count + 1) }
    const decrement = () => { if (count > MIN) setCount(count - 1) }

    // Dynamic colour for count display
    const countColor =
        count === MAX ? 'text-[#ff5f7e]' :
            count === MIN ? 'text-[#38bdf8]' :
                'text-white'

    return (
        <div className="bg-[#1a1a24] border border-[#2e2e42] rounded-2xl p-8 flex flex-col gap-4">

            {/* Header */}
            <div>
                <h2 className="text-white font-bold text-lg m-0">Limited Counter</h2>
                <p className="text-[#8888aa] text-sm mt-1 m-0">Bounded between {MIN} and {MAX}</p>
            </div>

            {/* Count Display */}
            <div className={`text-7xl font-black text-center tracking-tighter leading-none py-4 transition-colors ${countColor}`}>
                {count}
            </div>

            {/* Status Badge */}
            <div className="text-center min-h-[1.6rem]">
                {count === MAX && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#ff5f7e]/15 text-[#ff5f7e]">
                        🔴 Max reached!
                    </span>
                )}
                {count === MIN && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#38bdf8]/15 text-[#38bdf8]">
                        🔵 At minimum
                    </span>
                )}
                {count > MIN && count < MAX && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#6c63ff]/15 text-[#6c63ff]">
                        {MAX - count} steps to max
                    </span>
                )}
            </div>

            {/* Progress Bar */}
            <div className="bg-[#2e2e42] rounded-full h-2 overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #38bdf8, #6c63ff, #ff5f7e)'
                    }}
                />
            </div>
            <div className="flex justify-between text-xs text-[#8888aa]">
                <span>{MIN}</span>
                <span>{MAX}</span>
            </div>

            {/* Buttons — disabled at limits */}
            <div className="flex gap-3 justify-center">
                <button
                    onClick={decrement}
                    disabled={count === MIN}
                    className="px-6 py-2 bg-[#ff5f7e] text-white font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:scale-100"
                >−</button>
                <button
                    onClick={increment}
                    disabled={count === MAX}
                    className="px-6 py-2 bg-[#6c63ff] text-white font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:scale-100"
                >+</button>
            </div>

        </div>
    )
}

export default LimitedCounter