// components/energy/HowToSaveEnergy.tsx

import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
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
    "Consider geothermal heating/cooling if possible."
  ];

  return (
    <>
    <div className="p-6 md:p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-green-700">How to Save Energy</h1>
      <p className="mb-4 text-lg text-gray-700 dark:text-white">Practical tips to reduce electricity and fuel consumption and save money at home and on the road.</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        {energyTips.map((tip, index) => (
          <li key={index} className="leading-relaxed dark:text-white">{tip}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default HowToSaveEnergy;
