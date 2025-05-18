import type { SizeLimitConfig } from '../../packages/size-limit'

module.exports = [
  {
    name: "JavaScript bundle",
    path: "dist/assets/*.js",
  },
  {
    name: "CSS bundle",
    path: "dist/assets/*.css",
  }
] satisfies SizeLimitConfig
