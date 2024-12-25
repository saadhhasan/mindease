import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="text-xl font-bold">
              MindEase
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-indigo-200">Sign Up</Link>
            <Link to="/home" className="hover:text-indigo-200">Home</Link>
            <Link to="/chat" className="hover:text-indigo-200">Chat</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}