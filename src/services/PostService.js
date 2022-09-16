import Swal from "sweetalert2";
import { JpAxios } from "../configs/JpAxios";

export const setGetPost = (postId) => {
    return JpAxios.get('/posts/');
};

export const addPostService = async (postDetails) => {
    const res = await JpAxios.post('/posts', postDetails);

    if (res) {
        Swal.fire(
            postDetails.name,
            'تبریک میگم به لیست کاربران اضافه شدی',
            'success'
        )
    }
}

export const editPostService = async (postId, postDetails) => {
    const res = await JpAxios.put(`/posts/${postId}`, postDetails);

    if (res) {
        Swal.fire(
            postDetails.name,
            'تغییرات مورد نظرت انجام شد',
            'success'
        )
    }
}