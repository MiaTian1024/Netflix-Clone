import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';


export async function GET(){
  try {
   
    const moviesCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * moviesCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex
    });

    return NextResponse.json(randomMovies[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}