import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "School Teacher",
    text: "Variety has everything I need for my classroom. The quality of notebooks and art supplies is excellent, and delivery is always on time.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Graphic Designer",
    text: "Best stationery store I've found online. The washi tapes and journals are gorgeous, and prices are very reasonable for the quality.",
    rating: 5,
  },
  {
    name: "Amina Okafor",
    role: "Office Manager",
    text: "We order all our office supplies from Variety now. Fast shipping, bulk discounts, and the customer service is fantastic.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-foreground">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-soft"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 font-body leading-relaxed italic">
                "{item.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground font-body">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
