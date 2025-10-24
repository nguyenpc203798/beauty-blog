import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedPosts from "@/components/RelatedPosts";
import { Badge } from "@/components/ui/badge";
import { getPostById, getRelatedPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = getPostById(Number(id));

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="py-12">
          <div className="container max-w-4xl">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>
            
            <div className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
              
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-elegant mb-8 animate-scale-in"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground animate-fade-in"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </article>
        
        <RelatedPosts posts={relatedPosts} />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
