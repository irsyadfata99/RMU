// lib/api/berita.ts

export interface BeritaItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: number;
  tags: string[];
  featured: boolean;
  status?: "draft" | "published";
}

export interface BeritaParams {
  page?: number;
  per_page?: number;
  category?: string;
  search?: string;
}

export interface BeritaResponse {
  data: BeritaItem[];
  meta?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

class BeritaService {
  private baseUrl = "/api/berita"; // Replace with your actual API base URL

  // Get all articles with filtering and pagination
  async getBerita(params: BeritaParams = {}): Promise<BeritaResponse> {
    try {
      // For demo purposes, we'll use localStorage data
      // In production, replace this with actual API call
      const savedArticles = localStorage.getItem("admin_articles");
      let articles: BeritaItem[] = [];

      if (savedArticles) {
        articles = JSON.parse(savedArticles);
      }

      // Filter only published articles for public display
      articles = articles.filter((article) => article.status === "published");

      // Apply search filter
      if (params.search) {
        const searchTerm = params.search.toLowerCase();
        articles = articles.filter(
          (article) =>
            article.title.toLowerCase().includes(searchTerm) || article.excerpt.toLowerCase().includes(searchTerm) || article.content.toLowerCase().includes(searchTerm) || article.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
        );
      }

      // Apply category filter
      if (params.category && params.category !== "semua") {
        articles = articles.filter((article) => article.category.toLowerCase() === params.category?.toLowerCase());
      }

      // Sort by date (newest first)
      articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

      // Apply pagination
      const page = params.page || 1;
      const perPage = params.per_page || 10;
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedArticles = articles.slice(startIndex, endIndex);

      return {
        data: paginatedArticles,
        meta: {
          current_page: page,
          last_page: Math.ceil(articles.length / perPage),
          per_page: perPage,
          total: articles.length,
        },
      };
    } catch (error) {
      console.error("Error fetching berita:", error);
      throw error;
    }
  }

  // Get single article by ID
  async getBeritaById(id: number): Promise<BeritaItem | null> {
    try {
      const savedArticles = localStorage.getItem("admin_articles");
      if (!savedArticles) return null;

      const articles: BeritaItem[] = JSON.parse(savedArticles);
      const article = articles.find((article) => article.id === id && article.status === "published");

      return article || null;
    } catch (error) {
      console.error("Error fetching berita by ID:", error);
      throw error;
    }
  }

  // Get categories
  async getCategories(): Promise<string[]> {
    try {
      const savedArticles = localStorage.getItem("admin_articles");
      if (!savedArticles) return [];

      const articles: BeritaItem[] = JSON.parse(savedArticles);
      const categories = [...new Set(articles.filter((article) => article.status === "published").map((article) => article.category))];

      return categories.sort();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return ["Pendidikan", "Sosial", "Ekonomi", "Kesehatan", "Seni Budaya", "Kepemudaan"];
    }
  }

  // Get featured articles
  async getFeaturedBerita(limit: number = 3): Promise<BeritaItem[]> {
    try {
      const response = await this.getBerita({ per_page: 100 });
      return response.data.filter((article) => article.featured).slice(0, limit);
    } catch (error) {
      console.error("Error fetching featured berita:", error);
      return [];
    }
  }

  // Get related articles by category
  async getRelatedBerita(categoryId: string, excludeId: number, limit: number = 3): Promise<BeritaItem[]> {
    try {
      const response = await this.getBerita({ category: categoryId, per_page: 100 });
      return response.data.filter((article) => article.id !== excludeId).slice(0, limit);
    } catch (error) {
      console.error("Error fetching related berita:", error);
      return [];
    }
  }

  // Get latest articles
  async getLatestBerita(limit: number = 5): Promise<BeritaItem[]> {
    try {
      const response = await this.getBerita({ per_page: limit });
      return response.data;
    } catch (error) {
      console.error("Error fetching latest berita:", error);
      return [];
    }
  }

  // Search articles
  async searchBerita(query: string, limit: number = 10): Promise<BeritaItem[]> {
    try {
      const response = await this.getBerita({ search: query, per_page: limit });
      return response.data;
    } catch (error) {
      console.error("Error searching berita:", error);
      return [];
    }
  }
}

// Create singleton instance
export const beritaService = new BeritaService();

// Utility functions
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

export const getCategoryColor = (category: string): string => {
  const colorMap: { [key: string]: string } = {
    Pendidikan: "bg-blue-100 text-blue-700",
    Sosial: "bg-red-100 text-red-700",
    Ekonomi: "bg-green-100 text-green-700",
    Kesehatan: "bg-teal-100 text-teal-700",
    "Seni Budaya": "bg-purple-100 text-purple-700",
    Kepemudaan: "bg-orange-100 text-orange-700",
  };
  return colorMap[category] || "bg-gray-100 text-gray-700";
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};
