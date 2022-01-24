import microApp from "@micro-zoe/micro-app";

microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      microappchild1: [
        {
          loader(code) {
            if (import.meta.env.DEV) {
              // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(
                /(from|import)(\s*['"])(\/microappchild1\/)/g,
                (all) => {
                  return all.replace(
                    "/microappchild1/",
                    "http://localhost:8080/microappchild1/"
                  );
                }
              );
            }

            return code;
          },
        },
      ],
    },
  },
});
