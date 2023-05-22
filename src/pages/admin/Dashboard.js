import React from 'react';
import { Row, Col, Card, Statistic, Divider } from 'antd';

const Dashboard = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Bookings" value={1200} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Revenue" value={158900} prefix="$" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Pending Bookings" value={6} suffix="bookings" />
          </Card>
        </Col>
      </Row>

      <Divider />

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Upcoming Flights">
            {/* Add upcoming flights data here */}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Top Destinations">
            {/* Add top destinations data here */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
