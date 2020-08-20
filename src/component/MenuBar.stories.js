import React from 'react';
import MenuAppBar from "./MenuAppBar";

export default {
  component: MenuAppBar,
  title: 'Design System/Atoms/MenuBar',
  excludeStories: /.*Data$/,
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    },
    isAuth: {
      control: {
        type: 'boolean'
      }
    }
  }
};


export const Basic = (args) => <MenuAppBar {...args} />;
Basic.args = {
  title: 'Hidekingerz Manual',
  isAuth: true
}

export const noLogin = (args) => <MenuAppBar {...args} />;
noLogin.args = {
  title: 'Hidekingerz Manual [no login]',
  isAuth: false
}

export const Login = (args) => <MenuAppBar {...args} />;
Login.args = {
  title: 'Hidekingerz Manual [Auth]',
  isAuth: true
}