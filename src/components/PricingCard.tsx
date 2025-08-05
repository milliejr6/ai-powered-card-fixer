import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  buttonText?: string;
  isPopular?: boolean;
  onButtonClick?: () => void;
}

export const PricingCard = ({
  title,
  price,
  period = "/month",
  features,
  buttonText = "Start Trial",
  isPopular = false,
  onButtonClick,
}: PricingCardProps) => {
  return (
    <Card 
      className={`relative w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-2xl ${
        isPopular 
          ? 'shadow-xl ring-2 ring-pricing-popular scale-105' 
          : 'shadow-lg hover:shadow-xl'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-pricing-popular text-pricing-popular-foreground px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-foreground">
          {title}
        </CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-pricing-success">
            {price}
          </span>
          <span className="text-muted-foreground ml-1">
            {period}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="px-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-pricing-success flex-shrink-0" />
              <span className="text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="px-6 pt-6">
        <Button
          variant={isPopular ? "popular" : "pricing"}
          size="lg"
          className="w-full font-semibold"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};