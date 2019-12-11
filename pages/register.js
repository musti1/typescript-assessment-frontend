import React from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import Nav from '../components/nav';

class Register extends React.Component {
    componentDidMount() {
        const userDetails = sessionStorage.getItem("userDetails")
        if (!!userDetails) {
            Router.push('/');
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    firstName: values.firstname,
                    lastName: values.lastname,
                    email: values.email,
                    password: values.password
                }
                fetch('http://localhost:4000/user/register', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => {
                        if (res.status === 200) {
                            return res.json().then(res => {
                                sessionStorage.setItem('userDetails', JSON.stringify(res.user));
                                Router.push('/');
                            })
                        }
                    }).catch(err => {
                        console.log('error', err);
                    })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Head>
                    <title>Register</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Nav />
                <div className='login-wrapper'>
                    <h1>Register </h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('firstname', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    placeholder="Firstname"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('lastname', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    placeholder="Lastname"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(
                                <Input
                                    placeholder="Email"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register
                            </Button>
                            <p>already have an account? <Link href="/login"><a>Login</a></Link></p>
                        </Form.Item>
                    </Form>
                </div>
            </>
        );
    }
}

const WrappedRegister = Form.create()(Register);

export default WrappedRegister;