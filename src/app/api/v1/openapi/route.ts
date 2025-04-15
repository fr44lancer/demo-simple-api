// app/api/public-registry-openapi/route.ts
import {NextResponse} from 'next/server'
import {getPublicRegistryOpenApi} from "@/utils/openapi";

export async function GET() {
    const openapi = getPublicRegistryOpenApi()
    return NextResponse.json(openapi)
}
