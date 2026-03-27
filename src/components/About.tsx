import ScrollReveal from "./ScrollReveal";
import aboutImg from "@/assets/about-studio.jpg";
import { Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ScrollReveal>
          <div className="overflow-hidden rounded-sm">
            <img
              src={aboutImg}
              alt="Élan Skincare studio interior"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Where K-Beauty Meets Personalized Care
            </h2>
            <div className="gold-divider !mx-0 mb-6" />
            <p className="text-body text-muted-foreground mb-6">
              Nestled in the heart of Koreatown, Élan Skincare is a boutique studio dedicated to
              enhancing your natural beauty through personalized facial treatments and premium
              Korean skincare techniques.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              Our experienced estheticians combine time-honored Korean beauty rituals with modern
              skincare science to deliver results that leave you glowing with confidence. Every
              treatment is customized to your unique skin type and concerns.
            </p>

            <div className="flex items-center gap-4 p-4 bg-secondary rounded-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <div>
                <span className="font-body text-sm font-medium text-foreground">4.8 on Yelp</span>
                <span className="font-body text-xs text-muted-foreground ml-2">· 33 reviews</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
