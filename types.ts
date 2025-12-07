import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Testimonial {
  id: number;
  author: string;
  text: string;
  location: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum PageView {
  HOME = 'HOME',
  TERMS = 'TERMS',
  PRIVACY = 'PRIVACY'
}