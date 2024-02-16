import {Link} from "react-router-dom";
export  default function AuthLayout ({children, title, type}) {
    return (
        <div className="flex justify-center items-center h-screen bg-emerald-200 mx-auto">
            <div className="w-96 p-6 shadow-2xl bg-white rounded-lg">
                <h1 className='text-3xl  text-center font-semibold text-emerald-400 mb-2'>{title}</h1>
                <p className="font-medium mb-2 text-center">Please enter your detail</p>
                {children}
                {/* <p className="text-center text-sm font-bold mt-4">
                    {type === "login" ? 'Dont have an account? please' : 'Already have an account ?' } 

                    {type === "login" && (
                    <Link to="/register" className="font-bold text-sm text-emerald-500"> Sign Up</Link>
                    )}  

                    {type === "register" && (
                        <Link to="/" className="font-bold text-sm text-emerald-500"> Sign In</Link>
                    )}
                </p> */}
                <Navigation type={type}/>
            </div>
        </div>
    )
}

function Navigation ({type}) {
    if (type === "login") {
        return (
            <p className="text-center text-sm font-bold mt-4"> Don&apos;t have An Account yet? <Link to="/register" className="font-bold text-sm text-emerald-500">Sign Up</Link></p>
        )
    } else {
        return (
            <p className="text-center text-sm font-bold mt-4"> Already Have An Account ? <Link to="/" className="font-bold text-sm text-emerald-500">Sign Up</Link></p>
        )
    }
}