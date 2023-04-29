import Swal from "sweetalert2"
import { apiUserCreate, apiUserEdit } from "../api/apiUser";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    username: Yup.string().required('El nombre de usuario es requerido'),
    email: Yup.string().required('El correo es requerido').email('Debe ser un correo electronico valido'),
    password: Yup.string().required('El password es requerido').min(6, 'El password debe tener al menos 6 digitos')
});

export const formOptions = { resolver: yupResolver(formSchema) };



export const formUserHelper = async (user, option) => {

    let resultado;
    switch (option) {
        case 1:
            //console.log('HOLA MUNDO');
            resultado = await apiUserCreate(
                user.username,
                user.email,
                user.password,
                user.rol
            );
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "todo bien",
                    text: "Usuario creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/'
                    }
                })
            }
        break;

        case 2:
            resultado = await apiUserEdit(
                user._id,
                user.username,
                user.email,
                user.password,
                user.rol
            );
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "todo bien",
                    text: "Usuario editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Actualizacion completada"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/'
                    }
                })
            }
        break;
    }



}
