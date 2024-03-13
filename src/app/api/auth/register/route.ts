import prisma from "@/lib/prisma";
import { genSalt, hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const newUser = await req.json();

    // check user by email
    const getUser = await prisma.user.findUnique({
      where: { email: newUser.email },
    });

    if (getUser) {
      // if user exists
      return NextResponse.json({
        success: false,
        message: "User exists at this email",
      });
    }

    const salt = await genSalt(10);
    const hashedPwd = await hash(newUser.password, salt); // encrypted password
    newUser.password = hashedPwd;

    await prisma.user.create({ data: newUser }); // insert a new user
    return NextResponse.json(
      { success: true, message: "USER CREATED" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 400 });
  }
}
