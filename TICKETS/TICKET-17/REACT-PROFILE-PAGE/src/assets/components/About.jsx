function About({ bio, location, interests }) {
    return (
        <section className="card">
            <h2>About Me</h2>
            <p className="bio">{bio}</p>
            <div className="about-meta">
                <span className="meta-item">📍 {location}</span>
                <span className="meta-item">💡 {interests.join(', ')}</span>
            </div>
        </section>
    )
}

export default About