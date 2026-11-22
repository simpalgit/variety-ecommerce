import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCw, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $50. Get your items within 2-4 business days.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Your transactions are protected with bank-level encryption and security.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund, no questions asked.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Every product is inspected and guaranteed to meet our premium standards.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">Why Variety</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-foreground">
            Built on Trust
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover-lift"
            >
              <div className="mx-auto h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
