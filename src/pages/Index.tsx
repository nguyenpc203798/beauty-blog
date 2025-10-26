import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { categories, filterPostsByCategory, searchPosts } from "@/api/post.api";
import { BlogPost } from "@/data/blogPosts";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        let posts: BlogPost[] = [];

        if (searchQuery.trim()) {
          posts = await searchPosts(searchQuery);
        } else {
          posts = await filterPostsByCategory(activeCategory);
        }

        setFilteredPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setFilteredPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
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

            {loading ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">Loading...</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No articles found. Try adjusting your search or filters.
                </p>
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
