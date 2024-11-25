import { SocialIcon } from 'react-social-icons';
import styles from './social-link.module.scss';

interface SocialLinkProps {
  network: string;
}

export function SocialLink({ network }: SocialLinkProps) {
  let url;

  switch (network) {
    case 'instagram':
      url = 'https://www.instagram.com/maisonmy_banhmi/';
      break;
    case 'facebook':
      url = 'https://www.facebook.com/maisonmybanhmi/';
      break;
    case 'tiktok':
      url = 'https://www.tiktok.com/@maisonmy_banhmi';
      break;
  }

  return (
    <div className={styles.socialLink}>
      <SocialIcon network={network} className={styles.icon} url={url} target="_blank" />
    </div>
  );
}
