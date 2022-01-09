export type PostObject = {
  title: string 
  content: string
}

interface PostProps {
  post: PostObject
  totalComents?: number
}

export default function Post(props: PostProps) {
  //console.log(props)
  //console.log('Post foi renderizado')
  return <div>
    <h1>{props.post.title}</h1>
    <p>{props.post.content}</p>

    {
      props.totalComents &&
        <span>
          Comentários: {props.totalComents}
        </span>
    }
    
  </div>
}