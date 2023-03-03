import './index.css'

const EventItem = props => {
  const {eventsList, registrationDecession} = props
  const {imageUrl, name, location, id, registrationStatus} = eventsList

  const getRegistrationStatus = () => {
    registrationDecession(registrationStatus)
  }
  return (
    <li className="list-container">
      <button
        className="image-btn"
        type="button"
        onClick={getRegistrationStatus}
      >
        <img src={imageUrl} alt={name} className="image" />
      </button>
      <h1 className="festival-name">{name}</h1>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
