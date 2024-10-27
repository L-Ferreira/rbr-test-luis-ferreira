import { LucideIcon } from 'lucide-react';

export type CardDataProps = {
  title: string;
  type: string;
  duration: string;
  image: string;
  gradient: string;
  icon?: LucideIcon;
  externalLink: string;
};
