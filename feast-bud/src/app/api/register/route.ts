import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

const bcrypt = require("bcrypt");

export async function POST(req: NextRequest) {
  try {
    const body: { name?: string; email?: string; password?: string } =
      await req.json();
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Name, email, and password are required." },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "A user with this email already exists." },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: userPassword, ...userData } = user;
    void userPassword;

    return NextResponse.json(
      { message: "User registered successfully.", user: userData },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user.", error },
      { status: 500 },
    );
  }
}
