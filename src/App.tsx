
import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'


function App() {

  return (
    <>
<div className= "bg-slate-800">
<NavBar />
<Header />
<Skills />
<Services />
<Resume />
<Portfolio />
<Contact />
<Footer />


 </div>
    </>
  )
}

export default App
