import { useState } from 'react'

/**
 * MultipleCounters - demonstrates useState with an array of objects,
 * add/remove counters, independent state per counter, and derived total
 */
function MultipleCounters() {
    // State is an array of counter objects: { id, label, value }
    const [counters, setCounters] = useState([
        { id: 1, label: 'Counter A', value: 0 },
        { id: 2, label: 'Counter B', value: 0 },
    ])

    // Derived state — no separate useState needed
    const total = counters.reduce((sum, c) => sum + c.value, 0)

    // Add a new counter with a unique id
    const addCounter = () => {
        const newId = Date.now()
        setCounters([
            ...counters,
            { id: newId, label: `Counter ${String.fromCharCode(64 + counters.length + 1)}`, value: 0 }
        ])
    }

    // Remove a counter by id — immutable filter
    const removeCounter = (id) => {
        setCounters(counters.filter(c => c.id !== id))
    }

    // Update a single counter's value — immutable map + spread
    const updateCounter = (id, delta) => {
        setCounters(counters.map(c =>
            c.id === id ? { ...c, value: c.value + delta } : c
        ))
    }

    return (
        <div className="bg-[#1a1a24] border border-[#2e2e42] rounded-2xl p-8 flex flex-col gap-4">

            {/* Header */}
            <div>
                <h2 className="text-white font-bold text-lg m-0">Multiple Counters</h2>
                <p className="text-[#8888aa] text-sm mt-1 m-0">Independent counters with shared total</p>
            </div>

            {/* Total Banner */}
            <div className="bg-[#6c63ff]/10 border border-[#6c63ff]/25 rounded-lg px-4 py-3 text-center text-sm text-[#8888aa]">
                Total across all counters:{' '}
                <strong className="text-[#6c63ff] text-base">{total}</strong>
            </div>

            {/* Counter List */}
            <div className="flex flex-col gap-2">
                {counters.map(counter => (
                    <div
                        key={counter.id}
                        className="flex items-center gap-3 bg-white/[0.03] border border-[#2e2e42] rounded-lg px-3 py-2"
                    >
                        {/* Label */}
                        <span className="flex-1 text-[#8888aa] text-sm">{counter.label}</span>

                        {/* Inc / Dec controls */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => updateCounter(counter.id, -1)}
                                className="px-3 py-1 bg-[#ff5f7e] text-white text-sm font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                            >−</button>

                            <span className="min-w-[2rem] text-center font-bold text-white">
                                {counter.value}
                            </span>

                            <button
                                onClick={() => updateCounter(counter.id, +1)}
                                className="px-3 py-1 bg-[#6c63ff] text-white text-sm font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                            >+</button>
                        </div>

                        {/* Remove */}
                        <button
                            onClick={() => removeCounter(counter.id)}
                            className="text-[#8888aa] hover:text-[#ff5f7e] text-sm px-1.5 py-0.5 rounded transition-colors cursor-pointer bg-transparent border-none"
                        >✕</button>
                    </div>
                ))}
            </div>

            {/* Add Counter Button */}
            <button
                onClick={addCounter}
                className="w-full py-2.5 bg-transparent border border-dashed border-[#2e2e42] text-[#6c63ff] text-sm font-semibold rounded-lg hover:border-[#6c63ff] hover:bg-[#6c63ff]/8 transition-all cursor-pointer"
            >
                + Add Counter
            </button>

        </div>
    )
}

export default MultipleCounters;