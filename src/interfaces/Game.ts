export default interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: {
      yet: number;
      owned: number;
      beaten: number;
      toplay: number;
      dropped: number;
      playing: number;
    };
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: null | object;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: { platform: { id: number; name: string; slug: string } }[];
    parent_platforms: { platform: { id: number; name: string; slug: string } }[];
    genres: { id: number; name: string; slug: string }[];
    stores: { store: { id: number; name: string; slug: string } }[];
    clip: null | object;
    tags: { id: number; name: string; slug: string }[];
    esrb_rating: { id: number; name: string; slug: string };
    short_screenshots: { id: number; image: string }[];
  }
  