const G7 = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-8 py-8 text-center bg-right bg-cover h-[124vh] bg-G7BG max-sm:h-fit">
        <span className="w-1/2 font-medium font-grand text-9xl max-md:text-7xl max-sm:text-6xl">We are Open</span>
        <div className="flex flex-col gap-6">
            <span className="text-4xl font-semibold max-md:text-2xl max-sm:text-xl">Monday - Friday</span>
            <span className="text-4xl font-light max-md:text-2xl max-sm:text-xl">08:00 am - 09:00 pm</span>
        </div>
        <div className="flex flex-col gap-6">
            <span className="text-4xl font-semibold max-md:text-2xl max-sm:text-xl">Saturday - Sunday</span>
            <span className="text-4xl font-light max-md:text-2xl max-sm:text-xl">10:00 am - 07:00 pm</span>
        </div>
    </div>
  )
}

export default G7