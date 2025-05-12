import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SaveElectricityTips: React.FC = () => {
  const tips = [
    "Install solar panels on your roof to generate electricity.",
    "Install solar water heater system.",
    "Insulate your house.",
    "Install window shutters.",
    "Install double glazing windows.",
    "Buy Energy Star qualified appliances.",
    "Buy appliances with low power consumption.",
    "Check the temperature insulation of your house.",
    "Turn off appliances and gadgets that are in standby state.",
    "Prefer fan to A/C.",
    "Prefer A/C heating to electric/gas/wood heating.",
    "Prefer inverter A/C to regular on/off A/C.",
    "Set A/C's thermostat to moderate temperature.",
    "Use A/C locally for one room instead of the whole house.",
    "Avoid opening frequently the refrigerator door.",
    "Leave enough space between the refrigerator and the wall to allow ventilation.",
    "Turn off the light when you leave the room.",
    "Install presence detector to turn lighting off when leaving the room.",
    "Use low power light bulbs.",
    "Wash your clothes in cold water.",
    "Use shorter washing machine program.",
    "Fill the washing machine / dryer / dishwasher before operation.",
    "Wear clothes that fit the current temperature.",
    "Wear thick clothes to keep warm.",
    "Wear light clothes to keep cool.",
    "Use the stairs instead of elevator.",
    "Set PC energy saving features.",
    "Use clothes drying rack instead of electric clothes dryer.",
    "Put the exact amount of water that you need in your electric kettle.",
    "Go to sleep early.",
    "Use sunlight instead of artificial light.",
    "Buy LED TV instead of plasma.",
    "Reduce TV/Monitor/Phone display brightness.",
    "Buy computer with low power (TDP) CPU/GPU.",
    "Buy computer with efficient power supply unit (PSU).",
    "Prefer LED light over incandescent light bulbs.",
    "Disconnect electrical charger when it finishes charging.",
    "Prefer microwave oven over toaster oven.",
    "Use electricity usage monitor.",
    "Use browser/applications with Dark mode.",
    "Clean light fixtures regularly to maximize brightness.",
    "Unplug appliances that are rarely used.",
    "Use ceiling fans to circulate air more efficiently.",
    "Replace old refrigerators with energy-efficient models.",
    "Use programmable thermostat.",
    "Close doors and windows when A/C is running.",
    "Use pressure cooker to cook food faster.",
    "Avoid preheating oven unless necessary.",
    "Cook multiple meals at once.",
    "Defrost frozen food in the fridge overnight.",
    "Keep your fridge and freezer full (but not overcrowded).",
    "Avoid placing hot food directly into the fridge.",
    "Use lids when boiling water.",
    "Use task lighting instead of lighting the entire room.",
    "Use dimmer switches to reduce light intensity.",
    "Check for air leaks around doors and windows.",
    "Use electric blanket instead of room heater.",
    "Opt for natural ventilation in cooler months.",
    "Use induction cooktop instead of electric coil stove.",
    "Install motion sensors for outdoor lighting.",
    "Charge your devices during daytime if you have solar panels.",
    "Install skylights or solar tubes for natural lighting.",
    "Turn off WiFi router at night.",
    "Switch off water heater when not in use.",
    "Use smart power strips.",
    "Use reflective roofing materials.",
    "Use thermal curtains to retain heat/cold.",
    "Vacuum refrigerator coils to improve efficiency.",
    "Use smaller appliances like toaster ovens or air fryers for small meals.",
    "Avoid using hot water in dishwashers unless necessary.",
    "Do regular maintenance of HVAC systems.",
    "Reduce time in the shower to save hot water usage.",
    "Use low-flow shower heads to reduce energy to heat water.",
    "Limit ironing sessions by doing it once a week in bulk.",
    "Keep your oven door closed while cooking.",
    "Avoid using screen savers—use sleep mode.",
    "Use energy-efficient aquarium pumps and heaters.",
    "Group your electronics in one area to manage power strips easily.",
    "Buy an energy-efficient washing machine.",
    "Use wool dryer balls to reduce drying time.",
    "Plant shade trees near windows.",
    "Paint your walls light colors to reflect light better.",
    "Clean air conditioner filters regularly.",
    "Place your fridge away from heat sources like ovens or direct sunlight.",
    "Avoid using multiple heaters—wear warmer clothes instead.",
    "Use fans with built-in timers.",
    "Opt for laptops over desktops for lower energy usage.",
    "Install solar garden/pathway lights.",
    "Dry hair naturally instead of using hair dryer.",
    "Use power meters to audit and analyze energy usage.",
    "Only light occupied rooms.",
    "Keep lights and electronics dust-free for better performance.",
    "Don’t charge devices overnight—most finish in 2-3 hours.",
    "Run full loads in dishwasher but avoid overloading.",
    "Use shade netting or films on windows.",
    "Use vertical blinds or curtains for thermal insulation.",
    "Upgrade to high-efficiency HVAC systems.",
    "Automate light scheduling with smart home systems.",
    "Use stovetop over oven when appropriate.",
    "Close unused vents in rooms you don’t use.",
    "Use minimal lighting décor during festivals.",
    "Use solar-powered gadgets and chargers.",
    "Fix dripping taps—especially hot water ones.",
    "Maintain proper tire pressure—saves fuel for hybrid/electric cars.",
    "Teach kids energy-saving habits.",
    // Extra 100 electricity-saving tips
"Install a timer on your water heater to run only when needed.",
"Use solar-powered security lights.",
"Keep lighting circuits separate for better control.",
"Avoid using multiple plug extensions.",
"Install reflective film on windows to reduce cooling needs.",
"Use window awnings to block excessive sunlight.",
"Upgrade old wiring to reduce loss and improve efficiency.",
"Use mechanical timers for lamps and appliances.",
"Keep your attic properly ventilated.",
"Install draught excluders on doors.",
"Use DC ceiling fans—they are more efficient than AC models.",
"Enable power-saving modes on printers and scanners.",
"Use occupancy sensors in garages and stairwells.",
"Install insulated switch plate covers.",
"Replace halogen lamps with LED equivalents.",
"Use solar-powered water fountains.",
"Keep thermostats away from heat-producing devices.",
"Install zone-based temperature control systems.",
"Set refrigerator temperature to 37°F and freezer to 0°F.",
"Use thermal paint on your roof.",
"Don’t place furniture in front of radiators or vents.",
"Wash dishes manually if the load is small.",
"Choose energy-efficient dehumidifiers.",
"Opt for low-wattage decorative lights.",
"Use hand mixers instead of electric blenders when possible.",
"Use e-ink readers instead of tablets for reading.",
"Put indoor plants to help regulate temperature naturally.",
"Don’t store unnecessary items in the fridge.",
"Use outdoor drying racks instead of electric dryers.",
"Monitor energy use using smart home dashboards.",
"Utilize serverless computing for reduced digital energy costs.",
"Opt for consolidated cooking (boil pasta and veggies together).",
"Charge devices in public places with solar stations if available.",
"Use thermal wallpaper for added insulation.",
"Upgrade to smart inverter refrigerators.",
"Set your monitor to auto-sleep after inactivity.",
"Close fireplace dampers when not in use.",
"Turn off Bluetooth/Wi-Fi when not in use.",
"Use eco-friendly PC operating modes.",
"Prefer paperless work to reduce printer use.",
"Don’t use ovens to heat rooms in winter.",
"Group similar energy-intensive tasks together.",
"Disable auto-start for unused applications.",
"Store water in insulated containers to reduce heating cycles.",
"Cover pots and pans while cooking.",
"Use the microwave for reheating—it’s faster and uses less power.",
"Organize your fridge to reduce door-open time.",
"Only preheat ovens if a recipe strictly requires it.",
"Use sensor-based taps to reduce heated water wastage.",
"Install weather-resistant covers on outdoor outlets.",
"Choose variable-speed pool pumps.",
"Replace electric heaters with gas alternatives where safe.",
"Install underfloor insulation.",
"Use door sweeps to prevent air leaks.",
"Design with cross-ventilation in mind for passive cooling.",
"Install magnetic door seals.",
"Use energy-efficient aquarium lighting and air pumps.",
"Upgrade exit signs to LED.",
"Use energy-conscious landscaping to block wind/sun.",
"Install solar attic fans.",
"Install light shelves to bounce sunlight indoors.",
"Insulate exposed hot water pipes.",
"Use cloth napkins to reduce laundry loads.",
"Adjust fridge settings for seasons—less cooling in winter.",
"Use stovetop pressure cookers instead of electric models.",
"Avoid frosted glass near light bulbs—it reduces efficiency.",
"Clean windows to maximize natural light entry.",
"Ensure power tool maintenance for efficient performance.",
"Use a single surge protector to switch off a group of devices.",
"Use warm-colored LEDs to minimize blue light and strain.",
"Opt for hand-powered grinders or juicers.",
"Maintain consistent fridge organization.",
"Avoid extra freezer units unless absolutely necessary.",
"Optimize app permissions to avoid background energy use.",
"Use curtains that block UV rays.",
"Use a plug-in thermostat for window A/Cs.",
"Invest in programmable plugs for appliances.",
"Use solar-powered fans in greenhouses/sheds.",
"Use collapsible cooking gear that heats faster (e.g., silicone kettles).",
"Recycle appliances responsibly—inefficient ones waste power.",
"Buy EnergyGuide-rated products with yellow label comparisons.",
"Install air curtains at commercial entrances.",
"Optimize your laundry schedule based on solar availability.",
"Use apps that track your devices’ real-time usage.",
"Charge using USB ports on energy-efficient devices.",
"Install acoustic panels for better thermal properties.",
"Avoid turning on lights until truly needed.",
"Rinse clothes in cold water after warm washes.",
"Switch to high-efficiency vacuum cleaners.",
"Use laptops with SSDs—they consume less than HDDs.",
"Install retractable awnings for windows.",
"Choose equipment with automatic shut-off features.",
"Shut down servers during holidays or weekends in small offices.",
"Use small fans instead of large ones for individual cooling.",
"Replace old thermostats with Wi-Fi-enabled ones.",
"Turn off defogger features in mirrors after use.",
"Limit brightness on decorative digital displays.",
"Maintain seals around fridge/freezer doors.",
"Choose compact dish drawers over full-sized dishwashers.",
"Use digital timers for heated towel rails.",
"Power off speakers and sound systems when idle.",
"Choose transparent roofing in some rooms for natural light.",

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
            <BreadcrumbPage>Save Electricity</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Save Electricity with Simple Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Saving electricity is not only great for your wallet but also crucial for reducing environmental impact. Small changes in daily habits can lead to significant energy savings and contribute to a more sustainable planet.
          </p>

          <h4 className="font-medium text-base">Energy Saving Tips</h4>
          <ul className="list-disc list-inside space-y-1">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>

          <p>
            Implementing even a handful of these tips can drastically reduce your energy consumption. Encourage your household or community to follow these steps and make a collective impact.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaveElectricityTips;
