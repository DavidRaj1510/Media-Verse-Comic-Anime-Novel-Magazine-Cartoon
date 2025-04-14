
import { comics } from "@/data/comics";
import { MediaCard } from "@/components/MediaCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BookOpen } from "lucide-react";

const ComicsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredComics = comics.filter(comic => 
    comic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comic.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comic.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-24 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 mb-2">
          <BookOpen className="h-8 w-8 text-media-comics" />
          <span>Comics</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore popular comics and graphic novels. Click on any title to view more details and find where to read them.
        </p>
      </header>

      <div className="max-w-md mx-auto mb-8">
        <Input
          type="search"
          placeholder="Search comics by title, author or publisher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-secondary/50"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredComics.length > 0 ? (
          filteredComics.map((comic) => (
            <MediaCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              image={comic.image}
              category="comics"
              description={`By ${comic.author}`}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No comics found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComicsPage;
