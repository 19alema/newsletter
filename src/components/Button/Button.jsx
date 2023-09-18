/* eslint-disable react/prop-types */
import "./Button.css"
function Button({btnText}) {
  return (
    <div className="btn_container">
      <button type="submit">
        {btnText}
      </button>
    </div>
  )
}

export default Button