
import { animes } from "@/data/anime";
import { MediaCard } from "@/components/MediaCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Film } from "lucide-react";

const AnimePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAnimes = animes.filter(anime => 
    anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    anime.studio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-24 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 mb-2">
          <Film className="h-8 w-8 text-media-anime" />
          <span>Anime</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover popular anime series. Click on any title to view more details and find where to watch episodes.
        </p>
      </header>

      <div className="max-w-md mx-auto mb-8">
        <Input
          type="search"
          placeholder="Search anime by title or studio..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-secondary/50"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredAnimes.length > 0 ? (
          filteredAnimes.map((anime) => (
            <MediaCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              image={anime.image}
              category="anime"
              description={`Studio: ${anime.studio}`}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No anime found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimePage;
