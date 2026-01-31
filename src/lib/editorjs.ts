
import EditorJSHTML from "editorjs-html";

const edjsParser = EditorJSHTML();

export const editorJsToHtml = (data: any): string => {
  if (!data?.blocks) return "";

  const parsed = edjsParser.parse(data);

  if (Array.isArray(parsed)) {
    return parsed.join("");
  }

  if (typeof parsed === "object") {
    return Object.values(parsed).flat().join("");
  }

  if (typeof parsed === "string") {
    return parsed;
  }

  return "";
};
