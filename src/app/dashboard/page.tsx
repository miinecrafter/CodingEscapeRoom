import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Globe, Server } from "lucide-react"
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { CompleteUserRegistration } from "@/actions/auth";

export default async function Dashboard() {
    const session = await getSession();
    const user = session?.user;
    if (!user) {
      redirect("/api/auth/login");
    }

    await CompleteUserRegistration(user.email)

  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern websites.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      level: "Beginner",
      link: "web-dev",
      enrolled: 0,
    },
    {
      title: "Intro to Python",
      description: "Learn Python programming for data analysis and machine learning.",
      icon: <Code className="h-8 w-8 text-primary" />,
      level: "Beginner",
      link: "python",
      enrolled: 0,
    },
    {
      title: "Javascript",
      description: "Learn Javascript for web development",
      icon: <Server className="h-8 w-8 text-primary" />,
      level: "Beginner",
      link: "javascript",
      enrolled: 0,
    },
    {
      title: "Browser Development Tools",
      description: "Interact and manipulate your website in realtime",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      level: "Beginner",
      link: "dev-tools",
      enrolled: 0,
    },
  ]

  return (
    <div
    style={{
        backgroundImage: 'url("/images/dashboard-image.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
    }}>
        
    <h1 className="text-4xl font-bold mb-6 pt-10 px-7">Courses</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-7">
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
                        <span>{course.enrolled.toLocaleString()} % completed</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link className="bg-orange-400 text-white w-full p-2 text-center hover:opacity-80" href={`courses/${course.link}`}>Start</Link>
                </CardFooter>
            </Card>
        ))}
    </div>
</div>
  )
}