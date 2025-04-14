// app/api/v1/persons-by-psn/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const psn = searchParams.get('psn');

    if (!psn) {
        return NextResponse.json({ error: 'Missing psn' }, { status: 400 });
    }

    const persons = await prisma.person.findMany({
        where: { psn },
        include: { address: true, documents: true },
    });

    return NextResponse.json(persons);
}
