
const Profile = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-slate-100">
      <div className="w-full max-w-[480px] h-[60px] flex items-center rounded-xl py-[0px] px-[10px] bg-[#FFFFFF]">
        <div className="w-full h-full max-w-[50px] max-h-[50px] rounded-full bg-slate-500 "></div>
        
      <div className="flex flex-row w-[400px] py-[12px] px-[10px] items-center justify-between ml-3 ">
        <p className="font-poppins font-semibold text-xs">Mr Dark</p>
        <button className="w-[80px] h-[30px] p-[10px] rounded text-[#0095F6] text-xs font-semibold">Follow</button>
      </div>
      
    </div>
  </div>
  )
}

export default Profile