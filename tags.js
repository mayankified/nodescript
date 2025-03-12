// const { PrismaClient } = require("@prisma/client");
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
const categories = [
   
    {
      category: "Restaurant",
      tags: "Baingan Bharta, Palak Paneer, Dal Makhani, Malai Kofta, Sambar Rice, Pav Bhaji, Kadai Paneer, Veg Manchurian, Puri Bhaji, Aloo Gobi, Bhindi Masala, Mixed Vegetable Curry, Gajar Halwa, Jeera Rice, Shahi Paneer, Vegetable Pulao, Rasam, Kadhi Pakora, Dhokla, Undhiyu, Idli Sambar, Upma, Veg Cutlet, Aloo Tikki, Veg Hakka Noodles, Chana Masala, Mutter Paneer, Kachori, Veg Pakora, Stuffed Capsicum, Cabbage Poriyal, Malabar Paratha, Veg Spring Rolls, Tomato Soup, Khichdi, Thepla, Dabeli, Beetroot Halwa, Mysore Pak, Coconut Chutney, Lemon Rice, Masoor Dal, Bhature Chole, Roti Sabzi, Paneer Tikka, Moong Dal Halwa, Mango Pickle, Rice Kheer, Corn Chaat, Pani Puri, Sev Puri, Veg Frankie, Dal Fry, Gobi Manchurian, Samosa Chaat, Khaman Dhokla, Vegetable Pakora, Spinach Corn Curry, Masala Chai, Badam Halwa, Tamarind Rice, Curd Rice, Rajgira Roti, Methi Paratha, Lauki Kofta, Drumstick Sambar, Bottle Gourd Halwa, Poha, Pesarattu, Sabudana Khichdi, Rava Upma, Dal Tadka, Paneer Bhurji, Veg Kebabs, Aloo Matar, Curry Leaves Rice, Beetroot Poriyal, Mushroom Curry, Veg Pizza (Indian Style), Chettinad Veg Curry, Moong Dal Chilla, Sprouts Salad, Lemon Sevai, Pumpkin Curry, Cucumber Raita, Tamarind Chutney, Papdi Chaat, Gobi Paratha, Dal Baati Churma, Rajasthani Gatte, Kadhi Khichdi, Spinach Thepla, Makki Ki Roti, Sarson Ka Saag, Butter Chicken, Chicken Biryani, Mutton Biryani, Chicken Tikka Masala, Tandoori Chicken, Fish Curry, Prawn Masala, Rogan Josh, Keema Naan, Chicken Korma, Mutton Rogan Josh, Egg Curry, Chicken 65, Chicken Vindaloo, Lamb Seekh Kebab, Mutton Kheema, Chicken Chettinad, Hyderabadi Dum Biryani, Goan Fish Curry, Malabar Prawn Curry, Kerala Chicken Stew, Egg Biryani, Crab Masala, Chicken Handi, Fish Tikka, Tandoori Fish, Shami Kebab, Chicken Shawarma, Mutton Curry, Mutton Paya, Chicken Changezi, Bengali Mustard Fish, Chicken Rezala, Egg Bhurji, Mutton Nihari, Mutton Haleem, Paya Soup, Chicken Sukka, Kozhi Curry, Amritsari Fish Fry, Mutton Pepper Fry, Fish Fry, Chicken Pakora, Prawn Biryani, Chicken Cafreal, Masala Prawns, Chicken Manchurian, Mutton Seekh Kebab, Fish Pulimunchi, Chicken Keema Pulao, Chicken Tikka, Dum Mutton, Fish Amritsari, Tandoori Prawns, Chicken Madras, Egg Masala, Mutton Shorba, Lobster Curry, Fish Molee, Malabar Fish Stew, Crab Curry, Duck Roast, Chicken Roast, Chicken Malai Tikka, Mutton Rara, Fish Malai Curry, Egg Paratha, Chicken Samosa, Tandoori Quail, Mutton Bhuna, Chicken Tandoori Momos, Keema Pav, Crab Sukka, Nargisi Kofta, Mutton Galouti Kebab, Grilled Fish, Andhra Chilli Chicken, Mutton Hyderabadi Curry, Bheja Fry, Chicken Achari, Fish Vindaloo, Shrimp Masala, Mutton Stew, Chicken Mulligatawny, Chicken Keema Noodles, Duck Biryani, Bombay Duck Curry, Mutton Boti Kebab, Pomfret Fry, Chicken Lollipop, Mutton Ghee Roast, Lobster Butter Masala, Chicken Do Pyaza, Fish Bhuna, Grilled Prawns, Chicken Rara Curry, Kerala Egg Curry, Egg Roll, Crab Tandoori, Fish Koliwada, Paneer Tikka Starter, Chicken 65 Recipe, Veg Manchurian Dry, Aloo Tikki Chaat, Tandoori Chicken Starter, Fish Tikka Masala, Hara Bhara Kebab, Samosa Filling Ideas, Dahi Ke Kebab, Prawns 65 Recipe, Seekh Kebabs Indian, Chilli Paneer Starter, Spring Rolls Veg, Mutton Kebab Platter, Gobi 65 Fry, Prawn Tempura Indian, Veg Cutlets Recipe, Malai Tikka Chicken, Mini Samosa Bites, Kathi Rolls Veg, Chaat Papdi Mix, Corn Cheese Balls, Tandoori Prawns Indian, Spinach Pakoras, Chicken Lollipop Fry, Dal Pakwan Chaat, Mushroom Tikka Indian, Egg Kebabs Fry, Veg Platter Indian, Aloo Pakora Variations, Onion Bhaji Recipe, Chaat Basket Ideas, Crispy Fish Fingers, Masala Vada Recipe, Lamb Tikka Masala, Veg Dim Sums Indian, Masala Papad Toppings, Fried Wontons Indian, Rajma Galouti Kebabs, Stuffed Mushrooms Starter, Indian Dinner Ideas, Butter Naan Combos, Chicken Tandoori Meal, Veg Thali Dinner, Palak Paneer Dinner, Garlic Naan Options, Mutton Curry Meal, Chicken Gravy Recipes, Dal Tadka Dinner, Fish Curry Recipes, Indian Roti Dinner, Paneer Tikka Masala, Egg Curry Dinner Ideas, Bhindi Masala Fry, Chana Masala Gravy, Mutton Korma Dinner, Veg Biryani Rice, Chicken Handi Combos, Aloo Paratha Meal, Prawn Curry Dinner, Indian Lunch Recipes, Paneer Butter Masala, Dal Makhani Meal, Chicken Curry Recipes, Veg Pulao Lunch, Rajma Chawal Combos, Butter Chicken Lunch, Veg Thali Indian, Chicken Biryani Recipe, Mutton Curry Combos, Roti Sabzi Combos, South Indian Meals, Idli Sambhar Lunch, Lemon Rice South Indian, Indian Fish Curry Lunch, Aloo Gobi Curry, Chana Masala Rice, Indian Chicken Handi, Prawn Curry Rice, Indian Thali Lunch, Palak Paneer Rice, Bisi Bele Bath Karnataka, Chicken Stew Kerala, Malabar Parotta Meal, Baingan Bharta Lunch, Kofta Curry Recipes, Masala Dosa Combos, Dahi Chawal Indian, Kadhi Pakora Rice, Kadai Chicken Recipes, Veg Biryani Masala, Mutton Biryani Andhra, Dal Fry Roti Lunch, Fish Curry Kerala, Veg Kurma Indian, Egg Curry Lunch, Indian-Style Omelette, Gobi Masala Rice, Pulao Recipes Veg, Chicken Tikka Meals, Butter Naan Combos, Indian Main Course Ideas, Veg Main Course Recipes, Chicken Korma Curry, Mutton Rogan Josh, Paneer Curry Options, Chicken Masala Gravy, Biryani Varieties Indian, Dal Fry Recipes, Rajma Masala Combos, Prawn Masala Curry, Fish Tikka Gravy, Gulab Jamun Sweets, Jalebi Recipes Indian, Kheer Rice Pudding, Rasgulla Bengali Dessert, Rabri Indian Sweets, Halwa Recipes Indian, Besan Ladoo Recipe, Kulfi Ice Cream, Cappuccino Coffee Indian, Masala Chai Tea, Indian Café Snacks, Veg Sandwich Ideas, Paneer Wraps Combos, Veg Burgers Indian Style, French Fries Spicy, Indian Cold Coffee, Tandoori Momos Indian, Chaat Indian Café, Chicken, Rice, Dal, Chai, Tea.,Indian restaurant, Indian hotel, Food, khana kajana, Dhaba, Dabhha, Rasoi, Lunch, Dinner, Breakfast, Meal, Chai, Morning breakfast, Briyani, Chole bhature, Rajma chawal, Papad, Indian food"
    },

    {
      category: "Hospital",
      tags: "Indian hospital, Medical clinic, Healthcare services, Emergency care, General physician, Diagnostic center, Pathology lab, Radiology services, X-ray center, Blood tests, Medical check-up, Surgery services, Maternity hospital, Pediatric care, Dental clinic, Eye specialist, Orthopedic clinic, Physiotherapy services, Mental health clinic, Dermatology services, ENT doctor, Cardiology clinic, Neurology specialist, Urology clinic, Cancer treatment, IVF center, Medical consultation, Pharmacy services, Ambulance services, Health insurance, Dental surgery, Wellness clinic, Ayurveda treatment, Homeopathy clinic, Natural healing, Holistic medicine, Vaccine center, Immunization services, Blood donation camp, Hospital admission, Post-surgery care, Medical specialist, Gynaecology clinic, Prenatal care, Postnatal care, Healthcare provider, Emergency ambulance, Health screening, Critical care unit, Intensive care unit, 24/7 medical services, Heart treatment, Kidney care, Respiratory care, Primary care physician, Cancer screening, Rehabilitation center, Wellness check-up.,Hospital, mediacal, chemist, dawa shop, dawa ki dukan"
    },
    {
      category: "Auto repair",
      tags: "Vehicle repair services, Local mechanic near me, Affordable vehicle repair, Roadside vehicle assistance, Online vehicle service booking, Emergency mechanic services, Multi-brand vehicle repair, General servicing for vehicles, Engine repair workshop, Vehicle maintenance services, Bike servicing near me, Motorcycle repair shop, Scooter servicing center, Two-wheeler mechanic, Bullet bike repair, Electric scooter repair, Chain tightening services, Brake pad replacement, Bike puncture repair, Scooter engine repair, Two-wheeler oil change, Scooter battery replacement, Sports bike mechanic, Gear adjustment services, Motorcycle clutch repair, Car servicing near me, Car mechanic workshop, Car denting and painting, Wheel alignment services, Car AC repair, Brake servicing for cars, Car battery repair, SUV repair center, Hatchback servicing, Engine tuning for cars, Car suspension repair, Petrol car servicing, Diesel car repair shop, Car headlight repair, Luxury car servicing, Truck repair near me, Heavy vehicle repair services, Truck tyre repair, Commercial truck servicing, Diesel truck maintenance, Tata truck repair, Ashok Leyland mechanic, Truck engine servicing, Heavy-duty truck repair, Brake repair for trucks, Truck suspension services, Truck radiator repair, Cargo truck mechanic, Tyre alignment for trucks, Commercial vehicle mechanic, Auto-rickshaw repair, Tractor repair shop, Agricultural vehicle servicing, Tempo repair services, E-rickshaw mechanic, JCB repair workshop, Water tanker maintenance, Garbage truck repair, Hydraulic vehicle repair, School bus servicing, Electric vehicle repair, Forklift repair services, Ambulance repair mechanic, Minibus repair shop, Construction vehicle servicing, 24x7 roadside assistance, Bike towing service, Car towing service, Truck towing near me, Emergency vehicle breakdown, Flat tyre repair, Jumpstart services, Vehicle recovery services, Fuel delivery for breakdowns, On-the-spot bike repair, Nearby mechanic services, Local garage search, Nearest vehicle service center, Regional bike repair, Suburban car repair shop, Rural vehicle maintenance, Urban truck servicing, Local puncture repair shop, Village mechanic services, Neighborhood vehicle repair, App-based vehicle servicing, Online mechanic booking, Mobile mechanic service, Home vehicle servicing, Digital vehicle repair shop, Vehicle diagnostics services, Contactless vehicle repair, Instant service booking app, Virtual vehicle checkup, Nearby multi-brand service station"
    },
    {
      category: "Electrician",
      tags: "Indian electrician services, Nearby electricians, Residential electrician near me, Commercial electrician services, Emergency electrician, Electrician for wiring repair, Fan installation services, Tube light fitting, Ceiling fan repair, LED light installation, Circuit breaker repair, Switchboard repair, Fuse replacement services, Electrical maintenance, Power backup solutions, Generator repair, Inverter installation, Solar panel electrician, Home rewiring services, Office electrical services, Appliance electrician, Refrigerator wiring repair, AC installation services, Microwave repair electrician, Washing machine electrical work, TV wiring setup, Smart home electrician, Geyser installation, Electric vehicle charging setup, Electrical safety inspection, Meter box installation, Underground wiring electrician, Voltage stabilizer repair, UPS repair services, Electric panel repair, Industrial electrician services, Factory electrician, Machine wiring services, Commercial lighting installation, Electrical troubleshooting, Electrical wiring upgrades, Outdoor lighting setup, Decorative lighting electrician, Landscape lighting solutions, Garden lighting setup, Street light repair, HT/LT line maintenance, Transformer repair services, Electric pole repair, Construction site electrician, Temporary power setup, Wiring for events, Exhibition electrical setup, Electric load balancing, Phase correction services, Electrical grounding work, Surge protection installation, Electrical renovation, Modular switch installation, Electrical fault finding, Electrical automation expert, Shop electrician services, School electrical setup, Hotel electrical services, Restaurant electrical maintenance, Lift wiring electrician, Building wiring electrician, Society electrician services, Fire alarm system wiring, CCTV wiring installation, Data center electrician, Computer wiring setup, Server room wiring, LAN cable electrician, Network switch installation, Industrial machine electrician, Control panel wiring, Substation electrician, Renewable energy electrician, Wind turbine wiring, Battery installation electrician, Portable generator electrician, Farm wiring services, Irrigation pump wiring, Borewell motor electrician, Rural electrician services, Community hall electrician, electrician setup, Cinema hall wiring setup, Electrical drafting expert, Electrical planning services, Building code compliance, Energy efficiency upgrades, Electrical hazard prevention, Childproof electrical installation, Power outage troubleshooting, Low voltage wiring, Industrial automation electrician, Power surge electrician, 24/7 electrical support services.,Indian Electrician, Bijli wala, Bijli ki dukan"
    },
    {
      category: "Jewelry",
      tags: "Indian jewelry, Gold jewelry, Diamond jewelry, Silver jewelry, Traditional jewelry, Bridal jewelry, Antique jewelry, Necklace, Earrings, Bangles, Rings, Pendants, Choker, Kundan jewelry, Polki jewelry, Jhumkas, Nose ring, Toe rings, Mangalsutra, Armlets, Anklets, Maang tikka, Bridal set, Gemstone jewelry, Emerald ring, Ruby necklace, Sapphires, Jewelry set, Bridal anklets, Designer jewelry, Handcrafted jewelry, Pearl necklace, Platinum jewelry, Wedding jewelry, Fashion jewelry, Modern jewelry, Customized jewelry, Jewelry box, Necklace set, Diamond bangles, Gold chain, Luxury jewelry, Jewelry repair, Jewelry cleaning, Gemologist services, Gemstones, Birthstone jewelry, Cufflinks, Men's jewelry, Hair accessories, Jewelry collection, Ethnic jewelry, Statement pieces, Jewelry store, Jewelry gifts, Wedding rings"
    },
    {
      category: "Truck",
      tags: "Truck, truck service, movers, transport service, truck business,indian trucks,indian truck driver, indian trucking business, indian driver, logistics service,punjabi driver"
    },
    {
      category: "Grocery",
      tags: "Basmati, Rice, Wheat, Flour, Mustard, Oil, Ghee, Turmeric, Chili, Lentils, Garam, Masala, Soya, Chunks, Curries, Tamarind, Paste, Cumin, Asafoetida, Curry, Cardamom, Paneer, Pickles, Semolina, Rava, Chickpea, Jaggery, Black, Pepper, Cashew, Tea, Instant, Sugar, Coconut, Fenugreek, Cloves, Papad, Mango, Pulp, Cheese, Desiccated, Moong, Biryani, Whole, Sunflower, Filter, Coffee, Curd, Breakfast, Bajra, Khichdi, Vegan, Makhana, Sugar-free, Makhana, Masala, Hing, Kesar, Lassi, Roti, Puri, Chutney, Idli, Vada, Rasam, Poha, Upma, Jalebi, Dosa, Rasgulla, Sambar, Kheer, Aloo, Paratha, Kofta, Dal, Sabji, Raita, Naan, Kulcha, Pulao, Bhurji, Tadka, Thali, Halwa, Chaat, Laddu, Chole, Biryani, Samosa, Bhature, Pakora, Tikka, Kabab, Chutney, Barfi, Malpua, Khichdi,Bhindi, Okra, Drumstick, Bittergourd, Eggplants, Curry, Leaf, Chilies, Tomato, Mango, Cucumber, Cauliflower, Spinach, Fenugreek, Radish, Pumpkin, Bottle, Gourd, Sweet, Potato, Taro, Mustard, Greens, Coriander, Beans, Banana, Onion, Amaranth, Garlic, Jackfruit, Brinjal, Squash, Parsley, Drumstick, Peas, Chayote, Asparagus, Mint, Broccoli, Carrot, Potato, Capsicum, Mushroom, Yam, Turnip, Lettuce, Zucchini, Bell, Pepper, Beetroot, Celery, Kohlrabi, Methi, Neem, Curry, Basil, Tulsi, Gongura, Ridge, Turai, Mooli, Lemon, Cabbage, Palak, Karela, Shalgam, Haldi, Tomato, Mirchi, Green, Gobi, Baingan, Lauki, Phool, Phal, Arbi, Sahjan, Aloo, Gobhi,Cooker, Jar, Tiffin, Rack, Mortar, Pestle, Plate, Spoon, Idli, Steamer, Grinder, Clay, Pot, Rice, Kettle, Dosa, Tawa, Stove, Burner, Roti, Maker, Ladle, Container, Coffee, Filter, Dinner, Set, Kadai, Rolling, Chimta, Broom, Detergent, Scraper, Strainer, Weighing, Grater, Spatula, Board, Bowls, Mat, Bottle, Dish, Soap, Mug, Tumbler, Bucket, Ropes, Scrubber, Purifier, Incense, Rope, Towel, Candle, Basket, Rack, Stool, Hook, Storage, Scale, Brush, Shelf, Cloth, Brush, Mop, Pan, Blender, Fryer, Cutter, Juicer, Slicer, Dish, Towel, Rod, Rug, Lid, Knife, Bucket, Wiper, Bowl, Stool, Heater, Lighter, Timer, Mitt, Gloves, Griddle, Peeler,Samosa, Bhujia, Chips, Bhel, Chakli, Sev, Puri, Rolls, Masala, Kurkure, Peanut, Pakora, Puff, Khakhra, Nuggets, Kachori, Papad, Farsan, Namkeen, Dhokla, Poha, Biscuit, Popcorn, Nippattu, Patties, Chikki, Cheesling, Bites, Cracker, Crispy, Ladoo, Candy, Fryum, Bites, Cutlet, Pattie, Pastry, Tart, Roll, Muffin, Bun, Burger, Pizza, Chaat, Pakoda, Chiwda, Chakri, Fryum, Cake, Puffs, Barfi, Laddu, Cookies, Wafer, Breadsticks, Pakodi, Kaju, Chevdo, Roll, Sandwich, Tartlet, Fryums, Tikki, Paniyaram, Katori, Wafers, Patties, Crunchy, Murukku, Fritter, Burger, Chatni, Vada, Idli, Roll, Poha, Fry, Chips, Crunchy, Wrap, Sausage, Mini, Crispy, Pakoda, Patty, Fried,Indian grocery, Kirina dukan, genral store, smart bazar, maggie, ration ki dukan"
    },
    {
      category: "Cafe",
      tags: "Coffee Shop, Tea Room, Dessert Cafe, Internet Cafe, Board Game Cafe, Study Cafe, Bakery Cafe , Espresso, Americano, Cappuccino, Latte, Mocha, Macchiato, Flat White, Ristretto, Affogato, Cortado, Doppio, Lungo, Red Eye, Black Eye, Irish Coffee, Turkish Coffee, Vietnamese Coffee, Café au Lait, Cold Brew, Nitro Cold Brew, Iced Coffee, Frappé, Espresso Con Panna, Bicerin, Breve, Galão, Kopi Luwak, Mazagran, Café Cubano, Wiener Melange, Indian coffee , Indian cafe , cafe , Cafe"
    },
    {
      category: "Hairstyle/Saloon",
      tags: "Indian hair salon, Haircut, Hair coloring, Hair styling, Bridal makeup, Facial, Hair spa, Keratin treatment, Manicure, Pedicure, Hair extensions, Blowout, Bridal hair styling, Spa treatment, Massage therapy, Hair rebonding, Hair treatment, Pedicure services, Hair oiling, Makeup artist, Skincare, Hair repair, Waxing, Threading, Body massage, Mehndi design, Hair straightening, Hair curling, Nail art, Body scrub, Makeup consultation, Facial cleansing, Hair perming, Makeup studio, Eyebrow shaping, Hair trimming, Waxing services, Facial massage, Bridal beauty packages, Hairstyling tips, Beauty parlour, Waxing and threading, Hair detox, Makeup for parties, Skincare routine, Henna application, Beauty treatments, Hair rejuvenation, Eyelash extensions, Bridal beauty services, Organic facial, Body polishing, Beauty expert, Indian makeup look, Men's grooming.,Indian salon, Nai, SPA, hair cut, haircut"
    },
    {
      category: "Home cleaner",
      tags: "Indian home cleaning, Housekeeping services, Deep cleaning, Carpet cleaning, Sofa cleaning, Floor polishing, Window cleaning, Kitchen cleaning, Bathroom cleaning, House maid services, House sanitization, Laundry services, Ironing services, Appliance cleaning, Furniture cleaning, Home disinfection, Vacuum cleaning, Dusting services, Home organization, Home maintenance, Cleaning tips, Home sanitizing, Bathroom deep cleaning, Kitchen deep cleaning, Floor scrubbing, Home decluttering, Bed linen changing, Professional cleaners, House cleaning packages, Cleaning services for offices, Residential cleaning, House window washing, Post-construction cleaning, Mattress cleaning, Washing and drying, Home dusting, Indoor air purification, Wall cleaning, Upholstery cleaning, Home cleaning team, Cleaning service booking, Cleaning supplies, Outdoor cleaning, Garden maintenance, Floor mopping, Pressure washing, Residential maid, Office cleaning, Dust and dirt removal, Carpet shampooing, Home service provider, Daily cleaning, Weekly cleaning, Monthly cleaning, Professional home service, Furniture sanitization, Eco-friendly cleaning solutions, Tile and grout cleaning.,Home cleaner, House cleaner, cleaner"
    },
    {
      category: "Plumber",
      tags: "Indian plumber, Plumbing services, Pipe repair, Water leakage, Drain cleaning, Faucet installation, Toilet repair, Water tank cleaning, Pipe fittings, Plumbing inspection, Plumbing contractor, Burst pipe repair, Tap replacement, Bathroom plumbing, Kitchen plumbing, Pipe replacement, Plumbing maintenance, Sewer line services, Plumbing emergency, Water heater installation, Hot water repair, Geyser service, Leak detection, Pipe unclogging, Sump pump repair, Water pressure issue, Plumbing repairs, Residential plumbing, Commercial plumbing, Water pipe installation, Plumbing expert, Clogged drain, Plumbing solutions, Emergency plumber, Pipe installation, Sanitary fitting, Plumbing upgrades, Drain pipe replacement, Shower repair, Water filtration system, Bathroom fixtures, Pipe insulation, Plumbing tools, Water leak solutions, Sewer cleaning, Drainage system, Pipeline maintenance, Toilet installation, Plumbing contractor services, Pipe soldering, Burst pipe replacement, Bathroom remodeling, Plumbing consultation, Water supply system, Repair plumber, Pipe sealing, Geyser maintenance, Kitchen sink repair, Indian plumbing expert, Plumbing troubleshooting"
    },
    {
      category: "Insurance",
      tags: "Indian insurance, Health insurance, Life insurance, Vehicle insurance, Home insurance, Travel insurance, Business insurance, Auto insurance, Term insurance, Premium plans, Insurance policy, Medical insurance, Personal accident insurance, Insurance claim, Family insurance, Group insurance, Motor insurance, Insurance broker, Insurance agent, Critical illness insurance, Retirement plan, Insurance consultation, Investment-linked insurance, Pension plan, Risk management, Insurance coverage, Liability insurance, Comprehensive insurance, Home protection insurance, Property insurance, Insurance renewal, Policyholder services, Insurance quote, Accident cover, Insurance document, Claim settlement, Insurance premium, Term plan, Universal life insurance, Whole life insurance, Endowment plan, Insurance terms, Health plan, Insurance advisor, Fraud prevention, Mobile insurance, Insurance verification, Claims assistance, Financial planning, Corporate insurance, Policy customization, Child insurance plan, Insurance investment, Insurance network, Policy benefits, Insurance eligibility, Insurance portfolio"
    },
    {
      category: "Law",
      tags: "Indian Law, Immigrants , Immigrant , Indian Immigrants, Move To USA, Indian In America, US Visa Process, Indian Business Abroad, Immigration Made Easy, NRI Community, Green Card Journey, Work In USA, Desi Abroad, Indian law, Legal services, Legal advice, Court cases, Family law, Criminal law, Civil law ,Indian law, Legal services, Legal advice, Court cases, Family law, Criminal law, Civil law, Property law, Contract law, Intellectual property, Legal documentation, Real estate law, Employment law, Tax law, Corporate law, Legal consultancy, Divorce lawyer, Marriage registration, Legal representation, Legal fees, Bail services, Legal aid, Legal contracts, Notary services, Legal dispute resolution, Legal research, Labor law, Consumer rights, Legal notices, Mediation services, Arbitration, Court filing, Land acquisition, Consumer court, Human rights, Cyber law, Trademark registration, Legal compliance, Legal proceedings, Bankruptcy law, Law firm, Legal expert, Law education, Legal profession, Legal audit, Legal claims, High court lawyer, Supreme court lawyer, Legal seminars, Law training, Advocate services, Legal advisor, Legal paperwork, Personal injury lawyer, Litigation services, Criminal defense lawyer.,advocate,attorney,vakil,vakeel,judge, Lawyer " },
    {
      category: "Temple",
      tags: "Mandir darshan, Lord Shiva mandir, Lord Vishnu mandir, Goddess Lakshmi mandir, Lord Ganesha mandir, Mandir aarti, Pooja services, Mandir rituals, Mandir blessings, Devotional mandir, Mandir pooja items, Mandir festivals, Sacred mandir, Mandir priests, Mandir architecture, Vedic mandir, Mandir traditions, Holy mandir, Mandir tours, Pilgrimage mandir, Mandir offerings, Mandir sanctum, Mandir carvings, Mandir history, Spiritual mandir, Mandir management, Indian worship, Mandir decorations, Lord Hanuman mandir, Mandir lighting, Mandir singing, Mandir ceremonies, Mandir experience, Mandir photography, Mandir prayers, Mandir idols, Indian cultural site, Mandir ambience, Lord Krishna mandir, Mandir service, Mandir rituals and traditions, Mandir garden, Devotion center, Mandir music, Mandir heritage, Mandir visit plans, Sacred site, Mandir exploration, Mandir community, Mandir art, Mandir legends, Holy site, Mandir atmosphere, Spiritual journey, Lord Rama mandir, Mandir culture.,Indian temple, mandir, gurudwara, bhakti, bhavna, pooja, aradhna"
    },
    {
      category: "Gurudawara",
      tags: "Sikh Gurudwara, Historical Gurudwaras , Local Gurudwaras, Community Centers , Gurudwara , Indian gurudwara , punjabi temple, sikh community centre"
    },
  ];

// Import the categories constant file (e.g., categories.js)
import pLimit from "p-limit";

// Set the maximum number of concurrent operations to 20
const CONCURRENCY_LIMIT = 20;

async function updateBusinessesWithTags() {
  console.log("Starting updateBusinessesWithTags process...");

  try {
    // Loop over each category object from the imported file
    for (const { category, tags: tagString } of categories) {
      // Split the tag string into an array of individual tag names
      const tags = tagString
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
      console.log(`Processing category: "${category}"`);
      console.log(`Parsed tags for category "${category}":`, tags);

      // Retrieve all businesses that match the current category and are in California,
      // including the existing tags on each business.
      console.log(`Fetching businesses for category "${category}" in California...`);
      const businesses = await prisma.business.findMany({
        where: {
          category,
          city: "Fresno" 
        },
        include: {
          Tag: true
        }
      });
      console.log(`Found ${businesses.length} businesses with category "${category}" in California`);

      // Create a concurrency limiter that ensures at most CONCURRENCY_LIMIT tasks run concurrently
      const limit = pLimit(CONCURRENCY_LIMIT);
      let processedCount = 0;

      // Map each business to an update task using the limiter
      const updatePromises = businesses.map(business =>
        limit(async () => {
          // Get the list of tag names already associated with this business
          const existingTags = business.Tag.map(tag => tag.name);
          // Compute missing tags that need to be added
          const missingTags = tags.filter(tag => !existingTags.includes(tag));

          // If there are missing tags, update the business
          if (missingTags.length !== 0) {
            await prisma.business.update({
              where: { id: business.id },
              data: {
                Tag: {
                  connectOrCreate: missingTags.map(tag => ({
                    where: { name: tag },
                    create: { name: tag }
                  }))
                }
              }
            });
          }
          
          processedCount++;
          // Log counter every 10 processed businesses or when complete
          if (processedCount % 10 === 0 || processedCount === businesses.length) {
            console.log(`Processed ${processedCount} of ${businesses.length} businesses for category "${category}"`);
          }
        })
      );

      // Wait for all update operations in this category to finish
      await Promise.allSettled(updatePromises);
      console.log(`Completed updating businesses for category "${category}" in California`);
    }

    console.log("All eligible businesses have been updated with their respective tags.");
  } catch (error) {
    console.error("Error updating businesses:", error);
  } finally {
    console.log("Disconnecting from Prisma...");
    await prisma.$disconnect();
    console.log("Disconnected from Prisma.");
  }
}

// Run the script
updateBusinessesWithTags();

