import { ChevronRight } from "lucide-react";
import { A } from "../../constants";

export interface PawButtonProps {
  children: string;
  href: string;
  compact?: boolean;
}

export default function PawButton({ children, href, compact }: PawButtonProps) {
  return (
    <a className={`paw-button ${compact ? "compact" : ""}`} href={href}>
      <span className="dog-pop">
        <img src={`${A}C0TmIz4gdVQNswbCy8C1si7JzK4.webp`} alt="" />
        <em>Woof!</em>
      </span>
      <span>{children}</span>
      <ChevronRight aria-hidden="true" />
      <img className="button-paw paw-a" src={`${A}fvp2tnHVPu8W7su4KLIwTCHMQ.webp`} alt="" />
      <img className="button-paw paw-b" src={`${A}fvp2tnHVPu8W7su4KLIwTCHMQ.webp`} alt="" />
    </a>
  );
}
