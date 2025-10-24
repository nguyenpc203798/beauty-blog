import { Link } from "react-router-dom";
import { Calendar, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden border-border shadow-soft hover:shadow-elegant transition-smooth hover:scale-[1.02] animate-scale-in">
      <Link to={`/post/${post.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        
        <CardHeader>
          <Badge className="w-fit mb-2">{post.category}</Badge>
          <h3 className="text-xl font-serif font-semibold group-hover:text-primary transition-smooth line-clamp-2">
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs flex items-center gap-1 text-muted-foreground">
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;
