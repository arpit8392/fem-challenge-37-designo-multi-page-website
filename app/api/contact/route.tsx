import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const json = await request.json()

		const message = await prisma.contact.create({
			data: json,
		})

		return new NextResponse(JSON.stringify(message), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error: any) {
		return new NextResponse(error.message, {
			status: 500,
		})
	}
}
