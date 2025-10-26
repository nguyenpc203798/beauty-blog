import http from "../lib/http";
import { BlogPost } from "@/data/blogPosts";

export const getPosts = async (): Promise<BlogPost[]> => {
  try {
    const res = await http.get<BlogPost[]>("/api/posts");

    return res.data; // ✅ Trả về BlogPost object
  } catch (error) {
    console.error("❌ getPosts API error:", error);
    throw error; // Re-throw để SWR có thể bắt được
  }
};

// Lấy bài viết theo ID
export const getPostById = async (id: number): Promise<BlogPost> => {
  try {
    const res = await http.get<BlogPost>(`/api/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error("❌ getPostById API error:", error);
    throw error; // Re-throw để SWR có thể bắt được
  }
};
// Lấy bài viết liên quan
export const getRelatedPosts = async (
  currentPostId: number,
  category: string,
  limit: number = 3
): Promise<BlogPost[]> => {
  try {
    const res = await http.get<BlogPost[]>(
      `/api/posts/related?currentPostId=${currentPostId}&category=${category}&limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.error("❌ searchMovie API error:", error);
    throw error; // Re-throw để SWR có thể bắt được
  }
};

// Lọc theo category
export const filterPostsByCategory = async (
  category: string
): Promise<BlogPost[]> => {
  try {
    if (category === "All") {
      const res = await http.get<BlogPost[]>(`/api/posts`);
      return res.data;
    }

    const res = await http.get<BlogPost[]>(
      `/api/posts/filter?category=${category}`
    );
    return res.data;
  } catch (error) {
    console.error("❌ filterPostsByCategory API error:", error);
    throw error; // Re-throw để SWR có thể bắt được
  }
};

// Tìm kiếm bài viết
export const searchPosts = async (query: string): Promise<BlogPost[]> => {
  try {
    const encodedKeyword = query
      .toLowerCase()
      .normalize("NFD") // tách dấu khỏi ký tự gốc
      .replace(/[\u0300-\u036f]/g, "") // loại bỏ toàn bộ dấu
      .replace(/đ/g, "d") // chuyển đ -> d
      .replace(/Đ/g, "D") // chuyển Đ -> D
      .replace(/[^a-z0-9\s-]/g, "") // loại bỏ ký tự không hợp lệ
      .replace(/\s+/g, "-") // khoảng trắng -> gạch nối
      .replace(/-+/g, "-") // gộp nhiều gạch nối liền
      .replace(/^-+|-+$/g, ""); // bỏ gạch nối ở đầu/cuối
    const res = await http.get<BlogPost[]>(
      `/api/posts/search?q=${encodedKeyword}`
    );
    return res.data;
  } catch (error) {
    console.error("❌ searchMovie API error:", error);
    throw error; // Re-throw để SWR có thể bắt được
  }
};

// Tạo bài viết mới
export const createPost = async (
  post: Omit<BlogPost, "id">
): Promise<BlogPost> => {
  try {
    const res = await http.post<BlogPost>("/api/posts", post);
    return res.data;
  } catch (error) {
    console.error("❌ createPost API error:", error);
    throw error;
  }
};

// Cập nhật bài viết
export const updatePost = async (
  id: number,
  post: Partial<BlogPost>
): Promise<BlogPost> => {
  try {
    const res = await http.put<BlogPost>(`/api/posts/${id}`, post);
    return res.data;
  } catch (error) {
    console.error("❌ updatePost API error:", error);
    throw error;
  }
};

// Xóa bài viết
export const deletePost = async (id: number): Promise<void> => {
  try {
    await http.delete(`/api/posts/${id}`);
  } catch (error) {
    console.error("❌ deletePost API error:", error);
    throw error;
  }
};

export const categories = ["All", "Skincare", "Makeup"];
