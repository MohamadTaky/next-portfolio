import PorjectCard from "./ProjectCard";
import projects from "@/../public/projects.json";
import Section from "@/components/common/Section";

export default function Projects() {
  return (
    <Section title="My work">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16">
        <PorjectCard project={projects["taky-chess"]} />
        <PorjectCard project={projects["type-fusion"]} />
        <PorjectCard project={projects["tetris"]} />
      </div>
    </Section>
  );
}
