export type StudentData = {
    _id: string
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
    createdAt: Date,
    updatedAt: Date,
}

export type getStudents = {
    limit: number
    page: number
    total: number
    students: StudentData[] | undefined
}

export type getStudentById = {
    data: StudentData
    error: boolean
}