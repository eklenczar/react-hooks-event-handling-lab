

const renderFocus = () => {
    console.log("Good!")
}

const renderBlur = () => {
    console.log("Hey! Eyes on me!")
}

const EyesOnMe = () => {
  return (
    <div>
        <button onFocus={renderFocus} onBlur={renderBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe
