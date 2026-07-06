import { JSX } from "react";

export type Service = {
  icon: JSX.Element;
  title: string;
  body: string;
};

export type Question = {
  q: string;
  a: string;
};
