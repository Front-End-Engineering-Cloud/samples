import { readdirSync, statSync } from 'fs'
import { join, resolve } from 'path'

// 先忽略 png，因为 imagemin-pngquant 有点问题，详见 builder 中 ImageMinimizerPlugin 相关逻辑
const imageExtensions = ['jpg', 'jpeg', /* 'png', */'gif', 'bmp', 'webp', 'svg']

function getSize(filePath) {
  return statSync(filePath).size
}

function main() {
  const srcDir = resolve('src')
  const distDir = resolve('dist', 'static')
  const srcFileNames = readdirSync(srcDir)
  const distFileNames = readdirSync(distDir)

  for (const srcFileName of srcFileNames) {
    const extension = srcFileName.split('.').pop()
    if (imageExtensions.includes(extension)) {
      const distFileName = distFileNames.find(file => file.endsWith(`.${extension}`))
      const srcSize = getSize(join(srcDir, srcFileName))
      const distSize = getSize(join(distDir, distFileName))

      if (distSize >= srcSize) {
        throw new Error(`Image ${srcFileName} not compressed, ${srcSize}B -> ${distSize}B`)
      }
    }
  }

  console.log('Check ok.')
}

main()
