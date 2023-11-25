import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export default function buildResolvers(options: BuildOptions): ResolveOptions {
	const { paths } = options;
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		mainFiles: ['index'],
		modules: [paths.src, 'node_modules'],
		alias: {
			src: paths.src,
		},
	};
}
