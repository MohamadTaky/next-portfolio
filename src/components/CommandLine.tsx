"use client";

import { useCommandLineStore } from "@/lib/commandLineStore";
import { ChangeEvent, FormEvent, useRef, useState, KeyboardEvent } from "react";

export default function CommandLine() {
  const lines = useCommandLineStore((store) => store.lines);
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");
  const addLine = useCommandLineStore((store) => store.addLine);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addLine(input);
    setInput("");
  };
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter" && e.shiftKey === false) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <div className="bg mt-16 overflow-auto rounded-t-md border-2 border-b-0 border-slate-800 bg-slate-700 bg-opacity-20 p-4 font-mono">
      <ul>
        {lines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
      <form ref={formRef} className="flex break-all" onSubmit={handleSubmit}>
        <span>$ &#x276F;</span>
        <textarea
          ref={textAreaRef}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="flex-1 resize-none bg-transparent pl-2 text-slate-300 outline-none"
        />
      </form>
    </div>
  );
}
