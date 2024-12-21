export type PageType = 'home' | 'products' | 'about' | 'contact' | 'shipping' | 'returns';

export interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}