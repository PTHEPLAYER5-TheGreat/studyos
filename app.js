const ACCESS_CODE = "STUDY10";

const CHAPTERS = [
  // =========================================================
  // SCIENCE — PHYSICS
  // =========================================================

  {
    subject: "Science",
    group: "Physics",
    title: "Light – Reflection and Refraction",
    points: [
      "Light is a form of energy that enables us to see objects.",
      "Reflection is the bouncing back of light into the same medium after striking a surface.",
      "The angle of incidence is equal to the angle of reflection.",
      "The incident ray, reflected ray and normal at the point of incidence lie in the same plane.",
      "A concave mirror is a converging mirror, while a convex mirror is a diverging mirror.",
      "A concave mirror can form real or virtual images depending on the object's position.",
      "A convex mirror always forms a virtual, erect and diminished image.",
      "Mirror formula: 1/f = 1/v + 1/u.",
      "Magnification for a mirror: m = hᵢ/hₒ = −v/u.",
      "Refraction is the change in direction of light when it passes obliquely from one transparent medium to another.",
      "Refraction occurs because the speed of light changes when it enters a different medium.",
      "Refractive index n = speed of light in vacuum / speed of light in the medium.",
      "A convex lens is a converging lens and a concave lens is a diverging lens.",
      "A convex lens can produce real or virtual images depending on the object's position.",
      "A concave lens always forms a virtual, erect and diminished image.",
      "Lens formula: 1/f = 1/v − 1/u.",
      "Magnification for a lens: m = v/u.",
      "Power of a lens: P = 1/f, where f is measured in metres.",
      "The SI unit of power of a lens is the dioptre (D).",
      "A positive power represents a converging lens and a negative power represents a diverging lens."
    ]
  },

  {
    subject: "Science",
    group: "Physics",
    title: "The Human Eye and the Colourful World",
    points: [
      "The human eye is a natural optical instrument that enables us to see.",
      "The cornea forms the transparent front surface of the eye.",
      "The iris controls the amount of light entering the eye.",
      "The pupil is the opening through which light enters the eye.",
      "The eye lens focuses light on the retina.",
      "The retina contains light-sensitive cells that convert light into electrical signals.",
      "Accommodation is the ability of the eye lens to change its focal length.",
      "The near point of a normal human eye is about 25 cm.",
      "The far point of a normal human eye is infinity.",
      "Myopia is short-sightedness in which distant objects are not seen clearly.",
      "Myopia is corrected using a concave lens.",
      "Hypermetropia is long-sightedness in which nearby objects are not seen clearly.",
      "Hypermetropia is corrected using a convex lens.",
      "Presbyopia occurs mainly due to ageing and reduced accommodation.",
      "A person may sometimes require bifocal or other corrective lenses for multiple vision problems.",
      "Dispersion is the splitting of white light into its constituent colours.",
      "A prism can produce a spectrum of seven colours.",
      "The scattering of shorter wavelengths of light makes the sky appear blue.",
      "The Sun appears reddish near sunrise and sunset because sunlight travels through a longer atmospheric path.",
      "Tyndall effect is the scattering of light by very fine particles in a colloidal medium."
    ]
  },

  {
    subject: "Science",
    group: "Physics",
    title: "Electricity",
    points: [
      "Electric current is the rate of flow of electric charge.",
      "Current: I = Q/t.",
      "The SI unit of current is ampere (A).",
      "Potential difference is the work done to move a unit charge between two points.",
      "Potential difference: V = W/Q.",
      "The SI unit of potential difference is volt (V).",
      "Ohm's law states that current through a conductor is directly proportional to potential difference when physical conditions remain constant.",
      "Ohm's law: V = IR.",
      "Resistance is the opposition offered by a conductor to the flow of electric current.",
      "Resistance depends on length, area of cross-section, material and temperature.",
      "Resistance formula: R = ρl/A.",
      "The SI unit of resistance is ohm (Ω).",
      "Resistivity is a property of the material of a conductor.",
      "In a series combination, the same current flows through every resistor.",
      "Series resistance: R = R₁ + R₂ + R₃.",
      "In a parallel combination, the potential difference across each resistor is the same.",
      "Parallel resistance: 1/R = 1/R₁ + 1/R₂ + 1/R₃.",
      "Electric power is the rate at which electrical energy is consumed.",
      "Power: P = VI = I²R = V²/R.",
      "Electrical energy is commonly measured in kilowatt-hour (kWh).",
      "One kilowatt-hour is called one unit of electrical energy.",
      "Heating effect of current: H = I²Rt."
    ]
  },

  {
    subject: "Science",
    group: "Physics",
    title: "Magnetic Effects of Electric Current",
    points: [
      "A current-carrying conductor produces a magnetic field around it.",
      "The magnetic field is represented using magnetic field lines.",
      "Magnetic field lines outside a bar magnet go from north pole to south pole.",
      "The right-hand thumb rule gives the direction of magnetic field around a straight current-carrying conductor.",
      "A circular current-carrying loop produces a magnetic field around and through the loop.",
      "Increasing current increases the strength of the magnetic field.",
      "A solenoid is a coil containing many circular turns of insulated wire.",
      "A current-carrying solenoid behaves like a bar magnet.",
      "An electromagnet is produced by passing current through a coil, usually around a soft iron core.",
      "The force on a current-carrying conductor placed in a magnetic field is used in electric motors.",
      "Fleming's left-hand rule gives the direction of force on a current-carrying conductor.",
      "An electric motor converts electrical energy into mechanical energy.",
      "Electromagnetic induction is the phenomenon of producing electric current due to a changing magnetic field.",
      "Fleming's right-hand rule gives the direction of induced current.",
      "An electric generator converts mechanical energy into electrical energy.",
      "AC changes direction periodically, while DC flows in one direction.",
      "Domestic electric circuits use live, neutral and earth wires.",
      "A fuse protects circuits from excessive current.",
      "Short-circuiting can cause a sudden large current and heating.",
      "Earthing provides a low-resistance path for leakage current and helps protect users from electric shock."
    ]
  },

  {
    subject: "Science",
    group: "Physics",
    title: "Sources of Energy",
    points: [
      "A source of energy should provide sufficient energy at a reasonable cost.",
      "A good energy source should be easy to store and transport.",
      "It should ideally cause little environmental pollution.",
      "Renewable sources can be replenished naturally over relatively short periods.",
      "Non-renewable sources are limited and take extremely long periods to form.",
      "Fossil fuels include coal, petroleum and natural gas.",
      "Coal and petroleum are major conventional sources of energy.",
      "Solar energy is obtained from radiation received from the Sun.",
      "Solar cells convert solar energy directly into electrical energy.",
      "Wind energy uses the kinetic energy of moving air.",
      "Hydroelectric power uses falling or flowing water to generate electricity.",
      "Biogas is produced by anaerobic decomposition of organic matter.",
      "Geothermal energy comes from heat inside the Earth.",
      "Tidal energy uses the periodic rise and fall of sea levels.",
      "Wave energy uses energy associated with ocean waves.",
      "Nuclear energy can be released through nuclear reactions such as fission.",
      "Nuclear fuels can produce very large amounts of energy from relatively small amounts of fuel.",
      "Energy production can have environmental effects such as air pollution, habitat changes or radioactive waste.",
      "No single energy source is ideal for every situation.",
      "Future energy planning should consider availability, efficiency, cost and environmental impact."
    ]
  },

  // =========================================================
  // SCIENCE — CHEMISTRY
  // =========================================================

  {
    subject: "Science",
    group: "Chemistry",
    title: "Chemical Reactions and Equations",
    points: [
      "A chemical reaction produces one or more new substances with different properties.",
      "Common signs of a chemical reaction include change in colour, temperature, state or formation of a gas or precipitate.",
      "A chemical equation represents a chemical reaction using symbols and formulae.",
      "A chemical equation must be balanced because atoms are neither created nor destroyed.",
      "Combination reaction: two or more substances combine to form a single product.",
      "Decomposition reaction: one compound breaks down into two or more simpler substances.",
      "Displacement reaction: a more reactive element displaces a less reactive element.",
      "Double displacement reaction involves exchange of ions between two compounds.",
      "A precipitation reaction produces an insoluble solid called a precipitate.",
      "Oxidation may involve addition of oxygen or removal of hydrogen.",
      "Reduction may involve removal of oxygen or addition of hydrogen.",
      "Oxidation and reduction occur simultaneously in redox reactions.",
      "Corrosion is the gradual destruction of metals by reactions with their environment.",
      "Rusting is corrosion of iron in the presence of oxygen and moisture.",
      "Rancidity is oxidation of fats and oils that produces unpleasant smell and taste.",
      "Antioxidants can slow down rancidity.",
      "Keeping food in airtight containers can reduce contact with oxygen.",
      "Painting, oiling, greasing and galvanisation can help prevent corrosion.",
      "Exothermic reactions release heat.",
      "Endothermic reactions absorb heat."
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
      "Blue litmus turns red in an acidic solution.",
      "Red litmus turns blue in a basic solution.",
      "The pH scale measures how acidic or basic a solution is.",
      "pH values below 7 are acidic, 7 is neutral and values above 7 are basic.",
      "A strong acid has a high concentration of hydrogen ions compared with a weak acid at similar conditions.",
      "Acid + metal can produce salt and hydrogen gas.",
      "Acid + metal carbonate generally produces salt, water and carbon dioxide.",
      "Acid + base → salt + water is called a neutralisation reaction.",
      "Chlor-alkali process produces sodium hydroxide, chlorine and hydrogen from brine.",
      "Baking soda is sodium hydrogen carbonate, NaHCO₃.",
      "Washing soda is sodium carbonate decahydrate, Na₂CO₃·10H₂O.",
      "Bleaching powder is commonly represented as CaOCl₂ and is used for bleaching and disinfection.",
      "Plaster of Paris is calcium sulphate hemihydrate.",
      "Baking soda is used in baking and can also act as an antacid.",
      "Tooth decay begins when the pH in the mouth becomes sufficiently acidic.",
      "Antacids neutralise excess acid in the stomach.",
      "Many salts have important uses in daily life, medicine and industry."
    ]
  },

  {
    subject: "Science",
    group: "Chemistry",
    title: "Metals and Non-metals",
    points: [
      "Metals are generally lustrous, malleable, ductile and good conductors of heat and electricity.",
      "Non-metals are generally poor conductors, although graphite is an important exception.",
      "Malleability is the ability to be beaten into thin sheets.",
      "Ductility is the ability to be drawn into wires.",
      "The reactivity series arranges metals according to their relative reactivity.",
      "Potassium and sodium are highly reactive metals.",
      "Metals below hydrogen in the reactivity series generally cannot displace hydrogen from dilute acids.",
      "Ionic compounds are formed through transfer of electrons and attraction between oppositely charged ions.",
      "Ionic compounds generally have high melting and boiling points.",
      "Ionic compounds conduct electricity in molten or aqueous states because ions can move.",
      "Highly reactive metals are generally extracted by electrolysis.",
      "Moderately reactive metals can often be obtained by reducing their oxides with suitable reducing agents.",
      "Less reactive metals may occur in free form or require simpler extraction methods.",
      "Corrosion is the slow deterioration of a metal due to environmental reactions.",
      "Alloys are homogeneous mixtures of two or more metals or a metal and another element.",
      "Stainless steel is an alloy with useful resistance to corrosion.",
      "Metals generally form basic oxides, though some oxides are amphoteric.",
      "Non-metals generally form acidic or neutral oxides.",
      "Some metals react with water to form metal hydroxides or oxides and hydrogen.",
      "Displacement reactions can be predicted using the reactivity series."
    ]
  },

  {
    subject: "Science",
    group: "Chemistry",
    title: "Carbon and its Compounds",
    points: [
      "Carbon has atomic number 6 and has four valence electrons.",
      "Carbon forms four covalent bonds because of its tetravalency.",
      "Catenation is the ability of carbon atoms to bond with one another to form chains, branches and rings.",
      "Hydrocarbons contain only carbon and hydrogen.",
      "Saturated hydrocarbons contain only single carbon-carbon bonds.",
      "Unsaturated hydrocarbons contain double or triple bonds.",
      "Alkanes are saturated hydrocarbons.",
      "Alkenes contain at least one carbon-carbon double bond.",
      "Alkynes contain at least one carbon-carbon triple bond.",
      "A homologous series contains compounds with the same functional group and similar chemical properties.",
      "Successive members of a homologous series differ by –CH₂–.",
      "Functional groups determine many characteristic reactions of organic compounds.",
      "Alcohol functional group is –OH.",
      "Carboxylic acid functional group is –COOH.",
      "Ethanol is an important alcohol with formula C₂H₅OH.",
      "Ethanoic acid is commonly called acetic acid and has formula CH₃COOH.",
      "Combustion of carbon compounds generally produces carbon dioxide, water and energy when complete.",
      "Addition reactions are characteristic of many unsaturated hydrocarbons.",
      "Substitution reactions are common in saturated hydrocarbons.",
      "Esterification is the reaction of an alcohol with a carboxylic acid to form an ester and water.",
      "Soap molecules have a hydrophilic end and a hydrophobic hydrocarbon tail.",
      "Detergents can work effectively in hard water where soaps form scum."
    ]
  },

  {
    subject: "Science",
    group: "Chemistry",
    title: "Periodic Classification of Elements",
    points: [
      "The modern periodic law states that properties of elements are periodic functions of their atomic numbers.",
      "The modern periodic table contains 18 groups and 7 periods.",
      "Elements are arranged in increasing order of atomic number.",
      "Elements in the same group generally have similar valence-shell electronic configurations.",
      "The period number indicates the number of occupied electron shells.",
      "Valence electrons strongly influence chemical properties.",
      "Atomic size generally decreases from left to right across a period.",
      "Atomic size generally increases down a group.",
      "Metallic character generally decreases from left to right across a period.",
      "Metallic character generally increases down a group.",
      "Elements on the left side are mainly metals, while elements on the right side are mainly non-metals.",
      "Noble gases are placed in group 18.",
      "Noble gases have stable outer electronic configurations and are generally unreactive.",
      "Valency generally changes across a period and shows a repeating pattern.",
      "The periodic table helps predict properties of elements that have not yet been studied in detail.",
      "Mendeleev arranged elements mainly according to atomic masses and chemical properties.",
      "Mendeleev left gaps for elements that were not discovered at the time.",
      "The modern table resolved several limitations of the mass-based arrangement by using atomic number.",
      "Isotopes occupy the same position because they have the same atomic number.",
      "Periodic trends are useful for predicting bonding, reactivity and physical properties."
    ]
  },

  // =========================================================
  // SCIENCE — BIOLOGY
  // =========================================================

  {
    subject: "Science",
    group: "Biology",
    title: "Life Processes",
    points: [
      "Life processes are essential activities required for maintenance of living organisms.",
      "Major life processes include nutrition, respiration, transportation and excretion.",
      "Autotrophs prepare their own food, while heterotrophs obtain food from other organisms.",
      "Photosynthesis uses carbon dioxide and water to produce glucose in the presence of sunlight and chlorophyll.",
      "Stomata allow gaseous exchange and help in transpiration in plants.",
      "Human digestion begins in the mouth with chewing and saliva.",
      "The stomach secretes hydrochloric acid and digestive juices.",
      "Most digestion and absorption of nutrients occur in the small intestine.",
      "Villi in the small intestine increase the surface area for absorption.",
      "Aerobic respiration generally releases more energy than anaerobic respiration.",
      "In humans, oxygen is transported mainly by haemoglobin in red blood cells.",
      "The human heart has four chambers: two atria and two ventricles.",
      "Arteries generally carry blood away from the heart, while veins generally carry blood towards it.",
      "Plants transport water and minerals through xylem.",
      "Phloem transports food from leaves to other parts of the plant.",
      "Transpiration creates a pull that helps in upward movement of water in plants.",
      "The excretory system removes metabolic wastes from the body.",
      "The nephron is the functional unit of the kidney.",
      "Kidneys filter blood and help regulate water and ionic balance.",
      "Unicellular organisms may exchange substances directly with their surroundings through the cell membrane."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "Control and Coordination",
    points: [
      "Control and coordination help organisms respond appropriately to changes in their surroundings.",
      "The nervous system provides rapid coordination using electrical impulses.",
      "A neuron is the structural and functional unit of the nervous system.",
      "A neuron generally contains dendrites, a cell body and an axon.",
      "A synapse is the junction between two neurons where signals are transmitted using chemical substances.",
      "Reflex actions are rapid and automatic responses to stimuli.",
      "The spinal cord plays an important role in reflex actions.",
      "The brain is protected by the skull and surrounded by protective membranes and fluid.",
      "The forebrain is associated with thinking, memory, sensory interpretation and voluntary actions.",
      "The midbrain helps coordinate certain visual and auditory responses.",
      "The hindbrain includes regions involved in balance, posture and involuntary functions.",
      "Hormones are chemical messengers secreted by endocrine glands.",
      "Adrenaline prepares the body for emergency situations.",
      "Insulin helps regulate blood glucose levels.",
      "Thyroxine helps regulate metabolism and requires iodine for its synthesis.",
      "Plants respond to stimuli using growth movements and plant hormones.",
      "Auxin promotes cell growth and is involved in phototropic responses.",
      "Gibberellins promote growth in plants.",
      "Cytokinins promote cell division.",
      "Abscisic acid generally inhibits growth and helps plants respond to stress."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "How do Organisms Reproduce?",
    points: [
      "Reproduction produces new individuals of the same species.",
      "Reproduction is important for continuation of species.",
      "Asexual reproduction involves a single parent and usually does not involve fusion of gametes.",
      "Binary fission produces two individuals from one parent cell.",
      "Budding occurs when a new organism develops as an outgrowth from the parent.",
      "Fragmentation occurs when an organism breaks into pieces and each piece develops into an individual.",
      "Vegetative propagation allows new plants to develop from roots, stems or leaves.",
      "Sexual reproduction generally involves formation and fusion of male and female gametes.",
      "Sexual reproduction creates greater variation than simple asexual reproduction.",
      "Pollination is the transfer of pollen grains from anther to stigma.",
      "Fertilisation in flowering plants produces a zygote.",
      "The ovule develops into a seed after fertilisation.",
      "The ovary develops into the fruit.",
      "The male reproductive system produces sperm.",
      "The female reproductive system produces ova and provides the environment for development of the embryo.",
      "Fertilisation in humans usually occurs in the fallopian tube.",
      "The embryo develops in the uterus.",
      "The placenta provides nutrients and oxygen to the developing embryo and removes wastes.",
      "Menstruation occurs when fertilisation does not take place and the uterine lining is shed.",
      "Reproductive health includes hygiene, awareness, responsible behaviour and prevention of sexually transmitted infections."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "Heredity and Evolution",
    points: [
      "Heredity is the transmission of characteristics from parents to offspring.",
      "Genes are units of heredity located on chromosomes.",
      "DNA carries genetic information.",
      "A trait is a characteristic that can be inherited.",
      "Mendel used pea plants to study patterns of inheritance.",
      "A dominant trait can express itself even when only one copy of the corresponding allele is present.",
      "A recessive trait generally expresses itself when the relevant allele is present in both copies.",
      "Genotype refers to the genetic makeup of an organism.",
      "Phenotype refers to the observable characteristics of an organism.",
      "The law of segregation states that allele pairs separate during gamete formation.",
      "In humans, females generally have XX sex chromosomes and males generally have XY.",
      "The sperm determines whether the offspring receives an X or Y chromosome from the father.",
      "Variations are differences between individuals of the same species.",
      "Variations can arise due to genetic changes and the processes associated with reproduction.",
      "Natural selection can favour variations that improve survival and reproduction in a particular environment.",
      "Evolution refers to changes in populations over generations.",
      "Fossils provide evidence about organisms that lived in the past.",
      "Homologous organs have similar basic structural plans but may perform different functions.",
      "Analogous organs perform similar functions but have different structural origins.",
      "Evolution does not mean that one individual changes into another species during its lifetime."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "Our Environment",
    points: [
      "An ecosystem consists of living organisms interacting with one another and with non-living components.",
      "Biotic components include producers, consumers and decomposers.",
      "Abiotic components include air, water, soil, temperature and light.",
      "Producers prepare food and form the first trophic level in a food chain.",
      "Consumers depend directly or indirectly on other organisms for food.",
      "Decomposers break down dead organic matter and recycle nutrients.",
      "A food chain represents the transfer of food and energy from one organism to another.",
      "Energy flows through an ecosystem and is not recycled in the same way as nutrients.",
      "Only a small fraction of energy is transferred from one trophic level to the next.",
      "A food web consists of interconnected food chains.",
      "Biological magnification causes certain non-biodegradable pollutants to become more concentrated at higher trophic levels.",
      "Biodegradable substances can be broken down by microorganisms.",
      "Non-biodegradable substances are not easily broken down naturally.",
      "Plastic is an example of a material that can persist in the environment for a long time.",
      "The ozone layer absorbs much of the harmful ultraviolet radiation reaching Earth.",
      "Certain chemicals can damage the ozone layer.",
      "Waste management should reduce unnecessary consumption and promote reuse and recycling.",
      "Ecosystem balance depends on interactions among organisms and environmental conditions."
    ]
  },

  {
    subject: "Science",
    group: "Biology",
    title: "Sustainable Management of Natural Resources",
    points: [
      "Natural resources include forests, water, wildlife, coal, petroleum and other materials obtained from nature.",
      "Sustainable management means using resources carefully while maintaining their availability for future generations.",
      "The 3R principle stands for Reduce, Reuse and Recycle.",
      "Reduce means lowering unnecessary consumption and waste.",
      "Reuse means using an item again instead of immediately discarding it.",
      "Recycle means processing waste materials into useful products.",
      "Forests provide biodiversity, soil protection, water regulation, fuel, food and other resources.",
      "Forest conservation works best when local communities are involved in responsible management.",
      "Water is essential for domestic use, agriculture, industry and ecosystems.",
      "Rainwater harvesting collects and stores rainwater or helps recharge groundwater.",
      "Groundwater can be replenished through appropriate water harvesting and recharge methods.",
      "Large dams can provide irrigation, electricity and water supply.",
      "Large projects can also cause displacement, ecological changes and conflicts over resources.",
      "Coal and petroleum are non-renewable resources.",
      "Overuse of fossil fuels contributes to pollution and greenhouse gas emissions.",
      "Different stakeholders may have different interests in the same natural resource.",
      "Resource management should consider environmental, economic and social needs together.",
      "Sustainable development aims to meet present needs without compromising future generations."
    ]
  },

  // =========================================================
  // ENGLISH
  // =========================================================

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "A Letter to God",
    points: [
      "Lencho is a poor farmer whose crop depends heavily on the weather.",
      "He is confident that his fields will produce a good harvest.",
      "A severe hailstorm destroys the crop completely.",
      "Lencho compares the hailstones to frozen pearls because he initially sees hope in them.",
      "After the destruction, Lencho's faith in God becomes his main source of hope.",
      "He writes a letter to God asking for money to recover from the loss.",
      "The postmaster is moved by Lencho's faith and decides to help him.",
      "The postmaster collects money from his employees and friends.",
      "Lencho receives only part of the amount he requested.",
      "Lencho assumes that God has sent the full amount and that the post office employees stole the rest.",
      "The story creates irony because the people who help Lencho are the same people he suspects.",
      "Lencho's faith is sincere but also shows his innocence and lack of understanding.",
      "The postmaster represents kindness and human generosity.",
      "Major themes: faith, innocence, hope, kindness and irony.",
      "The ending is humorous because Lencho's conclusion is completely different from the reader's understanding."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "Nelson Mandela – Long Walk to Freedom",
    points: [
      "Nelson Mandela describes the historic inauguration of South Africa's democratic government.",
      "The inauguration marked the end of the apartheid system's political domination.",
      "Mandela remembers the sacrifices made by countless people during the struggle.",
      "Apartheid denied the majority of South Africans equal rights.",
      "Mandela says that courage is not the absence of fear but victory over fear.",
      "He believes that both the oppressed and the oppressor lose their humanity under an unjust system.",
      "Mandela's understanding of freedom develops from personal freedom to collective freedom.",
      "He explains that a person's desire for freedom is connected with the freedom of others.",
      "The chapter emphasises dignity, equality and justice.",
      "Mandela honours the leaders and ordinary people who sacrificed for liberation.",
      "The inauguration symbolises a new democratic beginning.",
      "Major themes: freedom, courage, sacrifice, equality, reconciliation and human dignity.",
      "Mandela presents freedom as a responsibility rather than merely a personal privilege.",
      "The chapter is also an example of autobiographical writing."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "Stories About Flying – His First Flight",
    points: [
      "The young seagull is afraid to fly even though his siblings have already learned.",
      "His parents repeatedly encourage him to overcome his fear.",
      "He remains isolated on the ledge because he believes his wings will not support him.",
      "The seagull watches his family flying confidently and feels left behind.",
      "His mother uses food to tempt him toward the edge.",
      "Driven by hunger, he jumps toward the food.",
      "During the fall, his wings automatically spread.",
      "He discovers that he can fly.",
      "His fear disappears once he experiences success.",
      "His family celebrates his achievement.",
      "The story shows that fear often becomes smaller when we face a challenge.",
      "Major themes: courage, self-confidence, independence, family support and overcoming fear.",
      "The first flight symbolises a step toward maturity and independence."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "Stories About Flying – The Black Aeroplane",
    points: [
      "The narrator is a pilot flying home at night.",
      "He sees storm clouds ahead but decides to continue.",
      "His plane enters a severe storm.",
      "The instruments stop working properly and visibility becomes extremely poor.",
      "The narrator becomes worried because he does not know his exact position.",
      "He sees another mysterious aeroplane inside the storm.",
      "The pilot of the mysterious plane signals him to follow.",
      "The narrator follows the aircraft and eventually reaches safety.",
      "After landing, he asks about the other aeroplane.",
      "The woman at the control centre says that no other aircraft was visible on the radar.",
      "The story ends with a mystery that is not directly explained.",
      "The black aeroplane can be interpreted as a mysterious rescue or as a supernatural element.",
      "Major themes: mystery, fear, uncertainty and hope.",
      "The ending deliberately leaves the reader questioning what actually happened."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "From the Diary of Anne Frank",
    points: [
      "Anne Frank begins writing a diary because she feels she does not have a true friend to confide in.",
      "She names her diary Kitty.",
      "Anne explains that writing helps her express thoughts and feelings freely.",
      "She describes her school life and relationships with classmates.",
      "Mr Keesing is her mathematics teacher who becomes annoyed by her talking.",
      "He gives Anne extra homework as punishment.",
      "Anne responds creatively by writing essays about talking.",
      "Her final essay humorously argues that talking is a natural student trait.",
      "Mr Keesing eventually appreciates her creativity.",
      "The diary gives insight into Anne's personality and observations.",
      "The chapter shows Anne as intelligent, witty and self-aware.",
      "Major themes: loneliness, adolescence, friendship, self-expression and observation.",
      "The diary format makes the narration personal and intimate."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "Glimpses of India – A Baker from Goa",
    points: [
      "The narrator recalls the traditional Portuguese influence on Goa.",
      "Bakers played an important role in Goan village life.",
      "Bread was a regular part of meals and celebrations.",
      "The baker's arrival could be recognised by the sound associated with his bamboo staff.",
      "Bakers were traditionally called paders.",
      "Children were attracted to the bread and sweet products.",
      "Bread was associated with important occasions such as marriages and festivals.",
      "The chapter shows how food can preserve cultural traditions.",
      "The narrator remembers the baker as part of everyday childhood life.",
      "The chapter combines personal memory with a description of Goan culture.",
      "Major themes: tradition, food culture, memory and community life."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "Glimpses of India – Coorg",
    points: [
      "Coorg, also called Kodagu, is a beautiful region in Karnataka.",
      "The region is famous for coffee plantations.",
      "Coorg has evergreen forests, hills, streams and wildlife.",
      "The climate and landscape make it attractive to visitors.",
      "The people of Coorg are associated with bravery and hospitality.",
      "The chapter mentions traditions and theories about the ancestry of the Kodavus.",
      "Coorg has a strong connection with the Indian armed forces.",
      "The region offers opportunities for adventure activities.",
      "The River Kaveri originates in the hills of the region.",
      "The chapter highlights the natural and cultural richness of Coorg.",
      "Major themes: nature, culture, adventure, hospitality and regional identity."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "Glimpses of India – Tea from Assam",
    points: [
      "Rajvir and Pranjol travel by train through Assam.",
      "Pranjol's family owns a tea plantation.",
      "Rajvir is fascinated by the vast tea gardens.",
      "Tea is one of the world's most widely consumed beverages.",
      "The chapter presents legends about the discovery of tea.",
      "One legend connects tea with an ancient Chinese emperor.",
      "Another story associates tea with Buddhist monks.",
      "Tea cultivation requires suitable climate, rainfall and soil conditions.",
      "Assam is an important tea-producing region.",
      "The tea gardens create a distinctive landscape.",
      "The chapter combines geography, history and cultural information.",
      "Major themes: curiosity, landscape, tea culture and agricultural production."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "Mijbil the Otter",
    points: [
      "The narrator decides to keep an otter as a pet.",
      "He obtains an otter named Mijbil.",
      "Mijbil is playful, curious and intelligent.",
      "The otter enjoys water and develops creative ways of playing.",
      "The narrator becomes emotionally attached to Mijbil.",
      "Mijbil's behaviour shows strong individuality.",
      "Travelling with Mijbil creates practical difficulties.",
      "People are fascinated by the unusual animal.",
      "The story shows that animals can form strong bonds with humans.",
      "The narrator carefully observes Mijbil's habits and personality.",
      "Major themes: companionship, animal behaviour, affection and curiosity.",
      "The chapter also encourages sensitivity toward animals."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "Madam Rides the Bus",
    points: [
      "Valli is an eight-year-old girl who is highly curious about the world outside her village.",
      "She observes the bus travelling between her village and the nearby town.",
      "She collects information about the fare, route and journey time.",
      "Valli carefully saves money for her bus trip.",
      "She plans the journey without telling her mother.",
      "During the ride she enjoys the new experience and views the world from the bus.",
      "The conductor treats Valli affectionately and calls her Madam.",
      "Valli refuses unnecessary help because she wants to show independence.",
      "On the return journey she sees a dead cow that she had previously found amusing.",
      "This changes the emotional tone of her journey.",
      "The experience gives Valli a more mature understanding of life.",
      "Major themes: curiosity, independence, maturity, observation and changing perspectives."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "The Sermon at Benares",
    points: [
      "Kisa Gotami loses her only child and is overwhelmed by grief.",
      "She desperately searches for someone who can bring her child back.",
      "She is directed to the Buddha.",
      "The Buddha asks her to bring mustard seeds from a house that has never experienced death.",
      "Kisa visits many houses and discovers that every family has experienced loss.",
      "She gradually understands that death is universal.",
      "The Buddha teaches that attachment and grief are part of human suffering.",
      "Acceptance of the reality of death can lead toward peace.",
      "Kisa's personal grief changes into a deeper understanding of life.",
      "The mustard seeds become a symbol of universal human suffering.",
      "Major themes: death, grief, acceptance, wisdom, attachment and detachment.",
      "The story presents suffering as a shared human experience rather than an individual injustice."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Prose",
    title: "The Proposal",
    points: [
      "Lomov visits Chubukov's house intending to propose marriage to Natalya.",
      "Instead of immediately discussing marriage, Lomov and Natalya begin arguing.",
      "They quarrel over the ownership of Oxen Meadows.",
      "The argument shows their pride and stubbornness.",
      "Lomov becomes physically anxious and emotionally agitated.",
      "Chubukov initially supports Natalya in the argument.",
      "Natalya later learns that Lomov had come to propose.",
      "She demands that Lomov be called back.",
      "Lomov and Natalya then argue over whose dog is superior.",
      "Despite constant quarrelling, the marriage proposal is eventually accepted.",
      "The play is a farce with exaggerated arguments and comic situations.",
      "Major themes: marriage, greed, pride, social expectations and absurd conflict.",
      "The title itself is ironic because the proposal is surrounded by arguments rather than romance."
    ]
  },

  // =========================================================
  // ENGLISH — POEMS
  // =========================================================

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "Dust of Snow",
    points: [
      "The poem describes a small natural incident that changes the poet's mood.",
      "A crow shakes snow from a hemlock tree onto the poet.",
      "The poet initially feels troubled or regretful.",
      "The unexpected contact with nature changes his mood.",
      "The incident saves part of a day that he had considered wasted.",
      "The crow and hemlock tree are traditionally associated with unpleasant imagery, making the positive change more striking.",
      "The poem shows that even small moments can create emotional transformation.",
      "Major themes: nature, hope, renewal and change of mood.",
      "Important device: symbolism.",
      "The poem is short but conveys a strong message about appreciating simple experiences."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "Fire and Ice",
    points: [
      "The poem discusses possible ways in which the world could be destroyed.",
      "Fire symbolises desire, greed and uncontrolled passion.",
      "Ice symbolises hatred, coldness and emotional hostility.",
      "The poet believes either force could cause destruction.",
      "Desire and hatred are presented as dangerous human emotions.",
      "The poem uses a simple natural image to discuss a serious human problem.",
      "The poem has a conversational and compact style.",
      "Major themes: desire, hatred, destruction and human nature.",
      "Important device: symbolism.",
      "The contrasting images of fire and ice create a strong central contrast."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "A Tiger in the Zoo",
    points: [
      "The poem contrasts a tiger's natural life with its life in captivity.",
      "The tiger moves quietly inside a cage.",
      "Its natural power and freedom are restricted.",
      "In the jungle, the tiger would move through its natural habitat.",
      "The poem shows frustration caused by confinement.",
      "The tiger's imagined freedom contrasts sharply with its physical cage.",
      "The poet criticises the human practice of keeping wild animals captive.",
      "Major themes: freedom, captivity, wildlife and human control.",
      "Important devices include imagery, contrast and repetition.",
      "The poem encourages readers to respect animals' natural habitats."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "How to Tell Wild Animals",
    points: [
      "The poem humorously describes how one might identify dangerous wild animals.",
      "The poet uses exaggerated situations to create comedy.",
      "The animals described include the Asian lion, Bengal tiger, leopard, bear, hyena, crocodile and chameleon.",
      "The poem uses rhyme and rhythm to create a playful tone.",
      "Dangerous situations are presented as humorous rather than frightening.",
      "The poem relies heavily on irony and exaggeration.",
      "The humorous descriptions make the poem memorable.",
      "Major themes: animals, humour, danger and observation.",
      "Important devices include rhyme, repetition, imagery and irony.",
      "The poem is an example of light-hearted treatment of a serious subject."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "The Ball Poem",
    points: [
      "A young boy loses his ball and experiences genuine sadness.",
      "The ball represents something valuable and emotionally significant to the child.",
      "The loss becomes an early lesson in accepting reality.",
      "The poet does not simply replace the ball because the deeper issue is emotional learning.",
      "The boy must learn that possessions can be lost.",
      "The experience becomes part of growing up.",
      "The poem connects material loss with emotional maturity.",
      "Major themes: loss, responsibility, maturity, acceptance and growing up.",
      "The ball acts as a symbol of childhood attachment.",
      "The poet observes the boy's experience without immediately interfering."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "Amanda!",
    points: [
      "Amanda is repeatedly instructed and corrected by an adult.",
      "The instructions concern everyday behaviour and discipline.",
      "Amanda escapes into imaginary worlds to find freedom.",
      "Her fantasies reveal her desire for peace and independence.",
      "The poem contrasts adult expectations with a child's inner world.",
      "The repeated commands create a sense of pressure.",
      "Amanda's imagination provides an emotional escape.",
      "Major themes: childhood, freedom, pressure, imagination and parental expectations.",
      "Important device: repetition.",
      "The poem encourages sensitivity toward children's emotional needs."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "The Trees",
    points: [
      "The poem imagines trees trying to move out of a house and return to nature.",
      "The trees symbolise nature seeking freedom.",
      "The house represents human control and artificial confinement.",
      "The movement of the trees is described through vivid imagery.",
      "Nature is presented as a living force rather than an object.",
      "The poem suggests that nature cannot be permanently controlled.",
      "The contrast between the house and the forest is central to the poem.",
      "Major themes: freedom, nature, confinement and environmental awareness.",
      "Important devices include personification, imagery and symbolism.",
      "The poem creates a surreal image to express a serious environmental idea."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "Fog",
    points: [
      "The poem compares fog to a cat.",
      "The fog arrives quietly and silently.",
      "It seems to observe the city from a temporary position.",
      "The cat comparison emphasises stealth and silence.",
      "The fog eventually moves away without making noise.",
      "The poem is extremely short but creates a strong visual image.",
      "The central metaphor makes the natural phenomenon easy to imagine.",
      "Major themes: nature, mystery, silence and movement.",
      "Important device: extended metaphor.",
      "The poem demonstrates how a simple comparison can create powerful imagery."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "The Tale of Custard the Dragon",
    points: [
      "Belinda lives with several pets including Custard the dragon.",
      "The other animals constantly boast about their bravery.",
      "Custard is mocked because he appears timid.",
      "A pirate enters and creates a real danger.",
      "The supposedly brave characters hide or retreat.",
      "Custard faces the danger and acts courageously.",
      "After the danger passes, the others return to boasting.",
      "The poem contrasts real courage with empty boasting.",
      "Major themes: courage, humility, appearance versus reality and pride.",
      "Important devices include rhyme, humour, repetition and irony.",
      "Custard becomes the true hero despite being considered cowardly."
    ]
  },

  {
    subject: "English",
    group: "First Flight – Poems",
    title: "For Anne Gregory",
    points: [
      "The poem discusses whether people are loved for their inner qualities or physical appearance.",
      "Anne Gregory is described as attractive.",
      "The speaker suggests that human beings may be strongly influenced by outward beauty.",
      "The poem contrasts physical attraction with deeper spiritual love.",
      "The final idea suggests that divine love is different from human attraction.",
      "The poem questions the permanence and reliability of physical beauty.",
      "Hair colour and appearance are used as symbols of external beauty.",
      "Major themes: beauty, love, appearance and inner worth.",
      "Important devices include dialogue, symbolism and contrast.",
      "The poem encourages readers to think beyond external appearance."
    ]
  },

  // =========================================================
  // FOOTPRINTS
  // =========================================================

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "A Triumph of Surgery",
    points: [
      "Tricki is a pet dog owned by Mrs Pumphrey.",
      "Mrs Pumphrey loves Tricki but overfeeds him and gives him too many treats.",
      "Tricki becomes unhealthy because of overeating and lack of exercise.",
      "Dr Herriot recommends a strict diet and regular activity.",
      "Tricki is taken to the veterinary surgery.",
      "Instead of giving Tricki excessive food, Dr Herriot allows him to interact with other dogs.",
      "Exercise and controlled eating gradually improve Tricki's condition.",
      "Mrs Pumphrey believes the treatment is highly sophisticated.",
      "Tricki actually improves because of simple discipline and exercise.",
      "The title is humorous because the 'surgery' involves no complicated operation.",
      "Major themes: responsible pet care, discipline, affection and overindulgence.",
      "The story shows that excessive affection can sometimes become harmful."
    ]
  },

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "The Thief's Story",
    points: [
      "Hari Singh is a young thief who changes his name frequently.",
      "He meets Anil and decides to work for him.",
      "Anil is kind, trusting and willing to teach Hari.",
      "Hari initially plans to steal from Anil.",
      "Anil promises to teach Hari to read and write.",
      "Education becomes increasingly valuable to Hari.",
      "Hari steals money but later begins to regret his decision.",
      "He realises that education and trust can provide a better future than theft.",
      "Hari returns the money without being directly confronted.",
      "Anil understands what happened but chooses not to punish him harshly.",
      "Major themes: trust, education, reform, kindness and second chances.",
      "Anil's trust becomes the main force that changes Hari's thinking."
    ]
  },

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "The Midnight Visitor",
    points: [
      "Ausable is a secret agent who does not look like the stereotypical spy.",
      "Fowler is a writer who expects secret agents to live exciting and dangerous lives.",
      "Ausable is confronted by Max, who has a gun.",
      "Max wants an important report that Ausable possesses.",
      "Ausable remains calm despite the danger.",
      "He invents a story about a balcony outside the hotel room.",
      "A knock at the door gives Ausable another opportunity to deceive Max.",
      "Ausable claims that the police have arrived.",
      "Max believes the invented balcony exists and attempts to escape through it.",
      "There is actually no balcony, making Ausable's trick successful.",
      "Major themes: intelligence, presence of mind, deception and appearance versus reality.",
      "The story proves that clever thinking can be more useful than physical appearance."
    ]
  },

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "A Question of Trust",
    points: [
      "Horace Danby appears respectable but secretly steals valuable objects.",
      "He commits theft partly to finance his hobby of collecting rare books.",
      "Horace carefully plans his burglaries.",
      "He breaks into a house intending to steal jewellery.",
      "A woman appears and claims to be the owner of the house.",
      "She convinces Horace that she needs the safe opened.",
      "Horace trusts her and opens the safe for her.",
      "The woman is actually another thief.",
      "Horace leaves fingerprints and is later caught by the police.",
      "The story is built around irony and deception.",
      "Major themes: trust, crime, deception, appearances and irony.",
      "Horace's careful planning fails because he is deceived by someone more convincing."
    ]
  },

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "Footprints Without Feet",
    points: [
      "Griffin is a scientist who discovers how to make the human body invisible.",
      "His scientific achievement demonstrates intelligence but also creates serious ethical problems.",
      "Griffin uses invisibility for selfish and criminal purposes.",
      "He burns down a house after a conflict with its owners.",
      "He steals clothes and food because invisibility leaves him without normal resources.",
      "People become frightened by the mysterious footprints he leaves behind.",
      "Griffin eventually enters a shop and later a house to obtain what he needs.",
      "His scientific knowledge is not accompanied by moral responsibility.",
      "The story contrasts scientific achievement with irresponsible behaviour.",
      "Major themes: misuse of science, ethics, lawlessness and responsibility.",
      "The story suggests that scientific power should be guided by moral judgement."
    ]
  },

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "The Making of a Scientist",
    points: [
      "Richard Ebright becomes a successful scientist through curiosity and persistent work.",
      "His mother plays an important role in encouraging his learning.",
      "He begins with interests in collecting butterflies and studying nature.",
      "His mother provides books, equipment and opportunities for observation.",
      "Ebright learns to conduct experiments rather than simply memorise facts.",
      "A science fair project becomes an important step in his development.",
      "He gradually becomes interested in scientific research.",
      "His success comes from curiosity, discipline and continuous learning.",
      "The chapter shows the importance of a supportive learning environment.",
      "Scientific progress requires observation, experimentation and careful reasoning.",
      "Major themes: curiosity, hard work, scientific thinking, mentorship and perseverance."
    ]
  },

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "The Necklace",
    points: [
      "Matilda Loisel is unhappy with her modest lifestyle.",
      "She dreams of wealth, luxury and social status.",
      "Her husband obtains an invitation to an important social event.",
      "Matilda borrows a necklace from her friend Mme Forestier.",
      "She enjoys the attention she receives at the event.",
      "After returning home, she discovers that the necklace is missing.",
      "The Loisels borrow money to replace it.",
      "They spend many years working to repay their debt.",
      "Matilda's appearance and lifestyle change because of years of hardship.",
      "After the debt is finally repaid, Matilda learns that the original necklace was an imitation.",
      "The ending creates strong situational irony.",
      "Major themes: vanity, social status, appearance, honesty, sacrifice and irony.",
      "The story shows how dissatisfaction and fear of admitting the truth can have serious consequences."
    ]
  },

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "Bholi",
    points: [
      "Bholi is a girl who is initially treated as weak and incapable.",
      "She has physical marks and a speech difficulty that affect her confidence.",
      "Her family pays less attention to her compared with other children.",
      "Her teacher treats her with patience and encouragement.",
      "Education helps Bholi develop confidence and self-respect.",
      "She learns to speak more clearly and express herself.",
      "Her family arranges her marriage to Bishamber.",
      "Bishamber demands dowry when he notices Bholi's family situation.",
      "Bholi refuses to marry him because she values her dignity.",
      "Her decision shows how education has transformed her.",
      "Major themes: education, empowerment, self-respect, confidence and social discrimination.",
      "The story presents education as a means of personal transformation."
    ]
  },

  {
    subject: "English",
    group: "Footprints Without Feet",
    title: "The Book That Saved the Earth",
    points: [
      "The play is set around a future conflict involving Earth and Mars.",
      "Martians plan to invade Earth.",
      "Their leader Think-Tank believes he is extremely intelligent.",
      "A misunderstanding develops when Martians discover a book of nursery rhymes.",
      "The Martians interpret the nursery rhyme references as information about Earth's military strength.",
      "Think-Tank becomes increasingly frightened by his own incorrect interpretation.",
      "The misunderstanding eventually prevents the invasion.",
      "The play uses satire to make fun of arrogance and poor reasoning.",
      "Books are shown as powerful sources of information and ideas.",
      "The title is humorous because an ordinary book indirectly saves Earth.",
      "Major themes: books, intelligence, misunderstanding, arrogance and satire.",
      "The play demonstrates how assumptions can lead to completely wrong conclusions."
    ]
  },

  // =========================================================
  // ENGLISH — WRITING
  // =========================================================

  {
    subject: "English",
    group: "Writing & Language",
    title: "Formal Letter",
    points: [
      "A formal letter should have a clear and appropriate format.",
      "Write the sender's address at the top.",
      "Write the date below the sender's address.",
      "Write the receiver's designation and address.",
      "Use a clear subject line that states the purpose of the letter.",
      "Use an appropriate formal salutation.",
      "The introduction should clearly state why you are writing.",
      "The body should explain the issue, facts, examples and requested action.",
      "Use polite and formal language throughout.",
      "Avoid slang, texting abbreviations and unnecessarily emotional language.",
      "The conclusion should clearly state the expected response or action.",
      "Use an appropriate complimentary close.",
      "Keep paragraphs organised and logically connected.",
      "For complaint letters, clearly describe the problem and suggest a reasonable solution.",
      "For enquiry letters, ask precise questions about the required information."
    ]
  },

  {
    subject: "English",
    group: "Writing & Language",
    title: "Analytical Paragraph",
    points: [
      "An analytical paragraph describes and interprets information presented in a chart, graph, table or similar visual.",
      "Begin by identifying what the data represents.",
      "Mention the most significant overall trend.",
      "Compare important values instead of describing every single number.",
      "Use appropriate comparison words such as higher, lower, greater, smaller, approximately and respectively.",
      "Include relevant figures to support observations.",
      "Group related information together to avoid a list-like answer.",
      "Identify maximum and minimum values where relevant.",
      "Mention unusual or notable changes.",
      "Do not add information that is not supported by the data.",
      "Avoid personal opinions unless the question specifically asks for them.",
      "Use formal and objective language.",
      "End with an overall observation or conclusion.",
      "Maintain logical sequencing throughout the paragraph.",
      "Check that all comparisons are factually accurate."
    ]
  },

  {
    subject: "English",
    group: "Writing & Language",
    title: "Grammar",
    points: [
      "Revise the prescribed grammar topics using context-based questions.",
      "Tenses indicate the time or completion of an action.",
      "Present tense generally describes current actions, facts or habitual activities.",
      "Past tense generally describes completed actions or past situations.",
      "Future forms describe expected or planned actions.",
      "Reported speech changes direct statements into indirect forms.",
      "Pronouns may change when direct speech is reported.",
      "Time and place expressions may also change in reported speech.",
      "Modals express meanings such as ability, possibility, permission, obligation and advice.",
      "Subject-verb agreement requires the verb to match the subject in number and person.",
      "Collective nouns require careful attention to context.",
      "Read the complete sentence before selecting a grammar option.",
      "Check tense consistency across connected sentences.",
      "Use context rather than choosing an answer based only on one isolated word."
    ]
  },

  {
    subject: "English",
    group: "Writing & Language",
    title: "Reading Comprehension",
    points: [
      "Read the passage carefully before answering detailed questions.",
      "Read the questions early to know what information to look for.",
      "Identify the central idea of the passage.",
      "Distinguish main points from supporting details.",
      "For factual questions, locate the relevant information directly in the passage.",
      "For inference questions, combine clues from different parts of the text.",
      "Do not add information that is not supported by the passage.",
      "Use concise answers unless a specific length is required.",
      "For vocabulary questions, use the context to determine meaning.",
      "Pay attention to words such as however, therefore, although and because.",
      "For title questions, choose the option that best represents the entire passage.",
      "Check every answer against the wording of the question before submitting."
    ]
  },

  // =========================================================
  // SST — HISTORY
  // =========================================================

  {
    subject: "SST",
    group: "History",
    title: "The Rise of Nationalism in Europe",
    points: [
      "The French Revolution introduced ideas of liberty, equality and fraternity.",
      "The revolution helped spread the idea that sovereignty should belong to the nation rather than a monarch.",
      "Napoleon introduced administrative reforms but also imposed French control over conquered territories.",
      "The Napoleonic Code established equality before law and ended some privileges based on birth.",
      "The Congress of Vienna in 1815 attempted to restore conservative political order in Europe.",
      "Conservatives generally opposed revolutionary changes and supported traditional institutions.",
      "Liberal nationalism emphasised individual freedom, equality before law and representative government.",
      "Economic nationalism encouraged removal of internal trade barriers.",
      "The Zollverein helped create an economic union among many German states.",
      "Germany was unified under Prussian leadership and the influence of Otto von Bismarck.",
      "Italy was unified through the contributions of figures such as Mazzini, Cavour and Garibaldi.",
      "Nationalism developed differently in the Balkans because of diverse communities and declining Ottoman control.",
      "Romanticism used culture, poetry, music and folklore to build national identity.",
      "Nationalism could create unity but could also produce rivalry and conflict.",
      "The Balkans became an area of tension among competing national groups and European powers."
    ]
  },

  {
    subject: "SST",
    group: "History",
    title: "Nationalism in India",
    points: [
      "The First World War created economic and political difficulties in India.",
      "The Rowlatt Act allowed detention without trial and was strongly opposed.",
      "The Jallianwala Bagh massacre became a major turning point in anti-colonial sentiment.",
      "Mahatma Gandhi launched the Non-Cooperation Movement in 1920.",
      "The movement encouraged people to boycott government institutions and foreign goods.",
      "The movement was withdrawn after the Chauri Chaura incident because of violence.",
      "The Civil Disobedience Movement began with the Salt March in 1930.",
      "The Salt March challenged the British monopoly over salt.",
      "Different social groups joined nationalist movements for different reasons.",
      "Peasants, business groups, workers, tribals and women participated in different ways.",
      "The participation of different communities was not always uniform.",
      "Symbols such as Bharat Mata and the national flag helped create a sense of collective identity.",
      "Folklore, songs and reinterpretation of history also contributed to nationalism.",
      "Nationalism in India developed through both mass political action and cultural processes.",
      "The struggle ultimately contributed to India's independence in 1947."
    ]
  },

  {
    subject: "SST",
    group: "History",
    title: "The Making of a Global World",
    points: [
      "Globalisation is not a completely new phenomenon; trade and migration connected regions for centuries.",
      "The Silk Routes linked Asia with Europe and other regions through trade and cultural exchange.",
      "Food, crops and technologies travelled across continents.",
      "The nineteenth century saw increased movement of goods, people, capital and labour.",
      "Indentured labourers were transported to plantations and other colonies under difficult conditions.",
      "European imperialism reshaped economies and societies in Asia and Africa.",
      "Technological developments such as railways, steamships and telegraphs increased global connectivity.",
      "The First World War disrupted international trade and economic relationships.",
      "The Great Depression began in 1929 and caused severe economic hardship.",
      "Agricultural prices collapsed, affecting farmers and rural economies.",
      "Unemployment and falling incomes spread across many countries.",
      "The Second World War was followed by efforts to create a more stable international economic system.",
      "Institutions such as the IMF and World Bank emerged in the post-war period.",
      "Global economic integration expanded further in the later twentieth century."
    ]
  },

  {
    subject: "SST",
    group: "History",
    title: "The Age of Industrialisation",
    points: [
      "Industrialisation involved changes in production, technology, labour and markets.",
      "Proto-industrialisation existed before the rise of modern factories.",
      "Merchants supplied raw materials to rural households that produced goods for wider markets.",
      "Factories became increasingly important with the spread of machines and steam power.",
      "Britain was an early centre of industrialisation.",
      "The cotton textile industry became one of Britain's major industrial sectors.",
      "Industrialisation did not immediately eliminate hand production.",
      "Many products continued to be made by skilled workers because handmade goods could be specialised and flexible.",
      "Indian textile production was highly developed before colonial industrialisation.",
      "British policies and machine-made imports damaged many Indian textile producers.",
      "Indian industrialists later established mills and factories.",
      "Industrial workers often faced long hours, low wages and uncertain employment.",
      "Advertising and branding became important for creating demand for industrial goods.",
      "Industrialisation was uneven across regions and sectors."
    ]
  },

  {
    subject: "SST",
    group: "History",
    title: "Print Culture and the Modern World",
    points: [
      "Printing developed in East Asia before reaching Europe.",
      "Woodblock printing was used in China, Japan and Korea.",
      "Johann Gutenberg developed the printing press in Europe in the fifteenth century.",
      "The printing press greatly increased the speed and quantity of book production.",
      "Printed books became more accessible to wider sections of society.",
      "The print revolution created new reading publics.",
      "Religious debates were influenced by the spread of printed ideas.",
      "Martin Luther's writings were widely circulated through print.",
      "Some authorities feared that print could spread rebellious or heretical ideas.",
      "Print helped spread political and social ideas during periods of change.",
      "In India, print developed through newspapers, journals, religious texts and literature.",
      "Social reformers used print to debate issues such as caste, religion and women's education.",
      "Colonial authorities sometimes imposed censorship on newspapers and publications.",
      "Print helped create a wider public sphere and encouraged discussion."
    ]
  },

  // =========================================================
  // SST — GEOGRAPHY
  // =========================================================

  {
    subject: "SST",
    group: "Geography",
    title: "Resources and Development",
    points: [
      "A resource is anything available in the environment that can satisfy human needs when it is technologically accessible and economically feasible.",
      "Resources can be classified by origin, exhaustibility, ownership and status of development.",
      "Biotic resources are obtained from the biosphere and include living organisms.",
      "Abiotic resources are non-living resources such as rocks and minerals.",
      "Renewable resources can be replenished under suitable conditions.",
      "Non-renewable resources are limited and take long periods to form.",
      "Individual, community, national and international resources differ according to ownership.",
      "Resource planning is necessary because resources are unevenly distributed.",
      "Sustainable development requires careful use of resources.",
      "Land is an important natural resource supporting agriculture, forests and settlements.",
      "Land degradation can result from deforestation, overgrazing, mining and inappropriate agricultural practices.",
      "Soil is a renewable resource but can be degraded if poorly managed.",
      "Major Indian soil types include alluvial, black, red and yellow, laterite, arid and forest/mountain soils.",
      "Soil conservation methods include contour ploughing, terrace farming, strip cropping and shelter belts.",
      "Planning and conservation help maintain resource availability for future generations."
    ]
  },

  {
    subject: "SST",
    group: "Geography",
    title: "Forest and Wildlife Resources",
    points: [
      "Biodiversity refers to the variety of living organisms in an area.",
      "Forests provide habitat, resources, soil protection and ecological services.",
      "Wildlife includes animals, birds and other organisms living in natural ecosystems.",
      "Species may be classified as normal, endangered, vulnerable, rare, endemic or extinct.",
      "Habitat destruction is a major cause of biodiversity loss.",
      "Poaching and illegal trade threaten wildlife populations.",
      "Pollution, hunting, overexploitation and invasive species can also affect biodiversity.",
      "Protected areas include national parks, wildlife sanctuaries and biosphere reserves.",
      "Conservation aims to protect species as well as their habitats.",
      "Local communities can play an important role in protecting forests.",
      "Sacred groves are examples of community-based conservation traditions.",
      "Project Tiger was launched to protect tiger populations and habitats.",
      "Conservation must consider the needs of both ecosystems and people dependent on forest resources.",
      "Biodiversity conservation is important for ecological stability and future generations."
    ]
  },

  {
    subject: "SST",
    group: "Geography",
    title: "Water Resources",
    points: [
      "Water is essential for life, agriculture, industry and domestic activities.",
      "Water scarcity can occur even in areas with rainfall because demand and distribution vary.",
      "Population growth, urbanisation and industrialisation increase demand for water.",
      "Irrigated agriculture consumes a large share of available freshwater.",
      "Multipurpose river valley projects provide irrigation, hydroelectricity, flood control and water supply.",
      "Large dams can also cause displacement and ecological changes.",
      "Conflicts may arise over sharing river water between regions and states.",
      "Rainwater harvesting is an important method of water conservation.",
      "Traditional water harvesting systems vary across different regions of India.",
      "Groundwater recharge can be improved by suitable harvesting and recharge structures.",
      "Water management should focus on efficient use rather than unlimited extraction.",
      "Drip and sprinkler irrigation can reduce water wastage in suitable conditions.",
      "Sustainable water management requires participation of communities and responsible planning."
    ]
  },

  {
    subject: "SST",
    group: "Geography",
    title: "Agriculture",
    points: [
      "Agriculture is a major economic activity and source of livelihood in India.",
      "Indian agriculture includes primitive subsistence farming, intensive subsistence farming and commercial farming.",
      "Shifting cultivation is a form of primitive subsistence agriculture practiced in some regions.",
      "Rice requires high temperature, rainfall and suitable soil conditions.",
      "Wheat is an important rabi crop requiring cooler growing conditions.",
      "Millets are hardy crops that can grow in relatively dry conditions.",
      "Pulses help improve soil fertility because many legumes support nitrogen fixation.",
      "Sugarcane is a major commercial crop requiring a long growing season.",
      "Tea and coffee are important plantation crops.",
      "Cotton and jute are important fibre crops.",
      "Cropping patterns depend on climate, soil, irrigation, technology and market demand.",
      "Green Revolution technologies increased food-grain production in selected regions.",
      "Modern agriculture can create environmental problems through excessive chemical use and groundwater extraction.",
      "Diversification and sustainable farming practices can reduce environmental pressure."
    ]
  },

  {
    subject: "SST",
    group: "Geography",
    title: "Minerals and Energy Resources",
    points: [
      "Minerals are naturally occurring substances with definite chemical and physical properties.",
      "Minerals are broadly classified as metallic and non-metallic.",
      "Ferrous minerals contain iron, while non-ferrous minerals do not.",
      "Iron ore is a major mineral supporting the iron and steel industry.",
      "Manganese is important in steel production and other industries.",
      "Bauxite is the main ore of aluminium.",
      "Mica is widely used because of its insulating properties.",
      "Limestone is an important raw material for the cement industry.",
      "Coal, petroleum and natural gas are major conventional energy resources.",
      "Coal is widely used for electricity generation and industry.",
      "Petroleum is used as fuel and as a raw material for many industries.",
      "Natural gas is a relatively cleaner fossil fuel but remains non-renewable.",
      "Solar, wind, tidal, biogas and geothermal energy are non-conventional sources.",
      "Mineral resources are finite and should be conserved through efficient use and recycling.",
      "Energy conservation reduces resource depletion and environmental impacts."
    ]
  },

  {
    subject: "SST",
    group: "Geography",
    title: "Manufacturing Industries",
    points: [
      "Manufacturing involves transforming raw materials into more useful finished or semi-finished products.",
      "Manufacturing contributes to employment, trade and economic development.",
      "Industrial location depends on raw materials, labour, power, capital, transport and markets.",
      "Agro-based industries use agricultural products as raw materials.",
      "The cotton textile industry is a major traditional industry in India.",
      "Jute industries are concentrated mainly near jute-growing areas and transport networks.",
      "The iron and steel industry is a basic industry because many other industries depend on it.",
      "Cement is essential for construction and infrastructure.",
      "Chemical industries produce a wide range of products used in agriculture and manufacturing.",
      "Automobile industries are concentrated around major markets and transport networks.",
      "Industrial pollution can affect air, water and land.",
      "Air pollution may result from smoke, gases and particulate matter released by industries.",
      "Water pollution can result from untreated industrial effluents.",
      "Pollution control requires cleaner technology, waste treatment and efficient resource use."
    ]
  },

  {
    subject: "SST",
    group: "Geography",
    title: "Lifelines of National Economy",
    points: [
      "Transport and communication connect producers, consumers, markets and regions.",
      "Roadways are useful for short and medium-distance movement and provide door-to-door service.",
      "Railways are important for long-distance movement of passengers and bulk goods.",
      "Pipelines transport liquids and gases such as petroleum and natural gas.",
      "Waterways are economical for carrying heavy and bulky goods over long distances.",
      "Airways are the fastest mode of transport and are useful for distant and difficult terrain.",
      "Communication systems include personal and mass communication.",
      "International trade connects India with global markets.",
      "Exports bring foreign exchange while imports provide goods and resources from other countries.",
      "Ports act as gateways for international trade.",
      "Tourism contributes to employment, income and cultural exchange.",
      "Transport networks are important for national integration and economic development."
    ]
  },

  // =========================================================
  // SST — POLITICAL SCIENCE
  // =========================================================

  {
    subject: "SST",
    group: "Political Science",
    title: "Power Sharing",
    points: [
      "Power sharing means distributing political power among different individuals, groups or institutions.",
      "Power sharing reduces the possibility of conflict among social groups.",
      "Belgium adopted accommodation among different linguistic communities.",
      "Sri Lanka followed majoritarian policies that created conflict with minority communities.",
      "Horizontal power sharing occurs among the legislature, executive and judiciary.",
      "Vertical power sharing occurs among different levels of government.",
      "Power can also be shared among social groups through representation and community arrangements.",
      "Political parties, pressure groups and movements can influence or share political power.",
      "Power sharing is desirable for practical or prudential reasons because it reduces conflict.",
      "It is also desirable on moral grounds because people affected by decisions should have a role in making them.",
      "Democracy is strengthened when diverse interests receive representation.",
      "Majoritarianism can create alienation and instability when minority interests are ignored."
    ]
  },

  {
    subject: "SST",
    group: "Political Science",
    title: "Federalism",
    points: [
      "Federalism is a system with two or more levels of government.",
      "Different levels have constitutionally guaranteed powers and responsibilities.",
      "The Constitution defines the division of powers between levels of government.",
      "An independent judiciary helps resolve disputes between governments.",
      "India has Union, State and local levels of government.",
      "The Union List contains subjects of national importance.",
      "The State List contains subjects mainly related to states.",
      "The Concurrent List contains subjects on which both Union and State governments can legislate.",
      "Residuary powers in India belong to the Union government.",
      "Constitutional changes affecting the federal division generally require special procedures.",
      "India's linguistic reorganisation of states helped accommodate regional identities.",
      "The language policy avoided declaring one language as the sole national language.",
      "Decentralisation transferred some powers to local governments.",
      "Panchayats and municipalities are important institutions of local self-government.",
      "Federalism works effectively when different levels respect constitutional arrangements."
    ]
  },

  {
    subject: "SST",
    group: "Political Science",
    title: "Gender, Religion and Caste",
    points: [
      "Gender division refers to social differences created between men and women.",
      "Traditional gender roles often assign household responsibilities disproportionately to women.",
      "Women have historically faced unequal access to education, employment and political representation.",
      "Gender equality requires equal opportunities and participation.",
      "Communalism occurs when religion is used as the basis for political domination or conflict.",
      "Religious differences do not automatically create communalism.",
      "Communal politics can take the form of religious prejudices, political mobilisation or demands for dominance.",
      "The Indian Constitution provides freedom of religion and equal citizenship.",
      "Caste is a social hierarchy that historically determined occupation and social status.",
      "Caste inequalities have declined in some areas but remain socially and economically relevant.",
      "Political representation can allow disadvantaged groups to raise their demands.",
      "Caste and religion can influence elections, but voters are not determined by only one identity.",
      "Democracy provides mechanisms for disadvantaged groups to demand equality."
    ]
  },

  {
    subject: "SST",
    group: "Political Science",
    title: "Political Parties",
    points: [
      "A political party is a group of people who come together to contest elections and hold political power.",
      "Political parties contest elections and put forward candidates.",
      "They formulate policies and programmes for governance.",
      "Parties play an important role in making laws and forming governments.",
      "They shape public opinion and raise issues of public concern.",
      "The opposition party or parties scrutinise the government and provide alternatives.",
      "India has a multi-party system because of its social and regional diversity.",
      "National parties operate across several states and deal with national issues.",
      "State or regional parties focus strongly on particular regions or communities.",
      "Major challenges include lack of internal democracy.",
      "Dynastic succession can reduce opportunities for ordinary party members.",
      "Money and muscle power can influence political competition.",
      "Parties may sometimes fail to offer meaningful choices to voters.",
      "Reforms, transparency and active citizen participation can strengthen political parties."
    ]
  },

  {
    subject: "SST",
    group: "Political Science",
    title: "Outcomes of Democracy",
    points: [
      "Democracy produces a government that is accountable to citizens.",
      "Democratic governments are expected to be responsive to public needs.",
      "Democracy provides procedures for correcting mistakes.",
      "Political competition can make governments answerable to voters.",
      "Democracy enhances the legitimacy of government because people participate in choosing rulers.",
      "Democratic decision-making can take more time because consultation and discussion are involved.",
      "Democracy accommodates social differences and provides peaceful methods of resolving conflicts.",
      "Democracy promotes political equality through the principle of one person, one vote, one value.",
      "Democracy does not automatically guarantee economic equality.",
      "Poverty and inequalities can continue under democratic governments.",
      "The dignity of citizens is an important outcome of democratic equality.",
      "Democracy allows disadvantaged groups to demand rights and representation.",
      "The quality of democracy depends on institutions, participation and respect for constitutional values."
    ]
  },

  // =========================================================
  // SST — ECONOMICS
  // =========================================================

  {
    subject: "SST",
    group: "Economics",
    title: "Development",
    points: [
      "Different people can have different ideas about what development means.",
      "Income is an important measure of development but is not the only factor.",
      "People may also value equal treatment, freedom, security, education and health.",
      "Per capita income is calculated by dividing total income by total population.",
      "Average income allows comparison between countries or regions with different populations.",
      "Public facilities such as schools and hospitals affect quality of life.",
      "Infant mortality rate indicates the number of children who die before reaching one year of age per thousand live births.",
      "Literacy and schooling are important indicators of development.",
      "Life expectancy reflects average expected years of life and is an important health indicator.",
      "Human development considers several dimensions rather than income alone.",
      "Sustainable development means using resources in a way that does not compromise future generations.",
      "Environmental degradation can reduce long-term development possibilities.",
      "Development goals may conflict because what benefits one group may impose costs on another."
    ]
  },

  {
    subject: "SST",
    group: "Economics",
    title: "Sectors of the Indian Economy",
    points: [
      "Economic activities can be classified into primary, secondary and tertiary sectors.",
      "The primary sector uses natural resources directly, such as agriculture, fishing and mining.",
      "The secondary sector converts raw materials into manufactured goods.",
      "The tertiary sector provides services such as transport, banking, education and healthcare.",
      "The organised sector follows government rules and regulations regarding employment and working conditions.",
      "The unorganised sector often has less job security and fewer formal benefits.",
      "The public sector is owned or controlled by the government.",
      "The private sector is owned mainly by individuals or private organisations.",
      "GDP measures the value of final goods and services produced within a country during a specified period.",
      "The tertiary sector has become increasingly important in India's economy.",
      "Disguised unemployment occurs when more people work on an activity than are actually required.",
      "Public sector activities may provide essential services even when they are not highly profitable.",
      "Employment generation remains an important economic challenge."
    ]
  },

  {
    subject: "SST",
    group: "Economics",
    title: "Money and Credit",
    points: [
      "Money acts as a medium of exchange.",
      "Money solves the problem of double coincidence of wants in barter.",
      "Modern money includes currency and demand deposits.",
      "Banks accept deposits from people and provide loans to borrowers.",
      "Deposits can be used for payments through cheques and other banking facilities.",
      "Credit can help people invest in businesses, farming or other productive activities.",
      "Formal sources of credit include banks and cooperative societies.",
      "Informal sources include moneylenders, traders, employers, relatives and friends.",
      "Formal credit is generally regulated by institutions and government rules.",
      "Informal credit may carry high interest rates and unfavourable conditions.",
      "Collateral is an asset that a borrower may pledge as security for a loan.",
      "Self-help groups can improve access to small loans for members.",
      "Credit can be beneficial when used for productive activities but can create problems when repayment becomes difficult.",
      "A healthy credit system supports economic activity and financial inclusion."
    ]
  },

  {
    subject: "SST",
    group: "Economics",
    title: "Globalisation and the Indian Economy",
    points: [
      "Globalisation refers to the increasing integration of production and markets across countries.",
      "Multinational corporations operate and organise production in more than one country.",
      "MNCs may invest directly in factories, offices or other production facilities.",
      "They often organise production through networks of suppliers and producers across countries.",
      "Foreign investment can bring capital, technology and access to global markets.",
      "Liberalisation reduced many restrictions on imports and foreign investment in India.",
      "Improved transport and communication have made global production easier.",
      "Information and communication technology has accelerated global connections.",
      "Consumers may get a wider range of goods through globalisation.",
      "Small producers may face increased competition from large companies and imported goods.",
      "The benefits of globalisation are not distributed equally among all groups.",
      "Fair policies and support can help smaller producers participate more effectively.",
      "Globalisation has linked Indian producers and consumers more closely with world markets."
    ]
  },

  {
    subject: "SST",
    group: "Economics",
    title: "Consumer Rights",
    points: [
      "Consumers may be exploited through unsafe products, poor quality, overcharging or misleading information.",
      "Consumer awareness helps people make informed purchasing decisions.",
      "The right to safety protects consumers against hazardous goods and services.",
      "The right to information provides consumers with important details about products and services.",
      "The right to choose means consumers should have access to a variety of products at competitive prices.",
      "The right to be heard allows consumer interests to be represented.",
      "The right to seek redressal allows consumers to obtain compensation or correction for unfair practices.",
      "The right to consumer education promotes awareness of rights and responsibilities.",
      "Quality marks and standardisation symbols help consumers identify products meeting specified standards.",
      "Consumers should check labels, expiry dates, prices and relevant quality information.",
      "Bills and receipts can provide evidence when making a complaint.",
      "Consumer organisations can help spread awareness and support consumer interests.",
      "Responsible consumers should also use products carefully and avoid unnecessary waste."
    ]
  }
];


// =========================================================
// APP
// =========================================================

const gate = document.getElementById("gate");
const app = document.getElementById("app");
const gateForm = document.getElementById("gateForm");
const passwordInput = document.getElementById("passwordInput");
const gateError = document.getElementById("gateError");

const searchInput = document.getElementById("searchInput");
const library = document.getElementById("library");
const searchResults = document.getElementById("searchResults");

const chapterGrid = document.getElementById("chapterGrid");
const resultsGrid = document.getElementById("resultsGrid");

const libraryTitle = document.getElementById("libraryTitle");
const libraryEyebrow = document.getElementById("libraryEyebrow");

const filters = document.getElementById("filters");
const countPill = document.getElementById("countPill");
const resultCount = document.getElementById("resultCount");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalGroup = document.getElementById("modalGroup");
const modalPoints = document.getElementById("modalPoints");

let currentSubject = null;
let currentGroup = "All";


// =========================================================
// ACCESS
// =========================================================

function showApp() {
    gate.classList.add("hidden");
    app.classList.remove("hidden");
}

if (sessionStorage.getItem("studyos_access") === "yes") {
    showApp();
}

gateForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (passwordInput.value === ACCESS_CODE) {
        sessionStorage.setItem("studyos_access", "yes");
        gateError.textContent = "Unlocked.";
        showApp();
    } else {
        gateError.textContent = "Wrong access code.";
        passwordInput.select();
    }
});


// =========================================================
// LOGOUT
// =========================================================

document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.removeItem("studyos_access");
    location.reload();
});


// =========================================================
// DARK MODE
// =========================================================

document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "studyos_theme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );
});

if (localStorage.getItem("studyos_theme") === "dark") {
    document.body.classList.add("dark");
}


// =========================================================
// SUBJECT BUTTONS
// =========================================================

document.querySelectorAll(".subject-card").forEach(function (card) {
    card.addEventListener("click", function () {
        openSubject(card.dataset.subject);
    });
});


// =========================================================
// BACK BUTTON
// =========================================================

document.getElementById("backBtn").addEventListener("click", function () {
    library.classList.add("hidden");
    searchResults.classList.add("hidden");

    document.getElementById("subjects").classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById("subjects").offsetTop - 80,
        behavior: "smooth"
    });
});


// =========================================================
// HOME BUTTON
// =========================================================

document.getElementById("homeBtn").addEventListener("click", function () {
    location.reload();
});


// =========================================================
// OPEN SUBJECT
// =========================================================

function openSubject(subject) {

    currentSubject = subject;
    currentGroup = "All";

    document.getElementById("subjects").classList.add("hidden");
    searchResults.classList.add("hidden");

    library.classList.remove("hidden");

    libraryTitle.textContent =
        subject === "SST"
            ? "Social Science"
            : subject;

    libraryEyebrow.textContent =
        subject === "SST"
            ? "SOCIAL SCIENCE"
            : "SUBJECT";

    buildFilters();
    renderLibrary();

    library.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================================================
// FILTERS
// =========================================================

function buildFilters() {

    const groups = [
        ...new Set(
            CHAPTERS
                .filter(x => x.subject === currentSubject)
                .map(x => x.group)
        )
    ];

    filters.innerHTML = ["All", ...groups]
        .map(function (group) {

            return `
                <button
                    class="filter ${group === currentGroup ? "active" : ""}"
                    data-group="${escapeHtml(group)}"
                >
                    ${escapeHtml(group)}
                </button>
            `;
        })
        .join("");

    filters.querySelectorAll(".filter").forEach(function (button) {

        button.addEventListener("click", function () {

            currentGroup = button.dataset.group;

            buildFilters();
            renderLibrary();
        });
    });
}


// =========================================================
// CHAPTER CARD
// =========================================================

function createCard(item, index) {

    return `
        <button class="chapter-card" data-index="${CHAPTERS.indexOf(item)}">

            <span class="num">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>
                ${escapeHtml(item.title)}
            </h3>

            <p>
                ${escapeHtml(item.points[0])}
            </p>

            <span class="tag">
                ${escapeHtml(item.group)}
            </span>

        </button>
    `;
}


// =========================================================
// RENDER LIBRARY
// =========================================================

function renderLibrary() {

    const items = CHAPTERS.filter(function (chapter) {

        return (
            chapter.subject === currentSubject &&
            (
                currentGroup === "All" ||
                chapter.group === currentGroup
            )
        );

    });

    chapterGrid.innerHTML = items
        .map(function (item, index) {
            return createCard(item, index);
        })
        .join("");

    countPill.textContent =
        `${items.length} chapter${items.length === 1 ? "" : "s"}`;

    bindCards(chapterGrid);
}


// =========================================================
// BIND CHAPTER CARDS
// =========================================================

function bindCards(container) {

    container
        .querySelectorAll(".chapter-card")
        .forEach(function (card) {

            card.addEventListener("click", function () {

                openNote(
                    Number(card.dataset.index)
                );

            });

        });
}


// =========================================================
// OPEN NOTES
// =========================================================

function openNote(index) {

    const item = CHAPTERS[index];

    modalGroup.textContent =
        `${item.subject} • ${item.group}`;

    modalTitle.textContent =
        item.title;

    modalPoints.innerHTML =
        item.points
            .map(function (point) {

                return `
                    <div class="note">
                        ${escapeHtml(point)}
                    </div>
                `;

            })
            .join("");

    modal.classList.remove("hidden");
}


// =========================================================
// CLOSE MODAL
// =========================================================

function closeModal() {
    modal.classList.add("hidden");
}

document
    .getElementById("modalClose")
    .addEventListener("click", closeModal);

document
    .getElementById("modalClose2")
    .addEventListener("click", closeModal);

document
    .getElementById("modalBackdrop")
    .addEventListener("click", closeModal);


// =========================================================
// SEARCH
// =========================================================

function search(query) {

    query = query.trim().toLowerCase();

    if (!query) {

        searchResults.classList.add("hidden");

        if (currentSubject) {
            library.classList.remove("hidden");
        } else {
            document
                .getElementById("subjects")
                .classList.remove("hidden");
        }

        return;
    }

    const results = CHAPTERS.filter(function (chapter) {

        const searchableText =
            [
                chapter.title,
                chapter.subject,
                chapter.group,
                ...chapter.points
            ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(query);
    });

    library.classList.add("hidden");
    document.getElementById("subjects").classList.add("hidden");

    searchResults.classList.remove("hidden");

    resultCount.textContent = results.length;

    if (results.length === 0) {

        resultsGrid.innerHTML = `
            <div class="quick-card">
                <h3>No results</h3>
                <p>
                    Try searching for a chapter,
                    keyword, formula or concept.
                </p>
            </div>
        `;

        return;
    }

    resultsGrid.innerHTML = results
        .map(function (item, index) {
            return createCard(item, index);
        })
        .join("");

    bindCards(resultsGrid);
}

searchInput.addEventListener("input", function (e) {
    search(e.target.value);
});


// =========================================================
// KEYBOARD SHORTCUTS
// =========================================================

document.addEventListener("keydown", function (e) {

    if (
        (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === "k"
    ) {

        e.preventDefault();
        searchInput.focus();
    }

    if (e.key === "Escape") {
        closeModal();
    }

});


// =========================================================
// SECURITY / HTML ESCAPING
// =========================================================

function escapeHtml(value) {

    return String(value).replace(
        /[&<>"']/g,
        function (character) {

            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return entities[character];
        }
    );
}
