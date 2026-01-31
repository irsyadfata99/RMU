import api from "@/lib/axios";

/* =====================
   TYPES
===================== */
export interface Tag {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationMeta {
  page: number;
  totalPages: number;
  total: number;
}

export interface TagResponse {
  data: Tag[];
  pagination: PaginationMeta;
}

export interface TagListResponse {
  data: {
    data: Tag[];
    pagination: PaginationMeta;
  };
}


export const getTag = (page = 1, limit = 10) =>
  api.get<TagListResponse>("/tagPost", {
    params: { page, limit },
  });

export async function getOptions() {
  const res = await api.get("/tagPost/options");
  return res.data.data; 
}

export const getTagById = (id: string) =>
  api.get(`/tagPost/${id}`);

export const createTag = (payload: {
  name: string;
}) =>
  api.post("/tagPost", payload);

export const updateTag = (
  id: string,
  payload: { name: string }
) =>
  api.put(`/tagPost/${id}`, payload);

export const deleteTag = (id: string) =>
  api.delete(`/tagPost/${id}`);
