import { PricingCard } from "@/components/PricingCard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleButtonClick = (planName: string) => {
    toast({
      title: `${planName} Selected!`,
      description: "Redirecting to checkout...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your broken components into beautiful, reusable designs with our pricing solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Basic Plan"
            price="$9.99"
            features={[
              "1 GB Storage",
              "Basic Support", 
              "All Core Features",
              "Email Integration",
              "Mobile App Access"
            ]}
            buttonText="Start Free Trial"
            onButtonClick={() => handleButtonClick("Basic Plan")}
          />
          
          <PricingCard
            title="Pro Plan"
            price="$19.99"
            features={[
              "10 GB Storage",
              "Priority Support",
              "Advanced Features",
              "API Access",
              "Custom Integrations",
              "Analytics Dashboard"
            ]}
            isPopular={true}
            buttonText="Get Pro Access"
            onButtonClick={() => handleButtonClick("Pro Plan")}
          />
          
          <PricingCard
            title="Enterprise"
            price="$49.99"
            features={[
              "Unlimited Storage",
              "24/7 Phone Support",
              "Enterprise Features",
              "Custom Development",
              "Dedicated Manager",
              "SLA Guarantee"
            ]}
            buttonText="Contact Sales"
            onButtonClick={() => handleButtonClick("Enterprise")}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
