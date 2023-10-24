import { assets } from "@/assets/assets";
import Image from "next/image";

export function IconRound() {
  return (
    <div className="projects-icon">
      <Image
        src={assets.projects}
        alt="Projects"
        className="center-absolutely"
      />
    </div>
  );
}
