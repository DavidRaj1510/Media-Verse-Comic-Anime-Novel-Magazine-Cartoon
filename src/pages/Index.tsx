
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { MediaScene } from "@/components/MediaScene";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Film, BookText, Newspaper, Tv } from "lucide-react";

const Index = () => {
  const [canvasHeight, setCanvasHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      setCanvasHeight(`${window.innerHeight}px`);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 3D Scene */}
      <div className="absolute inset-0" style={{ height: canvasHeight }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              rotateSpeed={0.5} 
              minPolarAngle={Math.PI / 3} 
              maxPolarAngle={Math.PI / 1.5} 
            />
            <MediaScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 pt-20 pb-10 px-4 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-media-anime via-media-comics to-media-novels">
          MediaVerse
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Explore an immersive universe of comics, anime, novels, magazines, and cartoons.
          Discover new stories and revisit your favorites.
        </p>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 w-full max-w-4xl">
          <Link to="/comics">
            <Button variant="outline" size="lg" className="w-full border-media-comics hover:bg-media-comics/10">
              <BookOpen className="mr-2 h-5 w-5 text-media-comics" />
              Comics
            </Button>
          </Link>
          <Link to="/anime">
            <Button variant="outline" size="lg" className="w-full border-media-anime hover:bg-media-anime/10">
              <Film className="mr-2 h-5 w-5 text-media-anime" />
              Anime
            </Button>
          </Link>
          <Link to="/novels">
            <Button variant="outline" size="lg" className="w-full border-media-novels hover:bg-media-novels/10">
              <BookText className="mr-2 h-5 w-5 text-media-novels" />
              Novels
            </Button>
          </Link>
          <Link to="/magazines">
            <Button variant="outline" size="lg" className="w-full border-media-magazines hover:bg-media-magazines/10">
              <Newspaper className="mr-2 h-5 w-5 text-media-magazines" />
              Magazines
            </Button>
          </Link>
          <Link to="/cartoons">
            <Button variant="outline" size="lg" className="w-full border-media-cartoons hover:bg-media-cartoons/10">
              <Tv className="mr-2 h-5 w-5 text-media-cartoons" />
              Cartoons
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          Click and drag to explore the 3D universe, or use the navigation above.
        </div>
      </div>
    </div>
  );
};

export default Index;
