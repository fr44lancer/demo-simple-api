

export interface Person {
    id: number;
    psn: string;
    ssn: string;
    isDead: boolean;
    death_date: string;
    first_name: string;
    last_name: string;
    patronymic_name: string;
    birth_date: string;
    genus: string;
    createdAt: string;
    updatedAt: string;
    addressId?: Address;
    documents: Document[];
}


export interface Address {
    id: number;
    region: string;
    street: string;
    building: string;
    apartment: string;
    community: string;
    postal_Index: string;
    personId: number;
}

export interface Document {
    id: number;
    document_type: string;
    document_number: string;
    document_status: string;
    document_department: string;
    personId: number;
}