import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const CTA = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCreateAccount = () => {
    if (user) {
      // If already logged in, redirect to dashboard
      navigate("/dashboard");
    } else {
      // Otherwise go to auth with signup mode
      navigate("/auth?mode=signup");
    }
  };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
              <Clock className="w-8 h-8 text-gold" />
            </div>
            <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-navy/10 flex items-center justify-center">
              <Zap className="w-8 h-8 text-navy" />
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              {user ? "Welcome!" : "Ready to Start Trading"}{" "}
              <span className="text-gradient-gold">{user ? "Let's Go" : "Your Time?"}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              {user 
                ? "Access your dashboard and manage your time trades, contracts, and earnings."
                : "Join thousands of professionals who've discovered a smarter way to grow their business. Sign up today and receive your first 5 time credits free."
              }
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="gold" 
                size="xl" 
                className="w-full sm:w-auto group" 
                onClick={handleCreateAccount}
                type="button"
              >
                {user ? "Go to Dashboard" : "Create Free Account"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto" 
                onClick={() => navigate("/help")}
                type="button"
              >
                Help Center
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by professionals at</p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                <span className="text-xl font-serif font-bold">TechCorp</span>
                <span className="text-xl font-serif font-bold">DesignHub</span>
                <span className="text-xl font-serif font-bold">StartupXYZ</span>
                <span className="text-xl font-serif font-bold">CreativeAgency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
