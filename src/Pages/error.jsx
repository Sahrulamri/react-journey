import { useRouteError} from "react-router-dom";
import {Link} from "react-router-dom";

export default function ErrorPage () {
    const error = useRouteError();

    return (
        <div  className="flex justify-center items-center h-screen bg-emerald-200 mx-auto flex-col">
            <h1 className="text-2xl font-bold text-emerald-500">Oops</h1>
            <p className="my-3 text-xl">Sorry, unexpected Error has uccured</p>
            <p className="font-bold text-lg">
                {error.statusText || error.message}
            </p>
            <Link className="py-3 px-7 mt-4 bg-red-500 rounded-lg hover:bg-white text-lg font-medium text-white hover:text-emerald-400 ease-in-out duration-500" to="/">Back</Link>
        </div>
    )
}