import LightButton from "./LightButton";
import DarkButton from "./DarkButton";

const G1 = () => {
  return (
    <div className="bg-right bg-cover h-[124vh] bg-G1BG-base p-14 max-lg:bg-G1BG max-sm:p-6 max-sm:h-fit">
      <div className="flex flex-col flex-1 max-lg:justify-center max-lg:items-center">
        <div className="mt-20 w-fit text-9xl font-grand max-lg:text-9xl max-lg:text-center max-md:text-7xl max-sm:text-6xl">Coffee Time</div>
        <div className="text-3xl font-bold mt-14 max-lg:text-lg max-lg:text-center">Awaken Your Senses:<br/>Where Every Sip Tells a Story.</div>
        <div className="w-1/3 mt-6 mb-6 text-sm font-medium max-lg:w-2/3 max-lg:text-center">Indulge in our carefully curated selection of premium coffee beans. Explore our online store, place your order, and savor the rich flavors of a freshly brewed cup in the comfort of your home, delivered with care and precision.</div>
        <div className="max-sm:hidden">
          <a href="/menu"><LightButton value="Menu"/></a>
        </div>
        <div className="hidden max-sm:block">
          <a href="/menu"><DarkButton value="Menu"/></a>
        </div>
      </div>
    </div>
  )
}

export default G1