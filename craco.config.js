/* eslint-disable @typescript-eslint/no-var-requires */
const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
	babel: {
		plugins: [
			[
				"@babel/plugin-proposal-decorators",
				{
					legacy: true,
				},
			],
			["@babel/plugin-proposal-class-properties", { loose: true }],
			["@babel/plugin-transform-for-of", { loose: true }],
		],
	},
	eslint: {
		mode: ESLINT_MODES.file,
	},
};
