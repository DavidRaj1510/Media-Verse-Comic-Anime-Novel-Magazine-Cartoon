
import { magazines } from "@/data/magazines";
import { MediaCard } from "@/components/MediaCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Newspaper } from "lucide-react";

const MagazinesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredMagazines = magazines.filter(magazine => 
    magazine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    magazine.publisher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-24 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 mb-2">
          <Newspaper className="h-8 w-8 text-media-magazines" />
          <span>Magazines</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse top magazines across various topics. Click on any title to view more details and find where to read them.
        </p>
      </header>

      <div className="max-w-md mx-auto mb-8">
        <Input
          type="search"
          placeholder="Search magazines by title or publisher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-secondary/50"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredMagazines.length > 0 ? (
          filteredMagazines.map((magazine) => (
            <MediaCard
              key={magazine.id}
              id={magazine.id}
              title={magazine.title}
              image={magazine.image}
              category="magazines"
              description={`Publisher: ${magazine.publisher}`}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No magazines found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MagazinesPage;
