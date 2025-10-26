import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPosts } from "@/api/post.api";
import type { BlogPost } from "@/data/blogPosts";
import { FileText, TrendingUp, Clock } from "lucide-react";

export const AdminStats = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPosts = posts.length;
  const categories = [...new Set(posts.map((post) => post.category))];
  const recentPosts = posts.slice(0, 3);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            className="bg-gradient-to-br from-card to-accent/10 border-accent/20"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-4 bg-muted animate-pulse rounded"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 w-16 bg-muted animate-pulse rounded mb-2"></div>
              <div className="h-3 w-24 bg-muted animate-pulse rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
      <Card className="bg-gradient-to-br from-card to-accent/10 border-accent/20 hover-scale">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          <FileText className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary">{totalPosts}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Across {categories.length} categories
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-card to-accent/10 border-accent/20 hover-scale">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Most Popular</CardTitle>
          <TrendingUp className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold text-foreground line-clamp-1">
            {posts[0]?.title || "No posts available"}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {posts[0]?.category || "N/A"}
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-card to-accent/10 border-accent/20 hover-scale">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
          <Clock className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-sm font-medium text-foreground">
            {recentPosts.length} posts this month
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Last updated {posts[0]?.date || "N/A"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
