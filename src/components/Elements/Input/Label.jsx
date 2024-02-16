export default function Label ({label, htmlFor}) {
    return (
        <label htmlFor={htmlFor} className='block text-base mb-3 font-medium text-emerald-400' >{label}</label>
    )
}