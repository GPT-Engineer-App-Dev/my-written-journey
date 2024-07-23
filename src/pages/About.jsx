import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <Card>
        <CardHeader>
          <CardTitle>John Doe</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <img src="/placeholder.svg" alt="John Doe" className="w-full md:w-1/3 rounded-lg object-cover" />
          <div className="space-y-4">
            <p>
              Hi, I'm John Doe, a passionate web developer with over 5 years of experience in creating
              modern and responsive web applications. I specialize in React, Node.js, and GraphQL.
            </p>
            <p>
              Through this blog, I share my knowledge, experiences, and insights about web development,
              hoping to help others in their coding journey. Feel free to explore my posts and reach out
              if you have any questions or just want to connect!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;