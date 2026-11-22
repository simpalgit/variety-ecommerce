import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  { id: 1, name: "Colored Gel Pen Set (24pc)", price: 12.99, image: product1, tag: "New" },
  { id: 2, name: "Dotted Journal Notebook", price: 8.99, image: product2, tag: "Bestseller" },
  { id: 3, name: "Desk Organizer Caddy", price: 18.50, image: product3, tag: null },
  { id: 4, name: "Washi Tape Collection (12pc)", price: 9.99, image: product4, tag: "Popular" },
  { id: 5, name: "Premium Mechanical Pencil Set", price: 14.99, image: product5, tag: null },
  { id: 6, name: "Shaped Sticky Notes Bundle", price: 6.99, image: product6, tag: "New" },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">Top Picks</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-foreground">
            Featured Products
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto font-body">
            Must-have supplies for school, office, and creative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {product.tag}
                  </span>
                )}
                <button className="absolute top-4 right-4 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background">
                  <Heart className="h-4 w-4 text-foreground" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 text-sm">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="mt-4 px-1">
                <h3 className="font-body font-medium text-foreground">{product.name}</h3>
                <p className="mt-1 text-accent font-bold font-body">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
