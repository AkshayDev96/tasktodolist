import React, { useEffect } from "react";
import {
    Grid,
    TextField,
    Paper,
    Button
  } from '@material-ui/core';
  import {login} from '../../redux/actions/userActions'
  import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const Login=()=>{
 
    const [user,setUser] = React.useState({email:'',password:''})
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if(userInfo){
            console.log("userInfo",userInfo)
            //redirect to list management page
            navigate('/listpage')
        }
    },[userInfo])

    const submit = ()=>{
        if(user.email && user.password){
            //login email and password
            console.log(user.email,user.password)
            dispatch(login(user.email,user.password))
        }
    }


    return (
        <div style={{ padding: 30,marginTop:150 }}>
          <Paper>
            <Grid
              container
              spacing={3}
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Grid item xs={12}>
                <TextField label="Username" type={'email'} onChange={(e)=>setUser((el)=>({...el,email:e.target.value}))}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" onChange={(e)=>setUser((el)=>({...el,password:e.target.value}))} type={'password'}></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button onClick={submit} fullWidth> Login </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
}

export default Login