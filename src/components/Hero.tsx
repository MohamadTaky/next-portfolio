"use client";

import CommandLine from "@/components/CommandLine";
import { AnimatedText, AnimatedTextContainer } from "./common/AnimatedText";
import { DownloadIcon } from "lucide-react";
import Syntax from "@/components/Syntax";

export default function Hero() {
  return (
    <Syntax className="h-[89vh] border-2 border-slate-900">
      <div className="container mx-auto grid h-full grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <div className="flex flex-col items-center">
          <h1 className="my-auto text-2xl">
            <AnimatedTextContainer>
              <AnimatedText text="Hello world !" />
              <span className="block">
                <AnimatedText text="I am " />
                <AnimatedText text="Mohamad Taky" className="font-semibold text-blue-500" />
              </span>
              <AnimatedText text="Front End Web Developer." />
            </AnimatedTextContainer>
          </h1>
          <a
            className="rounded-t-md border-2 border-b-0 bg-slate-700 bg-opacity-20 p-2 border-slate-800"
            download
            href="/MohamadTakyResume.pdf"
          >
            download resume
            <DownloadIcon className="ml-2 inline-block" />
          </a>
        </div>
        <CommandLine />
      </div>
    </Syntax>
  );
}
