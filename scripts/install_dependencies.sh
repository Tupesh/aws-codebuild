#!/usr/bin/env bash
set -euo pipefail

echo "[install] Installing Node.js dependencies"
cd /var/www/aws-codebuild-sample
npm ci --omit=dev || npm install --omit=dev
