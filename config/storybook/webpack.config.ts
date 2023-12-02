import type { Configuration } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import path from 'path';
import type { BuildPaths } from '../build/types/config';
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';

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
  config.resolve.alias = {
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  return config;
};
