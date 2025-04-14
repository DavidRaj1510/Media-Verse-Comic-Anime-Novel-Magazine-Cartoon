
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BookOpen, Film, BookText, Newspaper, Tv } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const getActiveClass = (path: string) => {
    if (isActive(path)) {
      switch(path) {
        case '/comics': return 'text-[#FF4C4C]';
        case '/anime': return 'text-[#4C7AFF]';
        case '/novels': return 'text-[#FFB74C]';
        case '/magazines': return 'text-[#4CFFB7]';
        case '/cartoons': return 'text-[#B74CFF]';
        default: return 'text-white';
      }
    }
    return 'text-gray-400 hover:text-white';
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-white">MediaVerse</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/comics" 
                  className={`flex items-center space-x-1 transition-colors duration-200 ${getActiveClass('/comics')}`}
                >
                  <BookOpen size={18} />
                  <span>Comics</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/anime" 
                  className={`flex items-center space-x-1 transition-colors duration-200 ${getActiveClass('/anime')}`}
                >
                  <Film size={18} />
                  <span>Anime</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/novels" 
                  className={`flex items-center space-x-1 transition-colors duration-200 ${getActiveClass('/novels')}`}
                >
                  <BookText size={18} />
                  <span>Novels</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/magazines" 
                  className={`flex items-center space-x-1 transition-colors duration-200 ${getActiveClass('/magazines')}`}
                >
                  <Newspaper size={18} />
                  <span>Magazines</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/cartoons" 
                  className={`flex items-center space-x-1 transition-colors duration-200 ${getActiveClass('/cartoons')}`}
                >
                  <Tv size={18} />
                  <span>Cartoons</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
