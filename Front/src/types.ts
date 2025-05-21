import type { ButtonHTMLAttributes } from "react";

export type props = {
  label: string;
};

export interface BodyRequestLogin {
    Email: string
    Password: string
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    props {}
