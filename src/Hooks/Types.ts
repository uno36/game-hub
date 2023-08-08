export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export interface FetchGamesResponse {
  count: number;
  results: Game [];

}