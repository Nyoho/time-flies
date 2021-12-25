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
  development: [['@babel/preset-env', { targets: { node: 'current' } }]],
  test: [['@babel/preset-env', { targets: { node: 'current' } }]],
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
