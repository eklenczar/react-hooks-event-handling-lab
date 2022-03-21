const handleChange = () => {
    console.log("Entering password...")
}

const Keypad = () => {
  return (
    <div>
        <input onChange={handleChange} type="password" />
    </div>
  )
}

export default Keypad
