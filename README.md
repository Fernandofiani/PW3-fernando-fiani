# PW3-fernando-fiani
Programação Web ii por João Siles
## Read-me

Documentação passo a passo da criação de aplicações Laravel.


## PHP

Deve-se criar um arquivo php na IDE escolhida por você.

Para executar um arquivo de PHP siga estes passo:

 - Clone o repositório no caminho  `"C:\xampp\htdocs"` 

 - Abra o powershell como administrador

 - Execute os comandos na seguinte ordem:

 - `npm install -g typescript`

 - `npm install -g tsc`

Para executar o arquivo feche o powershell e abra novamente na pasta em que se localiza o arquivo e execute a seguinte linha:

    -`tsc .nomedoarquivo.ts`
    

# Laravel frameork

As seguintes instruções se dirigem para a instalação do Laravel e a criação de uma aplicação Laravel.

# coisas que voce vai precisar

PHP

Composer

Laravel installer

Node and NPM

List item

# como instalar os componentes

> abra o windows PowerShell como administrador

user este codigo

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))

## Criação do projeto Laravel
> use este codigo primeiro

composer global require laravel/installer

## criação do app

1.feche o PowerShell

2.Abra o terminal do seu projeto

> use esses codigos

> cd --

> cd --

> cd C:

> cd xampp

> cd htdocs

> cd no seu projeto

3.crie o projeto

use este codigo:

laravel new example-app

## configuração
1.feche o terminal

2.abra o Windows PowerShell

> Digite este código para instalar todos os arquivos criando a pasta vendor

> composer install

> Digite este código para gerar os arquivos que são dependências do JavaScript

> npm install

> Digite este código para pegar os arquivos do npm install e gerar os executáveis ​​a partir deles

> npm run build

3.Abra o Visual Studio Code, copie e cole o arquivo .env.example

4.renomeie o arquivo para .env

5.Abra o Windows PowerShell novamente

> Digite este código para executar

> php artisan

> Digite este código para criar uma chave

> php artisan key:generate

> Digite este código para executar todos os arquivos do banco de dados

 > php artisan migrate

> digite 'Yes'
>





## ⚙️ Como Rodar o Projeto

1️⃣ Pré-requisitos
Você precisa ter instalado:

- Node.js
- npm (geralmente já vem com Node)
Verifique com:

> node -v
> npm -v

2️⃣ Clonar o repositório

> git clone <url-do-repositorio>
> Entrar na pasta do projeto:

cd jogo_da_velha

3️⃣ Instalar as dependências

npm install
Esse comando instala todas as bibliotecas listadas no package.json.

4️⃣ Rodar o projeto

npm run dev
Depois disso o Vite iniciará um servidor local.

Normalmente o projeto ficará disponível em:

http://localhost:5173
🚀 Scripts Disponíveis

Rodar o projeto

npm run dev
Build de produção

# Tecnologias Utilizadas



## React



React é uma  **biblioteca JavaScript para construção de interfaces de usuário**.

Ele permite criar aplicações baseadas em  **componentes reutilizáveis**, facilitando a manutenção e organização do código.

Principais conceitos usados no projeto:

-   **Componentes**  → partes reutilizáveis da interface
-   **Props**  → dados passados entre componentes
-   **State (estado)**  → dados que podem mudar durante a execução
-   **Renderização dinâmica**  → atualização automática da interface



## Vite



Vite é uma ferramenta moderna para  **criar e rodar projetos front-end**.

Ele substitui ferramentas antigas como Webpack em projetos menores.

Vantagens:

-   Inicialização extremamente rápida
-   Atualização instantânea no navegador (Hot Reload)
-   Configuração simples



----------

#  Estrutura do Projeto



----------

#  Como Rodar o Projeto



###  Pré-requisitos



Você precisa ter instalado:

- Node.js
- npm (geralmente já vem com Node)

Verifique com:

- node -v
npm -v

2️⃣ Clonar o repositório

git clone <url-do-repositorio>

Entrar na pasta do projeto:

- cd jogo-da-velha

3️⃣ Instalar as dependências

- npm install

Esse comando instala todas as bibliotecas listadas no package.json. necessarias para o codigo funcionar

4️⃣ Rodar o projeto

- npm run dev

Depois disso o Vite iniciará um servidor local.

Normalmente o projeto ficará disponível em:

http://localhost:5173

🚀 Scripts Disponíveis

Rodar o projeto

- npm run dev