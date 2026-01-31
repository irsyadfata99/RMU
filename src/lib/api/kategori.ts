import api from "@/lib/axios";

/* =====================
   TYPES
===================== */
export interface Category {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationMeta {
  page: number;
  totalPages: number;
  total: number;
}

export interface CategoryResponse {
  data: Category[];
  pagination: PaginationMeta;
}

export interface CategoryListResponse {
  data: {
    data: Category[];
    pagination: PaginationMeta;
  };
}


export const getCategories = (page = 1, limit = 10) =>
  api.get<CategoryListResponse>("/categoryPost", {
    params: { page, limit },
  });

export async function getOptions() {
  const res = await api.get("/categoryPost/options");
  return res.data.data; 
}


export const getCategoryById = (id: string) =>
  api.get(`/categoryPost/${id}`);

export const createCategory = (payload: {
  name: string;
  description: string;
}) =>
  api.post("/categoryPost", payload);

export const updateCategory = (
  id: string,
  payload: { name: string; description: string }
) =>
  api.put(`/categoryPost/${id}`, payload);

export const deleteCategory = (id: string) =>
  api.delete(`/categoryPost/${id}`);
