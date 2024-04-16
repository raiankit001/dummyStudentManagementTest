import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';

export default function Students() {

    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [students, setStudents] = React.useState([]);

    React.useEffect(()=>{

        fetch("http://localhost:8080")
        .then((res=>res.json()))
        .then(result=> setStudents(result))
    },[])


    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeAdd = (e) => {
        setAddress(e.target.value);
    }
    
    const onClickHandel=(e)=>{
        const student = {name,address}
        console.log(student);

        fetch("http://localhost:8080/addStudent",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("Student added")
        })

    }
    return (
        <Container
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >

           <Paper elevation={3} style={{padding:"3rem",margin:"3rem"}}>
            <h2 style={{textTransform:"uppercase",fontFamily:"sans-serif"}}>Add New Student Data</h2>
           <TextField id="standard-basic" label="Student Name"
                variant="standard"
                fullWidth
                value={name}
                onChange={onChangeName} />
            <TextField id="standard-basic" label="Student Address"
                variant="standard"
                fullWidth
                value={address}
                onChange={onChangeAdd} />
            <Button style={{margin:"2rem"}} variant="contained" disableElevation onClick={onClickHandel}>
                Submit
            </Button>
           </Paper>


           <Paper elevation={3} style={{padding:"3rem",margin:"3rem"}}>
                <h2 style={{textTransform:"uppercase",fontFamily:"sans-serif"}}>Students Data</h2>
                {students.map((stu)=>{
                     return <Paper elevation={3} style={{margin:"10px",padding:"15px",textAlign:"left"}}>
                        Id: :{stu.id}<br/>
                        Name:{stu.name}<br/>
                        Address:{stu.address}<br/>

                    </Paper>
                })}
           </Paper>


        </Container>
    );
}