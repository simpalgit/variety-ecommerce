import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <p className="mt-4 text-sm text-primary-foreground/60 font-body leading-relaxed">
              Your one-stop shop for stationery, DIY crafts, school and office supplies. Quality you can count on.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60 font-body">
              {["Home", "Shop", "Categories", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60 font-body">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60 font-body">
              <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/returns" className="hover:text-primary-foreground transition-colors">Return & Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40 font-body">
          © {new Date().getFullYear()} Vishal Mega Mart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
