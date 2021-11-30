# URL Shortener API :coffee:

Sejam bem vindos ao meu projeto de criar um Encurtador de URL no bootcamp da DIO.

Neste desafio eu refiz o código seguindo os passos da Dev.
Ao final da aula realizei algumas pesquisas na internet e corrigi alguns problemas que apareceram.

## Tecnologias usadas no código: 
 - Typescript
 - NodeJS
 - MongoDB

## Dependências usadas no projeto:
 - `npm i typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint`
 - `npm i nodemon express cors`
 - `npm install --save shortid`
 - `npm i mongoose`
 - `npm i @typegoose/typegoose`

## Rodando o projeto

- `npm install`
- `npm run build`
- `npm run dev`

## Correções: 
 - Criação do arquivo modelo 'URL.ts' usando o @typegoose/typegoose
 - O modelo original da aula está depreciado => @hasezoey/typegoose

## Arquivo URL.ts corrigido:
```
import { getModelForClass, prop } from '@typegoose/typegoose'

export class URL {
    @prop({ required: true })
    hash: string

    @prop({ required: true })
    originURL: string

    @prop({ required: true })
    shortURL: string
}

export const URLModel = getModelForClass(URL)
```

Espero que gostem :heart: