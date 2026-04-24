#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push

echo "Syncing to GitHub..."
git push github main 2>&1 || echo "Warning: GitHub push failed — will retry on next commit"
echo "Post-merge setup complete."
