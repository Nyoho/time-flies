const plugins = [
  'react-hot-loader/babel',
  '@babel/plugin-proposal-object-rest-spread',
  [
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '~': './src',
        test: './test'
      }
    }
  ]
]

const presets = ['@babel/preset-react']

const presetsByEnv = {
  development: [['@babel/preset-env', { targets: { chrome: 65 } }]],
  test: [['@babel/preset-env', { targets: { node: '8.5' } }]],
  production: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {ie: 11},
      }
    ]
  ]
}

module.exports = {
  plugins,
  presets: [...presets, ...presetsByEnv[process.env.NODE_ENV || 'development']]
}
