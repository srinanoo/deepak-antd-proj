import { Button, Form, Input,  } from 'antd';
import React from 'react';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
    
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */


export const ContactComp = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (

       
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
             <div className='fm'>
                <h1>Contact Me</h1>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]} 
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            {/* <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item> */}
            <Form.Item name={['user', 'website']} label="Website">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Message :">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            </div>
        </Form>
    );
}