#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/aws-codebuild-sample"
APP_NAME="aws-codebuild-sample"

cd "$APP_DIR"

if ! command -v pm2 >/dev/null 2>&1; then
  npm install -g pm2
fi

if pm2 list | grep -q "$APP_NAME"; then
  pm2 restart "$APP_NAME" --update-env
else
  pm2 start server.js --name "$APP_NAME"
fi

pm2 save
