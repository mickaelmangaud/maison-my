import { Navigation } from './components/navigation';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Navigation />
      {children}
    </div>
  );
}
