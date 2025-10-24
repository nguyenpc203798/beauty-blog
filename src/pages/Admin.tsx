import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AdminStats } from "@/components/admin/AdminStats";
import { PostManagement } from "@/components/admin/PostManagement";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your blog posts and view analytics
            </p>
          </div>
          
          <AdminStats />
          <PostManagement />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
