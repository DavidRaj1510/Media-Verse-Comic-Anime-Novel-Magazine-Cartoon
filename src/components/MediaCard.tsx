
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface MediaCardProps {
  id: string;
  title: string;
  image: string;
  category: 'comics' | 'anime' | 'novels' | 'magazines' | 'cartoons';
  description?: string;
}

export function MediaCard({ id, title, image, category, description }: MediaCardProps) {
  // Define category-specific styles
  const categoryStyles = {
    comics: { color: 'text-media-comics', glow: 'comics-glow' },
    anime: { color: 'text-media-anime', glow: 'anime-glow' },
    novels: { color: 'text-media-novels', glow: 'novels-glow' },
    magazines: { color: 'text-media-magazines', glow: 'magazines-glow' },
    cartoons: { color: 'text-media-cartoons', glow: 'cartoons-glow' }
  };

  return (
    <Link to={`/${category}/${id}`} className="block">
      <Card className={`media-card transition-transform h-full ${categoryStyles[category].glow}`}>
        <CardContent className="p-0 h-full relative aspect-[2/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="media-card-overlay">
            <h3 className={`font-bold text-lg mb-1 ${categoryStyles[category].color}`}>{title}</h3>
            {description && (
              <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
            )}
            <Button variant="secondary" className="mt-2 w-full" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
