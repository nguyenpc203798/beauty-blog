import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { FileText, TrendingUp, Clock } from "lucide-react";

export const AdminStats = () => {
  const totalPosts = blogPosts.length;
  const categories = [...new Set(blogPosts.map(post => post.category))];
  const recentPosts = blogPosts.slice(0, 3);

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
            {blogPosts[0]?.title}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {blogPosts[0]?.category}
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
            Last updated {blogPosts[0]?.date}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
