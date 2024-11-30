import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { Socials } from './components/socials';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Navigation />
      {children}
      <Socials />
      <Footer />
    </div>
  );
}
