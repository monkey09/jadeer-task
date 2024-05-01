import { Contact, Footer, Hero, Logos, Navbar, News, OurTeam, Story, WhyNow, WhyUs } from "./components"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <WhyUs />
      <WhyNow />
      <News />
      <OurTeam />
      <Logos />
      <Contact />
      <Footer />
      <div className="h-[200px]"></div>
    </>
  )
}

export default App
