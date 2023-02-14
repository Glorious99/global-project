import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  return {
    //чтобы в импорте не указывать расширение файлов
    extensions: [".tsx", ".ts", ".js"],
  };
}
