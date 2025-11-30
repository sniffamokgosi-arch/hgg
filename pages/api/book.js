export default async function handler(req,res){
  if(req.method==='POST'){
    // TODO: persist to Sanity or send email
    return res.status(200).json({ok:true, received:req.body})
  }
  res.status(405).json({error:'Method not allowed'})
}
