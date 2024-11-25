import { SocialIcon } from 'react-social-icons';
import styles from './social-link.module.scss';

interface SocialLinkProps {
  network: string;
}

export function SocialLink({ network }: SocialLinkProps) {
  return (
    <div className={styles.socialLink}>
      <SocialIcon network={network} className={styles.icon} />
    </div>
  );
}
