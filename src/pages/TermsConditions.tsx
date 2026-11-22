import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Terms & Conditions</h1>
          <p className="mt-4 text-muted-foreground font-body">Last updated: April 4, 2026</p>

          <div className="mt-12 space-y-10 font-body text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>Welcome to Vishal Mega Mart. By accessing and using our website, you accept and agree to be bound by these Terms & Conditions. If you do not agree with any part, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. User Responsibilities</h2>
              <p>You agree to use this website for lawful purposes only. You are responsible for maintaining the confidentiality of your account and password. You must not use another person's account without permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Product Information</h2>
              <p>We strive to display product information accurately, including descriptions, images, and pricing. However, we do not guarantee that all information is error-free. Colors may vary depending on your display settings. We reserve the right to correct errors and update information at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Payment Terms</h2>
              <p>All prices are listed in USD unless otherwise noted. Payment is due at the time of purchase. We accept major credit cards, debit cards, and select digital wallets. All transactions are processed through secure, encrypted payment gateways.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Return & Refund Policy</h2>
              <p>We offer a 30-day return policy for most items. Products must be in their original condition with tags attached. Refunds will be processed within 5-7 business days after we receive the returned item. For full details, please visit our <Link to="/returns" className="text-accent underline">Return Policy page</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p>Variety shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website or purchase of products. Our total liability shall not exceed the amount paid by you for the specific product or service in question.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p>If you have questions about these Terms, please contact us at <span className="text-accent">legal@variety.com</span>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
