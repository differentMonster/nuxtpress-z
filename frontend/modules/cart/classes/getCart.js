import {
    useNuxtApp
} from "#app";

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

class CartAlert {
    async addProductSuccess() {
        await Swal.fire({
            position: 'top-end',
            title: "Product added",
            icon: "success",
            timer: 1000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            backdrop: false
        })
    }
}

export {
    CartAlert
}