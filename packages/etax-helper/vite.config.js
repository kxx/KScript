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
        name: "etax助手",
        version: loadEnv("", process.cwd(), '').VITE_VERSION,
        license: 'MIT',
        description: '支持etax参数解密',
        namespace: 'https://github.com/kxx/etax-helper',
        author: "kxx",
        match: ['https://dppt.guangdong.chinatax.gov.cn:8443/*'
          , 'https://dppt.jiangsu.chinatax.gov.cn:8443/*'
          , 'https://dppt.qingdao.chinatax.gov.cn:8443/*'
          , 'https://dppt.shanghai.chinatax.gov.cn:8443/*'
        ],
        connect: ['skynjweb.com'],
      },
      build: {
        externalGlobals: {
          vue: cdn.bootcdn('Vue', 'vue.global.min.js').concat(
            async ()=>{
              await util.fn2dataUrl(() => {
                window.Vue = Vue; // work with element-plus
              })
            }
            ),
          jquery: cdn.bootcdn('$', 'jquery.min.js'),
          axios: cdn.bootcdn('axios', 'axios.min.js'),
          'element-plus': cdn.bootcdn('ElementPlus', 'index.full.min.js')
        },
        externalResource: {
          'element-plus/dist/index.css': cdn.bootcdn('', 'index.min.css'),
        }
      },
    })
  ],
});
