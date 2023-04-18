import React from 'react'

const StatusComponent = (status) => {
    const sample = () =>
{
    console.log(status,'status')
}
  return (
    <div>
       
        status:
        <div>{ status.status ? <div>success</div> : <div>Fail</div> }</div> 
        {/* ask why the status is like an object */}
    </div>
  )
}

export default StatusComponent