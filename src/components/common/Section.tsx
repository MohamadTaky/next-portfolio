import { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ children, title }: SectionProps) {
  return (
    <section className="container mx-auto my-16">
      <h2 className="mb-8 text-4xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
