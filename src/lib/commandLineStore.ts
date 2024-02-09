import { create } from "zustand";

type CommandLineStore = {
  lines: string[];
  addLine: (line: string) => void;
};

export const useCommandLineStore = create<CommandLineStore>((set) => ({
  lines: ["Welcome to ProtfolioCLI"],
  addLine: (line) =>
    set((store) => {
      const lowerCaseLine = line.toLowerCase();
      switch (lowerCaseLine) {
        case "help":
          return { lines: [...store.lines, lowerCaseLine] };
        case "navigate":
          return { lines: [...store.lines, lowerCaseLine] };
      }
      return { lines: [...store.lines, `${lowerCaseLine}: command not found`] };
    }),
}));
