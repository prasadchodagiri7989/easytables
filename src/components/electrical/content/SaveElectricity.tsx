import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const SaveElectricityTips = () => {
  const tips = [
    "Install solar panels on your roof to generate electricity.",
    "Install solar water heater system.",
    "Insulate your house.",
    "Install window shutters.",
    "Install double glazing windows.",
    "Buy Energy Star qualified appliances.",
    "Buy appliances with low power consumption.",
    "Check the temperature insulation of your house.",
    "Turn off appliances and gadgets that are in stand by state.",
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
    "Disconnect electrical charger when it finished charging.",
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
  ];

  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4 text-green-700">How to Save Electricity</h1>
      <p className="mb-6 dark:text-white">
        Save money on your electricity bills with these energy-saving tips. Follow these practical steps to reduce power consumption at home.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="leading-relaxed">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaveElectricityTips;
