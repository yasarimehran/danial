"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  price: number;
  originalPrice?: number;
  duration: string;
  level: string;
  lessons: number;
  students: number;
  rating: number;
  instructor: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
}

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const blogPosts: BlogPost[] = [
    {
      id: "english-grammar-fundamentals",
      title: "English Grammar Fundamentals",
      description:
        "Master the basics of English grammar with comprehensive lessons covering parts of speech, sentence structure, and common grammar rules.",
      excerpt:
        "Build a strong foundation in English grammar with our comprehensive course designed for beginners. Learn essential concepts through interactive lessons and practical exercises.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
      price: 49.99,
      originalPrice: 79.99,
      duration: "8 weeks",
      level: "Beginner",
      lessons: 24,
      students: 1250,
      rating: 4.8,
      instructor: "Dr. Sarah Johnson",
      publishDate: "December 15, 2024",
      readTime: "8 weeks",
      category: "Grammar",
      tags: ["Grammar", "Beginner", "Fundamentals", "Writing"],
    },
    {
      id: "business-english-communication",
      title: "Business English Communication",
      description:
        "Develop professional English skills for the workplace, including business writing, presentations, and cross-cultural communication.",
      excerpt:
        "Excel in professional settings with essential business English skills. Master workplace communication, presentations, and cross-cultural interactions.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      price: 89.99,
      originalPrice: 129.99,
      duration: "10 weeks",
      level: "Intermediate",
      lessons: 32,
      students: 890,
      rating: 4.9,
      instructor: "Prof. Michael Chen",
      publishDate: "December 10, 2024",
      readTime: "10 weeks",
      category: "Business",
      tags: ["Business", "Communication", "Professional", "Workplace"],
    },
    {
      id: "advanced-english-writing",
      title: "Advanced English Writing",
      description:
        "Enhance your writing skills with advanced techniques for essays, reports, creative writing, and academic papers.",
      excerpt:
        "Take your writing to the next level with advanced techniques for essays, reports, and creative writing. Perfect for academic and professional contexts.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
      price: 69.99,
      originalPrice: 99.99,
      duration: "12 weeks",
      level: "Advanced",
      lessons: 28,
      students: 650,
      rating: 4.7,
      instructor: "Dr. Emily Rodriguez",
      publishDate: "December 8, 2024",
      readTime: "12 weeks",
      category: "Writing",
      tags: ["Writing", "Advanced", "Academic", "Creative"],
    },
    {
      id: "english-pronunciation-mastery",
      title: "English Pronunciation Mastery",
      description:
        "Perfect your English pronunciation with phonetics, accent reduction, and speaking confidence building exercises.",
      excerpt:
        "Master English pronunciation and reduce your accent with our comprehensive course. Build confidence in speaking through practical exercises.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      price: 59.99,
      originalPrice: 89.99,
      duration: "6 weeks",
      level: "All Levels",
      lessons: 18,
      students: 2100,
      rating: 4.6,
      instructor: "Prof. David Thompson",
      publishDate: "December 12, 2024",
      readTime: "6 weeks",
      category: "Pronunciation",
      tags: ["Pronunciation", "Speaking", "Accent", "Phonetics"],
    },
    {
      id: "ielts-preparation-course",
      title: "IELTS Preparation Course",
      description:
        "Comprehensive preparation for the IELTS exam with practice tests, strategies, and expert guidance for all four sections.",
      excerpt:
        "Prepare for IELTS success with our comprehensive course covering all four exam sections. Get expert guidance and practice with real test materials.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      price: 149.99,
      originalPrice: 199.99,
      duration: "16 weeks",
      level: "Advanced",
      lessons: 40,
      students: 750,
      rating: 4.9,
      instructor: "Dr. Lisa Wang",
      publishDate: "December 5, 2024",
      readTime: "16 weeks",
      category: "Exam Preparation",
      tags: ["IELTS", "Exam", "Advanced", "Test Preparation"],
    },
    {
      id: "conversational-english",
      title: "Conversational English",
      description:
        "Improve your speaking skills with real-world conversations, idioms, slang, and cultural context for everyday communication.",
      excerpt:
        "Speak English naturally with confidence. Learn real-world conversations, idioms, and cultural context for everyday communication.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      price: 39.99,
      originalPrice: 69.99,
      duration: "8 weeks",
      level: "Intermediate",
      lessons: 20,
      students: 1800,
      rating: 4.5,
      instructor: "Prof. James Wilson",
      publishDate: "December 18, 2024",
      readTime: "8 weeks",
      category: "Conversation",
      tags: ["Conversation", "Speaking", "Idioms", "Cultural"],
    },
    {
      id: "english-literature-analysis",
      title: "English Literature & Analysis",
      description:
        "Explore classic and contemporary English literature while developing critical thinking and analytical writing skills.",
      excerpt:
        "Discover the beauty of English literature while developing critical thinking skills. Analyze classic and contemporary works with expert guidance.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      price: 79.99,
      originalPrice: 119.99,
      duration: "14 weeks",
      level: "Advanced",
      lessons: 36,
      students: 420,
      rating: 4.8,
      instructor: "Dr. Robert Anderson",
      publishDate: "December 3, 2024",
      readTime: "14 weeks",
      category: "Literature",
      tags: ["Literature", "Analysis", "Critical Thinking", "Classics"],
    },
    {
      id: "english-academic-purposes",
      title: "English for Academic Purposes",
      description:
        "Prepare for academic success with research skills, academic writing, presentation techniques, and study strategies.",
      excerpt:
        "Excel in academic environments with essential skills for research, writing, and presentations. Perfect for university students and researchers.",
      image:
        "https://images.unsplash.com/photo-1523240794102-9ebd0b167f3f?w=400&h=250&fit=crop",
      price: 99.99,
      originalPrice: 149.99,
      duration: "12 weeks",
      level: "Intermediate",
      lessons: 30,
      students: 680,
      rating: 4.7,
      instructor: "Prof. Maria Garcia",
      publishDate: "December 20, 2024",
      readTime: "12 weeks",
      category: "Academic",
      tags: ["Academic", "Research", "University", "Study Skills"],
    },
  ];

  const categories = [
    "all",
    "Grammar",
    "Business",
    "Writing",
    "Pronunciation",
    "Exam Preparation",
    "Conversation",
    "Literature",
    "Academic",
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            English Learning Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of English courses and learning
            resources designed to help you master the language
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-violet-600 text-white"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {category === "all" ? "All Posts" : category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                {post.originalPrice && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {Math.round(
                      ((post.originalPrice - post.price) / post.originalPrice) *
                        100
                    )}
                    % OFF
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {post.level}
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground bg-violet-100 text-violet-800 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.publishDate}
                  </span>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Post Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <span>📚 {post.lessons} lessons</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>⭐ {post.rating}</span>
                    <span>({post.students})</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-foreground">
                      ${post.price}
                    </span>
                    {post.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${post.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    by {post.instructor}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-violet-600 hover:bg-violet-700 cursor-pointer">
                    Enroll Now
                  </Button>
                  <Link href={`/blogs/${post.id}`}>
                    <Button variant="outline" className="cursor-pointer">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-foreground mb-2">
              No blog posts found
            </h3>
            <p className="text-muted-foreground">
              Try selecting a different category or check back later for new
              posts.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
