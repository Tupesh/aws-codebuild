#!/usr/bin/env bash
set -euo pipefail

APP_PORT="${PORT:-3000}"

echo "[validate] Checking health endpoint on port ${APP_PORT}"
curl --fail --silent "http://localhost:${APP_PORT}/health" >/dev/null

echo "[validate] Service validation passed"
