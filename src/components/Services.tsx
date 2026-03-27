import ScrollReveal from "./ScrollReveal";
import facialImg from "@/assets/service-facial.jpg";
import kbeautyImg from "@/assets/service-kbeauty.jpg";
import scalpImg from "@/assets/service-scalp.jpg";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Facials",
    description:
      "Personalized facial treatments tailored to your skin type, addressing acne, aging, hydration, and texture concerns with premium products.",
    image: facialImg,
  },
  {
    title: "K-Beauty Treatments",
    description:
      "Experience the best of Korean skincare — from hydrating jelly masks to advanced serums that deliver deep nourishment and a radiant glow.",
    image: kbeautyImg,
  },
  {
    title: "Scalp & Hair Care",
    description:
      "Revitalize your scalp with specialized treatments that promote healthy hair growth and restore balance using botanical ingredients.",
    image: scalpImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              What We Offer
            </p>
            <h2 className="heading-section text-foreground mb-4">Our Treatments</h2>
            <div className="gold-divider mb-6" />
            <p className="text-body text-muted-foreground max-w-xl mx-auto">
              Each service is thoughtfully designed to bring out the best in your skin.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-sm overflow-hidden group"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-light text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
 </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Services;
