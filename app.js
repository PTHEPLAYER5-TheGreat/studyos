const ACCESS_CODE = "STUDY10";

const DATA = [
  // =========================
  // SCIENCE — PHYSICS
  // =========================

  {
    subject:"Science", group:"Physics", title:"Light – Reflection and Refraction",
    points:[
      "Reflection is the bouncing back of light from a surface.",
      "Laws of reflection: angle of incidence equals angle of reflection, and the incident ray, reflected ray and normal lie in the same plane.",
      "Mirror formula: 1/f = 1/v + 1/u.",
      "Magnification for a mirror: m = hᵢ/hₒ = −v/u.",
      "A concave mirror can form real or virtual images depending on the position of the object.",
      "A convex mirror always forms a virtual, erect and diminished image and provides a wide field of view.",
      "Refraction is the change in direction of light when it passes obliquely from one transparent medium to another.",
      "Lens formula: 1/f = 1/v − 1/u. Magnification of a lens: m = v/u.",
      "Power of a lens: P = 1/f, where f is in metres. Unit is dioptre (D).",
      "A convex lens is converging, while a concave lens is diverging."
    ]
  },

  {
    subject:"Science", group:"Physics", title:"The Human Eye and the Colourful World",
    points:[
      "The human eye acts like a natural optical instrument and forms an image on the retina.",
      "The iris controls the amount of light entering the eye by changing the size of the pupil.",
      "Accommodation is the ability of the eye lens to change its focal length to focus on objects at different distances.",
      "The near point of a normal human eye is about 25 cm and its far point is infinity.",
      "Myopia causes difficulty in seeing distant objects and is corrected using a concave lens.",
      "Hypermetropia causes difficulty in seeing nearby objects and is corrected using a convex lens.",
      "Presbyopia occurs mainly due to ageing and reduced power of accommodation.",
      "Dispersion is the splitting of white light into its constituent colours.",
      "The blue colour of the sky is mainly due to scattering of shorter wavelengths of light.",
      "The reddish appearance of the Sun near sunrise and sunset is due to scattering of light."
    ]
  },

  {
    subject:"Science", group:"Physics", title:"Electricity",
    points:[
      "Electric current is the rate of flow of electric charge: I = Q/t.",
      "Potential difference is work done per unit charge: V = W/Q.",
      "Ohm's law states that, at constant temperature, V is directly proportional to I: V = IR.",
      "Resistance depends on length, area of cross-section, nature of material and temperature.",
      "Resistance formula: R = ρl/A, where ρ is resistivity.",
      "In series combination, current is the same through every resistor and total resistance is R = R₁ + R₂ + R₃.",
      "In parallel combination, potential difference is the same across each resistor and 1/R = 1/R₁ + 1/R₂ + 1/R₃.",
      "Electric power: P = VI = I²R = V²/R.",
      "Electrical energy is commonly measured commercially in kilowatt-hour (kWh).",
      "Joule's heating law: H = I²Rt."
    ]
  },

  {
    subject:"Science", group:"Physics", title:"Magnetic Effects of Electric Current",
    points:[
      "A current-carrying conductor produces a magnetic field around it.",
      "The direction of the magnetic field around a straight conductor is found using the right-hand thumb rule.",
      "The magnetic field of a current-carrying solenoid resembles the field of a bar magnet.",
      "Increasing current increases the strength of the magnetic field.",
      "Fleming's left-hand rule gives the direction of force on a current-carrying conductor in a magnetic field.",
      "An electric motor converts electrical energy into mechanical energy.",
      "Electromagnetic induction is the production of electric current due to a changing magnetic field.",
      "Fleming's right-hand rule gives the direction of induced current in a conductor.",
      "An electric generator converts mechanical energy into electrical energy.",
      "Domestic circuits use live, neutral and earth wires, with safety devices such as fuses or MCBs."
    ]
  },

  {
    subject:"Science", group:"Physics", title:"Sources of Energy",
    points:[
      "A good source of energy should provide a large amount of energy, be convenient, economical and preferably have low environmental impact.",
      "Renewable sources include solar, wind, hydro, biomass and geothermal energy.",
      "Non-renewable sources include coal, petroleum and natural gas.",
      "Fossil fuels are major sources of energy but cause air pollution and increase greenhouse-gas emissions.",
      "Solar cells convert solar energy directly into electrical energy using the photovoltaic effect.",
      "Hydroelectric power uses the potential energy of stored water to generate electricity.",
      "Wind energy uses moving air to rotate turbines connected to generators.",
      "Nuclear energy is released during nuclear reactions and can produce large amounts of energy.",
      "Biogas is produced by the anaerobic decomposition of organic matter.",
      "No energy source is completely ideal; environmental, economic and availability factors must be considered."
    ]
  },

  // =========================
  // SCIENCE — CHEMISTRY
  // =========================

  {
    subject:"Science", group:"Chemistry", title:"Chemical Reactions and Equations",
    points:[
      "A chemical reaction produces one or more new substances with different properties.",
      "A chemical equation represents a chemical reaction using symbols and formulae.",
      "A balanced chemical equation obeys the law of conservation of mass.",
      "Combination reaction: two or more substances combine to form a single product.",
      "Decomposition reaction: one compound breaks into two or more simpler substances.",
      "Displacement reaction: a more reactive element displaces a less reactive element.",
      "Double displacement reactions involve exchange of ions between two compounds.",
      "Oxidation can involve addition of oxygen, removal of hydrogen or loss of electrons.",
      "Reduction can involve removal of oxygen, addition of hydrogen or gain of electrons.",
      "Corrosion and rancidity are important effects of oxidation."
    ]
  },

  {
    subject:"Science", group:"Chemistry", title:"Acids, Bases and Salts",
    points:[
      "Acids produce H⁺ ions in aqueous solution, while bases produce OH⁻ ions.",
      "The pH scale generally ranges from 0 to 14 and indicates acidic or basic nature.",
      "pH below 7 is acidic, pH 7 is neutral and pH above 7 is basic.",
      "Acid + base → salt + water is called neutralisation.",
      "Acids react with many metals to produce salt and hydrogen gas.",
      "Acids react with carbonates and hydrogencarbonates to release carbon dioxide.",
      "Baking soda is sodium hydrogencarbonate: NaHCO₃.",
      "Washing soda is sodium carbonate decahydrate: Na₂CO₃·10H₂O.",
      "Bleaching powder is used for bleaching and disinfecting water.",
      "Plaster of Paris is calcium sulphate hemihydrate and is used for casts and moulds."
    ]
  },

  {
    subject:"Science", group:"Chemistry", title:"Metals and Non-metals",
    points:[
      "Metals are generally lustrous, malleable, ductile and good conductors of heat and electricity.",
      "Non-metals are generally poor conductors, though graphite is an important exception.",
      "The reactivity series arranges metals according to their tendency to lose electrons.",
      "Highly reactive metals such as sodium and potassium are extracted by electrolysis.",
      "Moderately reactive metals can often be obtained by reduction of their oxides.",
      "Ionic compounds usually have high melting and boiling points.",
      "Ionic compounds conduct electricity in molten or aqueous states because ions are free to move.",
      "Corrosion is the gradual deterioration of metals due to environmental reactions.",
      "Alloys are homogeneous mixtures of metals or a metal with another element.",
      "Examples include brass, bronze, stainless steel and solder."
    ]
  },

  {
    subject:"Science", group:"Chemistry", title:"Carbon and its Compounds",
    points:[
      "Carbon has valency four and forms four covalent bonds.",
      "Catenation is the ability of carbon atoms to form bonds with other carbon atoms.",
      "Saturated hydrocarbons contain only single bonds.",
      "Unsaturated hydrocarbons contain double or triple bonds.",
      "A homologous series has the same functional group and successive members differ by –CH₂–.",
      "Important functional groups include alcohol, aldehyde, ketone and carboxylic acid.",
      "Ethanol is an alcohol and ethanoic acid is a carboxylic acid.",
      "Esterification occurs when an alcohol reacts with a carboxylic acid in the presence of an acid catalyst.",
      "Soap molecules have a hydrophilic end and a hydrophobic hydrocarbon tail.",
      "Important reactions of carbon compounds include combustion, oxidation, addition, substitution and esterification."
    ]
  },

  {
    subject:"Science", group:"Chemistry", title:"Periodic Classification of Elements",
    points:[
      "The modern periodic law states that properties of elements are periodic functions of their atomic numbers.",
      "The modern periodic table contains 18 groups and 7 periods.",
      "Elements in the same group generally have similar valence-electron configurations and similar chemical properties.",
      "Valency generally remains constant across a group but shows a regular trend across a period.",
      "Atomic size generally decreases from left to right across a period.",
      "Atomic size generally increases from top to bottom in a group.",
      "Metallic character generally decreases across a period and increases down a group.",
      "Non-metallic character generally increases across a period and decreases down a group.",
      "Noble gases have stable outer shells and are generally chemically unreactive.",
      "The periodic table helps predict properties and chemical behaviour of elements."
    ]
  },

  // =========================
  // SCIENCE — BIOLOGY
  // =========================

  {
    subject:"Science", group:"Biology", title:"Life Processes",
    points:[
      "Life processes are activities necessary for maintaining an organism's life.",
      "Major life processes include nutrition, respiration, transportation and excretion.",
      "Photosynthesis uses carbon dioxide, water, sunlight and chlorophyll to produce food.",
      "Human digestion involves ingestion, digestion, absorption, assimilation and egestion.",
      "Aerobic respiration uses oxygen and releases more energy than anaerobic respiration.",
      "In plants, xylem transports water and minerals while phloem transports food.",
      "The human circulatory system includes the heart, blood and blood vessels.",
      "Kidneys remove nitrogenous wastes from blood and maintain water and ion balance.",
      "The functional unit of the kidney is the nephron.",
      "Plants exchange gases mainly through stomata and lose water through transpiration."
    ]
  },

  {
    subject:"Science", group:"Biology", title:"Control and Coordination",
    points:[
      "Control and coordination allow organisms to respond appropriately to internal and external stimuli.",
      "The neuron is the structural and functional unit of the nervous system.",
      "A reflex action is a rapid, automatic response to a stimulus.",
      "The brain consists broadly of forebrain, midbrain and hindbrain regions.",
      "The spinal cord plays an important role in reflex actions and communication with the brain.",
      "Plants respond to stimuli through growth movements and chemical coordination.",
      "Auxin promotes cell growth and is involved in phototropic responses.",
      "Plant hormones include auxin, gibberellin, cytokinin, abscisic acid and ethylene.",
      "Animal hormones include insulin, thyroxine, adrenaline and growth hormone.",
      "The endocrine system coordinates many body functions through hormones released into the blood."
    ]
  },

  {
    subject:"Science", group:"Biology", title:"How do Organisms Reproduce?",
    points:[
      "Reproduction produces new individuals and ensures continuity of species.",
      "Asexual reproduction generally involves a single parent and produces genetically similar offspring.",
      "Asexual methods include fission, budding, fragmentation, regeneration and vegetative propagation.",
      "Sexual reproduction involves formation and fusion of male and female gametes.",
      "In flowering plants, pollination transfers pollen from anther to stigma.",
      "Fertilisation results in the formation of a zygote.",
      "Human males produce sperm while human females produce ova.",
      "The embryo develops in the uterus after implantation.",
      "Reproductive health includes hygiene, awareness and responsible prevention of reproductive infections.",
      "Variation generated during reproduction contributes to the survival and evolution of populations."
    ]
  },

  {
    subject:"Science", group:"Biology", title:"Heredity and Evolution",
    points:[
      "Heredity is the transmission of characteristics from parents to offspring.",
      "Genes are units of heredity located on chromosomes.",
      "Mendel used pea plants to study inheritance and proposed important principles of heredity.",
      "A dominant trait can be expressed in the presence of a contrasting recessive trait.",
      "Genotype refers to genetic makeup, while phenotype refers to observable characteristics.",
      "Sex determination in humans involves XX chromosomes in females and XY chromosomes in males.",
      "Variations arise due to genetic changes and differences in reproduction.",
      "Natural selection can favour variations that improve survival or reproduction.",
      "Fossils provide evidence about organisms that lived in the past.",
      "Homologous organs provide evidence of evolutionary relationships and common ancestry."
    ]
  },

  {
    subject:"Science", group:"Biology", title:"Our Environment",
    points:[
      "An ecosystem consists of living components and non-living components interacting with each other.",
      "Producers make food, while consumers depend directly or indirectly on producers.",
      "Decomposers break down dead organisms and return nutrients to the environment.",
      "A food chain represents the transfer of food and energy between organisms.",
      "Only a small fraction of energy passes from one trophic level to the next.",
      "Food webs show interconnected food chains within an ecosystem.",
      "Biological magnification causes certain non-biodegradable chemicals to become more concentrated at higher trophic levels.",
      "Biodegradable substances can be broken down naturally by microorganisms.",
      "Non-biodegradable waste persists for long periods and can cause environmental problems.",
      "The ozone layer absorbs much of the harmful ultraviolet radiation reaching Earth."
    ]
  },

  {
    subject:"Science", group:"Biology", title:"Sustainable Management of Natural Resources",
    points:[
      "Sustainable management means using resources carefully while protecting them for future generations.",
      "Forests provide biodiversity, soil protection, water regulation and livelihood resources.",
      "Local communities can play an important role in conservation and responsible resource use.",
      "Wildlife conservation protects biodiversity and ecological balance.",
      "Rainwater harvesting helps collect water and can recharge groundwater.",
      "Coal and petroleum are limited resources formed over very long geological periods.",
      "The 3R principle stands for Reduce, Reuse and Recycle.",
      "Large dams provide benefits such as irrigation and electricity but can also have social and environmental impacts.",
      "Sustainable development requires balancing environmental protection with human needs.",
      "Resource conservation is important because natural resources are limited and unevenly distributed."
    ]
  },

  // =========================
  // ENGLISH — PROSE
  // =========================

  {
    subject:"English", group:"First Flight – Prose", title:"A Letter to God",
    points:[
      "Lencho is a poor farmer whose crop is destroyed by a severe hailstorm.",
      "Lencho has complete faith in God and expects divine help.",
      "He writes a letter asking God for money to recover from the loss.",
      "The postmaster is impressed by Lencho's faith and decides to help him.",
      "The post office employees collect money and send it to Lencho.",
      "Lencho receives less money than he requested and assumes the post office employees stole the rest.",
      "The story creates irony because the people Lencho suspects are actually the ones who helped him.",
      "Major themes: faith, innocence, kindness, irony and human generosity."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"Nelson Mandela – Long Walk to Freedom",
    points:[
      "Mandela describes the inauguration of South Africa's first democratic government.",
      "The event represents victory over the apartheid system.",
      "Apartheid denied political and social equality to Black South Africans.",
      "Mandela honours the people who sacrificed their lives for freedom.",
      "He explains that courage does not mean absence of fear but victory over fear.",
      "He believes that both the oppressed and the oppressor lose their humanity under injustice.",
      "Freedom is presented as a responsibility rather than merely a personal privilege.",
      "Major themes: freedom, equality, courage, sacrifice, dignity and reconciliation."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"Stories About Flying – His First Flight",
    points:[
      "A young seagull is afraid to make his first flight.",
      "His siblings have already learned to fly and leave him behind.",
      "The young bird stays alone on the ledge because of fear.",
      "His parents encourage him but he still lacks confidence.",
      "His mother finally uses food to tempt him into leaving the ledge.",
      "The seagull discovers that his wings can support him.",
      "His fear disappears once he actually attempts to fly.",
      "Themes: fear, courage, confidence, independence and parental encouragement."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"Stories About Flying – The Black Aeroplane",
    points:[
      "The narrator is flying his old Dakota towards England.",
      "He sees dark storm clouds ahead but decides to continue.",
      "The storm causes poor visibility and makes navigation difficult.",
      "His instruments become unreliable during the flight.",
      "A mysterious black aeroplane appears and guides him through the storm.",
      "The narrator lands safely and asks about the other pilot.",
      "The control tower reports that no other aircraft was visible on the radar.",
      "The unexplained ending creates mystery and leaves the identity of the black aeroplane uncertain."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"From the Diary of Anne Frank",
    points:[
      "Anne Frank begins writing a diary because she feels she has no true friend to confide in.",
      "She names her diary Kitty and treats it like a trusted companion.",
      "Anne describes her school, classmates and teachers with humour and honesty.",
      "She considers writing a useful way to understand herself and her experiences.",
      "Mr Keesing repeatedly punishes Anne for talking in class.",
      "Anne responds creatively through essays about talking.",
      "Her final humorous response impresses Mr Keesing and changes his attitude.",
      "Themes: adolescence, loneliness, friendship, self-expression and observation."
    ]
  },

 {
    subject:"English", group:"First Flight – Prose", title:"Glimpses of India – A Baker from Goa",
    points:[
      "The chapter describes the traditional importance of bakers in Goa.",
      "Bread-making is shown as an important part of Goan culture.",
      "The narrator remembers the baker visiting homes with his traditional dress and equipment.",
      "Bread was associated with everyday meals and important celebrations.",
      "Traditional Portuguese influence can be seen in Goan baking customs.",
      "The baker's arrival was familiar and eagerly awaited by children.",
      "The chapter connects food with childhood memories and cultural identity.",
      "Themes: tradition, culture, food, memories and local heritage."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"Glimpses of India – Coorg",
    points:[
      "Coorg, also known as Kodagu, is a beautiful region of Karnataka.",
      "The region is known for coffee plantations, forests and scenic landscapes.",
      "The chapter describes the Kodavu people and their distinctive culture.",
      "The people of Coorg are associated with bravery and a strong martial tradition.",
      "The region has opportunities for adventure activities such as river rafting and trekking.",
      "Coffee cultivation is an important feature of the local economy and landscape.",
      "The chapter combines descriptions of geography, culture, history and tourism.",
      "Themes: natural beauty, culture, tradition, adventure and regional identity."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"Glimpses of India – Tea from Assam",
    points:[
      "Rajvir and Pranjol travel by train through Assam.",
      "Rajvir is fascinated by the vast tea gardens of Assam.",
      "Pranjol's family is connected with the tea industry.",
      "The chapter describes the carefully maintained rows of tea plants.",
      "Rajvir shares legends about the origin and discovery of tea.",
      "Tea cultivation became economically important in Assam.",
      "The journey introduces readers to the landscape and culture associated with tea production.",
      "Themes: nature, travel, tea cultivation, history and cultural geography."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"Mijbil the Otter",
    points:[
      "The narrator decides to keep an otter as a pet.",
      "He names the otter Mijbil, or Mij for short.",
      "Mij is intelligent, playful and highly curious.",
      "Water becomes one of Mij's favourite sources of entertainment.",
      "The narrator develops a strong bond with Mij.",
      "Travelling with Mij creates difficulties because airlines had rules about animals.",
      "Mij's playful behaviour attracts attention from people around him.",
      "Themes: companionship, animal behaviour, affection, curiosity and human-animal relationships."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"Madam Rides the Bus",
    points:[
      "Valli is an eight-year-old girl fascinated by the bus travelling between her village and town.",
      "She carefully observes the bus and learns details about its journey.",
      "Valli saves money secretly for a bus ride.",
      "She plans the journey carefully and travels without an adult accompanying her.",
      "The conductor affectionately calls her 'madam' because of her confident behaviour.",
      "The journey gives Valli a sense of independence and excitement.",
      "On the return journey she sees a dead cow, which changes her mood.",
      "Themes: curiosity, independence, observation, maturity and the realities of life."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"The Sermon at Benares",
    points:[
      "Kisa Gotami loses her only son and is overwhelmed by grief.",
      "She asks others for medicine to bring her son back.",
      "The Buddha tells her to collect mustard seeds from a house untouched by death.",
      "Kisa discovers that every household has experienced death.",
      "She gradually understands that death is universal and unavoidable.",
      "The Buddha teaches that attachment and grief are part of human suffering.",
      "Acceptance of reality can help a person overcome excessive sorrow.",
      "Themes: death, grief, acceptance, wisdom, suffering and detachment."
    ]
  },

  {
    subject:"English", group:"First Flight – Prose", title:"The Proposal",
    points:[
      "Lomov visits Chubukov's house intending to propose marriage to Natalya.",
      "Instead of calmly proposing, Lomov and Natalya begin arguing.",
      "Their arguments concern Oxen Meadows and the superiority of their dogs.",
      "Lomov becomes physically and emotionally agitated during the quarrels.",
      "Natalya wants to marry Lomov but continues arguing with him.",
      "Chubukov eventually encourages the marriage.",
      "The play uses exaggeration and absurd arguments to create comedy.",
      "Themes: marriage, greed, pride, social expectations, conflict and farce."
    ]
  },

  // =========================
  // ENGLISH — POEMS
  // =========================

  {
    subject:"English", group:"First Flight – Poems", title:"Dust of Snow",
    points:[
      "The poet describes a small incident involving a crow and a hemlock tree.",
      "Snow falls from the tree onto the poet.",
      "The simple natural event changes the poet's mood.",
      "The poet's regretful day is partly saved by this unexpected moment.",
      "Nature can influence human emotions in subtle ways.",
      "The crow and hemlock are traditionally associated with negative ideas, yet they create a positive effect here.",
      "The poem suggests that even small moments can bring hope.",
      "Themes: nature, mood, hope, transformation and unexpected joy."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"Fire and Ice",
    points:[
      "The poem considers possible ways in which the world could end.",
      "Fire represents desire, greed and uncontrolled passion.",
      "Ice represents hatred, coldness and emotional hostility.",
      "Both desire and hatred are presented as destructive forces.",
      "The poem is short but conveys a powerful warning about human emotions.",
      "Fire and ice work as contrasting symbols.",
      "The poet suggests that either extreme emotion could cause destruction.",
      "Themes: desire, hatred, destruction, human nature and apocalypse."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"A Tiger in the Zoo",
    points:[
      "The poem contrasts a tiger's life in captivity with its natural freedom.",
      "The tiger moves silently inside its cage.",
      "Its strength is useless because it cannot roam freely.",
      "In the forest, the tiger would hunt and move naturally through its habitat.",
      "The tiger's frustration represents the cruelty of captivity.",
      "The poem highlights the importance of freedom for wild animals.",
      "The contrast between cage and jungle is central to the poem.",
      "Themes: freedom, captivity, oppression, nature and human control."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"How to Tell Wild Animals",
    points:[
      "The poem gives humorous ways of identifying dangerous wild animals.",
      "The lion, tiger, leopard, bear and other animals are described playfully.",
      "The poet uses exaggeration to create comic situations.",
      "Rhyme and rhythm make the poem entertaining.",
      "The poem combines information about animals with humour.",
      "The speaker's suggestions are intentionally absurd and dangerous.",
      "The poem uses imagery and playful descriptions.",
      "Themes: humour, animals, rhyme, exaggeration and comic tone."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"The Ball Poem",
    points:[
      "A boy loses his ball and experiences sadness.",
      "The lost ball becomes a symbol of loss and attachment.",
      "The boy must learn that possessions can be lost.",
      "The experience teaches him responsibility and emotional maturity.",
      "The poet does not simply replace the ball because the lesson is more important.",
      "Loss is presented as a natural part of growing up.",
      "The boy begins learning how to cope with grief independently.",
      "Themes: loss, maturity, responsibility, growing up and acceptance."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"Amanda!",
    points:[
      "Amanda is repeatedly instructed and corrected by an adult.",
      "She escapes into imaginary worlds to experience freedom.",
      "Her imagination reveals her desire for independence and peace.",
      "The poem shows the conflict between adult expectations and a child's inner world.",
      "The repeated instructions create a sense of pressure.",
      "Amanda imagines different identities and situations where she is free.",
      "The poem asks readers to consider the emotional needs of children.",
      "Themes: childhood, freedom, pressure, imagination and parental control."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"The Trees",
    points:[
      "The trees are presented as if they are trying to escape from a house.",
      "The house symbolises human control or confinement.",
      "The trees naturally belong in the open environment.",
      "The poem uses personification by giving trees human-like actions.",
      "The movement of the trees creates a strong image of liberation.",
      "Nature is portrayed as powerful and persistent.",
      "The poem can also be interpreted as a symbolic expression of freedom.",
      "Themes: freedom, nature, confinement, human control and liberation."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"Fog",
    points:[
      "The poem compares fog to a cat.",
      "The fog arrives silently and unexpectedly.",
      "The cat comparison creates a clear visual image of quiet movement.",
      "The fog seems to watch the city before disappearing.",
      "The poem uses metaphor as its central poetic device.",
      "Its short structure mirrors the brief and mysterious movement of fog.",
      "The poem creates atmosphere through imagery.",
      "Themes: nature, mystery, silence, imagery and transience."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"The Tale of Custard the Dragon",
    points:[
      "Belinda lives with several pets including Custard the dragon.",
      "Custard is mocked because he appears timid and constantly asks for a safe cage.",
      "The other animals boast about their courage.",
      "A pirate suddenly enters and creates real danger.",
      "Custard is the one who actually confronts the pirate.",
      "The poem contrasts boasting with genuine courage.",
      "After the danger passes, the other characters return to boasting.",
      "Themes: courage, humility, appearance versus reality, bravery and irony."
    ]
  },

  {
    subject:"English", group:"First Flight – Poems", title:"For Anne Gregory",
    points:[
      "The poem discusses whether human love is based on physical beauty.",
      "The speaker suggests that outward appearance can influence attraction.",
      "Anne Gregory's hair represents external beauty.",
      "The poem questions whether people can love someone for their inner self alone.",
      "The final idea introduces a spiritual perspective on true love.",
      "Human attraction is contrasted with divine or deeper love.",
      "The poem explores the difference between physical beauty and inner worth.",
      "Themes: beauty, love, appearance, inner qualities and spirituality."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"A Triumph of Surgery",
    points:[
      "Tricki is a small dog whose health suffers because Mrs Pumphrey overfeeds him.",
      "Mrs Pumphrey gives Tricki excessive food and little exercise.",
      "Dr Herriot realises that Tricki needs a controlled routine rather than medicine.",
      "Tricki is taken to the surgery and placed on a simple diet.",
      "The other dogs encourage Tricki to become active.",
      "Tricki gradually becomes healthier through exercise and controlled food.",
      "Mrs Pumphrey believes the doctor has performed a complicated medical treatment.",
      "Themes: responsible pet care, discipline, overindulgence and affection."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"The Thief's Story",
    points:[
      "Hari Singh is a young thief who frequently changes his name.",
      "He approaches Anil because he believes Anil will be easy to deceive.",
      "Anil is kind and agrees to employ Hari despite knowing little about him.",
      "Hari learns cooking and basic education while living with Anil.",
      "Hari steals Anil's money but later begins to feel guilty.",
      "He realises that education and trust may give him a better future.",
      "Hari returns the stolen money without Anil openly accusing him.",
      "Themes: trust, education, reform, kindness, honesty and second chances."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"The Midnight Visitor",
    points:[
      "Ausable is a secret agent who does not match the traditional image of a spy.",
      "Fowler initially expects an exciting and physically impressive agent.",
      "Max enters Ausable's room and threatens him with a weapon.",
      "Ausable invents a story about a balcony outside the window.",
      "He also convinces Max that the police are arriving.",
      "Max panics and falls for Ausable's deception.",
      "Ausable defeats Max through intelligence and presence of mind.",
      "Themes: intelligence, wit, deception, appearance versus reality and presence of mind."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"A Question of Trust",
    points:[
      "Horace Danby appears respectable but secretly commits thefts.",
      "He steals once a year to finance his collection of rare books.",
      "He carefully plans a robbery at Shotover Grange.",
      "A woman pretending to be the owner tricks Horace into opening the safe.",
      "Horace removes his gloves while following her instructions.",
      "The woman escapes with the jewels and leaves Horace responsible for the crime.",
      "Horace is later arrested because his fingerprints provide evidence.",
      "Themes: deception, irony, appearances, crime and misplaced trust."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"Footprints Without Feet",
    points:[
      "Griffin is a scientist who discovers how to make the human body invisible.",
      "His scientific discovery gives him unusual powers.",
      "Instead of using his invention responsibly, Griffin uses it for selfish purposes.",
      "He enters places secretly and steals necessities.",
      "He creates fear and confusion because people cannot see him.",
      "His invisibility does not make him morally superior.",
      "The story highlights the danger of scientific knowledge without ethical responsibility.",
      "Themes: science, misuse of knowledge, responsibility, lawlessness and morality."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"The Making of a Scientist",
    points:[
      "Richard Ebright develops a strong interest in butterflies and scientific observation.",
      "His mother plays an important role in encouraging his curiosity.",
      "He learns to collect, observe and classify specimens carefully.",
      "Scientific experiments teach him to investigate rather than simply memorise.",
      "His projects gradually become more advanced.",
      "He develops qualities such as determination, discipline and curiosity.",
      "His success demonstrates the importance of guidance and continuous effort.",
      "Themes: curiosity, scientific thinking, perseverance, discipline and parental support."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"The Necklace",
    points:[
      "Matilda Loisel is dissatisfied with her modest lifestyle.",
      "She dreams of wealth, luxury and social status.",
      "She borrows a necklace from her friend Madame Forestier for a party.",
      "Matilda loses the necklace after the event.",
      "She and her husband replace it with an expensive necklace and spend years repaying the debt.",
      "Years later Matilda discovers that the original necklace was an imitation.",
      "The ending creates powerful situational irony.",
      "Themes: vanity, appearance, social status, materialism, honesty and irony."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"Bholi",
    points:[
      "Bholi is considered different because of her appearance and speech difficulties.",
      "She receives little attention and affection in her early life.",
      "Her teacher treats her kindly and encourages her to speak.",
      "Education gradually increases Bholi's confidence.",
      "Bholi becomes capable of thinking independently.",
      "Her marriage proposal comes from Bishamber, who later demands dowry.",
      "Bholi refuses to marry someone who insults her and demands dowry.",
      "Themes: education, self-respect, confidence, dignity, empowerment and social reform."
    ]
  },

  {
    subject:"English", group:"Footprints Without Feet", title:"The Book That Saved the Earth",
    points:[
      "The play presents a humorous account of a possible Martian invasion.",
      "Think-Tank is the overconfident leader of the Martians.",
      "The Martians misunderstand ordinary books and nursery rhymes.",
      "A book is mistakenly interpreted as a dangerous Earth weapon.",
      "The misunderstanding causes the Martians to abandon their invasion plan.",
      "The play satirises arrogance and poor understanding.",
      "Books are presented as powerful sources of knowledge.",
      "Themes: humour, satire, misunderstanding, intelligence, books and knowledge."
    ]
  },
  // =========================
  // ENGLISH — LANGUAGE
  // =========================

  {
    subject:"English", group:"Writing & Language", title:"Formal Letter",
    points:[
      "Begin with the sender's address followed by the date.",
      "Write the receiver's designation and address clearly.",
      "Use an appropriate subject line that states the purpose.",
      "Use a formal salutation such as Sir/Madam.",
      "Organise the body into clear paragraphs: purpose, details and requested action.",
      "Maintain a polite, formal and objective tone.",
      "Avoid unnecessary personal stories, slang and informal expressions.",
      "End with a suitable complimentary close and the writer's name/designation as required."
    ]
  },

  {
    subject:"English", group:"Writing & Language", title:"Analytical Paragraph",
    points:[
      "First identify what type of data is given: chart, graph, table or other visual information.",
      "Write a clear introductory sentence explaining what the data represents.",
      "Identify the highest and lowest values where relevant.",
      "Compare important similarities and differences.",
      "Mention major trends, patterns, increases and decreases.",
      "Use figures accurately when they strengthen the comparison.",
      "Avoid simply listing every value from the visual.",
      "End with an overall inference based only on the given information."
    ]
  },

  {
    subject:"English", group:"Writing & Language", title:"Grammar",
    points:[
      "Revise the prescribed grammar areas thoroughly through practice questions.",
      "Tenses show the time or state of an action.",
      "Reported speech requires attention to tense, pronouns, time expressions and reporting verbs.",
      "Modals express ideas such as ability, possibility, permission, obligation and advice.",
      "Subject-verb agreement requires the verb to match the subject in number and person.",
      "Check whether the sentence is affirmative, negative or interrogative before choosing an answer.",
      "Use context to determine the intended grammatical form.",
      "Always reread the completed sentence to check meaning and grammatical agreement."
    ]
  },

  {
    subject:"English", group:"Writing & Language", title:"Reading Comprehension",
    points:[
      "Read the questions carefully before deciding which parts of the passage are relevant.",
      "Identify keywords in each question and locate related information.",
      "For factual questions, use information directly supported by the passage.",
      "For inference questions, combine clues from the passage to reach a logical conclusion.",
      "Avoid adding information that is not supported by the text.",
      "For vocabulary questions, use the context around the word.",
      "Answer precisely rather than copying large portions of the passage.",
      "Check every answer against the passage before submitting."
    ]
  },

  // =========================
  // SST — HISTORY
  // =========================

  {
    subject:"SST", group:"History", title:"The Rise of Nationalism in Europe",
    points:[
      "The French Revolution introduced ideas of liberty, equality and fraternity.",
      "The revolution helped develop the idea that sovereignty belongs to the nation.",
      "Napoleon introduced administrative and legal reforms but also established control over conquered territories.",
      "The Congress of Vienna attempted to restore conservative order after Napoleon's defeat.",
      "Liberalism and nationalism became important forces in nineteenth-century Europe.",
      "Germany was unified under Prussian leadership with Otto von Bismarck playing a central role.",
      "Italy was unified through the efforts of figures such as Mazzini, Cavour and Garibaldi.",
      "The Balkans became a centre of nationalist tensions and rivalry among European powers.",
      "Nationalism often combined political unity with cultural symbols and shared identity.",
      "The chapter links nationalism with both nation-building and political conflict."
    ]
  },

  {
    subject:"SST", group:"History", title:"Nationalism in India",
    points:[
      "The First World War created economic and political difficulties in India.",
      "The Rowlatt Act allowed detention without trial and was strongly opposed.",
      "The Jallianwala Bagh massacre became a major turning point in the national movement.",
      "Gandhiji launched the Non-Cooperation Movement in 1920.",
      "The Non-Cooperation Movement encouraged boycott of foreign goods and institutions.",
      "The Civil Disobedience Movement began with the Salt March and challenged colonial laws.",
      "Different social groups joined nationalist movements with their own expectations and interests.",
      "Nationalist symbols, folklore, songs, history and images helped create a sense of collective identity.",
      "The movement faced limitations because different communities and groups sometimes had conflicting interests.",
      "The chapter highlights the development of mass nationalism and anti-colonial resistance."
    ]
  },

  {
    subject:"SST", group:"History", title:"The Making of a Global World",
    points:[
      "Globalisation has historical roots in trade, migration, investment and cultural exchange.",
      "The nineteenth century saw increasing movement of goods, capital and people.",
      "Food imports and migration changed economies and societies around the world.",
      "Technology such as railways and steamships reduced travel time and transport costs.",
      "Colonialism connected economies but often benefited imperial powers at the expense of colonies.",
      "Indentured labourers migrated to plantations and other parts of the world.",
      "The First World War disrupted the global economy.",
      "The Great Depression caused falling prices, unemployment and reduced international trade.",
      "The Second World War was followed by new international economic arrangements.",
      "The chapter explains how global economic connections have repeatedly changed over time."
    ]
  },

  {
    subject:"SST", group:"History", title:"The Age of Industrialisation",
    points:[
      "Before factories became dominant, production was often organised through proto-industrial systems.",
      "Merchants supplied raw materials to rural households for production.",
      "Industrialisation began strongly in Britain during the eighteenth century.",
      "Factories increased the scale and speed of production.",
      "Machines did not completely eliminate hand production because some goods required skilled labour.",
      "Industrial workers often faced long working hours and difficult conditions.",
      "Indian textile producers faced severe competition from British machine-made goods.",
      "Indian weavers suffered from declining demand and colonial trade policies.",
      "Industrialisation in India developed alongside older forms of hand production.",
      "Advertisements and product labels were increasingly used to create consumer demand."
    ]
  },

  {
    subject:"SST", group:"History", title:"Print Culture and the Modern World",
    points:[
      "Printing technology transformed the spread and availability of written information.",
      "Johann Gutenberg developed a major early printing press in Europe.",
      "Print made books cheaper and allowed a wider reading public to develop.",
      "Religious debates and reform movements were strongly influenced by printed material.",
      "Print culture contributed to the spread of new ideas and criticism of established authority.",
      "Newspapers and journals became important tools for political discussion.",
      "In colonial India, print helped spread social and religious reform ideas.",
      "Colonial authorities also used censorship to control critical publications.",
      "Print encouraged debates about caste, religion, women's education and social reform.",
      "The chapter shows how print became closely connected with modern public opinion."
    ]
  },

  // =========================
  // SST — GEOGRAPHY
  // =========================

  {
    subject:"SST", group:"Geography", title:"Resources and Development",
    points:[
      "A resource is anything available in the environment that can satisfy human needs when it is technologically accessible and economically feasible.",
      "Resources can be classified by origin, exhaustibility, ownership and development status.",
      "Resource planning is necessary because resources are unevenly distributed.",
      "Sustainable development aims to use resources without damaging future availability.",
      "Land is an important natural resource supporting agriculture, settlements and industries.",
      "Land degradation can result from deforestation, overgrazing, mining and improper irrigation.",
      "Soil is a renewable resource but takes a long time to form.",
      "Major Indian soil types include alluvial, black, red and yellow, laterite and arid soils.",
      "Soil erosion can be controlled through contour ploughing, terrace farming, strip cropping and afforestation.",
      "Conservation of land and soil is essential for sustainable agriculture."
    ]
  },

  {
    subject:"SST", group:"Geography", title:"Forest and Wildlife Resources",
    points:[
      "Biodiversity refers to the variety of living organisms in a region.",
      "Forests provide ecological, economic and social benefits.",
      "India has a wide variety of flora and fauna because of its diverse physical conditions.",
      "Species may be classified as normal, endangered, vulnerable, rare, endemic or extinct.",
      "Habitat destruction, hunting, pollution and overexploitation threaten biodiversity.",
      "Protected areas such as national parks and wildlife sanctuaries help conserve species.",
      "Project Tiger is an important conservation programme.",
      "Local communities can contribute significantly to forest conservation.",
      "The Chipko Movement is associated with community resistance to tree cutting.",
      "Conservation requires balancing ecological protection with the livelihood needs of communities."
    ]
  },

  {
    subject:"SST", group:"Geography", title:"Water Resources",
    points:[
      "Freshwater is essential for drinking, agriculture, industries and domestic activities.",
      "Water scarcity can result from population growth, intensive irrigation, industrialisation and unequal rainfall.",
      "Multipurpose river projects provide irrigation, electricity, flood control and water supply.",
      "Large dams can also cause displacement, ecological changes and conflicts over water use.",
      "Rainwater harvesting is an important method of conserving water.",
      "Traditional water-harvesting systems vary across different regions of India.",
      "Groundwater is an important source of irrigation and drinking water.",
      "Over-extraction of groundwater can lower the water table.",
      "Water conservation requires efficient use, recycling and protection of water sources.",
      "Sustainable water management is necessary because usable freshwater is limited."
    ]
  },

  {
    subject:"SST", group:"Geography", title:"Agriculture",
    points:[
      "Agriculture is an important economic activity and source of livelihood in India.",
      "Major farming types include primitive subsistence farming, intensive subsistence farming and commercial farming.",
      "Rice, wheat, millets, pulses, sugarcane, tea, coffee, cotton, jute and oilseeds are major crops.",
      "Rice requires high temperature and sufficient rainfall or irrigation.",
      "Wheat grows mainly in areas with cool growing seasons and moderate rainfall.",
      "Commercial crops such as cotton, sugarcane, tea and coffee have significant market value.",
      "India has developed irrigation to reduce dependence on monsoon rainfall.",
      "Technological changes have increased agricultural productivity but can also create environmental problems.",
      "Globalisation has increased opportunities and challenges for Indian farmers.",
      "Diversification and sustainable farming practices can improve long-term agricultural resilience."
    ]
  },

  {
    subject:"SST", group:"Geography", title:"Minerals and Energy Resources",
    points:[
      "Minerals are naturally occurring substances with a definite chemical composition and internal structure.",
      "Minerals can occur in veins, lodes, layers, alluvial deposits and other geological formations.",
      "Ferrous minerals contain iron and are important for the iron and steel industry.",
      "Non-ferrous minerals include copper, bauxite, lead, zinc and others.",
      "Conventional energy sources include coal, petroleum, natural gas and electricity from conventional systems.",
      "Coal is an important fossil fuel and source of thermal power.",
      "Petroleum is a major source of fuel and an important raw material for industries.",
      "Renewable energy sources include solar, wind, tidal, biogas and geothermal energy.",
      "Mineral resources are finite and require careful conservation.",
      "Greater use of renewable energy can reduce dependence on fossil fuels."
    ]
  },

  {
    subject:"SST", group:"Geography", title:"Manufacturing Industries",
    points:[
      "Manufacturing changes raw materials into products with greater utility and value.",
      "Manufacturing creates employment and supports economic development.",
      "Industries may be classified by source of raw materials, ownership, size and weight of inputs and outputs.",
      "The iron and steel industry is a basic industry because many other industries depend on it.",
      "Cotton textile industries provide employment and have historical importance in India.",
      "Jute industries are concentrated mainly around the Hugli basin.",
      "Sugar industries are important agro-based industries.",
      "Industrial pollution can affect air, water, land and noise levels.",
      "Industries can reduce pollution through cleaner technologies, waste treatment and efficient resource use.",
      "Industrial development must balance economic growth with environmental protection."
    ]
  },

  {
    subject:"SST", group:"Geography", title:"Lifelines of National Economy",
    points:[
      "Transport and communication are essential for the movement of people, goods and information.",
      "Roadways are flexible and useful for short and medium-distance transportation.",
      "Railways are important for carrying passengers and bulk goods over long distances.",
      "Pipelines transport petroleum, natural gas and other materials efficiently.",
      "Waterways are relatively economical for transporting heavy and bulky goods.",
      "Airways provide rapid transportation and are especially useful over long distances.",
      "Communication networks include telecommunications, newspapers, radio, television and digital services.",
      "International trade connects India with global markets.",
      "Tourism contributes to employment, foreign exchange and cultural exchange.",
      "Transport and communication together support the integration of the national economy."
    ]
  },

  // =========================
  // SST — CIVICS
  // =========================

  {
    subject:"SST", group:"Civics", title:"Power Sharing",
    points:[
      "Power sharing means distributing power among different organs, levels or groups in society.",
      "It reduces the possibility of conflict between social groups.",
      "Belgium adopted arrangements to share power among different linguistic communities.",
      "Sri Lanka followed majoritarian policies that created tensions with Tamil communities.",
      "Horizontal power sharing occurs among legislature, executive and judiciary.",
      "Vertical power sharing occurs among different levels of government.",
      "Power can also be shared among social groups, pressure groups and political parties.",
      "Power sharing is desirable because it reduces conflict and promotes political stability.",
      "Democratic governments are strengthened when different groups participate in decision-making.",
      "The chapter demonstrates that sharing power is an important principle of democracy."
    ]
  },

  {
    subject:"SST", group:"Civics", title:"Federalism",
    points:[
      "Federalism is a system in which power is constitutionally divided between different levels of government.",
      "A federal system usually has at least two levels of government.",
      "The Constitution clearly defines the powers of different levels.",
      "In India, powers are divided through the Union List, State List and Concurrent List.",
      "Some subjects are handled by the Union government, some by states and some jointly.",
      "India has a third level of government through local self-government.",
      "Linguistic reorganisation of states helped strengthen Indian federalism.",
      "Decentralisation transfers power to local governments.",
      "Panchayats and municipalities are important institutions of local democracy.",
      "Successful federalism requires cooperation, respect for constitutional powers and democratic participation."
    ]
  },

  {
    subject:"SST", group:"Civics", title:"Gender, Religion and Caste",
    points:[
      "Gender division often results from social expectations and unequal roles rather than biological differences alone.",
      "Women have historically faced unequal access to education, employment and political participation.",
      "The feminist movement has challenged gender inequality.",
      "Communalism occurs when religion is used to divide people or influence politics in a way that creates conflict.",
      "India's Constitution guarantees freedom of religion and equality before law.",
      "Caste inequalities have influenced social and economic opportunities.",
      "Caste can influence political mobilisation and electoral behaviour.",
      "Political participation can help disadvantaged groups demand equality and representation.",
      "Democracy should reduce social inequalities rather than reinforce discrimination.",
      "Gender, religion and caste can affect politics, but their political effects depend on social and democratic conditions."
    ]
  },

  {
    subject:"SST", group:"Civics", title:"Political Parties",
    points:[
      "A political party is a group of people who come together to contest elections and hold political power.",
      "Political parties formulate policies and programmes.",
      "They nominate candidates and contest elections.",
      "Parties form and run governments when they win enough support.",
      "Opposition parties monitor and criticise the government.",
      "Political parties shape public opinion and connect citizens with government.",
      "Major challenges include lack of internal democracy, dynastic succession, money and muscle power and limited meaningful choice.",
      "Political parties are necessary for representative democracy to function effectively.",
      "India has national and state political parties.",
      "Reforms can improve transparency, internal democracy and accountability within parties."
    ]
  },

  {
    subject:"SST", group:"Civics", title:"Outcomes of Democracy",
    points:[
      "Democracy provides a government that is accountable to citizens.",
      "Democratic decision-making can improve the quality of decisions by allowing discussion and consultation.",
      "Democracy provides peaceful methods for resolving differences and conflicts.",
      "Democratic governments are expected to be responsive to people's needs.",
      "Transparency allows citizens to examine how decisions are made.",
      "Democracy does not automatically guarantee rapid economic development.",
      "Economic inequality and unequal distribution of wealth can continue under democracy.",
      "Democracy promotes dignity and equality of citizens.",
      "It provides mechanisms for correcting mistakes through elections and public participation.",
      "The success of democracy should be judged by accountability, responsiveness, dignity, equality and participation."
    ]
  },

  // =========================
  // SST — ECONOMICS
  // =========================

  {
    subject:"SST", group:"Economics", title:"Development",
    points:[
      "Different people can have different ideas about what development means.",
      "Income is an important measure of development but is not the only factor.",
      "People also consider equality, security, freedom, health and education.",
      "Average income is commonly used to compare countries or regions.",
      "Per capita income is calculated by dividing total income by total population.",
      "Public facilities such as schools, hospitals and clean water influence quality of life.",
      "Human development considers factors beyond income.",
      "Sustainable development requires meeting present needs without compromising future generations.",
      "Different development goals can sometimes conflict with one another.",
      "Development should be evaluated using economic, social and environmental indicators together."
    ]
  },

  {
    subject:"SST", group:"Economics", title:"Sectors of the Indian Economy",
    points:[
      "The primary sector directly uses natural resources and includes activities such as agriculture and fishing.",
      "The secondary sector transforms raw materials into manufactured goods.",
      "The tertiary sector provides services such as transport, banking, education and healthcare.",
      "The organised sector generally follows formal rules and provides greater job security.",
      "The unorganised sector often has less job security and fewer formal benefits.",
      "Public sector enterprises are owned or controlled by the government.",
      "Private sector enterprises are generally owned by individuals or companies.",
      "Disguised unemployment occurs when more people are working than actually required for the level of output.",
      "The tertiary sector has become increasingly important in the Indian economy.",
      "Government programmes can create employment and provide essential public services."
    ]
  },

  {
    subject:"SST", group:"Economics", title:"Money and Credit",
    points:[
      "Money acts as a medium of exchange and removes the difficulty of double coincidence of wants.",
      "Modern forms of money include currency and deposits in banks.",
      "Banks accept deposits and provide loans to borrowers.",
      "People can use bank deposits for payments through cheques and other methods.",
      "Credit can help people invest, start businesses and meet financial needs.",
      "Formal sources of credit include banks and cooperatives.",
      "Informal sources include moneylenders, traders, employers, relatives and friends.",
      "Formal credit is generally regulated and often carries lower interest rates than informal credit.",
      "Collateral is an asset that a borrower may have to pledge as security for a loan.",
      "Responsible access to affordable credit can support economic development."
    ]
  },

  {
    subject:"SST", group:"Economics", title:"Globalisation and the Indian Economy",
    points:[
      "Globalisation refers to the increasing integration of production and markets across countries.",
      "Multinational corporations operate or invest in more than one country.",
      "MNCs may organise production across different countries according to cost, skills and market conditions.",
      "Foreign investment can bring capital, technology and production opportunities.",
      "Liberalisation reduced many restrictions on imports and foreign investment in India.",
      "Globalisation has increased competition among producers.",
      "Consumers may gain access to a wider variety of goods and services.",
      "Small producers can face difficulties when competing with large international companies.",
      "The World Trade Organization establishes rules for international trade.",
      "The effects of globalisation are uneven and depend on the ability of people and businesses to participate in markets."
    ]
  },

  {
    subject:"SST", group:"Economics", title:"Consumer Rights",
    points:[
      "Consumers need protection because sellers may sometimes provide unsafe, poor-quality or misleading products and services.",
      "The right to safety protects consumers against hazardous goods and services.",
      "The right to be informed gives consumers access to information about products and services.",
      "The right to choose allows consumers access to a variety of products at competitive prices.",
      "The right to seek redressal allows consumers to demand compensation or correction of grievances.",
      "Consumer awareness helps people make informed purchasing decisions.",
      "Quality marks such as ISI, Hallmark and Agmark can provide useful information about standards.",
      "Bills, receipts and product information are important evidence when making complaints.",
      "Consumer organisations and legal mechanisms help protect consumer interests.",
      "Responsible consumers should check labels, expiry dates, prices and relevant quality information."
    ]
  }

  // ======================================================
// STUDYOS APP
// ======================================================

const $ = id => document.getElementById(id);

const gate = $("gate");
const app = $("app");
const codeInput = $("code");
const enterBtn = $("enter");
const err = $("err");

const homeBtn = $("home");
const themeBtn = $("theme");
const lockBtn = $("lock");

const subjects = $("subjects");
const library = $("library");
const results = $("results");

const backBtn = $("back");
const libEyebrow = $("libEyebrow");
const libTitle = $("libTitle");
const filters = $("filters");
const grid = $("grid");

const searchInput = $("search");
const resultGrid = $("resultGrid");
const resultCount = $("resultCount");
const total = $("total");

const modal = $("modal");
const shade = $("shade");
const closeBtn = $("close");
const doneBtn = $("done");

const mgroup = $("mgroup");
const mtitle = $("mtitle");
const pointsBox = $("points");

let currentSubject = null;
let currentFilter = "All";


// ======================================================
// ACCESS GATE
// ======================================================

function unlock() {
  gate.classList.add("hidden");
  app.classList.remove("hidden");

  sessionStorage.setItem("studyos_unlocked", "yes");

  if (codeInput) codeInput.value = "";
  if (err) err.textContent = "";

  setTimeout(() => {
    if (searchInput) searchInput.focus();
  }, 150);
}

function lockApp() {
  sessionStorage.removeItem("studyos_unlocked");

  app.classList.add("hidden");
  gate.classList.remove("hidden");

  if (codeInput) {
    codeInput.value = "";
    setTimeout(() => codeInput.focus(), 100);
  }
}

function checkCode() {
  const entered = codeInput.value.trim();

  if (entered === ACCESS_10C_CODE) {
    unlock();
  } else {
    err.textContent = "Wrong access code. Try again.";
    codeInput.classList.add("shake");

    setTimeout(() => {
      codeInput.classList.remove("shake");
    }, 400);

    codeInput.select();
  }
}

if (enterBtn) {
  enterBtn.addEventListener("click", checkCode);
}

if (codeInput) {
  codeInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      checkCode();
    }
  });
}

if (sessionStorage.getItem("studyos_unlocked") === "yes") {
  unlock();
}


// ======================================================
// COUNTS
// ======================================================

function updateCounts() {
  if (total) {
    total.textContent = `${DATA.length} chapters`;
  }

  const science = DATA.filter(x => x.subject === "Science").length;
  const english = DATA.filter(x => x.subject === "English").length;
  const sst = DATA.filter(x => x.subject === "SST").length;

  const floats = document.querySelectorAll(".float");

  floats.forEach(item => {
    const text = item.textContent.toUpperCase();

    if (text.includes("SCIENCE")) {
      item.innerHTML = `SCIENCE <b>${science}</b>`;
    }

    if (text.includes("ENGLISH")) {
      item.innerHTML = `ENGLISH <b>${english}</b>`;
    }

    if (text.includes("SST")) {
      item.innerHTML = `SST <b>${sst}</b>`;
    }
  });
}

updateCounts();


// ======================================================
// SUBJECT LIBRARY
// ======================================================

function getGroups(subject) {
  return [...new Set(
    DATA
      .filter(x => x.subject === subject)
      .map(x => x.group)
  )];
}

function openSubject(subject) {
  currentSubject = subject;
  currentFilter = "All";

  subjects.classList.add("hidden");
  results.classList.add("hidden");
  library.classList.remove("hidden");

  libEyebrow.textContent =
    subject === "SST"
      ? "SOCIAL SCIENCE"
      : subject.toUpperCase();

  libTitle.textContent =
    subject === "SST"
      ? "Social Science"
      : subject;

  buildFilters();
  renderLibrary();
}

function buildFilters() {
  filters.innerHTML = "";

  const groups = getGroups(currentSubject);

  const all = document.createElement("button");
  all.textContent = "All";
  all.className = "filter active";
  all.dataset.filter = "All";
  filters.appendChild(all);

  groups.forEach(group => {
    const button = document.createElement("button");

    button.textContent = group
      .replace("First Flight – ", "")
      .replace("Writing & Language", "Language");

    button.className = "filter";
    button.dataset.filter = group;

    filters.appendChild(button);
  });

  filters.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;

      filters.querySelectorAll(".filter")
        .forEach(x => x.classList.remove("active"));

      button.classList.add("active");

      renderLibrary();
    });
  });
}

function renderLibrary() {
  grid.innerHTML = "";

  let items = DATA.filter(x => x.subject === currentSubject);

  if (currentFilter !== "All") {
    items = items.filter(x => x.group === currentFilter);
  }

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty">
        <h3>No chapters found</h3>
        <p>Try another category.</p>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    grid.appendChild(createCard(item, index));
  });
}


// ======================================================
// CHAPTER CARDS
// ======================================================

function createCard(item, index) {
  const card = document.createElement("button");

  card.className = "card";
  card.type = "button";

  card.innerHTML = `
    <div class="cardtop">
      <span class="number">${String(index + 1).padStart(2, "0")}</span>
      <span class="arrow">↗</span>
    </div>

    <div class="cardgroup">
      ${escapeHTML(item.group)}
    </div>

    <h3>${escapeHTML(item.title)}</h3>

    <p>
      ${item.points.length} important revision points
    </p>

    <div class="cardline"></div>
  `;

  card.addEventListener("click", () => {
    openModal(item);
  });

  return card;
}


// ======================================================
// SEARCH
// ======================================================

function search(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    results.classList.add("hidden");

    if (currentSubject) {
      library.classList.remove("hidden");
    } else {
      subjects.classList.remove("hidden");
    }

    return;
  }

  library.classList.add("hidden");
  subjects.classList.add("hidden");
  results.classList.remove("hidden");

  const matches = DATA.filter(item => {
    const searchable = [
      item.subject,
      item.group,
      item.title,
      ...item.points
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(q);
  });

  resultCount.textContent = matches.length;
  resultGrid.innerHTML = "";

  if (!matches.length) {
    resultGrid.innerHTML = `
      <div class="empty">
        <h3>No results</h3>
        <p>Try searching for another chapter, topic or keyword.</p>
      </div>
    `;
    return;
  }

  matches.forEach((item, index) => {
    resultGrid.appendChild(createCard(item, index));
  });
}

if (searchInput) {
  searchInput.addEventListener("input", e => {
    search(e.target.value);
  });
}

// ======================================================
// MODAL
// ======================================================

function openModal(item) {
  mgroup.textContent = item.group;
  mtitle.textContent = item.title;

  pointsBox.innerHTML = "";

  item.points.forEach((point, index) => {
    const row = document.createElement("div");

    row.className = "point";

    row.innerHTML = `
      <span class="pointnum">${String(index + 1).padStart(2, "0")}</span>
      <p>${escapeHTML(point)}</p>
    `;

    pointsBox.appendChild(row);
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

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
  }
});


// ======================================================
// NAVIGATION
// ======================================================

document.querySelectorAll("[data-sub]").forEach(button => {
  button.addEventListener("click", () => {
    openSubject(button.dataset.sub);
  });
});

if (backBtn) {
  backBtn.addEventListener("click", () => {
    currentSubject = null;
    currentFilter = "All";

    library.classList.add("hidden");
    results.classList.add("hidden");
    subjects.classList.remove("hidden");

    if (searchInput) {
      searchInput.value = "";
    }
  });
}

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    currentSubject = null;

    library.classList.add("hidden");
    results.classList.add("hidden");
    subjects.classList.remove("hidden");

    if (searchInput) {
      searchInput.value = "";
    }

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  });
}


// ======================================================
// THEME
// ======================================================

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  localStorage.setItem("studyos_theme", theme);

  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "☀" : "◐";
  }
}

const savedTheme = localStorage.getItem("studyos_theme");

if (savedTheme) {
  applyTheme(savedTheme);
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current =
      document.documentElement.dataset.theme === "dark"
        ? "dark"
        : "light";

    applyTheme(current === "dark" ? "light" : "dark");
  });
}


// ======================================================
// LOCK
// ======================================================

if (lockBtn) {
  lockBtn.addEventListener("click", lockApp);
}


// ======================================================
// KEYBOARD SHORTCUT
// ======================================================

document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();

    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }
});


// ======================================================
// SAFE HTML
// ======================================================

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


// ======================================================
// INITIAL STATE
// ======================================================

subjects.classList.remove("hidden");
library.classList.add("hidden");
results.classList.add("hidden");

console.log(
  `StudyOS loaded successfully — ${DATA.length} chapters.`
);
