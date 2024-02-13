import Image from "next/image";
import { PlayIcon, GithubIcon } from "lucide-react";
import Icon from "@/assets/github-svgrepo-com.svg";

export type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    liveSite: string;
  };
};

export default function PorjectCard({
  project: { name, description, image, tags, github, liveSite },
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <a href={liveSite} className="overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          width={1920}
          height={1080}
          className="object-contain transition hover:scale-110"
        />
      </a>
      <div className="flex items-center gap-4">
        <h3 className="mr-auto text-2xl font-bold">{name}</h3>
        <a href={liveSite} className="transition hover:text-blue-500">
          <PlayIcon size={30} className="fill-current" />
        </a>
        <a href={github} className="transition hover:text-blue-500">
          <Icon className="h-10 w-10 fill-current" />
        </a>
      </div>
      <p className="leading-relaxed">{description}</p>
      <ul className="mt-auto flex gap-2 text-xs">
        {tags.map((tag) => (
          <li className="rounded-full bg-slate-900 px-4 py-2" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
