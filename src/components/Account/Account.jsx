const Account = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">

      <div className='flex w-full max-w-[237px] h-auto sm:h-[102px] bg-[#F9F9F9] flex-col items-center justify-center gap-2 pt-[20px] pr-[10px] pb-[20px] pl-[10px]'>

        <div className='flex text-center'>
          <p className="text-black opacity-50 font-poppins text-sm">Account Removal Actions</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-2'>
          <button className="w-full sm:w-[103px] h-[31px] flex items-center font-poppins text-[#FFFFFF] bg-[#FF0000] justify-center pt-[5px] pr-[25px] pb-[5px] pl-[25px] text-sm font-medium rounded-md">
            Disable
          </button>
          <button className="w-full sm:w-[103px] h-[31px] flex items-center font-poppins text-[#FF0000] bg-[rgba(255,0,0,0.1)] justify-center pt-[5px] pr-[25px] pb-[5px] pl-[25px] text-sm font-medium rounded-md">
            Delete
          </button>
        </div>

      </div>

    </div>
  )
}

export default Account;
