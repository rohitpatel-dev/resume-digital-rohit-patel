import Image from "next/image";
import { Button } from "./ui/button";

function About() {
  return (
    <main className="">
      <div
        className="min-h-screen pt-20 scroll-smooth items-center justify-center max-w-7xl mx-auto px-2 lg:px-0"
        id="about"
      >
        <div>
          <Image
            src="/home.jpg"
            alt="A beautiful home"
            width={0} // Required for TypeScript, but effectively ignored
            height={0} // Required for TypeScript, but effectively ignored
            sizes="100vw"
            className="w-full h-[30rem]"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl py-4">About Me</h1>
          <p className="font-medium tetx-xl py-4">
            •Proficient in Java Spring Boot, with one year of hands-on
            experience specializing in developing robust and scalable web
            applications using the MERN stack (Mongo DB, Express, React, and
            Node.js). • Skilled in database management with a broad range of
            systems including MySQL, Mongo DB, Oracle, SQL Server, and SQL
            Database, focusing on data modeling, querying, and optimization. •
            Experienced in using Eclipse IDE for Java development, comfortable
            with Java 8, and familiar with implementing microservices
            architecture and RESTful APIs to promote modular and efficient
            application design. • Demonstrated expertise in building CRUD APIs
            and utilizing tools such as Postman for API testing, along with
            experience in SQL database management. • Proficient in using AWS S3
            for data storage, optimizing data accessibility and security across
            applications. • Strong problem-solving skills dedicated to
            delivering high-quality software solutions, with keen attention to
            detail and a commitment to writing clean, maintainable code that
            adheres to industry best practices. • Effective in teamwork and
            collaboration, enabling seamless integration within cross-functional
            development teams and contributing to a productive and innovative
            development environment.
          </p>

          <Button className="my-6">DownLoad Resume</Button>
        </div>
      </div>
    </main>
  );
}

export default About;
