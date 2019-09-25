#!/bin/bash
echo "Build process starting...";

ENV_FILE="src/environments/environment.ts"

if [ ! -f "$ENV_FILE" ]; then
    echo "Writing configuration file.";
    cat << VARS > $ENV_FILE
export const environment = {
  production: ${PRODUCTION},
  apiUrl: "${API_URL}",
  clientId: "${API_CLIENT_ID}",
  clientSecret: "${API_CLIENT_SECRET}",
  assetsFolder: "${ASSETS_FOLDER}",
  pusher: {
    key: "${PUSHER_CLIENT_KEY}",
    cluster: 'us2',
    host: null,
  },
  mux_data_key: "${MUX_DATA_KEY}",
  nutritionix: {
    appId: "${NUTRITIONIX_APP_ID}",
    appKey: "${NUTRITIONIX_APP_KEY}",
    url: "${NUTRITIONIX_API_URL}"
  }
};
VARS
fi;

if [ "$CI_GIT_REF" = "master" ]; then
    echo "Running production build."
    npx ionic build --prod
    cp src/manifest.json www/manifest.json
else
    echo "Running non-production build."
    npx ionic build
    cp src/manifest.json www/manifest.json
fi
