FROM node:20-slim AS base
RUN corepack enable && corepack prepare pnpm@9 --activate
WORKDIR /app

FROM base AS builder
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN pnpm --filter @workspace/bca-roi-landing run build
RUN pnpm --filter @workspace/api-server run build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/package.json /app/pnpm-workspace.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/artifacts/api-server/dist ./artifacts/api-server/dist
COPY --from=builder /app/artifacts/api-server/package.json ./artifacts/api-server/package.json
COPY --from=builder /app/artifacts/api-server/node_modules ./artifacts/api-server/node_modules
COPY --from=builder /app/artifacts/bca-roi-landing/dist/public ./artifacts/bca-roi-landing/dist/public

ENV NODE_ENV=production
EXPOSE 3000
CMD ["sh", "-c", "pnpm --filter @workspace/db run push-force && node artifacts/api-server/dist/index.mjs"]
