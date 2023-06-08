# Projeto Zoo Functions

Este projeto tem como objetivo desenvolver uma série de funções relacionadas a um zoológico. Cada função é responsável por resolver um desafio específico, utilizando conceitos de lógica de programação e manipulação de dados em JavaScript.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu computador.
2. Clone este repositório
3. Acesse o diretório do projeto: `cd project-zoo-functions`
4. Instale as dependências do projeto: `npm install`

## Testes

O projeto utiliza o framework de testes Jest. Os testes estão localizados no diretório `test`.

Para executar os testes, utilize o seguinte comando:

```
npm test
```

Você também pode gerar um relatório de cobertura de código utilizando o comando:

```
npm run test:coverage
```

## Configuração do ESLint

O projeto utiliza a configuração "trybe-fundamentals" do ESLint, que é uma configuração específica da Trybe para projetos fundamentos.

## Estrutura do Projeto

A estrutura de diretórios do projeto é a seguinte:

```
.
├── src/                  # Arquivos JavaScript das funções
├── test/                 # Arquivos de testes
├── .eslintrc.json        # Configuração do ESLint
├── index.js              # Arquivo principal
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto
```