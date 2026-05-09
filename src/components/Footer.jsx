import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden bg-black">

      {/* 🌑 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />

      {/* SOFT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">

        {/* NEWSLETTER */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.25em]">
              Timeless Elegance Delivered
            </h2>
            <p className="text-zinc-400 mt-3 text-sm max-w-md">
              Subscribe for exclusive offers, new collections and luxury updates.
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-3">

            <input
              type="email"
              placeholder="Enter email"
              className="w-full md:w-80 h-11 px-4 rounded-full bg-black/40 border border-white/10 outline-none text-sm"
            />

            <button className="h-11 px-6 rounded-full bg-white text-black text-xs tracking-[0.3em] uppercase hover:bg-zinc-300 transition">
              Subscribe
            </button>

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2">
              <Clock className="text-white" />
              <h3 className="text-xl tracking-[0.3em] uppercase">
                ChronoElite
              </h3>
            </div>

            <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
              Luxury timepieces crafted with precision and timeless elegance.
              Designed for individuals who value identity and excellence.
            </p>

            <div className="flex gap-4 mt-6">

              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition"
                >
                  <Icon size={16} />
                </a>
              ))}

            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-sm tracking-[0.4em] uppercase text-zinc-400 mb-5">
              Explore
            </h4>

            <ul className="space-y-3 text-sm text-zinc-300">
              {["Collections", "New Arrivals", "Best Sellers", "Limited Edition"].map(
                (item) => (
                  <li key={item} className="hover:text-white transition cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-sm tracking-[0.4em] uppercase text-zinc-400 mb-5">
              Support
            </h4>

            <ul className="space-y-3 text-sm text-zinc-300">
              {["Contact", "Shipping", "Returns", "Warranty", "FAQ"].map((item) => (
                <li key={item} className="hover:text-white transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm tracking-[0.4em] uppercase text-zinc-400 mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-zinc-300">

              <div className="flex items-start gap-3">
                <MapPin size={16} />
                <span>123 Luxury Ave, Geneva</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+41 22 345 6789</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>info@chronoelite.com</span>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">

          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} ChronoElite
            <Heart size={14} className="text-red-500" /> Crafted in Pakistan
          </p>

          <p className="text-xs tracking-[0.3em] uppercase">
            Designed by Code Sphere Technology
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;