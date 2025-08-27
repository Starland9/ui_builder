"use client";

import { useDesignStore } from "@/stores/design-store";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeViewProps {
  language: "html" | "css" | "javascript" | "typescript";
}

export default function CodeView({ language }: CodeViewProps) {
  const { generatedHtml } = useDesignStore();

  const codeToShow = language === "html" ? generatedHtml : `/* ${language.toUpperCase()} code will appear here. */`;

  if (!codeToShow) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">
          Generate a design to see the code.
        </p>
      </div>
    );
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        width: "100%",
        height: "100%",
        margin: 0,
        backgroundColor: "transparent",
      }}
      codeTagProps={{
        style: {
          fontFamily: "var(--font-mono)",
        },
      }}
    >
      {codeToShow}
    </SyntaxHighlighter>
  );
}
