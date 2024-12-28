import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaBookmark,
  FaBars,
  FaTimes,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/anime-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isAnimeOpen, setIsAnimeOpen] = useState(false);
  const [isMangaOpen, setIsMangaOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleAnimeMenu = () => setIsAnimeOpen(!isAnimeOpen);
  const toggleMangaMenu = () => setIsMangaOpen(!isMangaOpen);
  const togglePagesMenu = () => setIsPagesOpen(!isPagesOpen);
  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 left-0 w-full bg-neutral-950/70 backdrop-blur-lg shadow-md transition duration-300 z-40"
          : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div>
          <NavLink to="/" className="text-sm font-bold  animate-pulse ">
            <img src={Logo} alt="AnimeVerse" className="h-10 rounded-lg" />
            <span className="text-red-500">RedCloudHub</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 hover:text-red-500 hover:underline ${
                isActive ? "font-bold text-red-800 underline" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* Anime Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-red-500 transition-colors flex items-center">
              Anime <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute min-w-52 left-0 top-full bg-black text-white p-4 rounded-lg shadow-lg space-y-3 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <NavLink
                to="/top/anime"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Top Anime
              </NavLink>
              <NavLink
                to="/now/anime"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Now Airing Anime
              </NavLink>
              <NavLink
                to="/upcoming/anime"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Upcoming Anime
              </NavLink>
              <NavLink
                to="/anime"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Anime Store
              </NavLink>
              <NavLink
                to="/search/anime"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Anime Search
              </NavLink>
            </div>
          </div>
          {/* Manga Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-red-500 transition-colors flex items-center">
              Manga <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute min-w-52 left-0 top-full bg-black text-white p-4 rounded-lg shadow-lg space-y-3 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <NavLink
                to="/top/manga"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Top Manga
              </NavLink>
              <NavLink
                to="/manga"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Manga Store
              </NavLink>
              <NavLink
                to="/search/manga"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Manga Search
              </NavLink>
            </div>
          </div>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-red-500 transition-colors flex items-center">
              Pages <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute min-w-52 left-0 top-full bg-black text-white p-4 rounded-lg shadow-lg space-y-3 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
              <NavLink
                to="/top/character"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Characters
              </NavLink>
              <NavLink
                to="/episodes"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Recent Episodes
              </NavLink>
              <NavLink
                to="/popular/episodes"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Popular Episodes
              </NavLink>
              <NavLink
                to="/trailer"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md hover:text-red-500 hover:bg-gray-800 transition-colors ${
                    isActive ? "font-bold text-red-800 underline" : ""
                  }`
                }
              >
                Trailers
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition duration-300 hover:text-red-600 hover:underline ${
                isActive ? "font-bold text-red-500 underline" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Mobile Menu Icons */}
        <div className="flex space-x-4 items-center">
          <NavLink
            to="/search/anime"
            className={({ isActive }) =>
              `text-xl cursor-pointer hover:text-yellow-500 transition-colors ${
                isActive ? "font-bold text-yellow-500" : ""
              }`
            }
          >
            <FaSearch />
          </NavLink>
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              `text-xl cursor-pointer hover:text-red-500 transition-colors ${
                isActive ? "font-bold text-red-500" : ""
              }`
            }
          >
            <FaHeart />
          </NavLink>
          <NavLink
            to="/bookmark"
            className={({ isActive }) =>
              `text-xl cursor-pointer hover:text-red-500 transition-colors ${
                isActive ? "font-bold text-red-500" : ""
              }`
            }
          >
            <FaBookmark />
          </NavLink>
          <button onClick={toggleMenu} className="md:hidden ">
            {isMenuOpen ? (
              <FaTimes className="text-xl ml-4 cursor-pointer text-white transition-transform transform rotate-90" />
            ) : (
              <FaBars className="text-xl ml-4 cursor-pointer text-white transition-transform transform rotate-0" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-netural-900 backdrop-blur-md shadow-md text-white mt-4 space-y-4 p-4 rounded-lg overflow-scroll">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 hover:text-red-600 hover:underline ${
                isActive ? "font-bold text-red-500 underline" : ""
              }`
            }
          >
            Home
          </NavLink>

          <div className="space-y-4 max-h-[60vh] overflow-y-scroll">
            {/* Anime Section */}
            <div className="space-y-2">
              <button
                onClick={toggleAnimeMenu}
                className="text-white hover:text-red-400 transition-colors flex items-center"
              >
                Anime{" "}
                {isAnimeOpen ? (
                  <FaChevronUp className="ml-2 w-4 h-4" />
                ) : (
                  <FaChevronDown className="ml-2 w-4 h-4" />
                )}
              </button>
              {isAnimeOpen && (
                <div className="py-4">
                  <NavLink
                    to="/top/anime"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Top Anime
                  </NavLink>
                  <NavLink
                    to="/now/anime"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Now Airing Anime
                  </NavLink>
                  <NavLink
                    to="/upcoming/anime"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Upcoming Anime
                  </NavLink>
                  <NavLink
                    to="/anime"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Anime Store
                  </NavLink>
                  <NavLink
                    to="/search/anime"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Anime Search
                  </NavLink>
                </div>
              )}
            </div>

            {/* Manga Section */}
            <div className="space-y-2">
              <button
                onClick={toggleMangaMenu}
                className="text-white hover:text-red-400 transition-colors flex items-center"
              >
                Manga{" "}
                {isMangaOpen ? (
                  <FaChevronUp className="ml-2 w-4 h-4" />
                ) : (
                  <FaChevronDown className="ml-2 w-4 h-4" />
                )}
              </button>
              {isMangaOpen && (
                <div className="py-4">
                  <NavLink
                    to="/top/manga"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Top Manga
                  </NavLink>
                  <NavLink
                    to="/manga"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Manga Store
                  </NavLink>
                  <NavLink
                    to="/search/manga"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Manga Search
                  </NavLink>
                </div>
              )}
            </div>

            {/* Pages Section */}
            <div className="space-y-2">
              <button
                onClick={togglePagesMenu}
                className="text-white hover:text-red-400 transition-colors flex items-center"
              >
                Pages{" "}
                {isPagesOpen ? (
                  <FaChevronUp className="ml-2 w-4 h-4" />
                ) : (
                  <FaChevronDown className="ml-2 w-4 h-4" />
                )}
              </button>
              {isPagesOpen && (
                <div className="space-y-2 py-4">
                  <NavLink
                    to="/top/character"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Characters
                  </NavLink>
                  <NavLink
                    to="/episodes"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Recent Episodes
                  </NavLink>
                  <NavLink
                    to="/popular/episodes"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Popular Episodes
                  </NavLink>
                  <NavLink
                    to="/trailer"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md  hover:text-red-500 hover:bg-gray-800 transition-colors ${
                        isActive ? "font-bold text-red-800 underline" : ""
                      }`
                    }
                  >
                    Trailer
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition duration-300 hover:text-red-600 hover:underline ${
                isActive ? "font-bold text-red-500 underline" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
