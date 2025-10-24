import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Luxury beauty and cosmetics products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      
      <div className="container relative h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Discover Your
            <span className="block gradient-primary bg-clip-text text-transparent">
              Inner Glow
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Expert beauty tips, honest reviews, and the latest trends in cosmetics and skincare.
          </p>
          <a 
            href="#posts" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-elegant hover:shadow-hover transition-smooth hover:scale-105"
          >
            Explore Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
