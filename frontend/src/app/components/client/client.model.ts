export interface Client {
    id?: number,
    name: string
    birthdate: string
    gender: string
    cpf?: string
    rg?: string
    address?: string
    addressnumber?: number
    district?: string
    city?: string
    uf?: string
    postalcode?:string
    country?: string
    phone1: number
    phone2?: number
    email?: string
}
