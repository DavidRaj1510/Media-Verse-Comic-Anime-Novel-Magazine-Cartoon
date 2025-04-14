
import { useParams } from "react-router-dom";
import { cartoons, Cartoon } from "@/data/cartoons";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMediaInfo } from "@/utils/geminiApi";
import { useToast } from "@/components/ui/use-toast";

const CartoonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const cartoon = cartoons.find(c => c.id === id);
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchAdditionalInfo = async () => {
      if (cartoon) {
        try {
          setLoading(true);
          const info = await getMediaInfo("cartoon", cartoon.title);
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
  }, [cartoon, toast]);
  
  if (!cartoon) {
    return (
      <div className="container mx-auto py-24 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Cartoon not found</h1>
        <p className="mb-6">The cartoon you're looking for doesn't exist.</p>
        <Link to="/cartoons">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cartoons
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-24 px-4">
      <Link to="/cartoons" className="inline-flex items-center text-media-cartoons hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Cartoons
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="media-card cartoons-glow w-full max-w-xs mx-auto">
            <img 
              src={cartoon.image} 
              alt={cartoon.title} 
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-media-cartoons">
            {cartoon.title}
          </h1>
          
          <div className="mb-4">
            <div className="text-sm text-muted-foreground mb-1">Studio</div>
            <div className="font-medium">{cartoon.studio}</div>
          </div>
          
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-1">Description</div>
            <p className="text-foreground/90">{cartoon.description}</p>
          </div>
          
          {/* YouTube Embed */}
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-1">Preview</div>
            <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-muted">
              <iframe 
                className="absolute inset-0 w-full h-full" 
                src={`https://www.youtube.com/embed/${cartoon.youtubeId}`} 
                title={`${cartoon.title} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
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
            <div className="text-sm text-muted-foreground mb-2">Watch on YouTube</div>
            <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(cartoon.title + " cartoon")}`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-media-cartoons hover:bg-media-cartoons/80 text-white">
                <Youtube className="mr-2 h-4 w-4" />
                Watch on YouTube
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartoonDetail;
