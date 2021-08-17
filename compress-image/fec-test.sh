echo 'Building sample/compress-image!'

fec-builder clean && fec-builder generate -e production

node ./check-image.mjs
