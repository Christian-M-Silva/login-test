import type { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export type propsExtend = {
  label: string;
};
export interface BodyRequestLogin {
    Email: string
    Password: string
}
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    propsExtend {}
export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    propsExtend {}
export interface LoginErrorResponse {
  message: string;
}