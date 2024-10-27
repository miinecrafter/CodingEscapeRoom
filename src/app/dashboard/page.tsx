import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Globe, Server } from "lucide-react"
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import NavBar from "@/components/navbar";

export default async function Dashboard() {
    const session = await getSession();
    const user = session?.user;
    if (!user) {
      redirect("/api/auth/login");
    }

  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern websites.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      level: "Beginner",
      duration: "8 weeks",
      enrolled: 0,
    },
    {
      title: "Python for Data Science",
      description: "Master Python programming for data analysis and machine learning.",
      icon: <Code className="h-8 w-8 text-primary" />,
      level: "Intermediate",
      duration: "10 weeks",
      enrolled: 0,
    },
    {
      title: "Full-Stack JavaScript",
      description: "Build complete web applications with Node.js, Express, and React.",
      icon: <Server className="h-8 w-8 text-primary" />,
      level: "Advanced",
      duration: "12 weeks",
      enrolled: 0,
    },
    {
      title: "Machine Learning Essentials",
      description: "Dive into machine learning algorithms and practical applications.",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      level: "Advanced",
      duration: "14 weeks",
      enrolled: 0,
    },
  ]

  return (
    <div>
        <NavBar/>
      <h1 className="text-3xl font-bold mb-6 mt-20">Your Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                {course.icon}
                <Badge>{course.level}</Badge>
              </div>
              <CardTitle className="mt-4">{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Duration: {course.duration}</span>
                <span>{course.enrolled.toLocaleString()} enrolled</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-400 text-white">Start</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}