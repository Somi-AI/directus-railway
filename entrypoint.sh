#!/bin/sh

npx directus bootstrap
npx directus schema apply --yes ./snapshots/snapshot.yaml
node cli.js bootstrap && pm2-runtime start ecosystem.config.cjs