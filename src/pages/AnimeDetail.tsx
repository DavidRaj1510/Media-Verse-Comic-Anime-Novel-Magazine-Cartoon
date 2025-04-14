
import { useParams } from "react-router-dom";
import { animes, Anime } from "@/data/anime";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Youtube, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMediaInfo } from "@/utils/geminiApi";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";

const AnimeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const anime = animes.find(a => a.id === id);
  const { toast } = useToast();
  
  const { data: additionalInfo, isLoading } = useQuery({
    queryKey: ['animeInfo', id],
    queryFn: async () => {
      if (!anime) return "Anime information not available";
      return await getMediaInfo("anime", anime.title);
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
  
  if (!anime) {
    return (
      <div className="container mx-auto py-24 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Anime not found</h1>
        <p className="mb-6">The anime you're looking for doesn't exist.</p>
        <Link to="/anime">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Anime
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-24 px-4">
      <Link to="/anime" className="inline-flex items-center text-media-anime hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Anime
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="media-card anime-glow w-full max-w-xs mx-auto">
            <img 
              src={anime.image} 
              alt={anime.title} 
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-media-anime">
            {anime.title}
          </h1>
          
          <div className="mb-4">
            <div className="text-sm text-muted-foreground mb-1">Studio</div>
            <div className="font-medium">{anime.studio}</div>
          </div>
          
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-1">Description</div>
            <p className="text-foreground/90">{anime.description}</p>
          </div>
          
          {/* YouTube Embed */}
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-1">Preview</div>
            <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-muted">
              <iframe 
                className="absolute inset-0 w-full h-full" 
                src={`https://www.youtube.com/embed/${anime.youtubeId}`} 
                title={`${anime.title} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
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
          
          <div className="mt-6 flex flex-wrap gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Watch on Official Site</div>
              <a href={anime.website} target="_blank" rel="noopener noreferrer">
                <Button className="bg-media-anime hover:bg-media-anime/80 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Watch on {anime.websiteName}
                </Button>
              </a>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Watch on YouTube</div>
              <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(anime.title + " anime")}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-media-anime text-media-anime hover:bg-media-anime/10">
                  <Youtube className="mr-2 h-4 w-4" />
                  Search on YouTube
                </Button>
              </a>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Watch on HiAnime</div>
              <a href={`https://hianime.pe/search?keyword=${encodeURIComponent(anime.title)}`} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="bg-[#6A5ACD] hover:bg-[#483D8B] text-white">
                  <Play className="mr-2 h-4 w-4" />
                  Watch on HiAnime
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
