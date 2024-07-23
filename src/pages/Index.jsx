import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const recentPosts = [
  { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React and start building your first application." },
  { id: 2, title: "Advanced CSS Techniques", excerpt: "Discover powerful CSS techniques to create stunning layouts and animations." },
  { id: 3, title: "JavaScript ES6 Features", excerpt: "Explore the new features introduced in ECMAScript 6 and how to use them effectively." },
];

const Index = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-muted-foreground">Exploring the world of web development, one post at a time.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
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
      </section>
    </div>
  );
};

export default Index;