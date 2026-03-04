import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isVimeoUrl(url: string): boolean {
  return url.includes("vimeo.com");
}

export function getVimeoEmbedUrl(url: string): string {
  // Extract video ID from URLs like:
  // https://vimeo.com/1170122849?share=copy&fl=sv&fe=ci
  // https://vimeo.com/1170122849
  const match = url.match(/vimeo\.com\/([0-9]+)/);
  if (match && match[1]) {
    return `https://player.vimeo.com/video/${match[1]}`;
  }
  return url;
}

export function isGoogleDriveUrl(url: string): boolean {
  return url.includes("drive.google.com");
}

export function getGoogleDriveEmbedUrl(url: string): string {
  // Extract file ID from URLs like:
  // https://drive.google.com/file/d/1-RDLcDKLPKOFxdh0Z0snncGskvy9q-JH/view
  // https://drive.google.com/file/d/1IZKhaHfWhgzXN80pHVjdvJFUoU_ek9CT/view?usp=drivesdk
  const match = url.match(/\/file\/d\/([^/?]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}
