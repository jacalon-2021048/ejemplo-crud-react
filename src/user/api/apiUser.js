import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:3000/api/";

// Mostrar informacion
export const apiUser = async () => {

    try {

        const { data: { users } } = await axios.get(`${URL}read-users`);
        console.log(users);
        return users;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}

//API ruta para crear un usuarioc
export const apiUserCreate = async (username, email, password, rol) => {

    try {

        const userSave = await axios.post(`${URL}create-user`, {
            username: username,
            email: email,
            password: password,
            rol: rol
        }, { headers: { "x-token": token } });

        console.log(userSave);
        return true;

    } catch ({ response: { data: { message } } }) {
        if (message === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar',
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}

//API ruta para crear un usuarioc
export const apiUserEdit = async ( id, username, email, password, rol) => {

    try {

        const userSaveUpdate = await axios.put(`${URL}update-user/${id}`, {
            username: username,
            email: email,
            password: password,
            rol: rol
        }, { headers: { "x-token": token } });

        console.log(userSaveUpdate);
        return true;

    } catch ({ response: { data: { message } } }) {
        if (message === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar',
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}