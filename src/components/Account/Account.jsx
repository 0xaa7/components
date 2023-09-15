
const Account = () => {
  return (
    <div className="flex w-full h-28 items-center justify-center bg-slate-100" > 
      <div className='flex w-60 h-24 flex-col items-center justify-center gap-2 bg-white '>
        <span className='text-slate-400 '>Account Removal Actions</span>
        <div className='flex gap-2'>
          <button className="w-11/12 h-8 flex items-center text-white bg-red-600 justify-center p-2 font-semibold rounded">
            Disable
          </button>
          <button className="w-11/12 h-8 flex items-center bg-red-100 text-red-600  justify-center p-2 font-semibold rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account