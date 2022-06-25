
import Banner from "../components/Banner/Banner"
import ContentList from "../components/Content/ContentList"

const Quiz = () => {
  return (
    <>
      <div className="w-1280 flex flex-col items-center gap-8">
        <Banner/>
        <ContentList/>
      </div>
    </>
  )
}

export default Quiz