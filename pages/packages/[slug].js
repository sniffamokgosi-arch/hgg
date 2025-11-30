import fs from 'fs'
import path from 'path'
import {client} from '../../lib/sanity'
import Layout from '../../components/Layout'
import BookingModal from '../../components/BookingModal'

export async function getStaticPaths(){
  // Attempt to get slugs from Sanity; if not available, prebuild known slugs
  let slugs = []
  try{
    const res = await client.fetch('*[_type=="package"].slug.current')
    if(Array.isArray(res)) slugs = res
  }catch(e){}
  if(slugs.length===0){
    slugs = ['chobe-national-park','kalahari-desert','okavango-delta']
  }
  return {
    paths: slugs.map(s=>({params:{slug:s}})),
    fallback: 'blocking'
  }
}

export async function getStaticProps({params}){
  const {slug} = params
  let pkg = null
  try{
    pkg = await client.fetch('*[_type=="package" && slug.current==$slug][0]',{slug})
  }catch(e){}
  // fallback to local html
  let html = null
  const map = {
    'chobe-national-park':'chobe-national-park.html',
    'kalahari-desert':'kalahari-desert.html',
    'okavango-delta':'okavango-delta.html'
  }
  const filename = map[slug]
  if(filename){
    try{
      const filePath = path.join(process.cwd(),'public','assets',filename)
      html = fs.readFileSync(filePath,'utf8')
    }catch(e){}
  }
  return { props: { pkg, html }, revalidate: 60 }
}

export default function PackagePage({pkg,html}){
  if(pkg){
    return (
      <Layout>
        <div style={{maxWidth:1100,margin:'40px auto',padding:20}}>
          <h2>{pkg.title}</h2>
          <p>{pkg.summary}</p>
          <p><strong>Price:</strong> {pkg.price}</p>
          <BookingModal pkg={pkg}/>
        </div>
      </Layout>
    )
  }
  return <div dangerouslySetInnerHTML={{__html: html || '<h2>Package not found</h2>'}} />
}
