import BasicCounter from './components/BasicCounter'
import LimitedCounter from './components/LimiterCounter'
import MultipleCounters from './components/MultipleCounter'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f13] px-4 py-12">

      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-extrabold tracking-widest text-[#6c63ff] m-0">
          TICKET-18
        </h1>
        <p className="text-[#8888aa] text-sm mt-1">Counter Component Collection</p>
      </header>

      {/* Grid — stacks on mobile, 3 columns on large screens */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <BasicCounter />
        <LimitedCounter />
        <MultipleCounters />
      </main>

    </div>
  )
}

export default App;