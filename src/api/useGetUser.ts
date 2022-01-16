import { useQuery } from "react-query";
import { httpClient } from "./client";

const getUser = async (id: number): Promise<User> => {
  return httpClient.get<User>(`/users/${id}`).then((res) => res.data);
};

export const useGetUser = (id: number | undefined) =>
  useQuery<User>(["user", id], () => getUser(id!), {
    enabled: id != null,
    suspense: true,
  });
