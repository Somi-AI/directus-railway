---
title: Directus (Docker + extensions + websocket) + PostGIS (Docker & TCP) + S3
description: A one-click-install Directus instance with PostGIS and S3 for persistent storage.
tags:
  - Directus
  - Typescript
  - Vue
  - Websocket
  - CMS
  - Data Platform
  - PostgreSQL
  - PostGIS
  - Railway
---

# Directus railway template

This example runs a [Directus](https://directus.io/) instance with minimal config using PostGIS.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/XQc69P?referralCode=OYCuBb)

## ✨ Features

- Directus config is pre-configured
- Install Directus using Docker
- Directus extensions and websocket are pre-configured
- Directus version can be updated through Dockerfile
- Directus extensions can be updated and loaded through Dockerfile
- PostGIS config is pre-configured
- SSL certificates is pre-configured using the self-signed Snakeoil certificate for PostGIS
- Railway Database View is pre-configured 
- Install PostGIS instead of Postgre as Directus recommended for supporting GIS features
- S3 for persistent storage
- docker-compose.yml is added for local development
- The communication from Directus to the database is accomplished through the private network, saving its users from egress fees. This reduces the users' exposure to unnecessary egress fees.

## 💁‍♀️ How to use

- Click the Deploy on Railway button
- Let railway deploy your service, most of the configurations have been preset, but feel free to tweak them as you like before deployment.
- Login in the admin panel using the defined ADMIN_EMAIL and ADMIN_PASSWORD.
- Use of S3 is a must in this template.
- For local development, just run `docker compose up` or run the same command twice (Sometimes, the Directus container starts before other containers are ready, resulting in a failure upon startup).


## 💁‍♀️ Example screenshots

**Directus extensions**

![Directus extensions!](https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/extensions.png?t=2023-12-15T10%3A32%3A35.939Z "Directus extensions enabled")

**Directus S3 image upload**

![Directus S3 image upload!](https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/s3-file-upload.png "Directus S3 image upload")

**Directus S3 storage**

![Directus S3 storage!](https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/s3-storage.png "Directus S3 storage")

**Railway Database View for Postgis**

![Railway Database View for Postgis!](https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/database-view.png "Railway Database View for Postgis")

## 📝 Notes

- This is a minimal one-click-deploy solution to Directus, see [Directus docs](https://docs.directus.io/getting-started/introduction.html) to config it to your needs.

## Credit

- Inspired and learnt from [https://github.com/freekrai/directus-railway](https://github.com/freekrai/directus-railway) and [https://railway.app/template/postgis](https://railway.app/template/postgis)
