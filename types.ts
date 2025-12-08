export interface Interview {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  videoDuration: string;
  videoUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}