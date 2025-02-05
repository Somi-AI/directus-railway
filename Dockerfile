# Explicitly specify a Directus version to use on Railway
FROM directus/directus:11.4

USER root

# Set the environment variable for your timezone if needed
# RUN apk add --no-cache tzdata
# ENV TZ=America/New_York

RUN npm install -g pnpm --force

USER node

# Installing contributed/custom extensions through npm on Railway
RUN pnpm install directus-extension-computed-interface && pnpm install directus-extension-upsert && pnpm install directus-extension-wpslug-interface && pnpm install pg

# Migrations and Directus schema update
RUN npx directus bootstrap
# Copying the extensions, templates, migrations, and snapshots to the Directus container
COPY ./extensions /directus/extensions
COPY ./templates /directus/templates
COPY ./migrations /directus/migrations
COPY ./snapshots /directus/snapshots
COPY ./config.cjs /directus/config.cjs           

# Custom entrypoint script to run Directus on Railway for migrations, snapshots, and extensions
COPY entrypoint.sh /directus/entrypoint.sh
WORKDIR /directus
USER root
RUN chmod +x ./entrypoint.sh
USER node
ENTRYPOINT ["./entrypoint.sh"]