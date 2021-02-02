import { defineConfig } from 'dumi';

const repo = 'umi';
const ghPagesBase = process.env.NODE_ENV === 'production' ? `/${repo}/` : '/';

export default defineConfig({
  title: `@careteen/${repo}`,
  mode: 'site',
  hash: true,
  publicPath: ghPagesBase,
  base: ghPagesBase,
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/careteenL/umi',
    },
  ],
  // more config: https://d.umijs.org/config
});
