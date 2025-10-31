#!/bin/bash
# =========================================================
# 🔁 Auto Commit & Push Script - versão PRO
# ---------------------------------------------------------
# Faz commit e push automáticos de mudanças no repositório.
# Inclui logs, proteção e commit inteligente.
# =========================================================

INTERVAL=30 # tempo em segundos (5 minutos)
BRANCH=$(git branch --show-current)

echo "🚀 Auto Commit iniciado na branch '$BRANCH'..."
echo "⏱️  Intervalo: $((INTERVAL / 60)) minutos"

while true; do
  # Verifica se há alterações
  if ! git diff --quiet || ! git diff --cached --quiet; then
    DATE=$(date '+%Y-%m-%d %H:%M:%S')
    git add .
    git commit -m "⚙️ Auto commit - $DATE"
    
    # Tenta fazer push
    if git push origin "$BRANCH" >/dev/null 2>&1; then
      echo -e "\033[32m✅ Commit enviado com sucesso às $DATE\033[0m 🔔"
    else
      echo -e "\033[31m❌ Falha ao enviar (verifique conexão ou permissões)\033[0m"
    fi
  else
    echo -e "\033[33m🕓 Nenhuma mudança detectada às $(date '+%H:%M:%S')\033[0m"
  fi

  sleep "$INTERVAL"
done
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
