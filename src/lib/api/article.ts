import api from "@/lib/axios";
import { Article } from "@/app/models/artikel/artikel/artikel";
import { PaginationMeta } from "@/lib/pagination";

export interface BeritaListResponse {
  data: {
    data: Article[];
    pagination: PaginationMeta;
  };
}

export interface BeritaDetailResponse {
  data: Article;
}

export const getBerita = (params?: {
  page?: number;
  limit?: number;
  search?: string;
  category_id?: string;
}) =>
  api.get<BeritaListResponse>("/article", { params });

export const getBeritaById = (id: string) =>
  api.get<BeritaDetailResponse>(`/article/${id}`);

export const createBerita = (payload: {
  title: string;
  excerpt: string;
  content: any;
  category_id: string;
  tag_ids: string[];
  thumbImage?: File;
  images?: Record<string, File>;
}) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (!value) return;

    if (key === "content") {
      formData.append("content", JSON.stringify(value));
    }
    else if (key === "images") {
      Object.entries(value as Record<string, File>).forEach(([id, file]) => {
        formData.append(`images[${id}]`, file);
      });
    }
    else if (Array.isArray(value)) {
      value.forEach(v => formData.append(`${key}[]`, v));
    }
    else {
      formData.append(key, value as any);
    }
  });

  return api.post("/article", formData);
};


export const getBeritaPublish = (params?: {
  page?: number;
  limit?: number;
  search?: string;
  category_id?: string;
}) =>
  api.get<BeritaListResponse>("/article/publish", { params });


export const updateBerita = (
  id: string,
  payload: Partial<{
    title: string;
    excerpt: string;
    content: any;
    category_id: string;
    tag_ids: string[];
    thumbImage: File;
    isActive: boolean;
    images: Record<string, File>;
  }>
) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (!value) return;

    if (key === "content") {
      formData.append("content", JSON.stringify(value));
    }
    else if (key === "images") {
      Object.entries(value as Record<string, File>).forEach(([id, file]) => {
        formData.append(`images[${id}]`, file);
      });
    }
    else if (Array.isArray(value)) {
      value.forEach(v => formData.append(`${key}[]`, v));
    }
    else {
      formData.append(key, value as any);
    }
  });

  return api.put(`/article/${id}`, formData);
};



export const publishBerita = (id: string) =>
  api.patch(`/article/publish/${id}`);

export const deleteBerita = (id: string) =>
  api.delete(`/article/${id}`);
