import Button from "../Elements/Buttons";
import InputForm from "../Elements/Input";


export default function FormRegister () {
    return (
        <form action="" className='mt-3'>
            <InputForm label="Username :" type="text" placeholder="Username..." name="username" />
            <InputForm label="Email :" type="email" placeholder="email..." name="email"/>
            <InputForm label="Password :" type="password"  name="password"/>
            <InputForm label="Repeat Password :" type="password"  name="repeatpassword"/>
        
            <Button label="REGISTER"/>
        </form>
    )
}