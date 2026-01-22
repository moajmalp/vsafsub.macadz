declare module "next/types";
declare module "next/types.js";
declare module "next/font/google";
declare module "next/link" {
    import { ComponentType, ReactNode } from "react";
    interface LinkProps {
        href: string;
        children?: ReactNode;
        className?: string;
        [key: string]: any;
    }
    const Link: ComponentType<LinkProps>;
    export default Link;
}
declare module "next/navigation" {
    export function notFound(): never;
    export function redirect(url: string): never;
    export function useRouter(): any;
    export function usePathname(): string;
    export function useSearchParams(): any;
}