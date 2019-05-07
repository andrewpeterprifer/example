module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	require: ['semantic-ui-css/semantic.min.css'],
	sections: [
		{
			name: 'Buttons',
			content: 'docs/Buttons.md',
			components: 'src/components/buttons/**/*.{js,jsx,ts,tsx}',
		},
		{
			name: 'Misc',
			components: 'src/components/misc/**/*.{js,jsx,ts,tsx}',
		},
	],
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true,
							},
						},
					],
				},
				{
					test: /\.(eot|png|svg|[ot]tf|woff2?)(\?v=\d+\.\d+\.\d+)?$/,
					use: {
						loader: 'url-loader',
						options: { limit: 10000 },
					},
				},
			],
		},
	},
};
