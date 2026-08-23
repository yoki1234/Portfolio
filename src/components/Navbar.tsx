import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 text-white bg-gradient-to-b from-slate-900 to-amber-500">
      <Link to="/" className="hover:text-teal-400">Home</Link>
      <Link to="/blog" className="hover:text-teal-400">Blog</Link>
      <Link to="/about" className="hover:text-teal-400">About</Link>
    </nav>
  )
}