import Head from 'next/head'

export default function Home(props) {

  console.log("props",props)
  //let youtubeVideoId="F5v_VqxbQPI"
  let youtubeVideoId="n/a"

  try {
    youtubeVideoId = props.url.query.v
  }catch (e){
    //ignore
    console.error("youtubeVideoId e",e)
  }


  // let domain="n/a"
  // try {
  //   domain = window.location.host
  // }catch (e){
  //   //ignore
  //   console.error("e",e)
  // }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/x-frame-bypass"></script>
      </Head>

      <main>

  
<iframe width="700" height="400" src={`https://www.youtube.com/live_chat?v=${youtubeVideoId}&embed_domain=${'demo-youtube-embed.vercel.app'}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </main>

    </div>
  )
}
