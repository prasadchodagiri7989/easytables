import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HowToSaveEnergy = () => {
  const energyTips = [
    // Fuel consumption tips
    "Take the bus or train instead of driving.",
    "Ride a bicycle when traveling short distances.",
    "Walk when possible.",
    "Live close to your workplace to reduce commute.",
    "Work from home if possible.",
    "Buy a car with low fuel consumption.",
    "Choose a hybrid or electric car.",
    "Avoid rapid acceleration and harsh braking.",
    "Look ahead while driving to maintain smooth flow.",
    "Avoid driving at high engine RPM.",
    "Use the highest gear possible while driving.",
    "Reduce the load/baggage in your vehicle.",
    "Close windows while driving to reduce drag.",
    "Avoid driving during rush hour.",
    "Avoid unnecessary car usage.",
    "Turn off engine if idling for long.",
    "Keep tires inflated to optimal pressure.",
    "Service your car regularly.",
    "Plan your route to minimize driving distance.",
    "Prefer gas heating over wood-burning stoves.",

    // Electricity consumption tips
    "Install solar panels to generate renewable electricity.",
    "Use solar water heating systems.",
    "Insulate your home to reduce heating/cooling needs.",
    "Install window shutters to block sunlight.",
    "Use double-glazing windows to maintain indoor temperature.",
    "Buy Energy Star certified appliances.",
    "Choose appliances with low power consumption.",
    "Seal temperature leaks in doors/windows.",
    "Turn off appliances instead of leaving them on standby.",
    "Use A/C heating over traditional electric or gas heating.",
    "Prefer fan over air conditioner whenever possible.",
    "Set your air conditioner to a moderate temperature.",
    "Cool only the room you're in, not the entire house.",
    "Avoid frequent opening of refrigerator doors.",
    "Ensure proper ventilation behind your refrigerator.",
    "Turn off lights when leaving a room.",
    "Install motion sensor lights.",
    "Use LED or CFL light bulbs.",
    "Wash clothes in cold water.",
    "Use shorter washing machine cycles.",
    "Run appliances like washer/dryer/dishwasher only when full.",
    "Wear weather-appropriate clothing indoors.",
    "Layer up with warm clothes in winter.",
    "Dress light during the summer.",
    "Use stairs instead of elevators.",
    "Enable energy-saving settings on computers.",
    "Air-dry clothes instead of using a dryer.",
    "Put only as much water as needed in electric kettles.",
    "Go to bed early to save electricity.",
    "Maximize use of natural sunlight.",
    "Choose LED/LCD TVs over power-hungry plasma screens.",
    "Lower the brightness on screens (TV, monitor, phone).",
    "Buy computers with energy-efficient CPUs and GPUs.",
    "Use power supplies with high efficiency ratings.",
    "Unplug chargers when not in use.",
    "Use microwave ovens instead of toaster ovens.",
    "Use a power monitor to track usage.",
    "Use apps or browsers with dark mode.",
    
    // Additional energy-saving tips
    "Use smart thermostats for better control.",
    "Switch off Wi-Fi routers at night.",
    "Clean appliance filters regularly (AC, dryer, etc).",
    "Defrost freezer regularly for efficiency.",
    "Cook with lids on pots to reduce energy use.",
    "Use pressure cookers to reduce cooking time.",
    "Group outdoor tasks to avoid multiple car trips.",
    "Use ceiling fans with reversible motor for winter/summer.",
    "Cover windows with curtains at night to retain heat.",
    "Avoid screen savers—let the monitor sleep instead.",
    "Turn off game consoles when not in use.",
    "Use solar garden lights outdoors.",
    "Adjust fridge/freezer temperature to recommended settings.",
    "Use rechargeable batteries instead of disposables.",
    "Boil only the water you need.",
    "Use laptops instead of desktops when possible.",
    "Install dimmer switches.",
    "Use thermal cookware to retain heat after cooking.",
    "Use a clothesline outdoors when weather allows.",
    "Use occupancy sensors in hallways and bathrooms.",
    "Choose compact fluorescent lamps (CFLs) where applicable.",
    "Use zoning in home heating/cooling systems.",
    "Place lamps in corners where light reflects more.",
    "Keep vents and radiators unobstructed.",
    "Use low-flow showerheads to save hot water.",
    "Keep oven door closed when cooking.",
    "Turn off exhaust fans after use.",
    "Do laundry and dishwashing at night during off-peak hours.",
    "Caulk around windows and doors to reduce air leaks.",
    "Install an attic fan to reduce cooling load.",
    "Use smart power strips to prevent phantom loads.",
    "Use electric blankets instead of heating the room.",
    "Switch to induction cooktops which are more efficient.",
    "Recycle and reuse to reduce manufacturing energy.",
    "Paint walls with light colors to reflect light better.",
    "Choose multi-functional devices (e.g., printer/scanner/copier).",
    "Use hand tools instead of power tools when appropriate.",
    "Avoid oversized HVAC units—they consume more energy.",
    "Limit time in the shower to save hot water.",
    "Buy second-hand items to reduce energy from production.",
    "Share rides with coworkers.",
    "Use motion-activated outdoor lights.",
    "Monitor your utility bills and track changes.",
    "Place fridge/freezer in cool spots, away from heat sources.",
    "Switch to cloud services over physical data storage.",
    "Consider geothermal heating/cooling if possible.",
    // Add these to your energyTips array
    "Use timers to automate turning off lights and appliances.",
"Opt for solar-powered chargers for phones and gadgets.",
"Install weather stripping on doors and windows.",
"Switch to tankless water heaters that only heat when needed.",
"Clean behind radiators to improve airflow.",
"Park in the shade to reduce A/C load in summer.",
"Use light-colored roofing materials to reflect heat.",
"Use your oven’s residual heat by turning it off a few minutes early.",
"Install skylights or light tubes for natural lighting.",
"Defrost frozen foods in the fridge overnight instead of using a microwave.",
"Reduce use of hairdryers and other high-wattage grooming tools.",
"Limit the use of recessed lighting (they can lose heat upward).",
"Install storm doors to reduce energy leakage.",
"Use graywater recycling systems for gardening.",
"Choose curtains with thermal lining for windows.",
"Organize fridge contents to reduce door open time.",
"Use grill or toaster oven instead of full-size oven for small meals.",
"Check for and fix leaky faucets—especially hot water taps.",
"Use low-energy settings on printers and copiers.",
"Shut chimney flues when not in use.",
"Replace worn-out insulation around hot water pipes.",
"Set your water heater to 120°F (49°C) instead of default 140°F.",
"Air-seal your attic to reduce heat loss.",
"Use a programmable thermostat for scheduled temperature control.",
"Avoid using screen-savers; let your computer sleep instead.",
"Install reflective window films to reduce heat gain.",
"Hang clothes immediately after drying to reduce ironing time.",
"Use energy-efficient irrigation systems like drip hoses.",
"Choose native plants for landscaping to reduce watering needs.",
"Conduct a home energy audit for customized recommendations.",
"Encourage kids to unplug and play outside instead of screen time.",
"Use a kettle with a cup indicator to avoid over-boiling water.",
"Unplug devices during vacations or long absences.",
"Disable auto-start for unnecessary apps and devices.",
"Charge devices simultaneously using a smart power hub.",
// Additional energy-saving tips
"Use smart blinds that adjust based on sunlight.",
"Install reflective roof coatings to reduce heat absorption.",
"Keep garage doors closed to maintain internal temperature.",
"Opt for solar-powered outdoor security cameras.",
"Use compost instead of electric garbage disposals.",
"Choose manual kitchen tools (e.g., hand mixer, can opener).",
"Consolidate freezer contents to help it run more efficiently.",
"Use induction cookware compatible with your stove for faster cooking.",
"Disable 'always-on' features in smart TVs or speakers.",
"Use daylighting strategies like light shelves and interior glass walls.",
"Choose modular furniture with built-in lighting or charging.",
"Use a fireplace draft stopper when not in use.",
"Keep light fixtures clean—dust reduces brightness and efficiency.",
"Do errands in a loop to minimize vehicle starts.",
"Use vegetable steamers instead of boiling.",
"Keep fridge and freezer at optimal levels (¾ full).",
"Limit use of heated dry cycle in dishwashers.",
"Use hand warmers or blankets instead of space heaters.",
"Encourage paperless billing to reduce energy in mailing systems.",
"Conduct regular HVAC maintenance for seasonal efficiency.",
"Install occupancy sensors in garages and basements.",
"Use smart irrigation systems for lawn care.",
"Build raised garden beds that need less watering.",
"Choose flooring materials that retain heat (e.g., cork, tile).",
"Use exhaust fans only during and immediately after cooking/showering.",
"Switch to eco-friendly detergents that work at lower temps.",
"Group remote work devices to a single surge protector for easier shutoff.",
"Use garage walls for insulation between house and exterior.",
"Use whiteboard calendars instead of digital ones where possible.",
"Choose high-efficiency shower panels or aerated faucets.",
"Wrap your water heater in an insulation blanket.",
"Install passive solar features like trombe walls or thermal mass floors.",
"Switch to vertical farming or hydroponic kits indoors.",
"Use recycled paper products to reduce industrial energy waste.",
"Choose local produce to reduce transportation-related energy.",
"Hang blackout curtains to reduce summer cooling needs.",
"Make use of community solar projects if individual panels aren’t viable.",
"Refurbish old furniture instead of buying new.",
"Use thermal leak detectors to find and fix cold spots.",
"Replace sliding doors with insulated hinged ones."


  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/ecology/all">Ecology</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>How to Save Energy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>How to Save Energy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Practical tips to reduce electricity and fuel consumption and save money at home and on the road.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            {energyTips.map((tip, index) => (
              <li key={index} className="leading-relaxed dark:text-white">{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowToSaveEnergy;
