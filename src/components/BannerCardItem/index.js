// Write your code here.
const bannerProfile = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails
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
