echo 'Building sample/common-chunk!'

fec-builder clean && fec-builder generate -e production

echo "$(cat dist/index.html)"
