import styles from './login-button.module.scss';
import { FaEnvelope, FaFacebookF, FaGoogle, FaLinkedin } from 'react-icons/fa6';

interface LoginButtonProps {
  provider: 'Facebook' | 'Google' | 'Mail' | 'LinkedIn';
  onClick: () => void;
}

export function LoginButton({ provider, onClick }: LoginButtonProps) {
  
  const getProviderIcon = (provider: LoginButtonProps['provider']) => {
    switch (provider) {
      case 'Google':
        return <FaGoogle size={24} />;
      case 'Facebook':
        return <FaFacebookF size={24} />;
      case 'Mail':
        return <FaEnvelope size={24} />;
      case 'LinkedIn':  
        return <FaLinkedin size={24} />;
    }
  };

  return (
    <button className={`${styles.loginButton} ${styles[provider.toLowerCase()]}`} type="submit" onClick={onClick}>
      {getProviderIcon(provider)}
      <p className={styles.providerName}>Continuer avec {provider}</p>
    </button>
  );
}
