import UseGenres from "../Hooks/UseGenres";

const GenreList = () => {

  const {genres} = UseGenres();
  return (
    <ul>
      {genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
