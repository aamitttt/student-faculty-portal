import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ className = "" }: { className?: string }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      size="sm"
      className={`flex items-center gap-2 mb-4 ${className}`}
      onClick={() => navigate(-1)}
    >
      <ArrowLeft size={18} />
      Back
    </Button>
  );
};

export default BackButton;