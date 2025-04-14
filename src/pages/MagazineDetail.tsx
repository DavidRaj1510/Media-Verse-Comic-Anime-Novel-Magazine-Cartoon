
import { useParams } from "react-router-dom";
import { magazines, Magazine } from "@/data/magazines";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMediaInfo } from "@/utils/geminiApi";
import { useToast } from "@/components/ui/use-toast";

const MagazineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const magazine = magazines.find(m => m.id === id);
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchAdditionalInfo = async () => {
      if (magazine) {
        try {
          setLoading(true);
          const info = await getMediaInfo("magazine", magazine.title);
          setAdditionalInfo(info);
        } catch (error) {
          console.error("Failed to fetch additional info:", error);
          toast({
            title: "Error",
            description: "Failed to load additional information",
            variant: "destructive",
          });
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchAdditionalInfo();
  }, [magazine, toast]);
  
  if (!magazine) {
    return (
      <div className="container mx-auto py-24 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Magazine not found</h1>
        <p className="mb-6">The magazine you're looking for doesn't exist.</p>
        <Link to="/magazines">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Magazines
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-24 px-4">
      <Link to="/magazines" className="inline-flex items-center text-media-magazines hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Magazines
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="media-card magazines-glow w-full max-w-xs mx-auto">
            <img 
              src={magazine.image} 
              alt={magazine.title} 
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-media-magazines">
            {magazine.title}
          </h1>
          
          <div className="mb-4">
            <div className="text-sm text-muted-foreground mb-1">Publisher</div>
            <div className="font-medium">{magazine.publisher}</div>
          </div>
          
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-1">Description</div>
            <p className="text-foreground/90">{magazine.description}</p>
          </div>

          {/* Additional info from Gemini API */}
          {loading ? (
            <div className="animate-pulse bg-muted h-32 rounded-lg mb-6"></div>
          ) : (
            <div className="mb-6">
              <div className="text-sm text-muted-foreground mb-1">More Information</div>
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground/90">{additionalInfo}</p>
              </div>
            </div>
          )}
          
          <div className="mt-6">
            <div className="text-sm text-muted-foreground mb-2">Where to Read</div>
            <a href={magazine.website} target="_blank" rel="noopener noreferrer">
              <Button className="bg-media-magazines hover:bg-media-magazines/80 text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                Read on {magazine.websiteName}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineDetail;
