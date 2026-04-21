function Interests({ hobbies }) {
    return (
        <section className="card">
            <h2>Interests</h2>
            <div className="hobbies-grid">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="hobby-card">
                        <span className="hobby-icon">{hobby.icon}</span>
                        <h3 className="hobby-title">{hobby.title}</h3>
                        <p className="hobby-desc">{hobby.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Interests