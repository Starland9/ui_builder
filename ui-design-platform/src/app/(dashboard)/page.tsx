import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import UserButton from "@/components/layout/user-button";

export default function Home() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left Panel */}
      <div className="w-[40%] p-4 flex flex-col gap-4 border-r">
        <h2 className="text-xl font-bold">Prompt</h2>
        <Textarea
          placeholder="e.g., A modern landing page for a SaaS company with a hero section, feature list, and a CTA button."
          className="flex-grow resize-none"
        />
        <div className="flex gap-2">
          <Button>Generate</Button>
          <Button variant="secondary">Modify</Button>
          <Button variant="outline">Save</Button>
        </div>
        <Separator />
        <h3 className="text-lg font-semibold">History</h3>
        <div className="flex-grow overflow-y-auto">
          {/* History items will go here */}
          <p className="text-sm text-muted-foreground">No prompts yet.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-[60%] p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            {/* Placeholder for responsive controls */}
            <Button variant="outline" size="sm">Desktop</Button>
            <Button variant="ghost" size="sm">Tablet</Button>
            <Button variant="ghost" size="sm">Mobile</Button>
          </div>
          <UserButton />
        </div>
        <Tabs defaultValue="preview" className="flex-grow flex flex-col">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview" className="flex-grow border rounded-md p-4 mt-4">
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">
                Your generated design will appear here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="html" className="flex-grow border rounded-md p-4 mt-4">
            <p className="text-muted-foreground">HTML code will appear here.</p>
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
