import Domesticicon from "../../assets/domesticicon.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import AirFreightImg from "../../assets/airfreight.png";
import AirExpressImg from "../../assets/airexpress.png";
import { FaPlane } from "react-icons/fa";
import domestic_icon from "../../assets/Icons/domestic.png";
import domestic_whiteicon from "../../assets/Icons/domestic(White).png";
import international_icon from "../../assets/Icons/international.png";
import international_whiteicon from "../../assets/Icons/international(White).png";
import ftl_icon from "../../assets/Icons/FTL.png";
import ftl_whiteicon from "../../assets/Icons/FTL(White).png";
import ltl_icon from "../../assets/Icons/LTL.png";
import ltl_whiteicon from "../../assets/Icons/LTL(White).png";
import fcl_icon from "../../assets/Icons/FCL.png";
import fcl_whiteicon from "../../assets/Icons/FCL(White).png";
import airExpress_icon from "../../assets/Icons/air express.png";
import airExpress_whiteicon from "../../assets/Icons/air express(White).png";
import airFrieght_icon from "../../assets/Icons/air freight.png";
import airFrieght_whiteicon from "../../assets/Icons/air freight(White).png";

import Background from "../../assets/Background/Background1.jpg";
import import_icon from "../../assets/Import/import.png";
import export_icon from "../../assets/Export/Export.png";
import crosstrade_icon from "../../assets/Cross Trade/Cross Trade.png";
import import_whiteicon from "../../assets/Import/white Import.png";
import export_whiteicon from "../../assets/Export/white Export.png";
import cross_whiteicon from "../../assets/Cross Trade/white Cross Trade.png";
import ImportImg from "../../assets/import.png";
import ExportImg from "../../assets/export.png";
import CrossTradeImg from "../../assets/crosstrade.png";
import { type } from "@testing-library/user-event/dist/type";

export const airtags = [
  {
    id: 1,
    title: "Air Freight",
    imgPath1: airFrieght_icon,
    imgPath2: airFrieght_whiteicon,
    desc: "asdsad",
  },
  {
    id: 2,
    title: "Air Express",
    imgPath1: export_icon,
    imgPath2: import_whiteicon,
    desc: "asdsad",
  },
];

export const seatags = [
  { id: 1, title: "FCL (Full Container Load)" },
  { id: 2, title: "LCL (Less Container Load)" },
];
export const landtags = [
  { id: 1, title: "GCC Service" },
  { id: 2, title: "Local Transportation" },
];
export const relocationtags = [
  { id: 1, title: "International" },
  { id: 2, title: "Domestic" },
];
export const tags = [
  { id: 1, title: "Air Service", subtags: airtags },
  { id: 2, title: "Sea Service", subtags: seatags },
  { id: 3, title: "Land Service", subtags: landtags },
  // { id: 4, title: "Relocation", subtags: relocationtags },
];

export const dropdownOptions = [
  {
    tagId: 1,
    options: [
      {
        value: 1,
        label: "Air Freight",
        imgPath: AirFreightImg,
        imgPath1: airFrieght_icon,
        imgPath2: airFrieght_whiteicon,
        desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
      },
      {
        value: 2,
        label: "Air Express",
        imgPath: AirExpressImg,
        imgPath1: airExpress_icon,
        imgPath2: airExpress_whiteicon,
        desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
      },
    ],
  },
  {
    tagId: 2,
    options: [
      {
        value: 1,
        label: "FCL ",
        label2: "Full Container Load",
        imgPath: AirExpressImg,
        imgPath1: fcl_icon,
        imgPath2: fcl_whiteicon,
        desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
      },
      {
        value: 2,
        label: "LCL",
        label2: "Less Container Load",
        imgPath: AirExpressImg,
        imgPath1: ltl_icon,
        imgPath2: ltl_whiteicon,
        desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
      },
    ],
  },
  {
    tagId: 3,
    options: [
      {
        value: 1,
        label: "FCL ",
        label2: "Full Container Load",
        imgPath: AirExpressImg,
        imgPath1: fcl_icon,
        imgPath2: fcl_whiteicon,
        desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
      },
      {
        value: 2,
        label: "LTL",
        label2: "Less Truck Load",
        imgPath: AirExpressImg,
        imgPath1: ltl_icon,
        imgPath2: ltl_whiteicon,
        desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
      },
      {
        value: 3,
        label: "FTL",
        label2: "Full Truck Load",
        imgPath: AirExpressImg,
        imgPath1: ftl_icon,
        imgPath2: ftl_whiteicon,
        desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
      },
    ],
  },
  // {
  //   tagId: 4,
  //   options: [
  //     {
  //       value: 1,
  //       label: "International",
  //       suboption: [
  //         { subtagId: 1, subtagName: "Sea Service", subtags: seatags },
  //         { subtagId: 2, subtagName: "Air Service", subtags: airtags },
  //       ],
  //       imgPath: AirExpressImg,
  //       imgPath1: international_icon,
  //       imgPath2: international_whiteicon,
  //       desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
  //     },
  //     {
  //       value: 2,
  //       label: "Domestic",
  //       imgPath: AirExpressImg,
  //       imgPath1: domestic_icon,
  //       imgPath2: domestic_whiteicon,
  //       desc: "Unlock a world of data with Import.io. We deliver the web data you need to power your business",
  //     },
  //   ],
  // },
];

export const tradetag = [
  {
    id: 1,
    title: "Import",
    imgPath1: import_icon,
    imgPath2: import_whiteicon,
    desc: "Import in logistics refers to the process of bringing goods and services into a country from another, involving customs clearance, transportation, and supply chain management.",
  },
  {
    id: 2,
    title: "Export",
    imgPath1: export_icon,
    imgPath2: export_whiteicon,

    desc: "Export in logistics involves sending goods and services from one country to another, managing transportation, documentation, and customs processes.",
  },
  // {
  //   id: 3,
  //   title: "Cross Trade ",
  //   imgPath1: crosstrade_icon,
  //   imgPath2: cross_whiteicon,
  //   desc: "Cross-trade logistics involves facilitating the movement of goods directly between two foreign countries without them passing through the home country of the logistics provider.",
  // },
];

export const commoditiesData = [
  {
    type: "General Cargo",
    subtypes: [
      "Accessories",
      "Advertising Material",
      "Aircraft Parts(not Restricted)",
      "Aircraft, Spacecraft, And Parts Thereof",
      "Alloy Wheels",
      "Aluminium And Articles Thereof",
      "Aog Spares",
      "Apparel",
      "Articles Of Apparel And Clothing Accessories, Knitted Or Crocheted",
      "Articles Of Apparel And Clothing Accessories, Not Knitted Or Crocheted",
      "Articles Of Iron Or Steel",
      "Articles Of Leather; Saddlery And Harness; Travel Goods, Handbags And Similar Containers; Articles Of Animal Gut (Other Than Silkworm Gut)",
      "Articles Of Stone, Plaster, Cement, Asbestos, Mica Or Similar Materials",
      "Auto Parts",
      "Auto Supplies",
      "Automobiles",
      "Baggage",
      "Bathroom Fittings",
      "Bicycles",
      "Books",
      "Cables",
      "Calculators",
      "Capsules",
      "Carpets And Other Textile Floor Coverings",
      "Catalogues",
      "Ceramic",
      "Clay Products",
      "Cleaning Prods",
      "Clothing Wear Ap",
      "Comat",
      "Compressors Machine",
      "Computer Materials",
      "Consol",
      "Construction Materials",
      "Copper And Articles Thereof",
      "Cork And Articles Of Cork",
      "Cotton",
      "Credit Cards",
      "Curtains-drapery",
      "Dentist Instr",
      "Documents",
      "Ecommerce Cargo",
      "Education Materials",
      "Electric Heating",
      "Electrical Machinery And Equipment And Parts Thereof; Sound Recorders And Reproducers, Television Image And Sound Recorders And Reproducers, And Parts And Accessories Of Such Articles",
      "Electronics",
      "Engines-turbine",
      "Equipments",
      "Fabrics",
      "Food Articles",
      "Footwear",
      "Footwear, Gaiters And The Like; Parts Of Such Articles",
      "Fur-leather Wear",
      "Furniture Hw",
      "Furniture; Bedding, Mattresses, Mattress Supports, Cushions And Similar Stuffed Furnishings; Lamps And Lighting Fittings, Not Elsewhere Specified Or Included; Illuminated Signs, Illuminated Name-plates And The Like; Prefabricated Buildings",
      "Furskins And Artificial Fur; Manufactures Thereof",
      "Garments",
      "Glass And Glassware",
      "Goods",
      "Granite Slabs",
      "Greeting Cards",
      "Handicraft Prod",
      "Handicrafts",
      "Hardware",
      "Headgear And Parts Thereof",
      "Herbs-leaves",
      "Immitation Jewelry",
      "Impregnated, Coated, Covered Or Laminated Textile Fabrics; Textile Articles Of A Kind Suitable For Industrial Use",
      "Inflight Supplies",
      "Instruments",
      "Iron And Steel",
      "Knitted Or Crocheted Fabrics",
      "Lead And Articles Thereof",
      "Live Trees And Other Plants; Bulbs, Roots And The Like; Cut Flowers And Ornamental Foliage",
      "Machinery",
      "Magazines",
      "Magnetic Tapes",
      "Man-made Filaments",
      "Man-made Staple Fibres",
      "Manufactures Of Straw, Of Esparto Or Of Other Plaiting Materials; Basketware And Wickerwork",
      "Mechanic Product",
      "Metal Furniture",
      "Metals",
      "Miscellaneous Articles Of Base Metal",
      "Miscellaneous Manufactured Articles",
      "Motor-generator",
      "Motorcycles",
      "Motors",
      "Musical Instruments; Parts And Accessories Of Such Articles",
      "Needlework",
      "Newspapers",
      "Newspapers-daily",
      "Nickel And Articles Thereof",
      "Office Material",
      "Office Supplies",
      "Oil Drilling Machine",
      "Optical Instr",
      "Optical, Photographic, Cinematographic, Measuring, Checking, Precision, Medical Or Surgical Instruments And Apparatus; Parts And Accessories Thereof",
      "Other Base Metals; Cermets; Articles Thereof",
      "Other Made-up Textile Articles; Sets; Worn Clothing And Worn Textile Articles; Rags",
      "Other Vegetable Textile Fibres; Paper Yarn And Woven Fabrics Of Paper Yarn",
      "Paintbrush",
      "Painting",
      "Paints",
      "Paints-engraving",
      "Pamphlets",
      "Paper And Paperboard; Articles Of Paper Pulp, Of Paper Or Of Paperboard",
      "Paper Products",
      "Pens, Pencils",
      "Personal Effect (Household Item)",
      "Phone Material",
      "Photographic Or Cinematographic Goods",
      "Pipes",
      "Plastic Articles",
      "Plastics And Articles Thereof",
      "Postal Mail",
      "Pottery Sinks",
      "Prepared Feathers And Down And Articles Made Of Feathers Or Of Down; Artificial Flowers; Articles Of Human Hair",
      "Press",
      "Printed Books, Newspapers, Pictures And Other Products Of The Printing Industry; Manuscripts, Typescripts And Plans",
      "Printed Matter",

      "Products Of Animal Origin, Not Elsewhere Specified Or Included",
      "Promotional Material",
      "Pulp Of Wood Or Of Other Fibrous Cellulosic Material; Recovered (Waste And Scrap) Paper Or Paperboard",
      "Pumping-pipe Fix",
      "Raw Hides And Skins (Other Than Furskins) And Leather",
      "Raw Materials",
      "Residues And Waste From The Food Industries; Prepared Animal Fodder",
      "Rubber And Articles Thereof",
      "Rubber Products",
      "Rubber Tyres",
      "Salt; Sulphur; Earths And Stone; Plastering Materials, Lime And Cement",
      "Scient-prec Ins",
      "Scientific Instr",
      "Semi Conductors",
      "Ship Access",
      "Ship Spares",
      "Shoe Laces-hooks",
      "Shoes",
      "Silicone",
      "Silk",
      'Soap, Organic Surface-active Agents, Washing Preparations, Lubricating Preparations, Artificial Waxes, Prepared Waxes, Polishing Or Scouring Preparations, Candles And Similar Articles, Modelling Pastes, "Dental Waxes" And Dental Preparations With A Basis Of Plaster',
      "Spare Parts",
      "Spares",
      "Special Woven Fabrics; Tufted Textile Fabrics; Lace; Tapestries; Trimmings; Embroidery",
      "Sports Goods",
      "Stationary",
      "Stones",
      "Surface Vehicles",
      "Tanning Or Dyeing Extracts; Tannins And Their Derivatives; Dyes, Pigments And Other Colouring Matter; Paints And Varnishes; Putty And Other Mastics; Inks",
      "Textile",
      "Tin And Articles Thereof",
      "Tobacco And Manufactured Tobacco Substitutes",
      "Tools",
      "Tools, Implements, Cutlery, Spoons And Forks, Of Base Metal; Parts Thereof Of Base Metal",
      "Toys, Games And Sports Requisites; Parts And Accessories Thereof",
      "Trophies",
      "Typewriter",
      "Umbrellas, Sun Umbrellas, Walking-sticks, Seat-sticks, Whips, Riding-crops And Parts Thereof",
      "Wadding, Felt And Nonwovens; Special Yarns; Twine, Cordage, Ropes And Cables And Articles Thereof",
      "Wearing Appareil",
      "Wood And Articles Of Wood; Wood Charcoal",
      "Wood Products",
      "Wool, Fine Or Coarse Animal Hair; Horsehair Yarn And Woven Fabric",
      "Zinc And Articles Thereof",
      "Agricultural Equipment",
      "Aircraft Engines Aircraft Parts Excluding Fuselages Wings",
      "Aircraft Engines Aircraft Parts Excluding Tail Assemblies Stabilizers Stabilators Fuselages Wings",
      "Aircraft Engines Aircraft Parts Including Accessories Excluding Overhaul Tools Maintenance Tools Supplies Fuselages Wings",
      "Aircraft Parts Excluding Aircraft Engines",
      "Automobile Temperature Gauges",
      "Bldg Eqpt, Engg Construction Eqpt",
      "Building Material Building Tools Fixtures Fittings",
      "Business Machinery Office Machinery Including Supplies Machinery Tools Surface Vehicles Excluding Steamship Machinery Motorship Machinery Spare Parts",
      "Construction Equipment Building Material",
      "Construction Parts For Cable Cars,pylons",
      "Diesel Engines Pumpsets",
      "Drilling Equipment",
      "Earth Drilling Equipment",
      "Engines Turbines",
      "Internal Combustion Engines Turbines",
      "Machinery For Constructing Earth Moving Conveying Excavating Mining",
      "Machinery For Constructing Excavating Conveying",
      "Machinery For Oil Drilling Oil Field Servicing Dredging",
      "Mining Machinery,well Machinery,pumping Machinery",
      "Motor",
      "Motors Generators Transformers Electric",
      "Oil Research And Drilling Equipment Supplies And Accessories",
      "Parts For Road Construction Machinery Parts For Generators",
      "Parts For Sporting Boats Including Accessories",
      "Parts Of Agricultural Machines Parts Of Railway Cars Parts Of Automobiles Parts Of Motorscooters Parts Of Motorcyles Parts Of Bicycles Parts Of Motor Sleighs Lampshields Horns Sirens Visors Spotlamps Flashing Lights Wheelcaps Mirrors Ashtrays Floor Mats Steering Wheel Covers Instrument Sets Instrument Panels Keyless Ignition Switches Safety Locks Jacks Windshield Washers Air Conditioners Seat Belts Seat Covers Tyre Chains Tyre Studs Petrol Caps Bumper Guards Luggage Racks Ski Racks Back Rests Baby Seats Head Cushions Automobile Lighters Wind Deflectors",
      "Prefabricated Houses, Related Outfit",
      "Rap",
      "Rapidito",
      "Stones For Building",
      "Surface Vehicle Parts Excluding Steamship And Or Motorship Machine Parts",
      "Surface Vehicles Excluding Steamship Parts Motorship Parts",
      "Surface Vehicles Self Propelled Agricultural Machinery Including Accessories Excluding Steamship Parts Motorship Parts",
      "Surface Vehicles And Accessories Excl Steam",
      "Valves Electric Machinery Mechanical Machinery For Nuclear Hydro Carbon Power Plant Equipment",
    ],
  },
  {
    type: "Human Remains",
    subtypes: ["Cremated (Ashhes)", "Uncremated (In Coffin)"],
  },
  {
    type: "Live Animal",
    subtypes: ["Horse", "Pets"],
  },
  {
    type: "Dangerous Goods",
    subtypes: [
      "Class 1",
      "Class 2",
      "Class 4",
      "Class 5",
      "Class 6",
      "Class 7",
      "Class 8",
      "Class 9",
    ],
  },
  {
    type: "Perishable",
    subtypes: ["-5 to -25 ", "5 to 25"],
  },
  {
    type: "Dangerous Goods",
    subtypes: ["item1", "item1", "item1"],
  },
  {
    type: "Frozen Goods",
    subtypes: ["item1", "item1", "item1"],
  },
];
export const conatinerData = [
  // "20' Standard",
  // "40' Standard",
  // "20' High Cube",
  // "20' Refrigerated",
  // "40' Refrigerated",
  // "20' Open Top",
  // "40' Open Top",
  // "20' Flattrack",
  // "40' Flattrack",
  // "20' Tank",
  // "20' Flattrack Collapsible",
  // "40' Flattrack Collapsible",
  // "20' Platform",
  // "40' Platform",
  // "20' Bulk",
  // "45' High Cub",
  // "10' Standard",

  {
    type: "Standard",
    subtypes: ["10", "20", "40"],
  },
  {
    type: "High Cube",
    subtypes: ["20", "45"],
  },
  {
    type: "Refrigerated",
    subtypes: ["20", "40"],
  },
  {
    type: "Open Top",
    subtypes: ["20", "40"],
  },
  {
    type: "Flat Track",
    subtypes: ["20", "40"],
  },
  {
    type: "Tank",
    subtypes: ["20"],
  },
  {
    type: "Flattrack Collapsible",
    subtypes: ["20"],
  },
  {
    type: "Platform",
    subtypes: ["20", "40"],
  },
  {
    type: "Bulk",
    subtypes: ["20"],
  },
];
