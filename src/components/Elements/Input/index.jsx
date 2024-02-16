import Input from "./Input";
import Label from "./Label";

export default function InputForm ({label, type, placeholder, name, htmlFor}) {
    return (
        <>
            <div className="mt-3">
                   <Label htmlFor={htmlFor} label={label}>{label}</Label>
                   <Input type={type} placeholder={placeholder} name={name} id={name}/>
            </div>
        </>
    )
}