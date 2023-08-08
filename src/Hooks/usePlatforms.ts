import useData from "./UseData";

interface Platform {
  id: string;
  name: string;
  slug: string;
}

const usePlatfroms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatfroms;