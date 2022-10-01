import { Document } from 'mongoose'

export interface StudentInterface extends Document {
    name: string;
    picture: string;
    address: {
        street: string
        houseNr: string
        complement: string
        distric: string
        uf: string
        city: string
        cep: string   
    };
}