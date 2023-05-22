import React from "react";
import {
  Form,
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  Typography,
} from "antd";



const Register = () => {
  const { Link } = Typography;
  return (
    <div className="formBg">
      <Form  autoComplete="off"  className="registerForm"
      onFinish={(values) => {
        console.log((values));
      }}>
        <Typography.Title className="text-center">Get Started</Typography.Title>
        <Form.Item
          name="fullName"
          label="Full Name"
          
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
            {
              whitespace: true,
              message: "Full Name cannon be empty",
            },
            { min: 3, message: "Min 3 charcters for Full Name" },
          ]}
        >
          <Input placeholder="Type your name" />
        </Form.Item>

        <Form.Item name="emai" label="Email" 
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please enter your email",
          },
          {
            type: "email",
            message: "Please enter an valid email",
          },
          
        ]}>
          <Input placeholder="Type your email" />
        </Form.Item>

        <Form.Item name="password" label="Password"  
        hasFeedback
        rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {min: 6,
            message: "Password shold have min 6 characters"}
            
          ]}>
          <Input.Password placeholder="Type your password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({getFieldValue}) => ({
                validator(_, value) {
                    if(!value || getFieldValue('password') === value){
                        return Promise.resolve()
                    }
                    return Promise.reject('The confirmation password does not match whith password')
                }
            })
            
          ]}
        >
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item name="gender" label="Gender"  
        hasFeedback
        >
          <Select placeholder="Select your gender">
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="birthday" label="Date of birthday" 
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please enter your birthday",
          },
          
        ]}>
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            placeholder="Chose date of birthday"
          />
        </Form.Item>

        <Form.Item name="agreement" 
     valuePropName="checked"
        rules={[

          {
            validator: (_, value) =>
            value? Promise.resolve() : Promise.reject("You need to accept terms & conditions")
          }
          
        ]}>
          <Checkbox>
            Agree whith our{" "}
            <Link href="https://ant.design" target="_blank">
              Terms and Conditions
            </Link>
          </Checkbox>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" block>
            Register{" "}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
