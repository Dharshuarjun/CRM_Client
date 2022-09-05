import React,{useState,useEffect} from 'react';
import { useParams,useHistory } from 'react-router-dom';

const Edit = () => {

const history=useHistory("");

    const [inpval,setInpval]=useState({
        name:"",
         email:"",
         age:"",
         mobile:"",
         work:"",
         addr:"",
         desc:""
    })
    const setdata=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
        setInpval((preval)=>{
            return {
                ...preval,
                [name]:value
            }
        })
    }
    const {id}=useParams("");
  console.log(id);


  const getdata=async()=>{
      
    const res=await fetch(`https://crmbackend1.herokuapp.com/getuser/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
      
    });
    const data=await res.json();
    console.log(data);
    if(res.status===422|| !data){
     console.log("error");
    }else{
        setInpval(data);
      console.log("get data");
    }
  
}
useEffect(() => {
  getdata();
},[]);

const updateuser = async(e)=>{
    e.preventDefault();

    const {name,email,age,mobile,work,addr,desc} = inpval;
    const res2=await fetch(`https://crmbackend1.herokuapp.com/updateuser/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name,email,age,mobile,work,addr,desc,

       })


    })
    const data2=await res2.json();
    console.log(data2);

    if(res2.status === 422 || !data2){
        alert("fill the data");
    }else{
       
        alert("data added");
        history.push("/")
       
    }
}

return (
    <div className="container">
   
    <form className="mt-4">
        <div className="row">
<div className="mb-3 col-lg-6 col-md-6 col-12">
<label className="form-label">Name</label>
<input type="text" value={inpval.name} className="form-control" onChange={setdata}name="name" id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>
<div className="mb-3 col-lg-6 col-md-6 col-12">
<label className="form-label">Email</label>
<input type="email" value={inpval.email}className="form-control" onChange={setdata} name="email" id="exampleInputPassword1"/>
</div>

<div className="mb-3 col-lg-6 col-md-6 col-12">
<label className="form-label">Age</label>
<input type="text" value={inpval.age}className="form-control" onChange={setdata} name="age" id="exampleInputPassword1"/>
</div>

<div className="mb-3 col-lg-6 col-md-6 col-12">
<label className="form-label">Mobile</label>
<input type="text" value={inpval.mobile}className="form-control" onChange={setdata} name="mobile" id="exampleInputPassword1"/>
</div>

<div className="mb-3 col-lg-6 col-md-6 col-12">
<label className="form-label">Work</label>
<input type="text" value={inpval.work}className="form-control" onChange={setdata} name="work" id="exampleInputPassword1"/>
</div>

<div className="mb-3 col-lg-6 col-md-6 col-12">
<label className="form-label">Address</label>
<input type="text" value={inpval.addr}className="form-control" onChange={setdata} name="addr" id="exampleInputPassword1"/>
</div>

<div className="mb-3 col-lg-6 col-md-6 col-12">
<label  className="form-label">Description</label>
<textarea type="text" value={inpval.desc}className="form-control"onChange={setdata} name="desc"id="exampleInputPassword1" cols="5"rows="5"/>
</div>

<button type="submit"onClick={updateuser} className="btn btn-primary">Submit</button>
</div>
</form>
</div>
   
   
  )
}

export default Edit