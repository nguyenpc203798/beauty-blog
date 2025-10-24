import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-xl font-serif font-bold">Beauty Bloom</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for beauty tips, product reviews, and skincare advice.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">Home</Link></li>
              <li><a href="#skincare" className="text-muted-foreground hover:text-primary transition-smooth">Skincare</a></li>
              <li><a href="#makeup" className="text-muted-foreground hover:text-primary transition-smooth">Makeup</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-smooth">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Beauty Tips</span></li>
              <li><span className="text-muted-foreground">Product Reviews</span></li>
              <li><span className="text-muted-foreground">Tutorials</span></li>
              <li><span className="text-muted-foreground">Trends</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Beauty Bloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
