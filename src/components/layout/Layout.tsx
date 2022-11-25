import { FC, ReactNode } from 'react';

import { Container } from '@mui/material';

import LayoutHeader from './LayoutHeader';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      <Container
        component="main"
        maxWidth="md"
        sx={{ py: 2, textAlign: 'center' }}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
