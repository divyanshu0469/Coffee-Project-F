const LightButton = (props) => {
  return (
    <button type="submit" id="orderBtn" className="px-4 text-3xl font-bold text-white border-none rounded-lg cursor-pointer max-lg:text-lg max-md:text-base font-mont h-14 bg-lightBlue hover:opacity-75 w-fit">{props.value}</button>
  )
}

export default LightButton