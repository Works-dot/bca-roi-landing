#!/bin/bash
set -e

echo "Pushing latest code to GitHub (remote: github, branch: main)..."
git push github main
echo "Done — GitHub is up to date."
