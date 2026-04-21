function Header({ name, tagline, avatar }) {
    return (
        <header className="header">
            <img src={avatar} alt={name} className="header-avatar" />
            <h1 className="header-name">{name}</h1>
            <p className="header-tagline">{tagline}</p>
        </header>
    )
}

export default Header