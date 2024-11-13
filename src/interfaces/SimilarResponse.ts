export default interface SimilarResponse {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Array<unknown>; // Replace `any` with a specific type if known
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: { [key: string]: number }; // Replace `[key: string]` with specific keys if known
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: unknown | null; // Replace `any` with a specific type if known
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: Array<unknown>; // Replace `any` with a specific type if known
    parent_platforms: Array<unknown>; // Replace `any` with a specific type if known
    genres: Array<unknown>; // Replace `any` with a specific type if known
    stores: Array<unknown>; // Replace `any` with a specific type if known
    clip: unknown | null; // Replace `any` with a specific type if known
    tags: Array<unknown>; // Replace `any` with a specific type if known
    esrb_rating: unknown | null; // Replace `any` with a specific type if known
    short_screenshots: Array<unknown>; // Replace `any` with a specific type if known
  }
  