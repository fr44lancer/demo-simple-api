import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

export async function GET() {
    const addresses = await prisma.address.findMany();
    return NextResponse.json(addresses);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const address = await prisma.address.create({ data: body });
    return NextResponse.json(address);
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { id, ...data } = body;
    const address = await prisma.address.update({ where: { id }, data });
    return NextResponse.json(address);
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    await prisma.address.delete({ where: { id } });
    return NextResponse.json({ success: true });
}
