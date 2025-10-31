#!/bin/bash
# --- Auto Commit & Push Script ---
# Ele salva e envia mudanças automaticamente a cada 5 minutos.

while true; do
  git add .
  git commit -m "Auto commit: $(date '+%Y-%m-%d %H:%M:%S')" >/dev/null 2>&1
  git push >/dev/null 2>&1
  echo "✅ Auto commit enviado em $(date '+%H:%M:%S')"
  sleep 300  # tempo em segundos (aqui = 5 minutos)
done
