import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-slate-900 text-white">
      <Link to="/" className="hover:text-teal-400">Home</Link>
      <Link to="/blog" className="hover:text-teal-400">Blog</Link>
      <Link to="/about" className="hover:text-teal-400">About</Link>
    </nav>
  )
}