# Documentação dos Recursos do Site

Este arquivo `README.md` explica e detalha os recursos usados no código HTML fornecido para um site chamado "Sistema Online - Administrador."

## Estrutura HTML

O documento HTML fornece a estrutura básica de uma página da web. Ele inclui os seguintes elementos:

- `<!DOCTYPE html>`: Especifica que o documento é um documento HTML5.
- `<html lang="pt">`: Define o idioma do documento como português.
- `<head>`: Contém metadados e links para recursos.
- `<body>`: Contém o conteúdo principal da página.

## Meta Tags

- `<meta charset="UTF-8">`: Define a codificação de caracteres do documento como UTF-8.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">: Configura a visualização para design responsivo.
- `<meta name="description" content="Uma plataforma de serviços para estudantes...">: Descreve brevemente o site.
- `<meta property="og:image" content="https://programa-df149.web.app/assets/image/logo.png">: Define uma imagem para compartilhamento em redes sociais.

## Título e Ícone

- `<title>Sistema Online - Administrador</title>`: Define o título da página.
- `<link rel="shortcut icon" href="https://programa-df149.web.app/assets/image/ucm-logo.png" type="image/x-icon">: Define o ícone da guia do navegador.

## Estilos CSS e Fontes

O arquivo HTML inclui links para arquivos CSS externos para estilização e importa fontes do Google:

- `<link rel="stylesheet" href="/assets/css/main.user.css">`: Estilos personalizados.
- `<link rel="stylesheet" href="/assets/css/public.index.css">`: Outros estilos personalizados.
- `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">: Ícones da Font Awesome.
- `<link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,700&display=swap" rel="stylesheet>`: Fonte Poppins.
- `<link href="https://fonts.googleapis.com/css?family=Roboto:200,400,500,700&display=swap" rel="stylesheet>`: Fonte Roboto.

## Cabeçalho (Header)

O cabeçalho (`<header>`) contém a navegação do site. Ele inclui o logotipo "UCM" e links para diferentes seções do site.

## Conteúdo Principal

O conteúdo principal é definido em um container (`<div class="container">`) e inclui informações sobre a universidade, os dados do estudante e uma lista de cadeiras de cursos.

## Dados do Estudante

A seção "Dados do Estudante" exibe informações do estudante, incluindo um título e uma lista de informações.

## Cadeiras dos Cursos

A seção "Cadeiras dos Cursos" lista as disciplinas do curso "IT07" e inclui uma barra de pesquisa para filtrar as disciplinas.

## Frequências do Estudante

Exibe as frequências do estudante em um formato de tabela, incluindo notas, frequência, presença e faltas.

## Notas do Estudante

Exibe as notas do estudante em um formato de tabela, mostrando as notas por disciplina.

## Lista de Pagamentos

Apresenta uma tabela com informações de pagamentos, incluindo data, valor e status.

## Rodapé (Footer)

O rodapé do site inclui informações de contato e links para redes sociais.

## Formulário de Login

O site possui um formulário de login com campos de e-mail e senha.

## Scripts JavaScript

- `<script src="/database/database.js">`: Inclui um script para lidar com o banco de dados.
- `<script src="/assets/js/list-search.js">`: Possivelmente um script para pesquisa em listas.
- `<script src="/assets/js/list.js">`: Outro script relacionado à listagem.
- `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">`: Inclui a biblioteca jQuery.
- `<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js">`: Inclui a biblioteca Popper.js.

Este `README.md` fornece uma visão geral dos recursos e da estrutura do código HTML fornecido para o site "Sistema Online - Administrador." Essa documentação ajuda a entender como o site está estruturado e quais recursos externos estão sendo usados.