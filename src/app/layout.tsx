import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PhotoRecipe - Recognize Dishes & Ingredients, Get Recipes Instantly",
  description:
    "PhotoRecipe is an AI-powered app that recognizes dishes and ingredients from photos. Upload a food photo to get instant recipe suggestions and ingredient-based cooking ideas.",
  keywords:
    "recipe app, food recognition, AI recipe finder, ingredient recognition, food photo app, cooking app, recipe suggestions",
  openGraph: {
    title: "PhotoRecipe - Recognize Dishes & Ingredients, Get Recipes Instantly",
    description:
      "Take a photo of your dish or ingredients, and let PhotoRecipe find the perfect recipe for you. Get instant recipe recommendations and start cooking with ease.",
    url: "https://www.photorecipe.one",
    type: "website",
    images: [
      {
        url: "https://www.photorecipe.one/title-photo.png",
        width: 1200,
        height: 630,
        alt: "PhotoRecipe - Recognize Dishes & Ingredients, Get Recipes Instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoRecipe - Recognize Dishes & Ingredients, Get Recipes Instantly",
    description:
      "Upload a food photo and discover recipes instantly. Recognize dishes or ingredients and get cooking ideas.",
    images: [
      {
        url: "https://www.photorecipe.one/title-photo.png",
        alt: "PhotoRecipe App Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
