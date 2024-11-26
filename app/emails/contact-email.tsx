import { Button, Heading, Html, Text } from '@react-email/components';

interface ContactEmailProps {
  email: string;
  message: string;
}

export default function ContactEmail({ email, message }: ContactEmailProps) {
  return (
    <Html>
      <Heading as="h1">Maison My</Heading>
      <Text>Nouveau message d'un utilisateur :</Text>
      <Text>Nouveau message d'un utilisateur :</Text>
      <Button href={`mailto:${email}`}>Repondre</Button>
    </Html>
  );
}
