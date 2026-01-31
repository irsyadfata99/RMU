
export interface CategoryPost {
  id: string;
  name: string;
  description: string | null;
}

export interface TagPost {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

export interface Author {
  id: string;
  username: string;
  email: string;
  name: string;
  role: string;
}

export interface ArticleUI {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  category: string;
  content: string;
  status: string;
  createdAt: string;
  featured?: boolean;

  
    CategoryPost?: CategoryPost;
    User?: Author;
    TagPosts?: TagPost[];
}

export interface ArticleAPI {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbImage: string;
  status: "PUBLISHED" | "DRAFT";
  createdAt: string;

  CategoryPost: CategoryPost;
  User: Author;
  TagPosts: TagPost[];
}

export interface ArticleFE {
  id: string;
  date: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  tags: string[];
}
