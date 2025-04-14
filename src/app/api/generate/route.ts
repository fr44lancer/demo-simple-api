import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

const firstNames = ['Արամ', 'Աննա', 'Գագիկ', 'Լուսինե', 'Վահե', 'Նարինե'];
const lastNames = ['Պետրոսյան', 'Սարգսյան', 'Հակոբյան', 'Մկրտչյան', 'Ավետիսյան'];
const patronymics = ['Հակոբի', 'Արմենի', 'Վարդանի', 'Գրիգորի'];
const regions = ['Երևան', 'Գյումրի', 'Վանաձոր', 'Հրազդան'];
const streets = ['Աբովյան', 'Սայաթ-Նովա', 'Մաշտոց', 'Թումանյան'];
const communities = ['Կենտրոն', 'Շենգավիթ', 'Աջափնյակ'];
const documentTypes = ['անձնագիր', 'վարորդական', 'զինվորական'];
const documentStatuses = ['սակարկելի', 'ակտիվ', 'չեղարկված'];
const departments = ['Road Police', 'Passport service', 'Social services'];

function random<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randStr(len: number) {
    return Math.random().toString(36).substring(2, 2 + len).toUpperCase();
}

export async function POST(req: NextRequest) {
    const { persons = 10, addresses = 5 } = await req.json();

    try {
        // 1. Create addresses
        const createdAddresses = await Promise.all(
            Array.from({ length: addresses }).map(() =>
                prisma.address.create({
                    data: {
                        region: random(regions),
                        street: random(streets),
                        building: `${Math.ceil(Math.random() * 30)}`,
                        apartment: `${Math.ceil(Math.random() * 100)}`,
                        community: random(communities),
                        postal_Index: `${2000 + Math.floor(Math.random() * 800)}`,
                    },
                })
            )
        );

        // 2. Create people with random address and 1–2 documents each
        for (let i = 0; i < persons; i++) {
            const person = await prisma.person.create({
                data: {
                    psn: randStr(8),
                    ssn: randStr(10),
                    isDead: Math.random() > 0.8,
                    death_date: new Date(Date.now() - Math.floor(Math.random() * 1e10)),
                    first_name: random(firstNames),
                    last_name: random(lastNames),
                    patronymic_name: random(patronymics),
                    birth_date: new Date(Date.now() - Math.floor(Math.random() * 1e11)),
                    genus: random(['male', 'female']),
                    addressId: random(createdAddresses).id,
                },
            });

            const docsToCreate = Math.random() > 0.5 ? 2 : 1;

            await Promise.all(
                Array.from({ length: docsToCreate }).map(() =>
                    prisma.document.create({
                        data: {
                            personId: person.id,
                            document_type: random(documentTypes),
                            document_number: randStr(6),
                            document_status: random(documentStatuses),
                            document_department: random(departments),
                        },
                    })
                )
            );
        }

        return NextResponse.json({ success: true, count: { persons, addresses } });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}