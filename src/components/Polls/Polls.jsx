import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';

const Polls = () => {

   const iconStyle = {
    fontSize: '86px'
  };

  return (
    
    <div className='flex justify-center w-auto h-auto mb-4'>
      <div className='bg-gray-100 w-11/12 h-auto rounded-md flex items-center justify-between flex-col p-6 gap-1 '>
        <InsertChartOutlinedOutlinedIcon style={iconStyle}/>
        <span className='font-bold text-3xl'>Create Polls</span>
        <p className='font-extralight font-mono text-slate-500'>Be Anonymous. Ask weird questions</p>
      </div>
    </div>
    
  )
}

export default Polls