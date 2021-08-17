echo 'Building sample/transform-deps!'

fec-builder clean && fec-builder generate -e production

node ./check-image.mjs
