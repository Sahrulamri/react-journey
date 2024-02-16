export default function Card ({children}) {
    return (
        <div className="w-full px-4 py-6 lg:w-1/4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden  mb-10">
            <div className="">
                {children}
            </div>
        </div>
    </div>
    )
}

function Body ({title, children, author}) {
    return (
        <div className="px-3 py-4">
            <h2 className="mb-2"><a href="#"  className="text-xl font-bold text-emerald-500 truncate block">{title}</a></h2>
            <h3 className="mb-3 text-base font-bold text-slate-500">By : {author}</h3>
            <p className=" text-slate-400">{children}</p>
        </div>
    )
}

function Footer ({children}) {
    return (
        <div className="py-4 px-2">
            <a href="#" className="px-4 py-2 rounded-lg bg-emerald-600 mb-10 text-white hover:text-emerald-600 hover:bg-emerald-200 ease-in-out duration-500">{children}</a>
        </div>
    )
}

function Header () {
    return (
        <img src="https://source.unsplash.com/360x200?shoes" alt="programming" className="w-full" />
    )
}

Card.Body = Body
Card.Header = Header
Card.Footer = Footer