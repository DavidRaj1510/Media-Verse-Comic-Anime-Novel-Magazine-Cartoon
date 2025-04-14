
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComicsPage from "./pages/ComicsPage";
import AnimePage from "./pages/AnimePage";
import NovelsPage from "./pages/NovelsPage";
import MagazinesPage from "./pages/MagazinesPage";
import CartoonsPage from "./pages/CartoonsPage";
import ComicDetail from "./pages/ComicDetail";
import AnimeDetail from "./pages/AnimeDetail";
import NovelDetail from "./pages/NovelDetail";
import MagazineDetail from "./pages/MagazineDetail";
import CartoonDetail from "./pages/CartoonDetail";
import { Navbar } from "./components/Navbar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:id" element={<ComicDetail />} />
          <Route path="/anime" element={<AnimePage />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/novels" element={<NovelsPage />} />
          <Route path="/novels/:id" element={<NovelDetail />} />
          <Route path="/magazines" element={<MagazinesPage />} />
          <Route path="/magazines/:id" element={<MagazineDetail />} />
          <Route path="/cartoons" element={<CartoonsPage />} />
          <Route path="/cartoons/:id" element={<CartoonDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
