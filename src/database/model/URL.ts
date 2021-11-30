// Criação do modelo usando o novo repo do @typegoose/typegoose
// O modelo original da aula está depreciado => @hasezoey/typegoose

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