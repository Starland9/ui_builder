"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 border rounded-lg shadow-md flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="text-muted-foreground">Sign in to continue to the platform.</p>
        <Button onClick={() => signIn("github", { callbackUrl: "/" })}>
          Sign In with GitHub
        </Button>
      </div>
    </div>
  );
}
