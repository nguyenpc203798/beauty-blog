import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogPosts } from "@/data/blogPosts";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const FeaturedSlider = () => {
  const navigate = useNavigate();
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  
  // Get first 3 posts as featured
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 gradient-primary bg-clip-text text-transparent">
          Featured Articles
        </h2>
        
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {featuredPosts.map((post) => (
              <CarouselItem key={post.id}>
                <Card className="border-0 shadow-elegant overflow-hidden cursor-pointer group" onClick={() => navigate(`/post/${post.id}`)}>
                  <CardContent className="p-0">
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4 text-foreground">
                          {post.title}
                        </h3>
                        
                        <p className="text-base md:text-lg text-muted-foreground mb-6 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedSlider;
