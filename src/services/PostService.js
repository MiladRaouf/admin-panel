import { JpAxios } from "../configs/JpAxios";

export const setGetPost = (postId) => {
    return JpAxios.get('/posts/');
};