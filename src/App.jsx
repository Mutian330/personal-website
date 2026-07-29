import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Advantages from './components/Advantages'
import Contact from './components/Contact'
import SplashCursor from './components/SplashCursor'
import { useScrollProgress } from './hooks/useInteractions'
import './App.css'

export default function App() {
  const scrollProgress = useScrollProgress()

  return (
    <>
      <SplashCursor
        RAINBOW_MODE={true}
        DENSITY_DISSIPATION={4.0}
        VELOCITY_DISSIPATION={3.5}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={6000}
        CURL={3}
        SHADING={true}
        COLOR_UPDATE_SPEED={10}
      />
      {/* 顶部滚动进度条 */}
      <div className="scroll-progress">
        <div
          className="scroll-progress__bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Advantages />
        <Contact />
      </main>
    </>
  )
}