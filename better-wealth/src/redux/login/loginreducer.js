import { loginaction } from "./loginaction";



const init = { isloading: false, error: false, token: false, userdetails: null };

const loginreducer = (state = init, { type, payload }) => {

    switch (type) {
        case loginaction.LOGINREQUEST:
            return { ...state, isloading: true }

        case loginaction.LOGINSUCCESS:
            console.log(payload)
            localStorage.setItem("userdetails", JSON.stringify({ token: true }))

            return { ...state, isloading: false, isAuth: true, token: true, userdetails: payload }

        case loginaction.LOGINERROR:
            return { ...state, isloading: false, error: true }

        case loginaction.LOGOUTREQUEST:
            return { ...state, isloading: true }
        case loginaction.LOGOUTSUCCESS:
            localStorage.setItem("userdetails", JSON.stringify(null))
            return { ...state, isAuth: false, token: false, userdetails: null, isloading: false }

        case loginaction.LOGOUTERROR:
            return { ...state, isloading: false, error: true }

        default:
            return { ...state }

    }


}

export default loginreducer