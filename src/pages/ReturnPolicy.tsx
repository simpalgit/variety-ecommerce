import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReturnPolicy = () => {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Return & Refund Policy</h1>
          <p className="mt-4 text-muted-foreground font-body">Last updated: April 4, 2026</p>

          <div className="mt-12 space-y-10 font-body text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Return Eligibility</h2>
              <p>Items may be returned within 30 days of delivery. Products must be unworn, unwashed, and in their original packaging with all tags attached. Sale items marked as "Final Sale" are not eligible for return.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Refund Process</h2>
              <p>Once we receive your return, our team will inspect the item within 2 business days. Approved refunds are processed to your original payment method within 5-7 business days. You will receive email confirmation at each step.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Timeline</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Return request: within 30 days of delivery</li>
                <li>Ship item back: within 7 days of return approval</li>
                <li>Inspection: 1-2 business days after receipt</li>
                <li>Refund processed: 5-7 business days after approval</li>
                <li>Funds appear in account: 3-5 additional business days depending on your bank</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Exceptions</h2>
              <p>The following items cannot be returned: personalized or custom-made products, intimate apparel, swimwear, earrings (for hygiene reasons), gift cards, and items marked as "Final Sale." Damaged or defective items are always eligible for return or exchange regardless of these exceptions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Need Help?</h2>
              <p>For return inquiries, contact our customer service team at <span className="text-accent">returns@variety.com</span> or call us at +1 (800) 555-VARY.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
