import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';


export async function POST(req: Request) {
  const body = await req.json()
  const { email, name, password } = body;
  
  try {
    
    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    })

    if (existingUser) {
      return NextResponse.json({ message: 'Email taken'});
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      }
    })

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}