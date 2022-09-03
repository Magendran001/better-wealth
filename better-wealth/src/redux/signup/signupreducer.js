import { signupaction } from "./signupaction";
const init = { data: {} };

const signupreducer = (state = init, { type, payload }) => {

    switch (type) {
        case signupaction.signupreq:
            return { ...state, isloading: true }

        case signupaction.signupsuccess:
            return { ...state, isloading: false, data: payload }

        case signupaction.signuperror:
            return { ...state, isloading: false, error: true }
        default:
            return { ...state }
    }


}
export default signupreducer