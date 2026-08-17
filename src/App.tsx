import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { About } from './pages/About'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App