import React from 'react'
import Link from 'next/link'
import 'antd/dist/antd.css'
import { Menu } from 'antd';

const Nav = () => (
  <header>
    <div className='wrapper'>
      <Menu mode="horizontal">
        <Menu.Item key="assessment">
          <Link href="/">
            <a>TypeScript Assessment</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="login" className='right'>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="register" className='right'>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  </header>
)

export default Nav
