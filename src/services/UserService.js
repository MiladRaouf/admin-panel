import Swal from "sweetalert2";
import { JpAxios } from "../configs/JpAxios";

export const setAddUserService = async (userDetails) => {
    const res = await JpAxios.post('/users', userDetails);

    if (res) {
        Swal.fire(
            userDetails.name,
            'تبریک میگم به لیست کاربران اضافه شدی',
            'success'
        )
    }
}

export const setEditUserService = async (userId, userDetails) => {
    const res = await JpAxios.put(`/users/${userId}`, userDetails);

    if (res) {
        Swal.fire(
            userDetails.name,
            'تغییرات مورد نظرت انجام شد',
            'success'
        )
    }
}