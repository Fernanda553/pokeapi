import { useParams } from "react-router-dom";

function Pokemon() {
  const { name } = useParams();
  return <div> Este Pokemon es {name}</div>;
}
export default Pokemon;
