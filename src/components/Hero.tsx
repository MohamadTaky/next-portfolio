"use client";

import CommandLine from "@/components/CommandLine";
import { AnimatedText, AnimatedTextContainer } from "./common/AnimatedText";
import Syntax from "@/components/Syntax";

export default function Hero() {
  return (
    <Syntax className="h-[89vh] border-2 border-slate-900">
      <div className="container grid h-full grid-cols-[repeat(auto-fit,minmax(350px,1fr))] mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl mt-8">
            <AnimatedTextContainer>
              <AnimatedText text="Hello world !" />
              <span className="block">
                <AnimatedText text="I am " />
                <AnimatedText text="Mohamad Taky" className="text-blue-500 font-semibold" />
              </span>
              <AnimatedText text="Front End Web Developer." />
            </AnimatedTextContainer>
          </h1>
        </div>
        <CommandLine />
      </div>
    </Syntax>
  );
}
