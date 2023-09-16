import { FaChevronRight } from 'react-icons/fa';

const Logout = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-4'>
      <div className='w-full max-w-[714px] flex flex-col justify-center bg-[#F9F9F9] gap-5 pt-5 px-5 pb-5'>
        <div className='w-full max-w-[694px] flex justify-between items-center p-5 rounded-lg bg-[#FFFFFF]'>
          <p className='w-[129px] text-base font-semibold'>Account Details</p>
          <FaChevronRight /> 
        </div>
        <div className='w-full max-w-[694px] flex justify-between items-center p-5 rounded-lg bg-[#FFFFFF]'>
          <p className='w-[168px] text-base font-semibold'>Privacy and Security</p>
          <FaChevronRight />
        </div>
        <button className="w-full max-w-[694px] flex bg-[#ff000017] text-[#FF0000] border-[0.5px] border-[#FF0000] justify-center items-center p-4 text-base font-semibold rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;