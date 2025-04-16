// app/api/v1/persons/route.ts
import {NextResponse} from 'next/server';
import prisma from "@/lib/prisma";


const allowedOrigin = '*'; // or '*' if you want to allow all

const corsHeaders = {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-ROAD-CLIENT',
    'Access-Control-Allow-Credentials': 'true',
};

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export async function GET() {
    const persons = await prisma.person.findMany({
        include: { address: true, documents: true },
    });
    return new Response(JSON.stringify(persons), {
        headers: corsHeaders,
    });
}
