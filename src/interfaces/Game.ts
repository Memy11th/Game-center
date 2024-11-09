export default interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Array<number>; // You can specify the type of ratings if known
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: object; // You can replace `object` with a more specific type if needed
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string; // A timestamp as a string (e.g., ISO string format)
    user_game: any | null; // Assuming this can be null or any other type (e.g., Game object)
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: Array<string>; // Replace `any` with a more specific type if needed
    parent_platforms: Array<string>; // Same as above
    genres: Array<string>; // Same as above
    stores: Array<string>; // Same as above
    clip: any | null; // You can specify a more specific type for `clip` if known
    tags: Array<string>; // Same as above
    esrb_rating: object; // Replace `object` with a more specific type if available
    short_screenshots: Array<any>; // Replace `any` with the type of short screenshots
}
