import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { Socials } from './components/socials';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ flex: '1' }}>
      <Navigation />
      {children}
      <Socials />
      <Footer />
    </div>
  );
}
