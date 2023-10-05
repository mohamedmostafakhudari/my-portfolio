import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import { MotionDiv } from "@/app/use-client";
import AnimatedTextWord from "@/components/ui/animated-text-word";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <AnimatedTextWord>Mohamed Mostafa</AnimatedTextWord>
    </main>
  );
}
