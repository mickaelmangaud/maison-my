import styles from './socials.module.scss';
import { SocialLink } from './social-link';

export function Socials() {
  return (
    <div className={styles.socials}>
      <SocialLink network="instagram" />
      <SocialLink network="facebook" />
      <SocialLink network="tiktok" />
    </div>
  );
}
