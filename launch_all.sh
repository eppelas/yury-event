#!/bin/bash
PORT=3000

echo "Starting main project on port $PORT..."
cd "../AI Mindset Visual Research"
npm run dev -- --port $PORT &
sleep 2
open -a "Google Chrome" "http://localhost:$PORT"

cd "../Antigravity aim website visual research"
for dir in "AI Mindset Visual Research - "*; do
  if [ -d "$dir" ]; then
    PORT=$((PORT+1))
    echo "Starting $dir on port $PORT..."
    (cd "$dir" && npm run dev -- --port $PORT) &
    sleep 1
    open -a "Google Chrome" "http://localhost:$PORT"
  fi
done

echo "All projects launched. Press Ctrl+C to stop all servers."
wait
