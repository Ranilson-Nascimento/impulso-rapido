@echo off
echo ================================================
echo     CONFIGURACAO DO REPOSITORIO GITHUB
echo ================================================
echo.

echo 1. Configurando informacoes do usuario Git...
git config --global user.name "Ranilson Nascimento"
git config --global user.email "ranilsonnunes6@gmail.com"

echo.
echo 2. Adicionando repositorio remoto do GitHub...
git remote add origin https://github.com/Ranilson-Nascimento/impulso-rapido.git

echo.
echo 3. Verificando status do repositorio...
git status

echo.
echo ================================================
echo PROXIMO PASSO: FAZER PUSH PARA O GITHUB
echo ================================================
echo.
echo Para fazer o push inicial, execute:
echo git push -u origin main
echo.
echo Ou se preferir criar uma branch main:
echo git branch -M main
echo git push -u origin main
echo.
echo ================================================
echo DEPLOY NO VERCEL
echo ================================================
echo.
echo 1. Acesse: https://vercel.com/
echo 2. Conecte sua conta GitHub
echo 3. Importe o repositorio: impulso-rapido
echo 4. Configure as variaveis de ambiente:
echo    - GOOGLE_GENAI_API_KEY (opcional para IA)
echo    - NEXT_PUBLIC_GA_ID (opcional para Analytics)
echo 5. Clique em Deploy
echo.
echo O site sera automaticamente deployado em:
echo https://impulso-rapido.vercel.app
echo.
echo ================================================

pause
