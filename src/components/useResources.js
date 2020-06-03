import { useEffect, useState } from "react";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await jsonPlaceholder.get(`/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  return resources;
};
