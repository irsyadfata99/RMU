
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

export interface Article {
  id: string;
  date: string;
  category_id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbImage: string;
  status?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;

  CategoryPost: CategoryPost;
  User: Author;
  TagPosts: TagPost[];
}
