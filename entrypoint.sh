#!/bin/sh

npx directus bootstrap
# Comment out the following line if you want to sync the snapshot
# npx directus schema apply --yes ./snapshots/snapshot.yaml
node cli.js bootstrap && pm2-runtime start ecosystem.config.cjs