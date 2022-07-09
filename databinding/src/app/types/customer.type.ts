//type declaration  class,interface,type keyword

export class Customer {
    // id!: number
    id: number = 0
    name!: string
    status?: "Available" | "NotAvailable" //optional field
    gender!: "Male" | "Female" | "Third"
    address!: {
        city: string
        state?: string
    }
}