import React from 'react';
import { Card, Typography, Divider, Avatar } from 'antd';
import john from "../../../assets/john.jpg"

const { Title, Text } = Typography;

const ViewProfilePage = () => {
  const profile = {
    avatar: {john},
    name: 'John',
    lastName: 'Smith',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    email: 'john.smith@gmail.com',
  };

  return (
    <Card title="View Profile">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Avatar size={64} src={john} />
        <div style={{ marginLeft: '16px' }}>
          <Title level={4}>{profile.name} {profile.lastName}</Title>
          <Text>{profile.email}</Text>
        </div>
      </div>
      <Divider />
      <Text>{profile.description}</Text>
    </Card>
  );
};

export default ViewProfilePage;
