import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React and start building your first application." },
  { id: 2, title: "Advanced CSS Techniques", excerpt: "Discover powerful CSS techniques to create stunning layouts and animations." },
  { id: 3, title: "JavaScript ES6 Features", excerpt: "Explore the new features introduced in ECMAScript 6 and how to use them effectively." },
  { id: 4, title: "Building RESTful APIs with Node.js", excerpt: "Learn how to create robust and scalable RESTful APIs using Node.js and Express." },
  { id: 5, title: "Introduction to GraphQL", excerpt: "Discover the benefits of GraphQL and how it differs from traditional REST APIs." },
];

const Blog = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link to={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;