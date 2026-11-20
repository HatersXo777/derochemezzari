#!/bin/sh
npx vercel login
npx vercel link --yes --project derochemezzari --scope alefizanini-2860s-projects
npx vercel deploy --prod --yes --scope alefizanini-2860s-projects
