
import { useParams } from "react-router-dom";
import { novels, Novel } from "@/data/novels";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMediaInfo } from "@/utils/geminiApi";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";

const NovelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const novel = novels.find(n => n.id === id);
  const { toast } = useToast();
  
  const { data: additionalInfo, isLoading } = useQuery({
    queryKey: ['novelInfo', id],
    queryFn: async () => {
      if (!novel) return "Novel information not available";
      return await getMediaInfo("novel", novel.title);
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 2,
    retryDelay: 1000,
    onSettled: (data, error) => {
      if (error) {
        toast({
          title: "Information Unavailable",
          description: "We couldn't load additional information right now. You can still view the basic details.",
          variant: "destructive",
        });
      }
    }
  });
  
  if (!novel) {
    return (
      <div className="container mx-auto py-24 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Novel not found</h1>
        <p className="mb-6">The novel you're looking for doesn't exist.</p>
        <Link to="/novels">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Novels
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-24 px-4">
      <Link to="/novels" className="inline-flex items-center text-media-novels hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Novels
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="media-card novels-glow w-full max-w-xs mx-auto">
            <img 
              src={novel.image} 
              alt={novel.title} 
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-media-novels">
            {novel.title}
          </h1>
          
          <div className="mb-4">
            <div className="text-sm text-muted-foreground mb-1">Author</div>
            <div className="font-medium">{novel.author}</div>
          </div>
          
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-1">Description</div>
            <p className="text-foreground/90">{novel.description}</p>
          </div>

          {/* Additional info from Gemini API */}
          {isLoading ? (
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
            <a href={novel.website} target="_blank" rel="noopener noreferrer">
              <Button className="bg-media-novels hover:bg-media-novels/80 text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                Read on {novel.websiteName}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelDetail;
