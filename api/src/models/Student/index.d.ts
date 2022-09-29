import { Document } from 'mongoose'

export interface StudentInterface extends Document {
    name: string;
    picture: string;
    address: {
        stress: string
        houseNr: string
        complement: string
        distric: string
        uf: string
        city: string    
    };
}