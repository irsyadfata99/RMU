"use client";

import { useEffect, useRef, useId } from "react";

interface Props {
  initialData?: any;
  onChange: (data: any, files: Record<string, File>) => void;
}

export default function EditorField({ initialData, onChange }: Props) {
  const editorRef     = useRef<any>(null);
  const imageStore    = useRef<Record<string, File>>({});
  const holderId      = useId();
  const isInitialized = useRef(false);
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    let editor: any;

    (async () => {
      const EditorJS  = (await import("@editorjs/editorjs")).default;
      const Header    = (await import("@editorjs/header")).default;
      const List      = (await import("@editorjs/list")).default;
      const Paragraph = (await import("@editorjs/paragraph")).default;
      const ImageTool = (await import("@editorjs/image")).default;

      editor = new EditorJS({
        holder: holderId,
        data: initialData ?? { blocks: [] },
        autofocus: true,
        tools: {
          header: Header,
          paragraph: {
            class: Paragraph as any,
            config: { placeholder: "Tulis konten..." },
          },
          list: List,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile: async (file: File) => {
                  try {
                    const formData = new FormData();
                    formData.append("file", file);

                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media/upload`, {
                      method: "POST",
                      body: formData,
                    });

                    if (!res.ok) throw new Error("Upload gagal");

                    const data = await res.json();

                    const tempId = crypto.randomUUID();
                    imageStore.current[tempId] = file;

                    const fileUrl = `${process.env.NEXT_PUBLIC_API_UPLOAD}/uploads/articles/${data.file.filename}`;

                    return {
                      success: 1,
                      file: {
                        url: fileUrl,
                      },
                      tempId,
                    };
                  } catch (err) {
                    console.error(err);
                    return { success: 0 };
                  }
                },
              },
            },
          },
        },
      onChange: async () => {
    const data = await editor.save();

    data.blocks.forEach((block: any) => {
      if (block.type === "image" && block.data?.file?.url?.startsWith("blob:")) {
        if (!block.data.tempId) {
          const tempId = Object.keys(imageStore.current).find(
            id => imageStore.current[id]
          );
          block.data.tempId = tempId;
        }
      }
    });

    onChange(data, imageStore.current);
  },

      });

      editorRef.current = editor;
    })();

    return () => {
      editorRef.current?.destroy?.();
      editorRef.current = null;
    };
  }, [holderId]);

  return (
    <div
      id={holderId}
      className="border rounded p-4 bg-white min-h-[300px]"
    />
  );
}
