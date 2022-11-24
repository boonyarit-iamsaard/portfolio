import { Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to My Portfolio</title>
      </Head>
      <Container maxWidth="md" sx={{ py: 2, textAlign: 'center' }}>
        <Typography component="h1" variant="h3" gutterBottom>
          Welcome to My Portfolio
        </Typography>
      </Container>
    </>
  );
};

export default Home;
