/* =========================================================
   STUDYOS — GRADE 10 CBSE
   APP.JS — PART 1/3
   ========================================================= */


/* =========================================================
   ACCESS SYSTEM
   ========================================================= */

const ACCESS_CODE = "STUDYOS10";

const gate = document.getElementById("gate");
const app = document.getElementById("app");
const codeInput = document.getElementById("code");
const enterBtn = document.getElementById("enter");
const errorMsg = document.getElementById("err");
const lockBtn = document.getElementById("lock");

function unlockStudyOS() {
  const enteredCode = codeInput.value.trim();

  if (enteredCode === ACCESS_CODE) {
    sessionStorage.setItem("studyos_unlocked", "true");

    gate.classList.add("hidden");
    app.classList.remove("hidden");

    codeInput.value = "";
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Incorrect access code.";
    codeInput.value = "";
    codeInput.focus();
  }
}

function lockStudyOS() {
  sessionStorage.removeItem("studyos_unlocked");

  app.classList.add("hidden");
  gate.classList.remove("hidden");

  codeInput.value = "";
  errorMsg.textContent = "";
  codeInput.focus();
}

function checkAccess() {
  const unlocked =
    sessionStorage.getItem("studyos_unlocked") === "true";

  if (unlocked) {
    gate.classList.add("hidden");
    app.classList.remove("hidden");
  } else {
    gate.classList.remove("hidden");
    app.classList.add("hidden");
  }
}

enterBtn.addEventListener("click", unlockStudyOS);

codeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    unlockStudyOS();
  }
});

lockBtn.addEventListener("click", lockStudyOS);

checkAccess();


/* =========================================================
   ELEMENTS
   ========================================================= */

const homeBtn = document.getElementById("home");
const themeBtn = document.getElementById("theme");

const subjectsSection = document.getElementById("subjects");
const librarySection = document.getElementById("library");
const resultsSection = document.getElementById("results");

const backBtn = document.getElementById("back");

const libEyebrow = document.getElementById("libEyebrow");
const libTitle = document.getElementById("libTitle");

const filters = document.getElementById("filters");
const grid = document.getElementById("grid");

const searchInput = document.getElementById("search");
const resultGrid = document.getElementById("resultGrid");
const resultCount = document.getElementById("resultCount");

const total = document.getElementById("total");

const modal = document.getElementById("modal");
const shade = document.getElementById("shade");
const closeBtn = document.getElementById("close");
const doneBtn = document.getElementById("done");

const modalGroup = document.getElementById("mgroup");
const modalTitle = document.getElementById("mtitle");
const pointsContainer = document.getElementById("points");


/* =========================================================
   CHAPTER DATABASE
   SCIENCE — PHYSICS
   ========================================================= */

const DATA = [

  {
    subject: "Science",
    group: "Physics",
    title: "Light – Reflection and Refraction",
    points: [
      "Reflection is the bouncing back of light from a surface.",
      "The angle of incidence is equal to the angle of reflection.",
      "For spherical mirrors, the principal axis passes through the pole and centre of curvature.",
      "Concave mirrors can form real or virtual images depending on the position of the object.",
      "A convex mirror always forms a virtual, erect and diminished image.",
      "Mirror formula: 1/f = 1/v + 1/u.",
      "Magnification for mirrors: m = −v/u.",
      "Refraction is the bending of light when it passes from one transparent medium to another.",
      "Refractive index indicates how much a medium slows down light.",
      "Convex lenses can form real or virtual images depending on object position.",
      "A concave lens generally forms a virtual, erect and diminished image.",
      "Lens formula: 1/f = 1/v − 1/u.",
      "Magnification for lenses: m = v/u.",
      "Power of lens: P = 1/f, where f is measured in metres.",
      "SI unit of lens power is dioptre (D)."
    ]
  },

  {
    subject: "Science",
    group: "Physics",
    title: "The Human Eye and the Colourful World",
    points: [
      "The human eye acts like an optical instrument that forms an image on the retina.",
      "The eye lens changes its focal length to focus objects at different distances.",
      "This ability is called accommodation.",
      "The near point of a normal human eye is about 25 cm.",
      "The far point of a normal human eye is infinity.",
      "Myopia is short-sightedness and is corrected using a concave lens.",
      "Hypermetropia is long-sightedness and is corrected using a convex lens.",
      "Presbyopia is associated with the reduced power of accommodation with age.",
      "Cataract can cause the eye lens to become cloudy and may affect vision.",
      "Dispersion is the splitting of white light into its constituent colours.",
      "A rainbow is produced through refraction, dispersion and internal reflection of sunlight by water droplets.",
      "Scattering of light causes the blue appearance of the sky.",
      "The Sun can appear reddish during sunrise and sunset because shorter wavelengths are scattered more strongly."
    ]
  },

  {
    subject: "Science",
    group: "Physics",
    title: "Electricity",
    points: [
      "Electric current is the rate of flow of electric charge.",
      "I = Q/t.",
      "Potential difference is work done per unit charge: V = W/Q.",
      "Ohm's law states that V is directly proportional to I at constant temperature.",
      "Ohm's law: V = IR.",
      "Resistance opposes the flow of electric current.",
      "Resistance depends on length, area of cross-section, material and temperature.",
      "R = ρl/A.",
      "The SI unit of resistance is ohm (Ω).",
      "In a series circuit, the same current flows through each resistor.",
      "For resistors in series: R = R₁ + R₂ + R₃.",
      "In a parallel circuit, the potential difference across each branch is the same.",
      "For parallel resistors: 1/R = 1/R₁ + 1/R₂ + 1/R₃.",
      "Electric power is the rate at which electrical energy is consumed.",
      "P = VI = I²R = V²/R.",
      "Electrical energy is commonly measured commercially in kilowatt-hour (kWh).",
      "Heating effect of current: H = I²Rt."
    ]
  },

  {
    subject: "Science",
    group: "Physics",
    title: "Magnetic Effects of Electric Current",
    points: [
      "A current-carrying conductor produces a magnetic field around it.",
      "The magnetic field around a straight conductor consists of concentric circles.",
      "The right-hand thumb rule gives the direction of the magnetic field around a straight conductor.",
      "A solenoid produces a magnetic field similar to that of a bar magnet.",
      "Increasing the current or number of turns can strengthen a solenoid's magnetic field.",
      "A current-carrying conductor placed in a magnetic field experiences a force.",
      "Fleming's left-hand rule gives the direction of force on a current-carrying conductor.",
      "Electromagnetic induction is the production of electric current due to a changing magnetic field.",
      "Fleming's right-hand rule helps determine the direction of induced current.",
      "An electric motor converts electrical energy into mechanical energy.",
      "An electric generator converts mechanical energy into electrical energy.",
      "Domestic electric circuits use live, neutral and earth wires.",
      "A fuse protects circuits from excessive current."
    ]
  },

  {
    subject: "Science",
    group: "Physics",
    title: "Sources of Energy",
    points: [
      "A good source of energy should provide a large amount of energy per unit mass.",
      "It should be convenient to store and transport.",
      "It should be economical and preferably cause less environmental pollution.",
      "Renewable sources can be naturally replenished.",
      "Solar, wind, hydroelectric, biomass and geothermal energy are renewable sources.",
      "Coal, petroleum and natural gas are major non-renewable sources.",
      "Solar cells convert solar energy directly into electrical energy.",
      "Wind energy is produced using the kinetic energy of moving air.",
      "Hydroelectric power uses the potential energy of stored water.",
      "Biogas is produced from the decomposition of organic matter.",
      "Nuclear energy can release a very large amount of energy.",
      "Nuclear power also creates radioactive waste and requires careful safety measures."
    ]
  },


  /* =======================================================
     SCIENCE — CHEMISTRY
     ======================================================= */

  {
    subject: "Science",
    group: "Chemistry",
    title: "Chemical Reactions and Equations",
    points: [
      "A chemical reaction involves the formation of one or more new substances.",
      "Signs of a chemical reaction may include change in colour, temperature, state or formation of gas or precipitate.",
      "Chemical equations represent chemical reactions using symbols and formulae.",
      "A chemical equation must be balanced because atoms are neither created nor destroyed.",
      "Combination reaction: two or more substances combine to form a single product.",
      "Decomposition reaction: one compound breaks into simpler substances.",
      "Displacement reaction: a more reactive element displaces a less reactive element.",
      "Double displacement reactions involve exchange of ions between compounds.",
      "A precipitate is an insoluble solid formed during some reactions.",
      "Oxidation can involve addition of oxygen or removal of hydrogen.",
      "Reduction can involve removal of oxygen or addition of hydrogen.",
      "Oxidation and reduction occur together in redox reactions.",
      "Corrosion is the gradual deterioration of metals due to environmental reactions.",
      "Rancidity is oxidation of fats and oils that causes unpleasant smell and taste.",
      "Antioxidants and proper packaging can help prevent rancidity."
    ]
  },

  {
    subject: "Science",
    group: "Chemistry",
    title: "Acids, Bases and Salts",
    points: [
      "Acids produce H⁺ ions in aqueous solution.",
      "Bases produce OH⁻ ions in aqueous solution.",
      "Acids generally have a sour taste, while bases are generally bitter and soapy.",
      "The pH scale indicates how acidic or basic a solution is.",
      "pH values below 7 indicate acidic solutions.",
      "pH 7 represents a neutral solution at ordinary conditions.",
      "pH values above 7 indicate basic solutions.",
      "Acid + base → salt + water is called a neutralisation reaction.",
      "Acids react with many metals to produce salt and hydrogen gas.",
      "Acids react with carbonates and hydrogencarbonates to produce carbon dioxide.",
      "Baking soda is sodium hydrogencarbonate: NaHCO₃.",
      "Washing soda is sodium carbonate decahydrate: Na₂CO₃·10H₂O.",
      "Bleaching powder is used for disinfecting drinking water and bleaching.",
      "Plaster of Paris is calcium sulphate hemihydrate.",
      "pH is important in digestion, tooth decay, soil treatment and many biological processes."
    ]
  },

  {
    subject: "Science",
    group: "Chemistry",
    title: "Metals and Non-metals",
    points: [
      "Metals are generally lustrous, malleable, ductile and good conductors.",
      "Non-metals generally show different physical properties from metals.",
      "Metals tend to lose electrons and form positive ions.",
      "Non-metals generally gain or share electrons.",
      "The reactivity series arranges metals according to their reactivity.",
      "A more reactive metal can displace a less reactive metal from its salt solution.",
      "Ionic compounds are formed through transfer of electrons.",
      "Ionic compounds generally have high melting and boiling points.",
      "Ionic compounds conduct electricity in molten or aqueous states because ions can move.",
      "Highly reactive metals are generally extracted using electrolysis.",
      "Less reactive metals can often be extracted by reduction of their oxides.",
      "Corrosion is the deterioration of a metal due to reactions with its environment.",
      "Alloys are mixtures of metals or a metal with another element.",
      "Alloys are often designed to improve strength, hardness or resistance to corrosion."
    ]
  },

  {
    subject: "Science",
    group: "Chemistry",
    title: "Carbon and its Compounds",
    points: [
      "Carbon has four valence electrons and forms four covalent bonds.",
      "Tetravalency is the ability of carbon to form four bonds.",
      "Catenation is the ability of carbon to form bonds with other carbon atoms.",
      "Saturated hydrocarbons contain only single carbon-carbon bonds.",
      "Unsaturated hydrocarbons contain double or triple bonds.",
      "A homologous series contains compounds with the same functional group and similar chemical properties.",
      "Successive members of a homologous series differ by –CH₂–.",
      "Functional groups determine many characteristic reactions of organic compounds.",
      "Important functional groups include alcohol, aldehyde, ketone and carboxylic acid.",
      "Ethanol is an alcohol and ethanoic acid is a carboxylic acid.",
      "Combustion of carbon compounds generally produces carbon dioxide, water and energy when complete.",
      "Addition reactions are characteristic of many unsaturated compounds.",
      "Substitution reactions are common in saturated hydrocarbons.",
      "Esterification occurs between an alcohol and a carboxylic acid to form an ester.",
      "Soap molecules have a hydrophilic end and a hydrophobic hydrocarbon tail.",
      "Soap cleans by forming micelles around oily dirt."
    ]
  },

  {
    subject: "Science",
    group: "Chemistry",
    title: "Periodic Classification of Elements",
    points: [
      "The modern periodic table is based on atomic number.",
      "Modern periodic law states that properties of elements are periodic functions of their atomic numbers.",
      "The modern periodic table contains 18 groups and 7 periods.",
      "Elements in the same group generally have similar valence-shell electronic configurations.",
      "Valence electrons strongly influence chemical properties.",
      "Atomic size generally decreases from left to right across a period.",
      "Atomic size generally increases down a group.",
      "Metallic character generally decreases from left to right across a period.",
      "Metallic character generally increases down a group.",
      "Elements in a period have the same number of electron shells.",
      "Noble gases have stable outer electronic configurations and are generally unreactive.",
      "The position of an element in the periodic table helps predict its properties.",
      "Mendeleev's periodic table was an important step toward the modern periodic classification."
    ]
  },


  /* =======================================================
     SCIENCE — BIOLOGY
     ======================================================= */

  {
    subject: "Science",
    group: "Biology",
    title: "Life Processes",
    points: [
      "Life processes are activities necessary for maintaining life.",
      "Major life processes include nutrition, respiration, transportation and excretion.",
      "Autotrophic organisms prepare their own food using inorganic substances.",
      "Photosynthesis uses carbon dioxide, water, sunlight and chlorophyll to produce glucose and oxygen.",
      "Stomata allow exchange of gases in leaves.",
      "Human digestion involves ingestion, digestion, absorption, assimilation and egestion.",
      "Aerobic respiration uses oxygen and generally releases more energy.",
      "Anaerobic respiration occurs without oxygen and releases less energy.",
      "In humans, the heart pumps blood through the circulatory system.",
      "Arteries generally carry blood away from the heart, while veins generally carry blood toward the heart.",
      "Xylem transports water and minerals in plants.",
      "Phloem transports food from leaves to other parts of the plant.",
      "Nephrons are the functional units of kidneys.",
      "Kidneys filter blood and help regulate water and ion balance."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "Control and Coordination",
    points: [
      "Control and coordination allow organisms to respond appropriately to changes.",
      "The nervous system coordinates rapid responses using electrical impulses.",
      "A neuron is the structural and functional unit of the nervous system.",
      "A reflex action is a rapid, automatic response to a stimulus.",
      "The spinal cord plays an important role in many reflex actions.",
      "The brain is divided into major regions including forebrain, midbrain and hindbrain.",
      "The forebrain is involved in thinking, memory and interpreting sensory information.",
      "Plant hormones regulate growth and responses.",
      "Auxin promotes cell growth and is involved in phototropic responses.",
      "Gibberellins promote growth in plants.",
      "Cytokinins promote cell division.",
      "Abscisic acid can inhibit growth and helps plants respond to stress.",
      "Adrenaline prepares the body for emergency situations.",
      "Insulin helps regulate blood glucose levels.",
      "Thyroxine plays an important role in regulating metabolism."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "How do Organisms Reproduce?",
    points: [
      "Reproduction ensures continuity of a species.",
      "Reproduction can be asexual or sexual.",
      "Asexual reproduction generally involves a single parent and produces genetically similar offspring.",
      "Fission, budding, fragmentation, regeneration and vegetative propagation are forms of asexual reproduction.",
      "Sexual reproduction generally involves fusion of male and female gametes.",
      "Sexual reproduction creates variation among offspring.",
      "In flowering plants, pollination transfers pollen grains from anther to stigma.",
      "Fertilisation results in the formation of a zygote.",
      "The zygote develops into an embryo.",
      "In humans, the male reproductive system produces sperm.",
      "The female reproductive system produces ova and provides conditions for development of the embryo.",
      "Fertilisation in humans normally occurs in the oviduct.",
      "The embryo develops in the uterus.",
      "Reproductive health includes hygiene, awareness and responsible healthcare."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "Heredity and Evolution",
    points: [
      "Heredity is the transmission of characteristics from parents to offspring.",
      "Genes are units of heredity located on chromosomes.",
      "Mendel studied inheritance using pea plants.",
      "Dominant traits can express themselves in the presence of a recessive allele.",
      "A genotype describes the genetic constitution of an organism.",
      "A phenotype describes observable characteristics.",
      "Variations can arise through genetic processes and environmental influences.",
      "Sex determination in humans involves XX chromosomes in females and XY chromosomes in males.",
      "Fossils provide evidence about organisms that lived in the past.",
      "Homologous organs have similar basic structures but may perform different functions.",
      "Analogous organs perform similar functions but have different structural origins.",
      "Evolution describes changes in populations over generations.",
      "Natural selection can favour variations that improve survival and reproduction."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "Our Environment",
    points: [
      "An ecosystem consists of biotic and abiotic components.",
      "Producers make food and form the base of many food chains.",
      "Consumers obtain energy by feeding on other organisms.",
      "Decomposers break down dead organic matter and recycle nutrients.",
      "A food chain represents the transfer of food and energy between organisms.",
      "Only a small fraction of energy is transferred from one trophic level to the next.",
      "Food webs consist of interconnected food chains.",
      "Biological magnification is the increase in concentration of certain non-biodegradable substances at higher trophic levels.",
      "Ozone in the upper atmosphere protects life by absorbing harmful ultraviolet radiation.",
      "Ozone depletion increases exposure to harmful ultraviolet radiation.",
      "Biodegradable substances can be broken down by microorganisms.",
      "Non-biodegradable substances persist for long periods and can accumulate in ecosystems."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "Sustainable Management of Natural Resources",
    points: [
      "Sustainable management means using resources while protecting their availability for the future.",
      "The three Rs are reduce, reuse and recycle.",
      "Forest conservation involves protecting biodiversity and using forest resources responsibly.",
      "Local communities can play an important role in sustainable forest management.",
      "Water harvesting can collect rainwater and help recharge groundwater.",
      "Large dams can provide irrigation and electricity but may also create social and environmental impacts.",
      "Coal and petroleum are exhaustible fossil fuels.",
      "Judicious use of fossil fuels helps conserve limited resources.",
      "Wildlife conservation protects biodiversity and ecological balance.",
      "Sustainable development requires balancing environmental, social and economic needs."
    ]
  }

];

/* =========================================================
   STUDYOS — APP.JS
   PART 2/3
   ENGLISH + SOCIAL SCIENCE DATABASE
   ========================================================= */


/* =========================================================
   ENGLISH — FIRST FLIGHT PROSE
   ========================================================= */

DATA.push(

{
  subject: "English",
  group: "First Flight – Prose",
  title: "A Letter to God",
  points: [
    "Lencho is a poor farmer whose entire crop depends on the weather.",
    "A hailstorm completely destroys Lencho's crop.",
    "Lencho has complete faith in God and believes that God will help him.",
    "He writes a letter to God asking for one hundred pesos to recover from the loss.",
    "The postmaster is deeply moved by Lencho's faith.",
    "The postmaster collects money from his employees and sends Lencho seventy pesos.",
    "Lencho is surprised to receive less money than he requested.",
    "Instead of doubting God, Lencho believes that the post office employees stole the remaining money.",
    "The story creates irony because the people Lencho suspects are actually the people who helped him.",
    "Major themes: faith, innocence, kindness, irony and human nature.",
    "Lencho's faith is sincere but also somewhat unquestioning.",
    "The postmaster represents human kindness and generosity."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "Nelson Mandela – Long Walk to Freedom",
  points: [
    "Nelson Mandela describes the historic inauguration of South Africa's first democratic government.",
    "The ceremony took place on 10 May 1994 in Pretoria.",
    "Mandela became the first Black President of South Africa.",
    "He remembers the long struggle against apartheid and racial discrimination.",
    "Mandela honours the people who sacrificed their lives for freedom.",
    "He explains that courage is not the absence of fear but victory over fear.",
    "Apartheid denied basic rights and freedom to the Black majority.",
    "Mandela says that both the oppressed and the oppressor lose their humanity under an unjust system.",
    "He believes that freedom is indivisible.",
    "True freedom means freedom for everyone, not just for one group.",
    "Major themes: freedom, courage, equality, sacrifice, dignity and patriotism.",
    "Mandela's idea of freedom changes from personal freedom to collective freedom."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "Stories About Flying – His First Flight",
  points: [
    "The young seagull is afraid to fly even though his brothers and sister have already learned.",
    "His parents repeatedly encourage him to overcome his fear.",
    "The young bird remains alone on the ledge while his family flies.",
    "Hunger finally becomes stronger than his fear.",
    "His mother uses a piece of fish to tempt him into flying.",
    "The seagull dives toward the food and discovers that his wings can support him.",
    "He gradually gains confidence and enjoys flying.",
    "The story shows that fear can be overcome through courage and experience.",
    "The family provides encouragement while the seagull must finally take the step himself.",
    "Major themes: fear, courage, confidence, independence and family support.",
    "The first flight symbolises a person's journey from dependence to independence."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "Stories About Flying – The Black Aeroplane",
  points: [
    "The narrator is a pilot flying his old Dakota aeroplane toward England.",
    "He sees dark storm clouds ahead but decides to fly through them.",
    "Inside the storm, visibility becomes extremely poor.",
    "His compass, radio and other instruments stop functioning.",
    "The narrator becomes confused and worried because he cannot determine his direction.",
    "A mysterious black aeroplane appears beside him.",
    "The unknown pilot signals the narrator to follow him.",
    "The narrator follows the black aeroplane and safely reaches an airport.",
    "The control tower tells him that no other aeroplane was flying in the storm.",
    "The ending leaves the identity and existence of the black aeroplane unexplained.",
    "Major themes: mystery, fear, hope, uncertainty and supernatural possibility.",
    "The unexplained ending creates ambiguity and encourages different interpretations."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "From the Diary of Anne Frank",
  points: [
    "Anne Frank receives a diary on her thirteenth birthday.",
    "She names her diary Kitty and treats it as a close friend.",
    "Anne feels that paper has more patience than people.",
    "She writes about her family, school, classmates and teachers.",
    "Anne feels lonely despite having people around her.",
    "She believes that she has many things to share but lacks a true confidante.",
    "Mr Keesing is Anne's mathematics teacher.",
    "He repeatedly punishes Anne for talking too much in class.",
    "Anne writes humorous essays explaining why she talks so much.",
    "Her creative responses eventually make Mr Keesing change his attitude.",
    "The chapter shows Anne's intelligence, honesty, humour and self-awareness.",
    "Major themes: adolescence, loneliness, friendship, self-expression and observation."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "Glimpses of India – A Baker from Goa",
  points: [
    "The chapter describes the traditional importance of bread and bakers in Goa.",
    "The Portuguese influence can still be seen in Goan bread-making traditions.",
    "The village baker traditionally visited houses with bread and baked goods.",
    "Bread was an important part of everyday life as well as special occasions.",
    "Children were attracted to the sound and arrival of the baker.",
    "The baker traditionally carried bread in a bamboo basket.",
    "The baker's dress and tools reflect an older Goan tradition.",
    "Bread was associated with marriages, festivals and other celebrations.",
    "The chapter presents food as an important part of cultural identity.",
    "Major themes: tradition, culture, memories, food and social life."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "Glimpses of India – Coorg",
  points: [
    "Coorg, also known as Kodagu, is located in Karnataka.",
    "The region is famous for coffee plantations, forests and beautiful landscapes.",
    "Coorg is described as a land of mist, greenery and natural beauty.",
    "The people of Coorg are associated with bravery and a strong martial tradition.",
    "The chapter mentions different theories about the ancestry of the Kodavus.",
    "Coorg offers adventure activities such as river rafting and trekking.",
    "The River Kaveri originates in the hills of Coorg.",
    "The region is rich in wildlife and plant life.",
    "Coffee plantations are an important feature of the local economy.",
    "Major themes: geography, culture, adventure, nature and tourism."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "Glimpses of India – Tea from Assam",
  points: [
    "Rajvir and Pranjol travel by train through Assam.",
    "Pranjol's father manages a tea plantation.",
    "Rajvir is fascinated by the vast tea gardens of Assam.",
    "Assam is one of the world's major tea-producing regions.",
    "The chapter describes legends about the discovery of tea.",
    "One legend connects tea with Chinese history and Buddhist traditions.",
    "Another legend describes tea plants growing in Assam.",
    "Tea cultivation involves planting, growing, plucking and processing tea leaves.",
    "The landscape of Assam is closely associated with tea plantations.",
    "Major themes: tea culture, geography, history, legends and nature."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "Mijbil the Otter",
  points: [
    "The narrator decides to keep an otter as a pet while staying in Iraq.",
    "He obtains an otter named Mijbil.",
    "Mijbil is curious, playful and intelligent.",
    "Mijbil develops a strong interest in water.",
    "The otter invents games and enjoys playing with different objects.",
    "The narrator becomes deeply attached to Mijbil.",
    "Travelling with Mijbil creates difficulties because airline rules do not easily accommodate animals.",
    "Mijbil eventually becomes comfortable travelling with the narrator.",
    "People often react with curiosity when they see Mijbil.",
    "Major themes: companionship, animal behaviour, affection and human-animal relationships.",
    "The narrator carefully observes Mijbil's habits and personality."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "Madam Rides the Bus",
  points: [
    "Valli is an eight-year-old girl who is fascinated by the bus travelling through her village.",
    "She carefully observes passengers and learns about the bus journey.",
    "Valli secretly plans her first bus ride.",
    "She saves money by avoiding small pleasures and unnecessary purchases.",
    "Valli boards the bus alone and confidently interacts with the conductor.",
    "The conductor affectionately calls her Madam.",
    "Valli enjoys observing the outside world during the journey.",
    "She refuses the conductor's offer of a free drink because she has planned her money carefully.",
    "On the return journey, Valli sees a dead cow that had earlier appeared lively.",
    "The incident gives her a more serious understanding of death and life.",
    "Major themes: curiosity, independence, observation, maturity and experience.",
    "Valli's journey symbolises her growing independence."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "The Sermon at Benares",
  points: [
    "Kisa Gotami loses her only son and becomes overwhelmed by grief.",
    "She refuses to accept that her son has died.",
    "She goes from house to house asking for medicine to bring him back.",
    "A wise man directs her to Gautama Buddha.",
    "Buddha asks her to collect mustard seeds from a household that has never experienced death.",
    "Kisa Gotami cannot find such a household.",
    "She gradually understands that death is universal.",
    "Buddha teaches that attachment and grief are natural but must be understood and accepted.",
    "Human beings cannot escape mortality.",
    "Acceptance of reality can help a person overcome excessive suffering.",
    "Major themes: death, grief, acceptance, wisdom, detachment and universal suffering.",
    "Kisa Gotami's transformation is the central development of the story."
  ]
},

{
  subject: "English",
  group: "First Flight – Prose",
  title: "The Proposal",
  points: [
    "The play is a humorous farce written by Anton Chekhov.",
    "Lomov visits Chubukov's house intending to propose marriage to Natalya.",
    "Instead of calmly discussing marriage, Lomov and Natalya begin arguing.",
    "Their first major argument concerns ownership of Oxen Meadows.",
    "They then quarrel over the superiority of their dogs.",
    "Chubukov joins the arguments instead of helping settle them.",
    "Lomov becomes physically distressed because of his nervous condition.",
    "Natalya eventually learns that Lomov had come to propose marriage.",
    "She immediately wants him brought back.",
    "Even after the proposal is accepted, the arguments continue.",
    "Major themes: marriage, greed, pride, property, social expectations and absurdity.",
    "The exaggerated quarrels create comedy and irony."
  ]
},


/* =========================================================
   ENGLISH — FIRST FLIGHT POEMS
   ========================================================= */

{
  subject: "English",
  group: "First Flight – Poems",
  title: "Dust of Snow",
  points: [
    "The poet describes a small moment involving a hemlock tree and a crow.",
    "Snow falling from the tree unexpectedly changes the poet's mood.",
    "The poet's negative mood becomes more positive.",
    "The poem shows that even a simple natural event can transform one's thoughts.",
    "The crow and hemlock tree traditionally carry negative associations, yet they create a positive effect.",
    "Major themes: nature, hope, transformation and unexpected happiness.",
    "The poem demonstrates the healing and refreshing influence of nature.",
    "Important poetic device: symbolism."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "Fire and Ice",
  points: [
    "The poem considers two possible ways in which the world could end.",
    "Fire represents desire, greed and uncontrolled passion.",
    "Ice represents hatred, coldness and emotional destruction.",
    "The poet believes that either extreme emotion could cause destruction.",
    "The poem is short but presents a serious reflection on human nature.",
    "Major themes: desire, hatred, destruction and human emotions.",
    "Important poetic devices include symbolism, repetition and contrast.",
    "Fire and ice create a strong contrast between two destructive forces."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "A Tiger in the Zoo",
  points: [
    "The poem contrasts a tiger's natural life with its life in captivity.",
    "The tiger moves inside a cage instead of roaming freely.",
    "Its physical strength becomes meaningless because it is imprisoned.",
    "The tiger would naturally hunt and move through the jungle.",
    "The poem criticises the confinement of wild animals.",
    "Major themes: freedom, captivity, oppression and cruelty.",
    "The tiger's anger remains controlled because of its imprisonment.",
    "Important device: contrast between the cage and the natural environment."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "How to Tell Wild Animals",
  points: [
    "The poem humorously describes ways to identify dangerous wild animals.",
    "The poet uses exaggerated situations to create comedy.",
    "Different animals are identified through their physical characteristics and behaviour.",
    "The poem uses a playful and conversational tone.",
    "Rhyme and rhythm make the poem entertaining.",
    "The poem deliberately presents dangerous situations in a humorous way.",
    "Major themes: humour, animals, danger and observation.",
    "Important devices include rhyme, repetition, irony and exaggeration."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "The Ball Poem",
  points: [
    "A young boy loses a ball that has emotional value to him.",
    "The loss causes the boy to experience genuine sadness.",
    "The poet does not simply replace the ball because the experience itself is important.",
    "The boy begins to understand that losses are a part of life.",
    "The experience teaches him responsibility and emotional maturity.",
    "The ball symbolises possessions and the losses people experience.",
    "Major themes: loss, maturity, responsibility and growing up.",
    "The poem suggests that people must learn to cope with loss."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "Amanda!",
  points: [
    "Amanda is repeatedly instructed by an adult to behave properly.",
    "The constant instructions make her mentally escape into imagination.",
    "Amanda imagines herself as a mermaid, an orphan and Rapunzel.",
    "Her fantasies represent her desire for freedom and independence.",
    "The poem highlights the pressure children can experience from constant criticism.",
    "Major themes: childhood, freedom, imagination, control and parental expectations.",
    "The repeated commands create a contrast with Amanda's imaginative world.",
    "Important device: repetition."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "The Trees",
  points: [
    "The poem presents trees as if they are trying to escape from an indoor space.",
    "The trees symbolise nature seeking freedom.",
    "The movement of the trees is presented through vivid imagery.",
    "The poem creates a contrast between artificial confinement and natural freedom.",
    "Nature appears powerful and determined to reclaim its rightful space.",
    "Major themes: freedom, nature, confinement and human control.",
    "The poem uses personification extensively.",
    "The movement toward the forest symbolises liberation."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "Fog",
  points: [
    "The poet compares fog to a cat.",
    "The fog arrives silently and mysteriously.",
    "It seems to sit quietly over the city and harbour.",
    "The fog eventually moves away without making a sound.",
    "The cat comparison captures the quiet and unpredictable movement of fog.",
    "Major themes: nature, mystery, silence and transience.",
    "The main poetic device is metaphor.",
    "The poem is extremely concise but creates a vivid visual image."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "The Tale of Custard the Dragon",
  points: [
    "Belinda lives with several pets, including a dragon named Custard.",
    "The other animals constantly boast about their bravery.",
    "Custard appears timid and repeatedly asks for a safe cage.",
    "When a pirate enters the house, the supposedly brave animals become frightened.",
    "Custard confronts the pirate and proves genuinely courageous.",
    "The poem contrasts real courage with empty boasting.",
    "Major themes: courage, humility, appearance versus reality and friendship.",
    "The poem uses humour, rhyme, repetition and exaggeration.",
    "Custard's actions prove that courage is demonstrated through behaviour rather than words."
  ]
},

{
  subject: "English",
  group: "First Flight – Poems",
  title: "For Anne Gregory",
  points: [
    "The poem discusses whether human love is based on physical beauty.",
    "Anne Gregory's physical appearance attracts attention.",
    "The speaker questions whether anyone could love her for her inner self.",
    "The poem contrasts outward appearance with inner personality.",
    "The final idea suggests that divine love is different from superficial human attraction.",
    "Major themes: beauty, love, appearance, inner worth and spirituality.",
    "The poem questions the reliability of human judgement based on appearance.",
    "Important devices include dialogue, repetition and symbolism."
  ]
},


/* =========================================================
   ENGLISH — FOOTPRINTS WITHOUT FEET
   ========================================================= */

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "A Triumph of Surgery",
  points: [
    "Tricki is a small dog owned by Mrs Pumphrey.",
    "Mrs Pumphrey loves Tricki excessively and constantly feeds him.",
    "Overfeeding and lack of exercise make Tricki unhealthy.",
    "Dr Herriot advises Mrs Pumphrey to control his diet and increase his exercise.",
    "Tricki is taken to the surgery for proper care.",
    "At the surgery, Tricki receives controlled food and regular activity.",
    "He quickly becomes healthier without requiring complicated medical treatment.",
    "Mrs Pumphrey believes the veterinary treatment was a great medical triumph.",
    "The actual solution was discipline, controlled diet and exercise.",
    "Major themes: responsible pet care, discipline, affection and overindulgence.",
    "The title is humorous because the 'surgery' succeeds mainly through simple lifestyle changes."
  ]
},

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "The Thief's Story",
  points: [
    "Hari Singh is a young thief who frequently changes his name.",
    "He meets Anil and decides to work for him.",
    "Anil is simple, trusting and willing to teach Hari how to read and write.",
    "Hari steals money from Anil after gaining his trust.",
    "While leaving, Hari begins thinking about the education and trust he would lose.",
    "He returns the stolen money.",
    "Anil understands what has happened but chooses not to punish Hari.",
    "Anil's kindness gives Hari an opportunity to reform.",
    "Education becomes a major force for positive change.",
    "Major themes: trust, education, forgiveness, reform and human goodness.",
    "Hari's return marks an important turning point in his character."
  ]
},

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "The Midnight Visitor",
  points: [
    "Ausable is a secret agent who does not fit the stereotypical image of a spy.",
    "Fowler expects a dramatic and physically impressive secret agent.",
    "Ausable remains calm and intelligent despite danger.",
    "Max enters Ausable's room with a weapon and demands an important report.",
    "Ausable invents a story about a balcony outside the window.",
    "He also claims that the police are about to arrive.",
    "Max becomes convinced by Ausable's believable deception.",
    "Max is ultimately outsmarted by Ausable.",
    "The story shows that intelligence can be more useful than physical strength.",
    "Major themes: wit, presence of mind, deception and appearance versus reality.",
    "Ausable's calm behaviour demonstrates effective problem-solving."
  ]
},

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "A Question of Trust",
  points: [
    "Horace Danby is a respectable-looking man who secretly commits thefts.",
    "He plans to steal valuable jewels from a house.",
    "He enters the house believing it to be empty.",
    "A woman appears and claims to be the owner.",
    "She tricks Horace into opening the safe for her.",
    "Horace removes the fingerprints issue by wearing gloves but is still deceived.",
    "The woman is actually another thief.",
    "Horace later becomes a suspect because the police find evidence connecting him to the crime.",
    "The story uses irony because a thief who thinks he is clever is himself deceived.",
    "Major themes: deception, crime, trust, appearance and irony.",
    "Horace's assumptions about the woman ultimately cause his downfall."
  ]
},

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "Footprints Without Feet",
  points: [
    "Griffin is a scientist who discovers how to make the human body invisible.",
    "His scientific discovery demonstrates intelligence but not responsible behaviour.",
    "Griffin misuses invisibility for personal benefit.",
    "He steals clothes and money and causes fear wherever he goes.",
    "He enters places secretly because people cannot see him.",
    "Griffin's behaviour demonstrates the dangers of scientific knowledge without ethics.",
    "The story raises questions about responsibility and misuse of science.",
    "Griffin becomes increasingly isolated because of his actions.",
    "Major themes: science, ethics, invisibility, misuse of knowledge and lawlessness.",
    "The title refers to the mysterious footprints left by an invisible person."
  ]
},

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "The Making of a Scientist",
  points: [
    "Richard Ebright develops a strong interest in science from childhood.",
    "His mother plays a major role in encouraging his curiosity and discipline.",
    "He collects butterflies and begins studying them carefully.",
    "His scientific interests gradually become more advanced.",
    "He participates in science fairs and conducts experiments.",
    "He learns from both successful and unsuccessful experiments.",
    "His research eventually contributes to important scientific understanding.",
    "Curiosity, perseverance and hard work are central to his development.",
    "His mother encourages him to read, observe and pursue knowledge.",
    "Major themes: scientific curiosity, hard work, discipline, education and parental support.",
    "The chapter shows that scientific success develops through continuous effort."
  ]
},

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "The Necklace",
  points: [
    "Matilda Loisel is dissatisfied with her modest lifestyle.",
    "She dreams of wealth, luxury and social status.",
    "She borrows a necklace from her friend Mme Forestier for a party.",
    "Matilda enjoys the attention she receives at the event.",
    "She later discovers that the necklace is missing.",
    "Matilda and her husband replace the necklace by borrowing a large amount of money.",
    "They spend many years working to repay their debt.",
    "Matilda's life becomes difficult because of the replacement cost.",
    "Years later she learns that the original necklace was actually inexpensive.",
    "The ending creates strong situational irony.",
    "Major themes: vanity, appearance, social status, ambition, hardship and irony.",
    "The story warns against valuing appearances and material status too highly."
  ]
},

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "Bholi",
  points: [
    "Bholi's real name is Sulekha.",
    "She suffers from smallpox scars and has difficulty speaking clearly.",
    "Her family considers her simple and lacks confidence in her abilities.",
    "A new teacher treats Bholi with patience and kindness.",
    "Education gradually transforms Bholi's confidence.",
    "She learns to speak clearly and develops self-respect.",
    "Her family arranges her marriage with Bishamber.",
    "Bishamber demands dowry after seeing Bholi's appearance.",
    "Bholi refuses to marry him because she values her dignity.",
    "The story presents education as a force of empowerment.",
    "Major themes: education, self-respect, confidence, gender equality and empowerment."
  ]
},

{
  subject: "English",
  group: "Footprints Without Feet",
  title: "The Book That Saved the Earth",
  points: [
    "The play is set in the future and deals with a possible Martian invasion.",
    "The Martians misunderstand information from a book found on Earth.",
    "The book is a collection of nursery rhymes.",
    "The Martians interpret the poems as dangerous military information.",
    "Their misunderstanding causes them to abandon their invasion plan.",
    "The play uses humour and satire to show the consequences of incorrect assumptions.",
    "Books and knowledge become unexpected tools of protection.",
    "Major themes: misunderstanding, books, intelligence, humour and satire.",
    "The play also makes fun of exaggerated ideas about military intelligence.",
    "The ending shows how a simple misunderstanding can change major events."
  ]
},


/* =========================================================
   ENGLISH — WRITING & LANGUAGE
   ========================================================= */

{
  subject: "English",
  group: "Writing & Language",
  title: "Formal Letter",
  points: [
    "A formal letter uses a clear and professional tone.",
    "Basic format: sender's address, date, receiver's address, subject, salutation, body, complimentary close and name.",
    "The subject should clearly state the purpose of the letter.",
    "The opening paragraph should introduce the issue or purpose.",
    "The main body should provide relevant details, reasons and supporting information.",
    "The final paragraph should clearly state the expected action or solution.",
    "Avoid slang, unnecessary emotional language and informal expressions.",
    "Common purposes include complaints, enquiries, requests and civic issues.",
    "Keep the content concise, organised and logically connected.",
    "Correct format and appropriate tone are important for scoring well."
  ]
},

{
  subject: "English",
  group: "Writing & Language",
  title: "Analytical Paragraph",
  points: [
    "An analytical paragraph presents an objective analysis of a given visual source.",
    "The source may be a chart, graph, table or other data representation.",
    "Begin by identifying what the given data represents.",
    "Mention the most important overall trend or observation.",
    "Compare significant figures instead of describing every value separately.",
    "Use suitable comparison words such as higher, lower, maximum, minimum and approximately.",
    "Group similar trends together to make the paragraph organised.",
    "Do not add unsupported personal opinions.",
    "Use evidence from the given data to support observations.",
    "End with an overall conclusion or inference.",
    "Maintain formal language and logical sequencing."
  ]
},

{
  subject: "English",
  group: "Writing & Language",
  title: "Grammar",
  points: [
    "Revise the prescribed grammar areas thoroughly before the examination.",
    "Tenses show the time of an action or state.",
    "Subject-verb agreement requires the verb to match the subject in number and person.",
    "Modals express ideas such as possibility, ability, permission, obligation and advice.",
    "Reported speech changes direct statements into indirect forms.",
    "Pronouns may need to change when converting direct speech into reported speech.",
    "Time and place expressions may change in reported speech depending on context.",
    "Read the complete sentence before selecting a grammatical form.",
    "Use context rather than relying only on memorised rules.",
    "Always check tense, agreement, pronouns, reporting verbs and punctuation."
  ]
},

{
  subject: "English",
  group: "Writing & Language",
  title: "Reading Comprehension",
  points: [
    "Read the passage carefully before answering detailed questions.",
    "Identify the central idea and purpose of the passage.",
    "Use the questions to locate relevant information efficiently.",
    "Answers should be precise and directly related to the question.",
    "For vocabulary questions, understand the word from its context.",
    "For inference questions, combine clues from different parts of the passage.",
    "Do not add information that cannot be supported by the passage.",
    "For title questions, choose a title that represents the entire passage.",
    "Distinguish between facts stated directly and ideas that must be inferred.",
    "Check every answer against the passage before submitting."
  ]
},


/* =========================================================
   SOCIAL SCIENCE — HISTORY
   ========================================================= */

{
  subject: "SST",
  group: "History",
  title: "The Rise of Nationalism in Europe",
  points: [
    "The French Revolution introduced ideas of liberty, equality and fraternity.",
    "The revolution helped create the concept of a nation based on common citizenship.",
    "Napoleon introduced administrative and legal reforms in territories under his control.",
    "The Napoleonic Code established equality before the law and removed many privileges based on birth.",
    "Conservatives attempted to restore traditional monarchies after Napoleon's defeat.",
    "The Treaty of Vienna of 1815 attempted to establish a conservative order in Europe.",
    "Liberalism promoted individual freedom and equality before law for sections of society.",
    "The unification of Germany was led by Prussia under Otto von Bismarck.",
    "Germany was unified in 1871 after a series of wars.",
    "Italy was unified through the efforts of figures such as Giuseppe Mazzini, Cavour and Garibaldi.",
    "The Balkans became a centre of nationalist tensions because of competing ethnic identities and declining Ottoman control.",
    "Nationalism and imperial rivalry contributed to political tensions in Europe."
  ]
},

{
  subject: "SST",
  group: "History",
  title: "Nationalism in India",
  points: [
    "The First World War created economic and political difficulties in India.",
    "Mahatma Gandhi returned to India in 1915 and developed satyagraha as a method of mass struggle.",
    "The Rowlatt Act allowed the government to repress political activities.",
    "The Jallianwala Bagh massacre intensified opposition to British rule.",
    "The Non-Cooperation Movement was launched in 1920.",
    "The movement encouraged people to boycott British institutions and goods.",
    "The movement was withdrawn after the Chauri Chaura incident.",
    "The Civil Disobedience Movement began with the Salt March in 1930.",
    "Different social groups participated in nationalist movements for different reasons.",
    "Peasants, business groups, workers, tribal communities and women participated in varying ways.",
    "Nationalist symbols, folklore, songs and reinterpretations of history helped create a sense of collective identity.",
    "Major themes: mass mobilisation, nationalism, satyagraha, unity and different interpretations of freedom."
  ]
},

{
  subject: "SST",
  group: "History",
  title: "The Making of a Global World",
  points: [
    "Globalisation has historical roots extending far before the modern period.",
    "Trade routes connected distant regions through goods, people and ideas.",
    "The nineteenth century saw increased movement of goods, capital and labour.",
    "Technological developments such as railways and steamships reduced travel time.",
    "Indentured labour was used extensively in colonial economies.",
    "European colonialism transformed economies and societies across the world.",
    "The First World War disrupted the global economy.",
    "The Great Depression began in 1929 and affected production, trade, employment and agriculture.",
    "Indian farmers were heavily affected by falling agricultural prices during the Depression.",
    "Post-war international institutions contributed to rebuilding and restructuring the world economy.",
    "Globalisation has involved both opportunities and unequal consequences.",
    "Major themes: trade, migration, technology, colonialism, economic crises and interconnectedness."
  ]
},

{
  subject: "SST",
  group: "History",
  title: "The Age of Industrialisation",
  points: [
    "Industrialisation refers to the growth of machine-based production and factories.",
    "Proto-industrialisation existed before the rise of modern factories.",
    "Merchants supplied raw materials to rural households and collected finished goods.",
    "The Industrial Revolution began in Britain.",
    "The textile industry became one of Britain's most important industrial sectors.",
    "Factories increased production but did not immediately eliminate traditional forms of production.",
    "Workers often faced long hours, low wages and difficult working conditions.",
    "Indian textile production had a long tradition before British industrialisation.",
    "British machine-made textiles created intense competition for Indian producers.",
    "Indian weavers experienced declining demand and changing market conditions.",
    "The First World War temporarily increased demand for Indian industrial goods.",
    "Major themes: factories, workers, industrialisation, colonialism and changing production systems."
  ]
},

{
  subject: "SST",
  group: "History",
  title: "Print Culture and the Modern World",
  points: [
    "The earliest print technologies developed in East Asia.",
    "China, Japan and Korea had established printing traditions before Europe.",
    "Johann Gutenberg developed the printing press in Europe in the fifteenth century.",
    "The printing press greatly increased the speed and scale of book production.",
    "Print helped create wider reading publics.",
    "Religious reformers used printed material to spread their ideas.",
    "Print encouraged debate, discussion and the circulation of political ideas.",
    "Governments sometimes attempted to control or censor printed material.",
    "Print culture developed significantly in colonial India.",
    "Newspapers, journals and books became important tools of social and political discussion.",
    "Print contributed to debates about caste, religion, reform and nationalism.",
    "Major themes: technology, literacy, reform, censorship, public debate and nationalism."
  ]
},


/* =========================================================
   SOCIAL SCIENCE — GEOGRAPHY
   ========================================================= */

{
  subject: "SST",
  group: "Geography",
  title: "Resources and Development",
  points: [
    "A resource is anything available in the environment that can satisfy human needs when it is technologically accessible and economically feasible.",
    "Resources can be classified by origin, exhaustibility, ownership and status of development.",
    "Resource planning is necessary for sustainable and balanced development.",
    "The major steps of resource planning include identification, planning structure and matching resource development with national plans.",
    "Land is an important natural resource supporting agriculture, forests and settlements.",
    "Land degradation may result from deforestation, overgrazing, mining and improper agricultural practices.",
    "Soil is a renewable natural resource but can degrade if poorly managed.",
    "Alluvial soil is widespread in the northern plains and is highly suitable for agriculture.",
    "Black soil is particularly suitable for cotton cultivation.",
    "Red and yellow soils develop on crystalline igneous rocks.",
    "Laterite soil develops under conditions of high temperature and heavy rainfall.",
    "Soil erosion can be reduced through contour ploughing, terrace farming, strip cropping and afforestation.",
    "Major themes: resource planning, land resources, soil types, degradation and conservation."
  ]
},

{
  subject: "SST",
  group: "Geography",
  title: "Forest and Wildlife Resources",
  points: [
    "Biodiversity refers to the variety of living organisms in a region.",
    "Forests and wildlife are important for ecological balance and human livelihoods.",
    "Species may be classified as normal, endangered, vulnerable, rare, endemic or extinct.",
    "Habitat destruction is a major cause of biodiversity loss.",
    "Deforestation, hunting, pollution and overexploitation threaten wildlife.",
    "Protected areas such as national parks, wildlife sanctuaries and biosphere reserves help conserve biodiversity.",
    "Community participation is important for effective conservation.",
    "Sacred groves are traditional community-protected forest areas.",
    "The Chipko Movement demonstrated community resistance to destructive forest use.",
    "Conservation should consider the needs and knowledge of local communities.",
    "Major themes: biodiversity, conservation, protected areas, community participation and sustainable use."
  ]
},

{
  subject: "SST",
  group: "Geography",
  title: "Water Resources",
  points: [
    "Water is essential for domestic use, agriculture, industry and ecosystem functioning.",
    "Freshwater availability is limited despite the abundance of water on Earth.",
    "Population growth, urbanisation and industrialisation increase pressure on water resources.",
    "Multipurpose river valley projects provide benefits such as irrigation, electricity and flood control.",
    "Large dams can also create environmental and social problems.",
    "Water scarcity can result from population growth, intensive irrigation, industrialisation and unequal distribution.",
    "Rainwater harvesting helps conserve water and recharge groundwater.",
    "Traditional water harvesting systems differ across regions of India.",
    "Tamil Nadu has promoted rooftop rainwater harvesting extensively.",
    "Sustainable water management requires efficient use and conservation.",
    "Major themes: scarcity, dams, irrigation, rainwater harvesting and conservation."
  ]
},

{
  subject: "SST",
  group: "Geography",
  title: "Agriculture",
  points: [
    "Agriculture is an important economic activity and provides employment to a large population.",
    "Indian agriculture includes subsistence and commercial farming systems.",
    "Primitive subsistence farming may involve shifting cultivation.",
    "Intensive subsistence farming is common in densely populated regions.",
    "Commercial farming focuses more strongly on market production.",
    "Rice requires high temperature, humidity and substantial water.",
    "Wheat is an important rabi crop requiring a cooler growing season.",
    "Millets are nutritious and can grow in relatively less favourable conditions.",
    "Cash crops include crops such as cotton, jute, sugarcane, tea and coffee.",
    "Technological changes such as irrigation, HYV seeds and fertilisers contributed to agricultural growth.",
    "Indian agriculture faces challenges including small landholdings, water stress, climate variability and market issues.",
    "Major themes: farming systems, cropping patterns, major crops, technological change and challenges."
  ]
},

{
  subject: "SST",
  group: "Geography",
  title: "Minerals and Energy Resources",
  points: [
    "Minerals are naturally occurring substances with a definite chemical composition and physical properties.",
    "Minerals can occur in veins, lodes, beds, layers and alluvial deposits.",
    "Ferrous minerals contain iron and are important for the iron and steel industry.",
    "Non-ferrous minerals include copper, bauxite and lead.",
    "Mica is important for electrical and electronic industries because of its insulating properties.",
    "Coal is a major fossil fuel and important source of energy.",
    "Petroleum is used as fuel and as a raw material for many industries.",
    "Natural gas is a cleaner fossil fuel compared with coal and petroleum.",
    "Conventional energy sources include coal, petroleum, natural gas and electricity from major projects.",
    "Non-conventional sources include solar, wind, tidal, biogas and geothermal energy.",
    "Mineral resources are finite and should be used carefully.",
    "Major themes: mineral types, distribution, energy sources, conservation and sustainable use."
  ]
},

{
  subject: "SST",
  group: "Geography",
  title: "Manufacturing Industries",
  points: [
    "Manufacturing involves converting raw materials into products of greater utility.",
    "Manufacturing is important for employment, economic growth and modernisation.",
    "Industrial location depends on factors such as raw materials, labour, power, capital, transport and markets.",
    "The textile industry is one of India's important manufacturing sectors.",
    "The iron and steel industry is a basic industry because many other industries depend on it.",
    "The jute industry is concentrated mainly around the Hooghly region.",
    "Sugar industries are often located close to sugarcane-producing areas.",
    "Chemical industries produce a wide variety of products used by other industries and consumers.",
    "Manufacturing can cause air, water, thermal and noise pollution.",
    "Pollution can be controlled through cleaner technologies, waste treatment and efficient resource use.",
    "Major themes: industrial location, major industries, employment, pollution and sustainable manufacturing."
  ]
},

{
  subject: "SST",
  group: "Geography",
  title: "Lifelines of National Economy",
  points: [
    "Transport and communication connect producers, consumers and markets.",
    "Roadways are useful for short distances and provide door-to-door services.",
    "Railways are important for transporting passengers and bulk goods over long distances.",
    "Pipelines transport liquids and gases efficiently.",
    "Waterways are economical for transporting heavy and bulky goods.",
    "Airways are the fastest mode of transport and are useful for long-distance travel.",
    "Ports connect India's economy with international trade.",
    "Communication includes personal communication and mass communication.",
    "Tourism contributes to employment, foreign exchange and cultural exchange.",
    "Transport networks are essential for the movement of goods, people and information.",
    "Major themes: roads, railways, pipelines, waterways, airways, communication, ports and tourism."
  ]
},

);

/* =========================================================
   STUDYOS — APP.JS
   PART 3/3
   REMAINING SST + APP FUNCTIONS
   ========================================================= */


/* =========================================================
   SOCIAL SCIENCE — CIVICS
   ========================================================= */

DATA.push(

{
  subject: "SST",
  group: "Political Science",
  title: "Power Sharing",
  points: [
    "Power sharing is the distribution of power among different organs, levels and groups in society.",
    "Belgium adopted power-sharing arrangements to accommodate its linguistic communities.",
    "The Belgian model included equal representation of major linguistic communities in the central government.",
    "Community government allowed linguistic communities to manage cultural, educational and language-related matters.",
    "Sri Lanka followed majoritarian policies that favoured the Sinhala-speaking majority.",
    "The Sinhala Only Act of 1956 made Sinhala the official language.",
    "Majoritarian policies contributed to conflict between Sinhala and Tamil communities.",
    "Power sharing reduces the possibility of social conflict and political instability.",
    "Prudential reasons support power sharing because it reduces conflict and ensures political stability.",
    "Moral reasons support power sharing because people have a right to participate in decisions affecting them.",
    "Power sharing can take place among organs of government, levels of government, social groups and political parties.",
    "Major themes: accommodation, democracy, majority rule, minority rights and conflict prevention."
  ]
},

{
  subject: "SST",
  group: "Political Science",
  title: "Federalism",
  points: [
    "Federalism is a system in which power is divided between a central authority and constituent units.",
    "There are usually two or more levels of government in a federal system.",
    "Each level has constitutionally guaranteed powers and responsibilities.",
    "The Constitution clearly specifies the division of legislative powers.",
    "Courts act as independent authorities for resolving disputes between different levels of government.",
    "Federalism aims to accommodate regional diversity while maintaining national unity.",
    "India has Union, State and Local levels of government.",
    "The Constitution divides subjects into Union, State and Concurrent Lists.",
    "India's language policy helped avoid imposing a single language throughout the country.",
    "Decentralisation transferred powers to elected local governments.",
    "The 1992 constitutional amendments strengthened local self-government.",
    "Major themes: division of power, decentralisation, diversity, local government and constitutional safeguards."
  ]
},

{
  subject: "SST",
  group: "Political Science",
  title: "Gender, Religion and Caste",
  points: [
    "Gender division refers to social differences and unequal roles assigned to men and women.",
    "Women have historically faced discrimination in education, employment, political representation and social life.",
    "The feminist movement demanded equality and greater opportunities for women.",
    "Sexual division of labour often assigns household work mainly to women.",
    "Political representation of women can increase attention to women's concerns.",
    "Religion can influence social values and political behaviour.",
    "Communalism occurs when religion becomes the basis for political division and conflict.",
    "Caste divisions are deeply rooted in Indian social history.",
    "Caste inequalities have weakened but have not disappeared completely.",
    "Political parties may use caste and community identities to mobilise voters.",
    "Democracy can help disadvantaged groups demand equality and representation.",
    "Major themes: gender inequality, communalism, caste, representation and social equality."
  ]
},

{
  subject: "SST",
  group: "Political Science",
  title: "Political Parties",
  points: [
    "A political party is a group of people who come together to contest elections and hold power in government.",
    "Political parties have three major components: leaders, active members and followers.",
    "Parties contest elections and put forward candidates.",
    "The winning party or coalition forms the government.",
    "Parties formulate policies and programmes for society.",
    "Political parties play an important role in shaping public opinion.",
    "Parties act as a link between citizens and government.",
    "India has a multi-party system because of its social and regional diversity.",
    "Major challenges include lack of internal democracy, dynastic succession, money and muscle power, and limited meaningful choice.",
    "Political parties can be improved through transparency, internal elections and greater participation.",
    "Major themes: elections, government formation, representation, challenges and reforms.",
    "Political parties are essential for the functioning of representative democracy."
  ]
},

{
  subject: "SST",
  group: "Political Science",
  title: "Outcomes of Democracy",
  points: [
    "Democracy is expected to produce accountable, responsive and legitimate government.",
    "Democratic governments are answerable to citizens through elections and public institutions.",
    "Democracy improves the quality of decision-making by allowing discussion and consultation.",
    "Democratic systems provide peaceful methods for resolving differences and conflicts.",
    "Democracy can enhance the dignity and equality of citizens.",
    "Democracy allows citizens to correct mistakes through elections and public participation.",
    "Democracies may not always produce rapid economic growth.",
    "Economic inequality and unequal distribution of wealth can continue under democracy.",
    "Democracy provides mechanisms for addressing social diversity and differences.",
    "The success of democracy should be judged by accountability, participation, equality and dignity.",
    "Major themes: accountability, responsiveness, legitimacy, economic outcomes, equality and dignity."
  ]
},


/* =========================================================
   SOCIAL SCIENCE — ECONOMICS
   ========================================================= */

{
  subject: "SST",
  group: "Economics",
  title: "Development",
  points: [
    "Different people can have different development goals.",
    "Income is an important indicator of development but is not the only one.",
    "People may value security, equality, freedom, education, health and respect.",
    "Average income is calculated by dividing total income by total population.",
    "Per capita income is used to compare average income between countries or regions.",
    "Public facilities such as schools, hospitals and sanitation influence quality of life.",
    "Infant mortality rate measures the number of children who die before reaching one year of age per 1,000 live births.",
    "Literacy rate measures the proportion of literate people in a population.",
    "Human Development indicators consider dimensions such as health, education and income.",
    "Sustainable development requires meeting present needs without damaging future possibilities.",
    "Development should include both material and non-material aspects of life.",
    "Major themes: income, quality of life, public facilities, human development and sustainability."
  ]
},

{
  subject: "SST",
  group: "Economics",
  title: "Sectors of the Indian Economy",
  points: [
    "Economic activities can be classified into primary, secondary and tertiary sectors.",
    "Primary activities directly use natural resources, such as agriculture and fishing.",
    "Secondary activities involve manufacturing and processing.",
    "Tertiary activities provide services such as transport, banking, education and healthcare.",
    "The organised sector follows government rules and provides greater formal security to workers.",
    "The unorganised sector often has less formal protection and regulation.",
    "Public sector enterprises are owned or controlled by the government.",
    "Private sector enterprises are owned by individuals or private organisations.",
    "Disguised unemployment occurs when more people work on an activity than are actually required.",
    "The government creates employment and provides essential public services.",
    "The tertiary sector has become increasingly important in India's economy.",
    "Major themes: sectors, employment, organised and unorganised sectors, public and private sectors."
  ]
},

{
  subject: "SST",
  group: "Economics",
  title: "Money and Credit",
  points: [
    "Money acts as a medium of exchange and removes the need for double coincidence of wants.",
    "Modern forms of money include currency and deposits with banks.",
    "Banks accept deposits from people and use a portion of them to provide loans.",
    "Demand deposits can be withdrawn when required and can be used for payments.",
    "Credit can help people invest, produce goods and increase income.",
    "Formal sources of credit include banks and cooperative societies.",
    "Informal sources include moneylenders, traders, employers, relatives and friends.",
    "Formal credit is generally regulated by institutions such as the Reserve Bank of India.",
    "Interest rates and repayment conditions affect the cost of borrowing.",
    "Collateral is an asset used as security against a loan.",
    "Self-help groups can provide credit to members who may have limited access to formal banking.",
    "Major themes: money, banks, credit, collateral, formal and informal sources."
  ]
},

{
  subject: "SST",
  group: "Economics",
  title: "Globalisation and the Indian Economy",
  points: [
    "Globalisation refers to increasing integration of production and markets across countries.",
    "Multinational corporations operate and invest in several countries.",
    "MNCs may set up production units, collaborate with local companies or purchase existing businesses.",
    "Foreign investment can bring capital, technology and access to international markets.",
    "Liberalisation reduced many restrictions on imports and foreign investment in India after 1991.",
    "The World Trade Organization establishes rules for international trade.",
    "Globalisation has increased competition among producers.",
    "Consumers may benefit from greater variety and improved quality of products.",
    "Small producers may face difficulties competing with large international companies.",
    "The effects of globalisation are not equally beneficial to all producers and workers.",
    "Fair globalisation requires policies that protect workers and support disadvantaged producers.",
    "Major themes: MNCs, investment, liberalisation, WTO, competition and impacts of globalisation."
  ]
},

{
  subject: "SST",
  group: "Economics",
  title: "Consumer Rights",
  points: [
    "Consumers need protection against unsafe products, unfair trade practices and misleading information.",
    "The Consumer Protection Act provides legal protection to consumers.",
    "Consumers have the right to safety against hazardous goods and services.",
    "Consumers have the right to be informed about quality, quantity, price and other relevant details.",
    "Consumers have the right to choose from different products and services.",
    "Consumers have the right to seek redressal against unfair practices.",
    "Consumers have the right to representation and to have their interests considered.",
    "Quality certification marks such as ISI and Hallmark help consumers identify standards.",
    "Bills, receipts and warranty documents are important evidence when making complaints.",
    "Consumer awareness is important because informed consumers can make better choices.",
    "Consumer organisations help spread awareness and support consumer protection.",
    "Major themes: consumer rights, awareness, certification, redressal and responsible purchasing."
  ]
}

);


/* =========================================================
   APP STATE
   ========================================================= */

const ACCESS_CODE = "STUDYOS10";

let currentSubject = null;
let currentGroup = null;


/* =========================================================
   ELEMENTS
   ========================================================= */

const gate = document.getElementById("gate");
const app = document.getElementById("app");
const codeInput = document.getElementById("code");
const enterBtn = document.getElementById("enter");
const errorText = document.getElementById("err");

const homeBtn = document.getElementById("home");
const lockBtn = document.getElementById("lock");
const themeBtn = document.getElementById("theme");

const subjectsSection = document.getElementById("subjects");
const librarySection = document.getElementById("library");
const resultsSection = document.getElementById("results");

const backBtn = document.getElementById("back");
const libTitle = document.getElementById("libTitle");
const libEyebrow = document.getElementById("libEyebrow");

const filters = document.getElementById("filters");
const grid = document.getElementById("grid");

const searchInput = document.getElementById("search");
const resultGrid = document.getElementById("resultGrid");
const resultCount = document.getElementById("resultCount");

const modal = document.getElementById("modal");
const shade = document.getElementById("shade");
const closeBtn = document.getElementById("close");
const doneBtn = document.getElementById("done");

const modalGroup = document.getElementById("mgroup");
const modalTitle = document.getElementById("mtitle");
const pointsBox = document.getElementById("points");


/* =========================================================
   ACCESS GATE
   ========================================================= */

function unlockStudyOS() {
  const entered = codeInput.value.trim();

  if (entered === ACCESS_CODE) {
    sessionStorage.setItem("studyosUnlocked", "true");

    gate.classList.add("hidden");
    app.classList.remove("hidden");

    errorText.textContent = "";
    codeInput.value = "";
  } else {
    errorText.textContent = "Incorrect access code.";

    codeInput.classList.remove("shake");

    void codeInput.offsetWidth;

    codeInput.classList.add("shake");

    codeInput.focus();
  }
}


function lockStudyOS() {
  sessionStorage.removeItem("studyosUnlocked");

  app.classList.add("hidden");
  gate.classList.remove("hidden");

  codeInput.value = "";
  errorText.textContent = "";

  codeInput.focus();
}


if (enterBtn) {
  enterBtn.addEventListener("click", unlockStudyOS);
}


if (codeInput) {
  codeInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      unlockStudyOS();
    }
  });
}


if (sessionStorage.getItem("studyosUnlocked") === "true") {
  gate.classList.add("hidden");
  app.classList.remove("hidden");
}


/* =========================================================
   SUBJECT BUTTONS
   ========================================================= */

document.querySelectorAll(".subject").forEach(button => {

  button.addEventListener("click", () => {

    const subject = button.dataset.sub;

    openSubject(subject);

  });

});


/* =========================================================
   OPEN SUBJECT
   ========================================================= */

function openSubject(subject) {

  currentSubject = subject;
  currentGroup = null;

  subjectsSection.classList.add("hidden");
  resultsSection.classList.add("hidden");
  librarySection.classList.remove("hidden");

  libTitle.textContent =
    subject === "SST" ? "Social Science" : subject;

  libEyebrow.textContent =
    subject === "SST"
      ? "SOCIAL SCIENCE"
      : subject.toUpperCase();

  buildFilters(subject);
  renderLibrary(subject);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   BUILD FILTER BUTTONS
   ========================================================= */

function buildFilters(subject) {

  filters.innerHTML = "";

  const groups = [
    ...new Set(
      DATA
        .filter(item => item.subject === subject)
        .map(item => item.group)
    )
  ];

  const allButton = document.createElement("button");

  allButton.textContent = "All";
  allButton.className = "filter active";

  allButton.addEventListener("click", () => {

    currentGroup = null;

    document
      .querySelectorAll(".filter")
      .forEach(btn => btn.classList.remove("active"));

    allButton.classList.add("active");

    renderLibrary(subject);

  });

  filters.appendChild(allButton);


  groups.forEach(group => {

    const button = document.createElement("button");

    button.textContent = group
      .replace("First Flight – ", "")
      .replace("Writing & Language", "Language");

    button.className = "filter";

    button.addEventListener("click", () => {

      currentGroup = group;

      document
        .querySelectorAll(".filter")
        .forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      renderLibrary(subject);

    });

    filters.appendChild(button);

  });

}


/* =========================================================
   RENDER LIBRARY
   ========================================================= */

function renderLibrary(subject) {

  grid.innerHTML = "";

  let items = DATA.filter(item => item.subject === subject);

  if (currentGroup) {
    items = items.filter(item => item.group === currentGroup);
  }

  if (!items.length) {

    grid.innerHTML = `
      <div class="empty">
        <h3>No chapters found</h3>
        <p>Try another section.</p>
      </div>
    `;

    return;
  }


  items.forEach((item, index) => {

    const card = createChapterCard(item, index);

    grid.appendChild(card);

  });

}


/* =========================================================
   CREATE CHAPTER CARD
   ========================================================= */

function createChapterCard(item, index) {

  const card = document.createElement("button");

  card.className = "chapter";

  card.innerHTML = `
    <span class="chapter-num">
      ${String(index + 1).padStart(2, "0")}
    </span>

    <span class="chapter-content">
      <small>${escapeHTML(item.group)}</small>
      <strong>${escapeHTML(item.title)}</strong>
      <em>${item.points.length} important points</em>
    </span>

    <span class="chapter-arrow">↗</span>
  `;

  card.addEventListener("click", () => {

    openModal(item);

  });

  return card;

}


/* =========================================================
   MODAL
   ========================================================= */

function openModal(item) {

  modalGroup.textContent = item.group;
  modalTitle.textContent = item.title;

  pointsBox.innerHTML = "";

  item.points.forEach((point, index) => {

    const pointElement = document.createElement("div");

    pointElement.className = "point";

    pointElement.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")}</span>
      <p>${escapeHTML(point)}</p>
    `;

    pointsBox.appendChild(pointElement);

  });

  modal.classList.remove("hidden");

  document.body.classList.add("modal-open");

}


function closeModal() {

  modal.classList.add("hidden");

  document.body.classList.remove("modal-open");

}


if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}


if (doneBtn) {
  doneBtn.addEventListener("click", closeModal);
}


if (shade) {
  shade.addEventListener("click", closeModal);
}


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});


/* =========================================================
   BACK BUTTON
   ========================================================= */

if (backBtn) {

  backBtn.addEventListener("click", () => {

    librarySection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    subjectsSection.classList.remove("hidden");

    currentSubject = null;
    currentGroup = null;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   HOME BUTTON
   ========================================================= */

if (homeBtn) {

  homeBtn.addEventListener("click", () => {

    librarySection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    subjectsSection.classList.remove("hidden");

    currentSubject = null;
    currentGroup = null;

    searchInput.value = "";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   LOCK BUTTON
   ========================================================= */

if (lockBtn) {

  lockBtn.addEventListener("click", lockStudyOS);

}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch(query) {

  const term = query.trim().toLowerCase();

  if (!term) {

    resultsSection.classList.add("hidden");

    if (currentSubject) {
      librarySection.classList.remove("hidden");
    } else {
      subjectsSection.classList.remove("hidden");
    }

    return;

  }


  subjectsSection.classList.add("hidden");
  librarySection.classList.add("hidden");
  resultsSection.classList.remove("hidden");

  const results = DATA.filter(item => {

    const searchableText = [

      item.subject,
      item.group,
      item.title,
      ...item.points

    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(term);

  });


  resultCount.textContent =
    `${results.length} result${results.length === 1 ? "" : "s"}`;


  resultGrid.innerHTML = "";


  if (!results.length) {

    resultGrid.innerHTML = `
      <div class="empty">
        <h3>No results found</h3>
        <p>Try searching for another chapter, topic or keyword.</p>
      </div>
    `;

    return;

  }


  results.forEach((item, index) => {

    const card = createChapterCard(item, index);

    resultGrid.appendChild(card);

  });

}


if (searchInput) {

  searchInput.addEventListener("input", event => {

    performSearch(event.target.value);

  });

}


/* =========================================================
   SEARCH SHORTCUT — CTRL/CMD + K
   ========================================================= */

document.addEventListener("keydown", event => {

  if (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === "k"
  ) {

    event.preventDefault();

    searchInput.focus();

  }

});


/* =========================================================
   THEME
   ========================================================= */

function updateThemeButton() {

  const dark =
    document.documentElement.classList.contains("dark");

  themeBtn.textContent = dark ? "☀" : "◐";

}


function setTheme(dark) {

  document.documentElement.classList.toggle("dark", dark);

  localStorage.setItem(
    "studyosTheme",
    dark ? "dark" : "light"
  );

  updateThemeButton();

}


const savedTheme =
  localStorage.getItem("studyosTheme");


if (savedTheme === "dark") {

  setTheme(true);

} else {

  setTheme(false);

}


if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    const dark =
      !document.documentElement.classList.contains("dark");

    setTheme(dark);

  });

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   CHAPTER COUNT
   ========================================================= */

function updateChapterCount() {

  const totalElement =
    document.getElementById("total");

  if (!totalElement) return;

  totalElement.textContent =
    `${DATA.length} chapters`;

}


updateChapterCount();


/* =========================================================
   STARTUP
   ========================================================= */

function initialiseStudyOS() {

  if (!sessionStorage.getItem("studyosUnlocked")) {

    gate.classList.remove("hidden");
    app.classList.add("hidden");

  }

  else {

    gate.classList.add("hidden");
    app.classList.remove("hidden");

  }

}


initialiseStudyOS();


/* =========================================================
   END OF APP.JS
   ========================================================= */
