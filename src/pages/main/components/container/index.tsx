import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import Header from '../header';
import Nav from '../nav';

const { Content, Footer } = Layout;
const { useState } = React;

export default function Container() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Nav collapsed={collapsed} />
      <Layout className="site-layout">
        <Header setCollapsed={setCollapsed} collapsed={collapsed} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>This Project ©2020 Created by gongding</Footer>
      </Layout>
    </Layout>
  );
}
