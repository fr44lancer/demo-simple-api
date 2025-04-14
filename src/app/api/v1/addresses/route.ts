// app/api/v1/addresses/route.ts
import {NextResponse} from 'next/server';
import prisma from "@/lib/prisma";

export async function GET() {
    const addresses = await prisma.address.findMany();
    return NextResponse.json(addresses);
}
