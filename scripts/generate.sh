#! /bin/sh

set -e

yarn run generate

mv dist dist_gen
git clone git@github:mtasa-typescript/mtasa-typescript.github.io.git dist
cp -rf dist_gen/* dist/
rm -rf dist_gen
