declare module "next" {
  export type Metadata = {
    title?: string | { default?: string; template?: string };
    description?: string;
    [key: string]: any;
  };
}

declare module "next/font/google" {
  export function Oswald(options?: {
    subsets?: string[];
    variable?: string;
    display?: "swap" | "fallback" | "optional" | "block";
    weight?: string | string[];
    style?: string | string[];
  }): {
    variable: string;
    className: string;
    style: { fontFamily: string };
  };
  
  export function Inter(options?: {
    subsets?: string[];
    variable?: string;
    display?: "swap" | "fallback" | "optional" | "block";
    weight?: string | string[];
    style?: string | string[];
  }): {
    variable: string;
    className: string;
    style: { fontFamily: string };
  };
}

declare module "next/image" {
  import { ComponentType, CSSProperties } from "react";
  const Image: ComponentType<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    quality?: number;
    priority?: boolean;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
  }>;
  export default Image;
}
