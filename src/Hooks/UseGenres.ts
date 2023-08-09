import useData from "./useData";
import { Genre } from "./Types";

const UseGenres = () => useData<Genre>('/genres');

export default UseGenres
