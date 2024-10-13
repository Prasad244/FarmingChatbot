import { useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import ChatbotSection from '../components/ChatbotSection'
import FooterSection from '../components/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection/>
      <ChatbotSection />
      <FooterSection />
    </>
  )
}

export default App
