import { useState } from 'react'

/**
 * BasicCounter - demonstrates simple useState increment/decrement/reset
 */
function BasicCounter() {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-[#1a1a24] border border-[#2e2e42] rounded-2xl p-8 flex flex-col gap-4">

            {/* Header */}
            <div>
                <h2 className="text-white font-bold text-lg m-0">Basic Counter</h2>
                <p className="text-[#8888aa] text-sm mt-1 m-0">Simple increment, decrement &amp; reset</p>
            </div>

            {/* Count Display */}
            <div className="text-7xl font-black text-center tracking-tighter text-white leading-none py-4">
                {count}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 justify-center">
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-6 py-2 bg-[#ff5f7e] text-white font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                >−</button>

                <button
                    onClick={() => setCount(0)}
                    className="px-6 py-2 bg-transparent border border-[#2e2e42] text-[#8888aa] font-semibold rounded-lg hover:border-[#6c63ff] hover:text-[#6c63ff] active:scale-95 transition-all cursor-pointer"
                >Reset</button>

                <button
                    onClick={() => setCount(count + 1)}
                    className="px-6 py-2 bg-[#6c63ff] text-white font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                >+</button>
            </div>

        </div>
    )
}

export default BasicCounter