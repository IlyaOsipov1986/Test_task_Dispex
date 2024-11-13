import { useQuery } from "react-query";
import { getStreets } from "../../../api";

const useStreets = () => {
  return useQuery({
    queryKey: ["streets"],
    queryFn: () => getStreets(),
  });
};

export default useStreets;
