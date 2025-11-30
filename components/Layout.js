export default function Layout({children}){
  return (
    <div>
      <header style={{background:'#5D4037',padding:12,color:'#fff'}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'flex',alignItems:'center',gap:12}}>
          <img src="/assets/logo.png" alt="logo" style={{height:48}}/>
          <h1 style={{fontSize:18,margin:0}}>TRACKS ADVENTURE SAFARIS</h1>
        </div>
      </header>
      <main>{children}</main>
      <footer style={{background:'#f5f3f0',padding:20,textAlign:'center'}}>© Tracks Adventure Safaris</footer>
    </div>
  )
}
