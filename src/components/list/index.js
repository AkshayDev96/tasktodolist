import { Button, CardContent, Grid, List, ListItem, ListItemText, Paper, TextField, ListItemAvatar, IconButton, Avatar } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import { useDispatch, useSelector } from 'react-redux'
import { addTask,removeTask,searchTask } from '../../redux/actions/taskActions'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { logout } from '../../redux/actions/userActions';
import { useNavigate } from "react-router-dom";

const Index = () => {

    const [task, setTask] = useState("")
    const dispatch = useDispatch()

    const list = useSelector((state) => state.taskReducers.list)
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    const navigate = useNavigate()
    const result = useSelector((state) => state.taskReducers.result)


    useEffect(()=>{
        if(!userInfo){
            //redirect to login screen
            navigate('/')
        }
    },[userInfo])

    const addNew = () => {
        if (task) {
            setTask("")
            // console.log("first",{ id: new Date().getTime(), text: task })
            dispatch(addTask({ id: new Date().getTime(), text: task }))
        }
    }

    return (
        <div>
            {/* {console.log("Tasks",Tasks)} */}
            <Button variant="outlined" onClick={() => dispatch(
                logout()
            )}>Logout</Button>
            <CardContent>
                <h1>List management</h1>
                <Grid container spacing={2}>
                   
                    <Grid item xs={6}>
                    <TextField placeholder="Your task for now?" value={task} onChange={(e) => setTask(e.target.value)}></TextField>{" "}
                <Button variant='contained' size="small" onClick={addNew}>Add</Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={list.map((option) => option.text)}
                    onSelect={(e)=>dispatch(searchTask(e.target.value))}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Seach by task"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        }}
                    />
                    )}
                />
                    </Grid>
                </Grid>
            

                {/* list box here */}

                <Grid item xs={12} md={6}>
                    <Paper>
                        <List>
                            {(result && result.length!=0)?
                                result.map((item,key)=>(
                                <ListItem key={key}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.text}
                                />
                                <IconButton onClick={()=>dispatch(removeTask(item.id))} edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                            )):list.map((item,key)=>(
                                <ListItem key={key}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.text}
                                />
                                <IconButton onClick={()=>dispatch(removeTask(item.id))} edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                            ))}
                           
                        </List>
                    </Paper>
                </Grid>

            </CardContent>
        </div>
    )
}

export default Index