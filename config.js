export default function (env) {
    return {
            // Railway inputs
            ADMIN_EMAIL: env.ADMIN_EMAIL,
            ADMIN_PASSWORD: env.ADMIN_PASSWORD,
            KEY: env.KEY,
            SECRET: env.SECRET,

            // https://docs.railway.app/guides/public-networking#railway-provided-port
            PORT: env.PORT,

            PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

            // Database & storage variables for connecting to PostGIS and S3/local storage
            DB_CLIENT: 'pg',
            DB_CONNECTION_STRING: env.DB_CONNECTION_STRING,
            STORAGE_LOCATIONS: env.STORAGE_LOCATIONS,
            STORAGE_S3_DRIVER: env.STORAGE_S3_DRIVER,
            STORAGE_S3_KEY: env.STORAGE_S3_KEY,
            STORAGE_S3_SECRET: env.STORAGE_S3_SECRET,
            STORAGE_S3_REGION: env.STORAGE_S3_REGION,
            STORAGE_S3_BUCKET:  env.STORAGE_S3_BUCKET,
            STORAGE_S3_ENDPOINT: env.STORAGE_S3_ENDPOINT,
            WEBSOCKETS_ENABLED: env.WEBSOCKETS_ENABLED,
    };
};