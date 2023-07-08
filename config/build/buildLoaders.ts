import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            { locales: ["ru", "en"], keyAsDefaultValue: true },
          ],
        ],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const cssLoader = buildCssLoader(isDev);
  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/, // обрабатывать файлы .ts,.tsx
    use: [
      {
        loader: "ts-loader",
        // options: {
        //   transpileOnly: true, // Чтобы не ломалась сборка при ошибках
        // },
      },
    ],
    exclude: /node_modules/, //что не нужно обрабатывать
  };

  return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
}
