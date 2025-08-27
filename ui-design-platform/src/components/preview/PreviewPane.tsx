"use client";

import { useDesignStore } from "@/stores/design-store";

export default function PreviewPane() {
  const { generatedHtml } = useDesignStore();

  const createSrcDoc = (html: string) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;
  };

  if (!generatedHtml) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">
          Your generated design will appear here.
        </p>
      </div>
    );
  }

  return (
    <iframe
      title="Design Preview"
      className="w-full h-full border-0"
      srcDoc={createSrcDoc(generatedHtml)}
      sandbox="allow-scripts"
    />
  );
}
