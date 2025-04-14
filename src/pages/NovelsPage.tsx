
import { novels } from "@/data/novels";
import { MediaCard } from "@/components/MediaCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BookText } from "lucide-react";

const NovelsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredNovels = novels.filter(novel => 
    novel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    novel.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-24 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 mb-2">
          <BookText className="h-8 w-8 text-media-novels" />
          <span>Novels</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find bestselling novels and literary gems. Click on any title to view more details and find where to read them.
        </p>
      </header>

      <div className="max-w-md mx-auto mb-8">
        <Input
          type="search"
          placeholder="Search novels by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-secondary/50"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredNovels.length > 0 ? (
          filteredNovels.map((novel) => (
            <MediaCard
              key={novel.id}
              id={novel.id}
              title={novel.title}
              image={novel.image}
              category="novels"
              description={`By ${novel.author}`}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No novels found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NovelsPage;
