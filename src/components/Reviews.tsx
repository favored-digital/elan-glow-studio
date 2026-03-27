import ScrollReveal from "./ScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "J.K.",
    text: "I have gone to Jennifer three times now for the acne facial treatment, and I have only positive things to say. My skin has improved so much!",
    rating: 5,
  },
  {
    name: "Bev B.",
    text: "Ashley made me feel so comfortable and she explained everything that she was applying to my face. My skin has never looked better.",
    rating: 5,
  },
  {
    name: "Sue L.",
    text: "Hormonal acne left me with scars that were difficult to treat. After just a few sessions, the redness and texture improved dramatically.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Client Love
            </p>
            <h2 className="heading-section text-foreground mb-4">What Our Clients Say</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.15}>
              <div className="bg-secondary p-8 rounded-sm relative">
                <Quote size={32} className="text-accent/40 mb-4" />
                <p className="text-body text-muted-foreground text-sm italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg text-foreground">{review.name}</span>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={12} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://www.yelp.com/biz/elan-skincare-los-angeles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border pb-1"
            >
              Read more reviews on Yelp →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reviews;
