import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';

class Login extends React.Component {
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
                    email: values.username,
                    password: values.password
                }
                fetch('http://192.168.1.185:3000/user/login', {
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
                    <title>Login</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Nav />
                <div className='login-wrapper'>
                    <h1>Login </h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <p>don't have an account? <Link href="/register"><a>Create one</a></Link></p>
                        </Form.Item>
                    </Form>
                </div>
            </>
        );
    }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;