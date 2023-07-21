import webpack from "webpack";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const babelLoader = buildBabelLoader(options);

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
