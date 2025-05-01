import type { SizeLimitConfig } from '../../packages/size-limit'

module.exports = [
  {
    path: "dist/assets/*.js",
    limit: "500 ms"
  }
] satisfies SizeLimitConfig
