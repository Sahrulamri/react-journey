import Button from "../Elements/Buttons";
import InputForm from "../Elements/Input";


export default function FormLogin () {
    return (
        <form action="" className='mt-3'>
                <InputForm label="Username :" type="text" placeholder="Username..." name="username" htmlFor="username"/>
                <InputForm label="Password :" type="password"  name="password" htmlFor="password"/>
            
                <Button label="LOGIN"/>
            </form>
    )
}