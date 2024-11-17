import { useTranslation } from 'react-i18next';
import { Navigation } from '~/components/navigation';
import { FaAngleDown } from 'react-icons/fa6';
import styles from '../styles/index.module.css';

export default function Component() {
  const { t } = useTranslation();

  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
      }}
    >
      <div className={styles.hero} style={{ position: 'relative' }}>
        <video
          loop
          muted
          autoPlay
          playsInline
          controls
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            opacity: '0.5',
            height: '100vh',
            width: '100vw',
            objectFit: 'cover',
            zIndex: '-1',
          }}
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        <Navigation />
        <FaAngleDown
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '38px',
            animation: 'bounce2 2s ease infinite',
          }}
          onClick={scrollDown}
        />
      </div>
    </div>
  );
}
