import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-6 py-16 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl tracking-[0.15em] mb-4">ÉLAN</h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Boutique skincare studio in Koreatown, Los Angeles. Premium K-Beauty treatments
              for your unique skin.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/80">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/elanskincarela/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={16} /> @elanskincarela
              </a>
              <a
                href="https://www.yelp.com/biz/elan-skincare-los-angeles"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors block"
              >
                ★ Yelp Reviews
              </a>
              <a
                href="tel:2133853526"
                className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors block"
              >
                (213) 385-3526
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Élan Skincare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
