import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Beauty Bloom
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium transition-smooth hover:text-primary">
            Home
          </Link>
          <a href="#skincare" className="text-sm font-medium transition-smooth hover:text-primary">
            Skincare
          </a>
          <a href="#makeup" className="text-sm font-medium transition-smooth hover:text-primary">
            Makeup
          </a>
          <a href="#reviews" className="text-sm font-medium transition-smooth hover:text-primary">
            Reviews
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
