import type { Configuration, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import path from 'path';
import type { BuildPaths } from '../build/types/config';
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config.module.rules = config.module.rules?.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/ };
    }
    return rule;
  });

  config.module.rules?.push(buildSvgLoader());

  config.resolve.alias = {
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  return config;
};
