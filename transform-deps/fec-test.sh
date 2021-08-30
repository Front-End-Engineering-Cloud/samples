echo 'Building sample/transform-deps!'

fec-builder clean && fec-builder generate -e production

# 检查 node_modules 中的 ES6 内容是否被正确转换
npx es-check@^5.0.0 es5 ./dist/static/*.js
