@echo off
echo Se pedir login, siga as instrucoes no navegador.
call npx vercel login
call npx vercel link --yes --project derochemezzari --scope alefizanini-2860s-projects
call npx vercel deploy --prod --yes --scope alefizanini-2860s-projects
pause
