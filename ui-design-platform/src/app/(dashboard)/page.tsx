"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import UserButton from "@/components/layout/user-button";
import { useDesignStore } from "@/stores/design-store";
import { generateDesign } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import PreviewPane from "@/components/preview/PreviewPane";
import CodeView from "@/components/editor/CodeView";

export default function Home() {
  const {
    prompt,
    setPrompt,
    isGenerating,
    setIsGenerating,
    setGeneratedHtml
  } = useDesignStore();

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const result = await generateDesign(prompt);
      if (result.success && result.html) {
        setGeneratedHtml(result.html);
      } else {
        // TODO: Show an error toast to the user
        console.error(result.error);
        setGeneratedHtml(null);
      }
    } catch (error) {
      console.error(error);
      setGeneratedHtml(null);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left Panel */}
      <div className="w-[40%] p-4 flex flex-col gap-4 border-r">
        <h2 className="text-xl font-bold">Prompt</h2>
        <Textarea
          placeholder="e.g., A modern landing page for a SaaS company with a hero section, feature list, and a CTA button."
          className="flex-grow resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="flex gap-2">
          <Button onClick={handleGenerate} disabled={isGenerating || !prompt}>
            {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate
          </Button>
          <Button variant="secondary" disabled>Modify</Button>
          <Button variant="outline" disabled>Save</Button>
        </div>
        <Separator />
        <h3 className="text-lg font-semibold">History</h3>
        <div className="flex-grow overflow-y-auto">
          <p className="text-sm text-muted-foreground">No prompts yet.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-[60%] p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Desktop</Button>
            <Button variant="ghost" size="sm">Tablet</Button>
            <Button variant="ghost" size="sm">Mobile</Button>
          </div>
          <UserButton />
        </div>
        <Tabs defaultValue="preview" className="flex-grow flex flex-col">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="flex-grow border rounded-md p-0 mt-4 overflow-hidden">
            <PreviewPane />
          </TabsContent>
          <TabsContent value="html" className="flex-grow border rounded-md mt-4 overflow-hidden">
            <CodeView language="html" />
          </TabsContent>
          <TabsContent value="react" className="flex-grow border rounded-md p-4 mt-4">
            <p className="text-muted-foreground">React code will appear here.</p>
          </TabsContent>
          <TabsContent value="css" className="flex-grow border rounded-md p-4 mt-4">
            <p className="text-muted-foreground">CSS code will appear here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
