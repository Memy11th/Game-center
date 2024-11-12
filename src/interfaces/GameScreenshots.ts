interface Screenshot {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
  }
  
 export interface ScreenshotResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Screenshot[];
  }
  