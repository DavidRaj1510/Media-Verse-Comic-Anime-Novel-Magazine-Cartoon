
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-media-anime via-media-comics to-media-novels">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist in this universe.</p>
        <Link to="/">
          <Button size="lg" className="animate-pulse-glow">
            <Home className="mr-2 h-5 w-5" />
            Return to MediaVerse
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
