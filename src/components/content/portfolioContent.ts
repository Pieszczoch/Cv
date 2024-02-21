import Helpfind from '@/assets/hf.png';
import TTK from '@/assets/ttk.png';

export interface PortfolioTypes {
  title: string;
  img: string;
  href: string;
}

export const portfolioContent: PortfolioTypes[] = [
  {
    title: 'Helpfind',
    img: Helpfind,
    href: 'https://helpfind.pl/',
  },
  {
    title: 'ToTwojaKasa',
    img: TTK,
    href: 'https://totwojakasa.pl/',
  },
];
