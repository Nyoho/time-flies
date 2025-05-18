import type { SizeLimitConfig } from '../../packages/size-limit'

module.exports = [
  {
    name: "JavaScript bundle",
    path: "dist/assets/*.js",
    ignore: [],
  },
  {
    name: "CSS bundle",
    path: "dist/assets/*.css",
    ignore: [],
  }
] satisfies SizeLimitConfig
