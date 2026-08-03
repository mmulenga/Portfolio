import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedCaseStudy from './components/FeaturedCaseStudy.jsx'
import WorkSection from './components/WorkSection.jsx'
import FactsSection from './components/FactsSection.jsx'
import HowIWorkSection from './components/HowIWorkSection.jsx'
import ContactPanel from './components/ContactPanel.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50
                   focus:rounded-lg focus:bg-paper focus:px-4 focus:py-3"
      >
        Skip to content
      </a>

      <NavBar />

      <main id="main">
        <div className="mx-auto w-full max-w-page px-7">
          <Hero />
          <FeaturedCaseStudy />
        </div>

        <WorkSection />
        <FactsSection />
        <HowIWorkSection />

        <div className="mx-auto w-full max-w-page px-7">
          <ContactPanel />
        </div>
      </main>
    </>
  )
}
