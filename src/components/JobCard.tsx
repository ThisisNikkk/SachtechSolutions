import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
}

const JobCard = ({ title, location, type, description }: JobCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-montserrat">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-montserrat">{type}</span>
        </div>
      </div>
      
      <p className="text-foreground mb-6 font-montserrat line-clamp-2">
        {description}
      </p>
      
      <div className="flex justify-end">
        <Button 
          size="sm"
          className="rounded-full font-montserrat font-semibold"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
