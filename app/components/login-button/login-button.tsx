import styles from './login-button.module.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa6';

interface LoginButtonProps {
  provider: string;
  onClick: () => void;
}

export function LoginButton({ provider, onClick }: LoginButtonProps) {
  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'Google':
        return <FaGoogle size={24} />;
      case 'Facebook':
        return <FaFacebookF size={24} />;
    }
  };

  return (
    <button className={`${styles.loginButton} ${styles[provider.toLowerCase()]}`} type="submit" onClick={onClick}>
      {getProviderIcon(provider)}
      <p className={styles.providerName}>Continue with {provider}</p>
    </button>
  );
}
