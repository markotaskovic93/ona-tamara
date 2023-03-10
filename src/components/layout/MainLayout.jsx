import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout>
      <Content className='min-h-[100vh]'>{ children }</Content>
    </Layout>
  );
}

export default MainLayout;
