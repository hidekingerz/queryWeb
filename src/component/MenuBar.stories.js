import React from 'react';
import MenuAppBar from "./MenuAppBar";

export default {
    component: MenuAppBar,
    title: 'Design System/Atoms/MenuBar',
    // excludeStories: /.*Data$/,
    argTypes: {
        title: { control: { type: 'text' }},
        isAuth: { control: { type: 'boolean' }},
    }
};


const Template = (args) => <MenuAppBar {...args} />;

/**
 * Basic
 * @type {{new(...args: any[]): unknown} | ((...args: any[]) => JSX.Element) | OmitThisParameter<function(*): JSX.Element> | (function(*): JSX.Element) | any | {new(...args: unknown[]): unknown} | ((...args: unknown[]) => JSX.Element)}
 */
export const Basic = Template.bind({})
Basic.args = {
    title: 'no Login',
    isAuth: false,
    onLogin: () => {
        console.log('login')
        Basic.args.isAuth = true
        console.log(Basic.args)
    },
    onLogout: () => {
        console.log('logout')
        Basic.args.isAuth = false
        console.log(Basic.args)
    }
};

/**
 * ログインしていない状態
 * @type {{new(...args: any[]): unknown} | ((...args: any[]) => JSX.Element) | OmitThisParameter<function(*): JSX.Element> | (function(*): JSX.Element) | any | {new(...args: unknown[]): unknown} | ((...args: unknown[]) => JSX.Element)}
 */
export const noLogin = Template.bind({})
noLogin.args = {
    title: 'no Login Title',
    isAuth: false
};

export const Login = Template.bind({})
Login.args = {
    title: 'Login Title',
    isAuth: true
};