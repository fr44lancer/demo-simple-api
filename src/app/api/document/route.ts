import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

export async function GET() {
    const documents = await prisma.document.findMany({
        include: { person: true },
    });
    return NextResponse.json(documents);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const document = await prisma.document.create({
        data: {
            ...body,
            personId: body.personId,
        },
        include: { person: true },
    });
    return NextResponse.json(document);
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { id, ...data } = body;

    const document = await prisma.document.update({
        where: { id },
        data: {
            ...data,
            personId: data.personId,
        },
        include: { person: true },
    });

    return NextResponse.json(document);
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    await prisma.document.delete({ where: { id } });
    return NextResponse.json({ success: true });
}
