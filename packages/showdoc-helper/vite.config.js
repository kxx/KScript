import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn, util } from 'vite-plugin-monkey';


// https://vitejs.dev/config/
export default defineConfig({

  assetsInclude: ['**/*.html'],
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.js',
      userscript: {
        name: "showdoc助手",
        version: loadEnv("", process.cwd(), '').VITE_VERSION,
        license: 'MIT',
        description: '支持同步postman接口到showdoc',
        icon: 'https://img.alicdn.com/imgextra/i1/O1CN01JDQCi21Dc8EfbRwvF_!!6000000000236-73-tps-64-64.ico',
        namespace: 'https://github.com/kxx/k-script',
        author: "kxx",
        match: ['https://apidoc.chinackts.com/*'],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js').concat(
            await util.fn2dataUrl(() => {
              window.Vue = Vue; // work with element-plus
            }),
          ),
          jquery: cdn.bootcdn('$', 'jquery.min.js'),
          axios: cdn.bootcdn('axios', 'axios.min.js'),
          'element-plus': cdn.jsdelivr('ElementPlus', 'dist/index.full.min.js')
        },
        externalResource: {
          'element-plus/dist/index.css': cdn.bootcdn('', 'index.min.css'),
        }
      },
    })
  ],
});
