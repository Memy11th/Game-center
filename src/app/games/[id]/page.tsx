import { getGame } from '@/Api/Api';
import { GameResponse } from '@/interfaces/GameById';
import { ScreenshotResponse } from '@/interfaces/GameScreenshots';
import { GamesResponse } from '@/interfaces/SimilarGames';
import React from 'react';

export default async function Page({ params }) {
  // Access the dynamic route parameter `id`
  const ID = params.id; // No need to await params.id
  console.log('Movie ID:', ID);

  // Fetch game data with the ID
  const { data, screenshots, similar }:{data:GameResponse, screenshots:ScreenshotResponse ,similar : GamesResponse } = await getGame(ID);

  return (
    <>
      <h1>Hello from the movie you clicked on!</h1>
      <div>Game Title: {ID || 'Title not available'}</div>
    </>
  );
}
