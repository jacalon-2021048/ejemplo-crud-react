import axios from 'axios';
import Swal from 'sweetalert2';

export const apiLogin = async (email, password) => {

    try {
        const URL = 'http://localhost:3000/api/login'
        const response = await axios.post(`${URL}`, {
            email,
            password
        });
        const token = response.data.token;

        //Guardar token en el almacenamiento local del navegador (Local storage)
        (token) ? localStorage.setItem("token", token) : null
        /*if (token) { Este if es lo mismo que esta arriba, pero arriba es mas corto
            localStorage.setItem("token", token)
        }else{
            return null;
        }*/
        return token;
    } catch ({ response: { data: { message } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error de Login',
            text: message
        });
    }

}
