#!/bin/bash

# Run the commands manually
while true; do
  echo "Running sync-blocks..."
  echo "Command: cd /root/eiquidus && npm run sync-blocks"
  node --stack-size=5000 scripts/sync.js index update

  echo "Running sync-markets..."
  echo "Command: cd /root/eiquidus && npm run sync-markets"
  npm run sync-markets

  echo "Running sync-peers..."
  echo "Command: cd /root/eiquidus && npm run sync-peers"
  npm run sync-peers

  npm run reindex-rich

  sleep 60 # Run every 1 minute
done