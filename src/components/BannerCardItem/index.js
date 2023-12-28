// Write your code here.
const BannerProfile = props => {
  const {BannerDetails} = props
  const {id, headerText, description, className} = BannerDetails
  return (
    <li className="BannerCardItem">
      {id}
      <div className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}
export default BannerProfile
