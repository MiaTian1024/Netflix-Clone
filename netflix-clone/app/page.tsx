"use client"
import React from 'react';
import { NextPageContext } from 'next';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
// import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useInfoModalStore from '@/hooks/useInfoModalStore';

export default function Home() {
  const { data: movies = [] } = useMovieList();

  return (
    <main>
       
      {/* <InfoModal visible={isOpen} onClose={closeModal} /> */}
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        {/* <MovieList title="My List" data={favorites} /> */}
      </div>
   
    </main>
  )
}
