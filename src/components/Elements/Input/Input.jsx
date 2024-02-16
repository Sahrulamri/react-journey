export default function Input ({type, placeholder, name}) {
    return (
        <input type={type} id={name} className='border-2 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-emerald-400 rounded-md' placeholder={placeholder} name={name}/>
        
    )
}