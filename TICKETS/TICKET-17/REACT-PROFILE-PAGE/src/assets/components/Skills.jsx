function Skills({ skills }) {
    return (
        <section className="card">
            <h2>Skills</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-pct">{skill.percentage}%</span>
                        </div>
                        <div className="skill-track">
                            <div
                                className="skill-fill"
                                style={{ width: `${skill.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills