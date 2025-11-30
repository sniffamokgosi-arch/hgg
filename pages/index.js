import fs from 'fs'
import path from 'path'
import {client} from '../lib/sanity'
import Layout from '../components/Layout'

export async function getStaticProps(){
  // Try to fetch home doc from Sanity
  let home = null
  try{
    home = await client.fetch('*[_type == "home"][0]{title,intro,heroImage}')
  }catch(e){
    // ignore
  }
  let html = null
  try {
    const filePath = path.join(process.cwd(),'public','assets','index.html')
    html = fs.readFileSync(filePath,'utf8')
  }catch(e){}
  return { props: { home, html } }
}

export default function Home({home,html}){
  if(home && home.intro){
    return (
      <Layout>
        <section style={{maxWidth:1100,margin:'40px auto',padding:20}}>
          <h2>{home.title || 'Tracks Adventure'}</h2>
          <p>{home.intro}</p>
        </section>
      </Layout>
    )
  }
  return <div dangerouslySetInnerHTML={{__html: html || '<h2>No content</h2>'}} />
}
