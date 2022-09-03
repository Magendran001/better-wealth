import axios from "axios"
const signupaction = {

    signupreq: "signupreq",
    signupsuccess: "signupsuccess",
    signuperror: "signuperror"

}

const signupfetchreq = () => {

    return { type: signupaction.signupreq }


}

const signupsuccess = (payload) => {

    return { type: signupaction.signupsuccess, payload }

}

const signuperror = (payload) => {

    return { type: signupaction.signuperror, payload }

}

const fetchsignupdata = (obj) => (dispatch) => {


    dispatch(signupfetchreq())

    console.log(obj, "obj")

    axios.post("https://testinterviews.herokuapp.com/signup", obj)
        .then(res => {
            console.log(res.data)



            if (res.data?.email) {

                dispatch(signupsuccess(res.data));

            }
            else {
                alert("Something Went wrong")
            }



        }


        )
        // .then(res => {

        //     dispatch(POSTLOGIN({ password: obj.password, mobile_number: obj.mobile_number }))
        // })
        .catch(err => {
            dispatch(signuperror());
            console.log(err, "err")
            alert("Something Went wrong")
        })





}

export { signupaction, fetchsignupdata }

