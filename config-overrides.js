const { override, fixBabelImports, addLessLoader, useEslintRc, addPostcssPlugins } = require('customize-cra')
const postcssPresetEnv = require('postcss-preset-env')
const px2rem = require('postcss-px2rem')
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd-mobile',
		style: 'css',
	}),
	useEslintRc('./.eslintrc.js'),
	addPostcssPlugins([
		postcssPresetEnv({
			stage: 0,
			features: {
				'nesting-rules': true,
			},
		}),
		//px2rem({ remUnit: 75 }),
	]),
	// addLessLoader({
	//   javascriptEnabled: true,
	//   // modifyVars: { '@primary-color': '#1DA57A' },
	// }),
)
