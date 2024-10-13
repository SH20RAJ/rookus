import { FAQs } from "@/components/(Landing)/FAQs";
import { HeroParallaxComponent } from "@/components/(Landing)/HeroSection";
import { JoinWaitList } from "@/components/(Landing)/JoinWaitList";
import { ParallaxScrollSecondComponent } from "@/components/(Landing)/Parallex";
import { Separator } from "@/components/ui/separator";
import Newsletter from "../../components/Newsletter";
import Image from "next/image";
import MyImage from "../../../public/assets/images/D (1).png"; 

export default function page() {
  return (
    <div>
      <HeroParallaxComponent />
      <Separator className="w-full my-10" />
      <section className="flex flex-col items-center justify-center h-screen gap-10 ">
        <h1 className="text-5xl font-extrabold text-center mt-16">
          Welcome to{" "}
          <span className="underline decoration-wavy decoration-blue-500">
            Rookus
          </span>
        </h1>
        <h2 className="text-xl font-medium text-center text-gray-600">
          Discover Our{" "}
          <span className="text-blue-600 font-semibold">
            AI-Generated Fashion
          </span>
        </h2>
        <ParallaxScrollSecondComponent />
      </section>
      <Separator className="w-full mt-10" />
      <section className="flex flex-col max-w-7xl mx-auto items-center justify-center h-screen gap-10 ">
        <h1 className="text-5xl font-extrabold text-center mt-16">
          Frequently Asked Questions
        </h1>
        <FAQs />
      </section>
      <Separator className="w-full" />
      <Newsletter />

      {/* Increased width of the image */}
      <div className="flex justify-center my-10">
        <Image 
          src={MyImage} 
          alt="AI-Generated Fashion" 
          width={1200}  // Increased width
          height={800}  // Adjust height proportionally
          className="object-cover" 
        />
      </div>
    </div>
  );
}
