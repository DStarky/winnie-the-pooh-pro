import type { WebpackPluginInstance } from 'webpack';
import { DefinePlugin, type Configuration, type RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import path from 'path';
import type { BuildPaths } from '../build/types/config';
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default async ({ config }: { config: Configuration }) => {
  const isDev = true;

  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  if (!config) {
    config = {};
  }

  if (!config.resolve) {
    config.resolve = {};
  }
  if (!config.module) {
    config.module = {};
  }

  config.resolve.modules?.push(paths.src);
  config.resolve.extensions?.push('.ts', '.tsx');
  config.module.rules?.push(buildCssLoader(true));
  config.module.rules?.push(buildBabelLoader());

  config.module.rules = (config.module.rules as RuleSetRule[] | undefined)?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/ };
    }
    return rule;
  });

  config.module.rules?.push(buildSvgLoader());

  config.resolve.alias = {
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config?.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }) as WebpackPluginInstance,
  );

  return config;
};
