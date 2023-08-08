import useData from "./UseData";
import { Genre } from "../Hooks/Types";

const UseGenres = () => useData<Genre>('/genres');

export default UseGenres
