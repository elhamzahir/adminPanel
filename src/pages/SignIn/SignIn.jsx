import React , {useState} from "react";
import "./SignIn.css";
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form";

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistration = (data) => {console.log(data)}
    const onErrors = errors => console.error(errors)
    const [phone , setPhone] = useState("")
    const [pass , setPass] = useState("")
    const [disable , setDisable] = useState(true)
    const handle = () => {
        if (pass.length >= 8 && phone.length === 11){
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    return (
        <div className="signInContainer">
            <div className="signInContent">
                <h2 className="signInTitle">Sign In</h2>
                <form className="signIn" onSubmit={handleSubmit(handleRegistration , onErrors)}>
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
                        Sign In
                    </button>
                </form>
                <p className="goToSignUp">Don't have any account? <Link className="linkToSignUp">Sign In</Link></p>
            </div>
        </div>
    )
}