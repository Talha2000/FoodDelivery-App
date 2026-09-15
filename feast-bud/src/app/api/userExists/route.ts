import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req: any) {
  try {
    const { name, email } = await req.json();

    const existingName = await prisma.user.findUnique({
      where: { name },
    });

    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingName) {
      return NextResponse.json({ message: 'Username already exists', userExists: true }, { status: 409 });
    }

    if (existingEmail) {
      return NextResponse.json({ message: 'Email already exists', userExists: true }, { status: 409 });
    }

    return NextResponse.json({ message: 'User does not exist', userExists: false });
  } catch (error) {
    console.error('Error finding user:', error);
    return NextResponse.json({ message: 'An error occurred while finding unique user.' }, { status: 500 });
  }
}
