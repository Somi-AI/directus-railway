# Latest updates
- This has been updated to **Directus 11.13**
- **Create snapshots with a single command:** cd scripts && pnpm create-snapshot
- **Extension folder updates:** We've updated the extension folders to match the recommended structure. This ensures that you can load your downloaded and custom extensions correctly. Remember to commit the dist folder and package.json for custom extensions. We've included a custom extension as an example.
- **Automatic schema synchronization: (Optional)** Run cd scripts && pnpm create-snapshot to create a snapshot of your working schema from your local development environment. Then, push your branch for deployment, and it will - be synced to your Railway environment.
- **Environment variable management:** We've added a .env.example file(duplicate and rename to .env) to manage your environment variables and secrets. Docker Compose will use this file to load the environment variables.

----

Directus (Docker + extensions + websocket) + PostGIS (Docker & TCP) + S3
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

----

# Directus railway template

This example runs a [Directus](https://directus.io/) instance with minimal config using PostGIS.

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
- The communication from Directus to the database is accomplished through the private network, saving its users from egress fees. This reduces the users' exposure to unnecessary egress fees.

## 💁‍♀️ How to use

- Click the Deploy on Railway button
- Let railway deploy your service, most of the configurations have been preset, but feel free to tweak them as you like before deployment.
- Login in the admin panel using the defined ADMIN_EMAIL and ADMIN_PASSWORD.
- Use of S3 is a must in this template.

There's a great video tutorial about how to set up an S3 bucket for Directus [https://www.youtube.com/watch?v=U7yXFLAwleY&ab_channel=cheddar](https://www.youtube.com/watch?v=U7yXFLAwleY&ab_channel=cheddar). 



## 💁‍♀️ Example screenshots



**Directus extensions**

![Directus extensions!](https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/extensions.png?t=2023-12-15T10%3A32%3A35.939Z "Directus extensions enabled")

**Directus S3 image upload**

![Directus S3 image upload!](https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/s3-file-upload.png "Directus S3 image upload")

**Directus S3 storage**

![Directus S3 storage!](https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/s3-storage.png "Directus S3 storage")

**Railway Database View for Postgis**

![Railway Database View for Postgis!](https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/database-view.png "Railway Database View for Postgis")



