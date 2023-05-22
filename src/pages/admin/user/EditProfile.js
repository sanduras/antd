import React, { useState } from 'react';
import { Card, Form, Input, Button, Divider, Upload, message, Image } from 'antd';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';

const EditProfile = () => {
  const [avatar, setAvatar] = useState(null);

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const handleAvatarUpload = (file) => {
    // Perform any necessary upload logic here
    setAvatar(file);
    message.success('Avatar uploaded successfully');
  };

  const handleAvatarRemove = () => {
    // Perform any necessary removal logic here
    setAvatar(null);
    message.success('Avatar removed successfully');
  };

  return (
    <Card title="Edit Profile">
      <Form onFinish={onFinish} initialValues={{ name: 'John', lastName: 'Smith', email: 'john.smith@gmail.com' }}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: 'Please enter your last name' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="description" label="Short Description" rules={[{ required: true, message: 'Please enter a short description' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="avatar" label="Avatar">
          <Upload
            name="avatar"
            accept="image/*"
            showUploadList={false}
            beforeUpload={handleAvatarUpload}
            onRemove={handleAvatarRemove}
          >
            {avatar ? (
              <div style={{ position: 'relative' }}>
                <Image src={URL.createObjectURL(avatar)} alt="Avatar" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: "cover" }} />
                <div style={{ position: 'absolute', top: "210px", left: 0, right: 0, textAlign: 'center' }}>
                  <Button icon={<DeleteOutlined />} size="small" danger>
                    Remove Avatar
                  </Button>
                </div>
              </div>
            ) : (
              <Button icon={<UploadOutlined />} size="small" >
                Upload Avatar
              </Button>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{marginTop: "30px"}}>
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EditProfile;
