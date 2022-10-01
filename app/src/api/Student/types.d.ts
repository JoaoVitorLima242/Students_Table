export type StudentDataResquest = {
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

export type getStudents = {
    limit: number
    page: number
    total: number
    students: StudentDataResquest[] | undefined
}