#!/bin/bash
# weekly-report.sh - genera reporte semanal desde plantilla

set -e

WORKSPACE="/home/javibeat/.openclaw/workspace"
TEMPLATE="$WORKSPACE/REPORTS/weekly-template.md"
OUT_DIR="$WORKSPACE/REPORTS/weekly"

# Crear directorio si no existe
mkdir -p "$OUT_DIR"

# Fechas
START_DATE=$(date -d "last monday" +%Y-%m-%d)
END_DATE=$(date -d "next sunday" +%Y-%m-%d)
NOW=$(date +"%Y-%m-%d %H:%M")
FILENAME="weekly-$START_DATE-to-$END_DATE.md"

# Copiar plantilla y reemplazar placeholders
cp "$TEMPLATE" "$OUT_DIR/$FILENAME"
sed -i "s/\[YYYY-MM-DD to YYYY-MM-DD\]/$START_DATE to $END_DATE/g" "$OUT_DIR/$FILENAME"
sed -i "s/\[YYYY-MM-DD HH:MM\]/$NOW/g" "$OUT_DIR/$FILENAME"

# Recopilar commits de la semana (si hay git)
if [ -d "$WORKSPACE/.git" ]; then
  cd "$WORKSPACE"
  COMMIT_COUNT=$(git log --since="$START_DATE" --oneline | wc -l | tr -d '[:space:]')
  sed -i "s/\[ \]/$COMMIT_COUNT/g" "$OUT_DIR/$FILENAME"
fi

echo "Reporte generado: $OUT_DIR/$FILENAME"
echo "Edita el archivo para completar tareas, métricas, etc."
