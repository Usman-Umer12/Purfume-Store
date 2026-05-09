import React, { useEffect, useState } from "react";
import {
  ShoppingBag,
  Search,
  User,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Purfume", href: "/watches" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { totalItems } = useCart();

  const [active, setActive] = useState(location.pathname || "/");

  const [loggedIn, setLoggedIn] = useState(() => {
    try {
      return (
        localStorage.getItem("isLoggedIn") === "true" ||
        Boolean(localStorage.getItem("authToken"))
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    setActive(location.pathname || "/");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authToken");

    setLoggedIn(false);
    setOpen(false);

    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 mt-5 lg:px-8">
      {/* MAIN NAVBAR */}
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-xl border ${
          scrolled
            ? "bg-black/80 border-white/10 backdrop-blur-2xl shadow-2xl"
            : "bg-black/50 border-white/5 backdrop-blur-xl"
        }`}
      >
        <div className="h-20 px-6 lg:px-10 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-zinc-700 via-zinc-800 to-black border border-white/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <div>
              <h1 className="text-white text-xl md:text-2xl font-semibold tracking-[0.25em] uppercase">
                Veloura
              </h1>

              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">
                Luxury Perfume
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative text-[13px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-2 h-[1px] bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center w-52 lg:w-64 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4">
              <Search className="w-4 h-4 text-zinc-400" />

              <input
                type="text"
                placeholder="Search perfumes..."
                className="bg-transparent outline-none border-none text-sm text-white placeholder:text-zinc-500 px-3 w-full"
              />
            </div>

            {/* CART */}
            <Link
              to="/cart"
              className="relative w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300 hover:bg-white/10"
            >
              <ShoppingBag className="w-5 h-5" />

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* ACCOUNT */}
            {!loggedIn ? (
              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 text-zinc-300 hover:text-white transition-all duration-300"
              >
                <User className="w-5 h-5" />

                <span className="text-sm uppercase tracking-wider">
                  Account
                </span>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 text-zinc-300 hover:text-white transition-all duration-300"
              >
                <User className="w-5 h-5" />

                <span className="text-sm uppercase tracking-wider">
                  Logout
                </span>
              </button>
            )}

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white"
            >
              {open ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-8 pt-2 border-t border-white/10 bg-black/90 backdrop-blur-2xl">
            {/* MOBILE SEARCH */}
            <div className="flex items-center h-11 rounded-full border border-white/10 bg-white/5 px-4 mb-8 mt-4">
              <Search className="w-4 h-4 text-zinc-400" />

              <input
                type="text"
                placeholder="Search perfumes..."
                className="bg-transparent outline-none border-none text-sm text-white placeholder:text-zinc-500 px-3 w-full"
              />
            </div>

            <div className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = active === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm uppercase tracking-[0.25em] transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="w-full h-[1px] bg-white/10" />

              {!loggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <User className="w-5 h-5" />

                  <span className="uppercase tracking-wider text-sm">
                    Account
                  </span>
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <User className="w-5 h-5" />

                  <span className="uppercase tracking-wider text-sm">
                    Logout
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;