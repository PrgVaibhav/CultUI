export interface ComponentCardData {
  id: number;
  title: string;
  description: string;
  demoComponent: React.ReactNode;
  componentPageTitle: string;
  componentPageDescription: string;
  configBaseCode: string;
  fileName?: string;
  variations: {
    id: number;
    title: string;
    description: string;
    fileName?: string;
    component: React.ReactNode;
    code: string;
  }[];
}
