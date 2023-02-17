import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    //чтобы в импорте не указывать расширение файлов
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
