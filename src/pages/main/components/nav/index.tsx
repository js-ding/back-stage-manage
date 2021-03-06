import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponentLike } from 'prop-types';

import menuConfig, { MenuRoute } from '@config/menu';
import logo from '@assets/images/main/logo.png';
import './index.less';

const { Sider } = Layout;
// const { SubMenu } = Menu;
const { useState } = React;

interface Props {
  collapsed: boolean;
}

const currentKey = window.location.hash.slice(1);
export default function Nav({ collapsed }: Props) {
  const [activeKey, setActiveKey] = useState(currentKey);

  return (
    <Sider collapsible collapsed={collapsed} trigger={null} style={{ width: collapsed ? 80 : 200 }}>
      <a className="ant-layout-logo-link" href="/">
        <img className="ant-layout-logo" src={logo} alt="logo" style={{ height: collapsed ? '50%' : '80%' }} />
      </a>
      <Menu theme="dark" selectedKeys={[activeKey]} mode="inline">
        {menuConfig.map((menu: MenuRoute) => {
          const Icon = menu.icon as ReactComponentLike;
          return (
            <Menu.Item
              key={menu.path}
              icon={<Icon className="menu-item-icon" />}
              onClick={() => setActiveKey(menu.path as string)}
            >
              <Link to={menu.path as string}>{menu.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}
