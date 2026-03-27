import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
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
  {
    name: "Maria G.",
    text: "The K-Beauty facial was absolutely divine. My skin felt so hydrated and plump for days afterward. I'm already booking my next visit!",
    rating: 5,
  },
  {
    name: "Tina R.",
    text: "Best facial I've ever had in LA. The attention to detail and personalized approach made all the difference for my sensitive skin.",
    rating: 5,
  },
  {
    name: "David P.",
    text: "I was hesitant at first but the team made me feel right at home. My skin has never been clearer. Highly recommend for anyone dealing with acne.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    text: "The scalp treatment was incredible — I didn't even know that was a thing! My hair feels healthier and my scalp finally stopped flaking.",
    rating: 5,
  },
  {
    name: "Amy W.",
    text: "I've been coming here for over a year now and the results speak for themselves. My dark spots have faded significantly.",
    rating: 5,
  },
  {
    name: "Chris T.",
    text: "Clean, relaxing atmosphere and incredibly knowledgeable staff. They really take the time to understand your skin concerns.",
    rating: 5,
  },
  {
    name: "Natalie H.",
    text: "The hydrating jelly mask treatment left my skin glowing for an entire week. Everyone kept asking what I was doing differently!",
    rating: 5,
  },
  {
    name: "Rachel S.",
    text: "After years of trying different products, one session here did more for my skin than anything I'd tried on my own. Life-changing!",
    rating: 5,
  },
  {
    name: "Kevin L.",
    text: "Professional, friendly, and effective. The custom facial addressed my specific concerns and I saw improvement after the very first visit.",
    rating: 5,
  },
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        <section className="section-padding bg-background">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <ScrollReveal key={review.name} delay={(i % 3) * 0.15}>
                  <div className="bg-secondary p-8 rounded-sm relative h-full">
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
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
