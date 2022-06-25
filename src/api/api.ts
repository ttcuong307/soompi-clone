import axios from "axios";

import { PostType } from "../types/type";

export const getPost = async (postId: string) => {
  const { data } = await axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  return data;
}