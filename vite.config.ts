import { defineConfig, loadEnv, UserConfigExport, ConfigEnv,searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import html from 'vite-plugin-html'
// import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'
import { ElementPlusResolver, AntDesignVueResolver, VantResolver, HeadlessUiResolver, ElementUiResolver} from 'unplugin-vue-components/resolvers'
import styleImport, {  AndDesignVueResolve,  VantResolve,  ElementPlusResolve,  NutuiResolve,  AntdResolve} from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'


const pathResolve = (dir: string): string => resolve(__dirname, '.', dir)

// https://vitejs.dev/config/
export default  ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 环境变量
  const env = loadEnv(mode, process.cwd())
  // 开发环境判断
  const isDev = mode === 'dev'
  // vite插件
  const plugins = [
    vue({
      script: {
        refSugar: true, //ref转换
      },
      template: {
        compilerOptions: {
          isCustomElement: tag => /^micro-app/.test(tag)
        }
      }
    }),
    vueJsx(), //jsx
    /**
     *  注入环境变量到html模板中
     *  如在  .env文件中有环境变量  VITE_APP_APP_TITLE=admin
     *  则在 html模板中  可以这样获取  <%- VITE_APP_APP_TITLE %>
     *  文档：  https://github.com/anncwb/vite-plugin-html
     */
    html({
      inject: {
        // injectData: { ...env },
        data: {
          env: env,
        },
      },
      minify: true,
    }),
    // elementUi组件自动引入
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts',
    }),
    styleImport({
      // resolves: [
      //   ElementPlusResolve(),
      // ],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`
          },
        },
      ],
    }),
    // 自动引入
    AutoImport({
      imports: ['vue', 'vue-router','pinia'],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: 'src/auto-import.d.ts'
    }),
    WindiCSS(),
    /**
     *  把src/icons 下的所有svg 自动加载到body下，供组件使用
     *  类似于webpack中的svg-sprite-loader
     *  文档：https://github.com/anncwb/vite-plugin-svg-icons
     */
    // viteSvgIcons({
    //   // 指定需要缓存的图标文件夹
    //   iconDirs: [resolve(process.cwd(), 'src/icons')],
    //   // 指定symbolId格式
    //   symbolId: 'icon-[name]'
    // })
  ]

  if (!isDev) {
    plugins.push(
      // // 兼容插件
      // legacy({
      //   targets: ['defaults', 'not IE 11'],
      // }),

      // gzip插件，打包压缩代码成gzip  文档： https://github.com/anncwb/vite-plugin-compression
      viteCompression(),
      // pwa离线缓存
      VitePWA({
        srcDir: env.VITE_APP_outputDir,
        includeAssets: ['favicon.ico'],
        manifest: false,
        registerType: 'autoUpdate',
        workbox: {
          runtimeCaching: [
            // {
            //   urlPattern: /someInterface/i, // 接口缓存 此处填你想缓存的接口正则匹配
            //   handler: 'CacheFirst',
            //   options: {
            //     cacheName: 'interface-cache',
            //   },
            // },
            {
              urlPattern: /(.*?)\.(js|css|ts)/, // js /css /ts静态资源缓存
              handler: 'CacheFirst',
              options: {
                cacheName: 'js-css-cache',
              },
            },
            {
              urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, // 图片缓存
              handler: 'CacheFirst',
              options: {
                cacheName: 'image-cache',
              },
            },
          ],
        },
      }),
    )
  }
  // } else {
  //   // plugins.push(
  //   //   // mock  文档：https://github.com/anncwb/vite-plugin-mock
  //   //   viteMockServe({
  //   //     mockPath: 'mock',
  //   //     localEnabled: command === 'serve',
  //   //     logger: true
  //   //   })
  //   // )
  // }

  // https://vitejs.dev/config/
  return defineConfig({
    plugins,
    base: isDev||mode=='buildDev' ? './' : '/custom-scaffold', // 设置打包路径
    //静态资源服务的文件夹
    publicDir: "public",
    server: {
      // 设置代理，根据我们项目实际情况配置
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      port: 80,
      hmr: { overlay: false },
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://172.16.15.190:30003/",
          // target:  'http://172.16.16.145:8080/',
          changeOrigin: true, // 是否跨域
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/nogateway": {
          // 不走网关
          target: "http://172.16.15.190:30004/",
          changeOrigin: true, // 是否跨域
          rewrite: (path) => path.replace(/^\/nogateway/, ""),
        },
      },
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd()), "/microappchild1/"],
      },
    },
    resolve: {
      alias: [
        { find: "@", replacement: pathResolve("src") },
        // 解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
        // {
        //   find: "vue-i18n",
        //   replacement: "vue-i18n/dist/vue-i18n.cjs.js",
        // },
      ],
    },
    build: {
      target: "es2015",
      outDir: env.VITE_APP_outputDir,
      assetsDir: "assets",
      assetsInlineLimit: 2048,
      cssCodeSplit: true,
      // Terser 相对较慢，但大多数情况下构建后的文件体积更小。ESbuild 最小化混淆更快但构建后的文件相对更大。
      minify: isDev ? "esbuild" : "terser",
      terserOptions: {
        compress: {
          // 生产环境去除console
          // drop_console: !isDev,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          //   additionalData: `
          //   @import '@/assets/styles/_variables.scss';
          //   @import '@/assets/styles/common.scss';
          //  `,
        },
      },
    },
  });
}
