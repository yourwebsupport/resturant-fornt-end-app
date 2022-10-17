export interface LinkItem {
  url: string;
  title: string;
  icon: string;
  role?: string;
  style?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | null;
}
