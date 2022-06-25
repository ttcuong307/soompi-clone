import { useParams } from "react-router-dom";
import { useQueryPost } from "../hooks/useQueryPosts";


const Article = () => {

  const { id } = useParams() as { id: string }
  const { status: postStatus, data: post} = useQueryPost(id);

  return (<>
    <div>
      <div className="flex flex-col gap-2">
          <h1 className="font-medium">{post?.id}</h1>
          <h1 className="font-medium">{post?.title}</h1>
          <h3 className="font-medium">{post?.body}</h3>
      </div>
    </div>
  </>)
}

export default Article;