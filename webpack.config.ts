import type webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import type {
	BuildEnv,
	BuildMode,
	BuildPaths,
} from './config/build/types/config';

export default (env: BuildEnv) => {
	// Задаем мод
	const mode: BuildMode = env.mode || 'development';
	// Задаем порт для dev-server
	const PORT = env.port || 3000;

	// Указываем пути
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	// Автоматическая проверка на isDev
	const isDev = mode === 'development';

	const options = {
		mode,
		paths,
		isDev,
		port: PORT,
	};

	const config: webpack.Configuration = buildWebpackConfig(options);

	return config;
};
