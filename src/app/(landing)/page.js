import { FAQs } from "@/components/(Landing)/FAQs";
import { HeroParallaxComponent } from "@/components/(Landing)/HeroSection";
import { JoinWaitList } from "@/components/(Landing)/JoinWaitList";
import { ParallaxScrollSecondComponent } from "@/components/(Landing)/Parallex";
import { Separator } from "@/components/ui/separator";
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
      <JoinWaitList />
    </div>
  );
}
