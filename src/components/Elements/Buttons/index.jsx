export default function Button ({label}) {
  return (
    <div className="mt-3">
        <button className='w-full px3 py-2 bg-emerald-600 mt-3 rounded-lg font-bold text-white hover:bg-emerald-200 hover:text-emerald-600 ease-in-out duration-500'>{label}</button>
    </div>
  )
}