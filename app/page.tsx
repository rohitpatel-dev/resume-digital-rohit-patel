import { Smile } from "lucide-react";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col x-2 max-w-7xl mx-auto px-2 lg:px-0">
      <div>
        <Image
          src="/about_image.jpg"
          alt="A beautiful home"
          width={0} // Required for TypeScript, but effectively ignored
          height={0} // Required for TypeScript, but effectively ignored
          sizes="100vw"
          className="w-full h-[30rem]"
        />
      </div>

      <div className="pt-16">
        <h1 className="text-center space-y-4">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-center text-center justify-center">
            𝐇𝐢 <Smile className="text-yellow-700 ml-2" />,
          </span>
          <p className="text-3xl md:text-4xl lg:text-4xl font-medium text-gray-700">
            I am Rohit Patel
          </p>
        </h1>

        <div className="py-4">
          <h1 className=" text-center font-medium md:text-xl lg:text-2xl text-gray-600">
            Lets Help Everyone to Learn web Technology and contribute in the
            beautiful world!
          </h1>
        </div>
      </div>
    </main>
  );
}
