import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  MenuFoldOutlined,
  ProfileOutlined,
  CalendarOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/admin/">Dashboard</Link>, "1", <DashboardOutlined  />),
  getItem(<Link to="/bookings">Bookings</Link>, "2", <CalendarOutlined />),

  getItem("My profile", "sub1", <ProfileOutlined />, [
    getItem(<Link to="/admin/profile/view">View Profile</Link>, "3"),
    getItem(<Link to="/admin/profile/edit">Edit Profile</Link>, "4"),
  ]),
 
];
const FirstLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={items}/>

      
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default FirstLayout;
