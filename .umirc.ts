import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  publicPath: process.env.NODE_ENV === 'production' ? '/umi/' : '/',
  // more config: https://d.umijs.org/config
});
