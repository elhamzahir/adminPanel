import React , {useState} from "react";
import "./SignUp.css";
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form";

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistration = (data) => {console.log(data)}
    const onErrors = errors => console.error(errors)
    const [name , setName] = useState("")
    const [phone , setPhone] = useState("")
    const [pass , setPass] = useState("")
    const [disable , setDisable] = useState(true)
    const handle = () => {
        if (pass.length >= 8 && phone.length === 11 && name !== null){
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    return (
        <div className="signUpContainer">
            <div className="signUpContent">
                <h2 className="signUpTitle">Sign Up</h2>
                <form className="signUp" onSubmit={handleSubmit(handleRegistration , onErrors)}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="enter your name"
                           onInput={(event) => setName(event.target.value)}
                           {...register('name' , {required:true , minLength:8})} />
                    {errors?.name && errors.name.type === "required" && <span>This is required</span>}
                    {errors.name && errors.name.type === "minLength" && <span>min</span>}
                    <label>Phone Number:</label>
                    <input type='number' placeholder="enter your phone number" name="phone"
                           onInput={(event) => {setPhone(event.target.value);handle()}}
                           {...register("phone")} />
                    {errors.phone && errors.phone.type === "valueAsNumber" && <p>{errors.phone.message}</p>}
                    <label>Password:</label>
                    <input type="password" placeholder="enter your password" name="pass"
                           onInput={(event) => {setPass(event.target.value);handle()}}
                           {...register("pass" , {minLength:{value:8 , message:"enter 8 characters at least"}})}/>
                    {errors.pass && errors.pass.type === "minLength" && <p>{errors.pass.message}</p>}
                    <button disabled={disable} type="submit"
                            style={{backgroundColor: disable ? "#595B5FFF" : "#0075BDFF"}}>
                        Sign Up
                    </button>
                </form>
                <p className="goToSignIn">Already you have account? <Link to="/SignIn" className="linkToSignIn">Sign In</Link></p>
            </div>
        </div>
    )
}