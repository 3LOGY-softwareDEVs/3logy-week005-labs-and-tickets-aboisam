import Header from './assets/components/Header'
import About from './assets/components/About'
import Skills from './assets/components/Skills'
import Interests from './assets/components/Interest'
import profilePic from './assets/image/profile.jpg'
import './App.css'

function App() {
  const profile = {
    name: "ABOI SAMSON ABOI",
    tagline: "Full-Stack Developer & Open Source Enthusiast",
    avatar: profilePic,
    bio: "I'm a passionate developer with 3 years of experience building web applications. I love turning complex problems into simple, beautiful solutions.",
    location: "Kaduna, Nigeria",
    interests: ["Open Source", "React", "UI Design", "Forex Trader", "Data Analysis"],
    skills: [
      { name: "React", percentage: 35 },
      { name: "JavaScript", percentage: 90 },
      { name: "CSS", percentage: 75 },
      { name: "Node.js", percentage: 65 },
      { name: "Git", percentage: 80 },
    ],
    hobbies: [
      { title: "Photography", icon: "📷", description: "Capturing moments and landscapes." },
      { title: "Gaming", icon: "🎮", description: "Strategy and indie games." },
      { title: "Reading", icon: "📚", description: "Tech blogs and sci-fi novels." },
      { title: "Hiking", icon: "🥾", description: "Exploring trails on weekends." },
    ]
  }

  return (
    <div className="app">
      <Header name={profile.name} tagline={profile.tagline} avatar={profile.avatar} />
      <main className="main-content">
        <About bio={profile.bio} location={profile.location} interests={profile.interests} />
        <Skills skills={profile.skills} />
        <Interests hobbies={profile.hobbies} />
      </main>
    </div>
  )
}

export default App