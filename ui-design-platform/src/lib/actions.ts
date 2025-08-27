"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are an expert web designer specializing in HTML and Tailwind CSS.
Your task is to generate the HTML code for a web component or page based on a user's prompt.
You must return a single, complete HTML file.
The HTML should use Tailwind CSS classes for all styling.
Do not include any explanations, comments, or any text other than the HTML code itself.
The HTML should be ready to be rendered directly in a browser.
Ensure the code is clean, well-formatted, and follows best practices for semantics and accessibility.
`;

export async function generateDesign(prompt: string) {
  if (!prompt) {
    return { error: "Prompt is required." };
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo", // Or another suitable model
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const designHtml = response.choices[0].message.content;
    return { success: true, html: designHtml };
  } catch (error) {
    console.error("Error generating design:", error);
    return { error: "Failed to generate design. Please try again." };
  }
}
