import { NextResponse, NextRequest } from 'next/server';
import prismadb from '@/lib/prismadb';


export async function GET(req: NextRequest){
  try {

    const movieId = req.nextUrl.searchParams.get("/");
    console.log(movieId)

    if (typeof movieId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!movieId) {
      throw new Error('Missing Id');
    }

    const movies = await prismadb.movie.findUnique({
      where: {
        id: movieId
      }
    });

    return NextResponse.json(movies);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}