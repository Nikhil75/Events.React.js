import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {apiDecision} = props
  console.log(apiDecision)

  const renderYETTOREGISTERView = () => (
    <div className="container">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="registration-image-status"
        />
      </div>
      <div className="description">
        <p className="desc">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form
        </p>
      </div>
      <div className="registration-button">
        <button className="button">Register Here</button>
      </div>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registration-image-status"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="registrationClosedView">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-image-status"
      />
      <h1>Registration Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
      <p>the registration soon!</p>
    </div>
  )

  const status = () => {
    switch (apiDecision) {
      case 'YET_TO_REGISTER':
        return renderYETTOREGISTERView()
      case 'REGISTERED':
        return renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationClosedView()
      default:
        return null
    }
  }

  return <div className="registrations-container">{status()}</div>
}
export default ActiveEventRegistrationDetails
