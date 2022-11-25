import { Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to My Portfolio</title>
      </Head>
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Welcome to My Portfolio
      </Typography>
    </>
  );
};

export default Home;
