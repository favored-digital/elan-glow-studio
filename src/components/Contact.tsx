import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mzdkdppa", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactelan" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Get In Touch
            </p>
            <h2 className="heading-section text-foreground mb-4">Contact Us</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-1">Visit Us</h3>
                  <p className="text-body text-muted-foreground text-sm">
                    3680 Wilshire Blvd, Ste 304
                    <br />
                    Los Angeles, CA 90010
                    <br />
                    <span className="text-xs text-muted-foreground/70">Koreatown, Wilshire Center</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-1">Call Us</h3>
                  <a href="tel:2133853526" className="text-body text-muted-foreground text-sm hover:text-foreground transition-colors">
                    (213) 385-3526
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-1">Hours</h3>
                  <div className="text-body text-muted-foreground text-sm space-y-1">
                    <p>Mon – Fri: 10:00 AM – 7:00 PM</p>
                    <p>Saturday: 10:00 AM – 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-1">Follow Us</h3>
                  <a
                    href="https://www.instagram.com/elanskincarela/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    @elanskincarela
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            {submitted ? (
              <div className="bg-background p-8 rounded-sm text-center">
                <h3 className="font-heading text-2xl text-foreground mb-2">Thank You!</h3>
                <p className="text-body text-muted-foreground text-sm">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={255}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={20}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder="Tell us about your skincare goals..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full font-body text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground py-4 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
