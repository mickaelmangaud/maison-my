import { Button, Heading, Html, Text, Img, Body, Container, Head, Font } from '@react-email/components';

interface ContactEmailProps {
  email: string;
  message: string;
  tel: string;
}

export default function ContactEmail({
  email = 'mickaelmangaud@gmail.com',
  message = 'Mon message est que tout va bien',
  tel = '06 06 06 06 06',
}: ContactEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body style={body}>
        <Container>
          <Img
            src="https://imaffulnjqeszkwuznvr.supabase.co/storage/v1/object/public/public_assets/images/my_logo.png"
            width="120"
            alt="my-logo"
            style={logo}
          />
          <Heading as="h3" style={{ textAlign: 'center' }}>
            Nouveau message d'un utilisateur
          </Heading>
        </Container>
        <Container>
          <Text>
            <span style={{ fontWeight: 'bold' }}>Email: </span>
            <span>{email}</span>
          </Text>
          <Text>
            <span style={{ fontWeight: 'bold' }}>Téléphone: </span>
            <span>{tel}</span>
          </Text>
          <Text>
            <span style={{ fontWeight: 'bold' }}>Message: </span>
            <span>{message}</span>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  // backgroundColor: 'red',
  padding: '24px',
};

const logo = {
  margin: '0 auto',
};
