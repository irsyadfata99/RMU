"use client";

import ArticleForm from "./ArticleForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <ArticleForm
      editingArticle={null}
      currentUser={null}
      onCancel={() => router.back()}
    />
  );
}
