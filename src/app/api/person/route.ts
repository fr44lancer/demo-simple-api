import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

export async function GET() {
    const people = await prisma.person.findMany({
        include: {
            address: true,
            documents: true,
        },
    });
    return NextResponse.json(people);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { addressId, ...personData } = body;

    const person = await prisma.person.create({
        data: {
            ...personData,
            addressId: addressId ?? null,
        },
        include: {
            address: true,
            documents: true,
        },
    });

    return NextResponse.json(person);
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { id, addressId, ...personData } = body;

    const person = await prisma.person.update({
        where: { id },
        data: {
            ...personData,
            addressId: addressId ?? null,
        },
        include: {
            address: true,
            documents: true,
        },
    });

    return NextResponse.json(person);
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    await prisma.person.delete({ where: { id } });
    return NextResponse.json({ success: true });
}
