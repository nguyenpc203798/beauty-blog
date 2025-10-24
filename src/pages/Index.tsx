import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { blogPosts, categories, filterPostsByCategory, searchPosts } from "@/data/blogPosts";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    let posts = filterPostsByCategory(activeCategory);
    
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
    }
    
    return posts;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <main className="flex-1">
        <section id="posts" className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <CategoryFilter 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No articles found. Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
