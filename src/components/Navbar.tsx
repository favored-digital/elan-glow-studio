import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";


const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        <a href="#" className="font-heading text-2xl md:text-3xl font-light tracking-[0.15em] text-foreground">
          ÉLAN
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
<button style="background-color: #000; color: #fff; border: none; padding: 12px 18px; font-size: 14px; font-weight: 600; border-radius: 6px; cursor: pointer;" id="Anywhere_button_iframe" class="anywhere-book-now-button" data-booking-url="https://favoreddigital.setmore.com" data-new-tab="false">Book now</button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
<button style="background-color: #000; color: #fff; border: none; padding: 12px 18px; font-size: 14px; font-weight: 600; border-radius: 6px; cursor: pointer;" id="Anywhere_button_iframe" class="anywhere-book-now-button" data-booking-url="https://favoreddigital.setmore.com" data-new-tab="false">Book now</button>
              </li>
              <li>
                <a href="tel:2133853526" className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Phone size={14} /> (213) 385-3526
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    <script id="anywhere_book_now_script" type="text/javascript" src="https://assets.setmore.com/integration/book-now/live/v1/anywhere-book-now.js"></script>

  );
};

export default Navbar;
