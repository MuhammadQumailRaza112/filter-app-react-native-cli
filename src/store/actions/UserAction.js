import { SET_USERS, SET_LOADING } from "../constants";


export const get_users = (text) => async (dispatch) => {
    // try {
    dispatch({ type: SET_LOADING, payload: true })
    if (text!=='')
        fetch(
            `https://api.github.com/orgs/octokit/repos`,
        )
            .then((res) => {
                console.log('res', res.json().then(data => {
                    console.log('datas', data)
                    dispatch({
                        type: SET_USERS,
                        payload: data
                    })
                    dispatch({
                        type: SET_LOADING,
                        payload: false
                    })
                }))

            })
            .catch((err) => {
                console.log('err', err)
                dispatch({
                    type: SET_LOADING, payload: false
                })
            });
        else{
        dispatch({type:SET_USERS, payload:[]})  
        dispatch({type:SET_LOADING, payload:false}) }   

};