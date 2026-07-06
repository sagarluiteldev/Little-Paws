import { PawPrint } from "lucide-react";

export interface KickerProps {
  children: React.ReactNode;
}

export default function Kicker({ children }: KickerProps) {
  return (
    <p className="kicker" data-reveal>
      <PawPrint /> {children}
    </p>
  );
}
