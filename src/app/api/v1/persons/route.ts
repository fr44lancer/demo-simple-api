// app/api/v1/persons/route.ts
import {NextResponse} from 'next/server';
import prisma from "@/lib/prisma";

export async function GET() {
    const persons = await prisma.person.findMany({
        include: { address: true, documents: true },
    });
    return NextResponse.json(persons);
}
