import NavBar from './components/NavBar'
import Hero from './components/Hero'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import WorkSection from './components/WorkSection'
import FactsSection from './components/FactsSection'
import HowIWorkSection from './components/HowIWorkSection'
import ContactPanel from './components/ContactPanel'

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
