import useData from "./useData";
import { Genre } from "./types";

const UseGenres = () => useData<Genre>('/genres');

export default UseGenres
