import { getGame } from '@/Api/Api';
import ScreenshotSlider from '@/components/ScreenshotsSlider';
import { GameResponse } from '@/interfaces/GameById';
import { ScreenshotResponse } from '@/interfaces/GameScreenshots';
import { GamesResponse } from '@/interfaces/SimilarGames';
import Image from 'next/image';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const ID = params.id;
  console.log('Movie ID:', ID);

  try {
    // Fetch game data with the ID
    const { data, screenshots, similar }: { data: GameResponse; screenshots: ScreenshotResponse; similar: GamesResponse } = await getGame(ID);
    const screenshotsArray = screenshots?.results
    console.log(similar)
    return (
      <div className="min-h-screen  rounded-xl overflow-hidden">
      <div className="grid grid-cols-12 gap-4 m-4">
        <div className="col-span-4 relative min-h-[300px] md:min-h-[400px]">
          <Image 
            alt={data?.name} 
            src={data?.background_image} 
            fill
            className="rounded-xl object-cover" 
          />
        </div>
        <div className="col-span-8 flex flex-col justify-center items-start">
          <h1 className='font-bold dark:text-rose-500 '>{data?.name}</h1>
          <p className='text-sm' >{data?.description_raw}</p>
          
        </div>
      </div>
      <div className=' grid-cols-12 flex justify-between'>
            <ScreenshotSlider screenshots={screenshotsArray} />
      </div>
      
    </div>
    
    

    );
  } catch (error) {
    console.error('Failed to fetch game data:', error);
    return <div>Error loading game data</div>;
  }
}
