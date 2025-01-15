// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default {
    output: 'server',
    adapter: netlify({
      edgeMiddleware: true
    }),
  }