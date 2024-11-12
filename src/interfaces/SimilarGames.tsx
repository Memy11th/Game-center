interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: any[];  // Replace 'any' with a specific type if available
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: Record<string, number>;
    metacritic: number | null;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: any | null;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: any[];  // Replace 'any' with a specific type if available
    parent_platforms: any[];  // Replace 'any' with a specific type if available
    genres: any[];  // Replace 'any' with a specific type if available
    stores: any[];  // Replace 'any' with a specific type if available
    clip: any | null;
    tags: any[];  // Replace 'any' with a specific type if available
    esrb_rating: Record<string, any> | null;  // Adjust types if available
    short_screenshots: any[];  // Replace 'any' with a specific type if available
  }
  
 export interface GamesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Game[];
  }
  