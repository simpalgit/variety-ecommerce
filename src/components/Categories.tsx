import { motion } from "framer-motion";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryElectronics from "@/assets/category-electronics.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  { name: "School Supplies", image: categoryMen },
  { name: "Office Essentials", image: categoryWomen },
  { name: "DIY & Crafts", image: categoryElectronics },
  { name: "Art Supplies", image: categoryAccessories },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">Browse</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-foreground">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground">{cat.name}</h3>
                  <span className="text-sm text-primary-foreground/70 font-body">Explore →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
