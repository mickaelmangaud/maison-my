import { useTranslation } from 'react-i18next';

export default function Component() {
  const { t } = useTranslation();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      {/* <h1>{t('welcome')}</h1> */}
      <video
        loop
        muted
        autoPlay
        playsInline
        // width="320"
        // height="180"
        controls
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          // opacity: '0.5',
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',
          zIndex: '-1',
        }}
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
