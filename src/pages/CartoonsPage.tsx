
import { cartoons } from "@/data/cartoons";
import { MediaCard } from "@/components/MediaCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Tv } from "lucide-react";

const CartoonsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCartoons = cartoons.filter(cartoon => 
    cartoon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cartoon.studio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-24 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 mb-2">
          <Tv className="h-8 w-8 text-media-cartoons" />
          <span>Cartoons</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Enjoy classic and modern animated cartoons. Click on any title to view more details and find where to watch episodes.
        </p>
      </header>

      <div className="max-w-md mx-auto mb-8">
        <Input
          type="search"
          placeholder="Search cartoons by title or studio..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-secondary/50"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredCartoons.length > 0 ? (
          filteredCartoons.map((cartoon) => (
            <MediaCard
              key={cartoon.id}
              id={cartoon.id}
              title={cartoon.title}
              image={cartoon.image}
              category="cartoons"
              description={`Studio: ${cartoon.studio}`}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No cartoons found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartoonsPage;
