// Write your code here.
const BannerProfile = props => {
  const {BannerDetails} = props
  const {id, headerText, description, className, button} = BannerDetails
  return (
    <li className={className}>
      {id}
      <div className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button>show more</button>
      </div>
    </li>
  )
}
export default BannerProfile
