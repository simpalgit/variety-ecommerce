import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium stationery and craft supplies"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-[0.2em] uppercase text-accent"
          >
            Stationery & Craft Supplies
          </motion.span>
          <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] text-foreground">
            Create,
            <br />
            Organize,
            <br />
            <span className="italic text-accent">Inspire.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed font-body">
            Everything you need for school, office, and DIY projects. Premium stationery and craft supplies delivered to your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-sm font-medium tracking-wide group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-sm font-medium tracking-wide border-foreground/20 hover:bg-foreground/5"
            >
              Explore Collection
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
