import { motion } from "framer-motion";
import heroImg from "@/assets/hero-skincare.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Élan Skincare luxury treatment room"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/80 mb-6"
        >
          Boutique Skincare Studio · Koreatown, Los Angeles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="heading-display text-primary-foreground mb-6"
        >
          Reveal Your
          <br />
          Natural Radiance
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-16 h-px bg-accent mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-body text-primary-foreground/80 max-w-lg mx-auto mb-10"
        >
          Experience the art of K-Beauty with personalized facials and premium treatments crafted for your unique skin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button
            id="Anywhere_button_iframe_hero"
            className="anywhere-book-now-button font-body text-sm tracking-[0.2em] uppercase bg-primary-foreground text-primary px-10 py-4 rounded-sm hover:opacity-90 transition-opacity"
            data-booking-url="https://favoreddigital.setmore.com"
            data-new-tab="false"
          >
            Book Your Treatment
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-primary-foreground/40"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
