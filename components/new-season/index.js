
import Heading from '../heading';
import classes from "./index.module.scss"

const NewSeason = () => {
  return (
   <>
    <div className={`py-5 ${classes.season}`}>
  <Heading
    title="NEW SEASON"
    subtitle="This season, we went in search of a stunning harbour-side location. White stone, bobbing boats, swaying masts and clear skies. Visiting a European country famous for its plentiful but quaint fishing harbours."
    btnText="New Style"
    href="/"
    button
  />
</div>
   </>
  )
}

export default NewSeason
