import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground font-body">Last updated: April 4, 2026</p>

          <div className="mt-12 space-y-10 font-body text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Data Collection</h2>
              <p>We collect information you provide directly, including name, email address, shipping address, and payment details when you make a purchase. We also automatically collect browsing data, device information, and usage analytics to improve your experience.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Cookies Usage</h2>
              <p>Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can manage cookie preferences through your browser settings. Essential cookies are required for the site to function properly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Data Protection</h2>
              <p>We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits. Your personal data is stored on secure servers and is only accessible by authorized personnel.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Third-Party Sharing</h2>
              <p>We do not sell your personal information. We may share data with trusted partners for payment processing, shipping, and analytics. All third-party providers are contractually obligated to protect your data in accordance with this policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at <span className="text-accent">privacy@variety.com</span>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
