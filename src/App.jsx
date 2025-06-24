
import React from 'react'
import styles from './App.module.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Contact />
    </div>
  )
}

export default App
