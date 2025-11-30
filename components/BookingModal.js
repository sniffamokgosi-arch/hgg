import {useState} from 'react'
export default function BookingModal({pkg}){
  const [open,setOpen]=useState(false)
  const [deposit,setDeposit]=useState(0)
  function calcDeposit(price){
    return Math.round((price||0)*0.25)
  }
  return (
    <>
      <button onClick={()=>setOpen(true)} style={{padding:10,borderRadius:8}}>Book Now</button>
      {open && (
        <div style={{position:'fixed',inset:0,display:'grid',placeItems:'center',background:'rgba(0,0,0,0.6)'}}>
          <div style={{background:'#fff',padding:20,borderRadius:8,minWidth:320}}>
            <h3>Booking — {pkg?.title||'Package'}</h3>
            <div style={{marginBottom:8}}>
              <label>Name</label><input style={{width:'100%'}}/>
            </div>
            <div style={{marginBottom:8}}>
              <label>Email</label><input style={{width:'100%'}}/>
            </div>
            <div style={{marginBottom:8}}>
              <label>Deposit</label>
              <input style={{width:'100%'}} defaultValue={calcDeposit(pkg?.price)} onChange={e=>setDeposit(e.target.value)}/>
            </div>
            <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
              <button onClick={()=>setOpen(false)}>Close</button>
              <button onClick={()=>{alert('Submitted (stub)'); setOpen(false)}}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
