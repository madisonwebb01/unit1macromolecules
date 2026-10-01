// Unit 1, Part 5: Carbohydrates
// Source: Carbohydrates Doodle Note + Sugar Lab. Format modeled on Quiz 1.
window.BANK_CARBS = {
  id: "carbs",
  title: "Carbohydrates",
  questions: [
  {
    n: 1, topic: "Monomers and polymers",
    stem: "The <u>monomers</u> of <b>carbohydrates</b> are:",
    opts: [
      ["Amino acids", 0, "Those are the monomers of proteins."],
      ["Monosaccharides", 1, "Correct. Monosaccharides are the simple sugars that join together to build disaccharides and polysaccharides."],
      ["Fatty acids", 0, "Fatty acids are building blocks of lipids."],
      ["Nucleotides", 0, "Those are the monomers of nucleic acids."]
    ]
  },
  {
    n: 2, topic: "Monomers and polymers",
    stem: "Which three elements make up a carbohydrate?",
    opts: [
      ["Carbon, hydrogen, and nitrogen", 0, "Nitrogen is a key element in proteins, not in carbohydrates."],
      ["Carbon, hydrogen, and oxygen", 1, "Correct. Carbohydrates contain carbon, hydrogen, and oxygen. The name itself carries -carbo- for carbon and hydro- for water."],
      ["Carbon, oxygen, and phosphorus", 0, "Phosphorus shows up in phospholipids, not in carbohydrates."],
      ["Hydrogen, oxygen, and sulfur", 0, "Sulfur appears in some proteins. Carbohydrates also need carbon."]
    ]
  },
  {
    n: 3, topic: "Monomers and polymers",
    stem: "Glucose, fructose, and galactose all have the same number of atoms but arranged differently.<br><b>What do we call molecules related this way?</b>",
    opts: [
      ["Polymers of each other", 0, "A polymer is a chain built from monomers. These three are each single sugars."],
      ["Isomers of each other", 1, "Correct. These monosaccharides have the same atoms arranged in a different structure, which makes them isomers."],
      ["Subunits of each other", 0, "Subunit refers to a polypeptide chain within a protein's quaternary structure."],
      ["Enzymes of each other", 0, "Enzymes are proteins that speed up reactions. These are sugars."]
    ]
  },
  {
    n: 4, topic: "Chemical reactions",
    stem: "Two monosaccharides join together and a water molecule is released.<br><b>What is this type of reaction called?</b>",
    opts: [
      ["Hydrolysis", 0, "Hydrolysis is the opposite. It <i>adds</i> water to break a bond apart."],
      ["Dehydration synthesis", 1, "Correct. Removing a water molecule to build a larger molecule is dehydration synthesis. It is how disaccharides and polysaccharides form."],
      ["Solvency", 0, "Solvency is water dissolving a substance, not a reaction that builds molecules."],
      ["Denaturing", 0, "Denaturing is when a protein loses its shape. It is not how sugars bond together."]
    ]
  },
  {
    n: 5, topic: "Chemical reactions",
    stem: "Fill in the blank:<br>Glucose + fructose _______, plus a molecule of water.",
    opts: [
      ["lactose", 0, "Lactose is the sugar in milk, built from different monosaccharides."],
      ["sucrose", 1, "Correct. Glucose joined to fructose gives sucrose, which is table sugar."],
      ["maltose", 0, "Maltose is another disaccharide, but it is not the one made from glucose plus fructose."],
      ["starch", 0, "Starch is a polysaccharide, a long chain of many glucose units rather than just two sugars."]
    ]
  },
  {
    n: 6, topic: "Chemical reactions",
    stem: "Your body breaks glycogen back down into glucose so the glucose can be used to release energy.<br><b>Which reaction does this?</b>",
    opts: [
      ["Dehydration synthesis, because water is removed", 0, "That reaction builds polymers up. Breaking glycogen down goes the other direction."],
      ["Hydrolysis, because a water molecule is added to break the bond", 1, "Correct. Hydro- is water and -lysis is to break, so hydrolysis splits the polymer into smaller molecules."],
      ["Cohesion, because the molecules stick together", 0, "Cohesion is a property of water molecules, not a reaction that breaks bonds."],
      ["Vaporization, because heat energy is added", 0, "Vaporization turns liquid water into gas. It does not break down glycogen."]
    ]
  },
  {
    n: 7, topic: "Polysaccharides",
    stem: "Cellulose is made of long straight chains that form hydrogen bonds with each other, and it is found in the plant cell wall.<br><b>Which function of carbohydrates does this demonstrate?</b>",
    opts: [
      ["Immediate energy release", 0, "Simple sugars like glucose release energy quickly. Cellulose is doing something else here."],
      ["Providing structure and support", 1, "Correct. Cellulose's long straight chains and the hydrogen bonds between them suit it to providing structure, for example in the cell wall."],
      ["Speeding up chemical reactions", 0, "That is what enzymes do, and enzymes are proteins."],
      ["Carrying genetic information", 0, "That is the job of nucleic acids."]
    ]
  },
  {
    n: 8, topic: "Polysaccharides",
    stem: "Glycogen is a highly branched molecule with many side branches.<br><b>How does that structure help an animal?</b>",
    opts: [
      ["The branches let glucose be released very quickly when it is needed", 1, "Correct. The heavily branched structure allows very fast release of glucose, and it is also very compact."],
      ["The branches make it waterproof", 0, "Waterproofing is a job of lipids like waxes, not of glycogen."],
      ["The branches let it form hydrogen bonds for structural support", 0, "That describes cellulose, whose long straight chains bond to each other."],
      ["The branches let it pass easily through the cell membrane", 0, "Glycogen is far too large to cross the membrane. It gets broken into glucose first."]
    ]
  },
  {
    n: 9, topic: "Polysaccharides",
    stem: "Starch is a long coiled chain, shaped a bit like a cylinder.<br><b>What is that shape well suited for?</b>",
    opts: [
      ["Compact storage of glucose", 1, "Correct. The coiled cylinder shape makes starch compact, which makes it well suited to storing glucose."],
      ["Fast transport through the bloodstream", 0, "Starch is not transported whole. It is broken into glucose first."],
      ["Building the cell membrane", 0, "The cell membrane is built from phospholipids."],
      ["Catalyzing the digestion of proteins", 0, "Breaking down proteins is the job of digestive enzymes like pepsin."]
    ]
  },
  {
    n: 10, topic: "Sugar Lab",
    stem: "In the Sugar Lab, Unknown E stayed blue in Benedict's solution but turned blue-black with iodine.<br><b>What does that tell you about Unknown E?</b>",
    opts: [
      ["It contains no carbohydrate at all", 0, "Iodine found a carbohydrate. A negative Benedict's means no <i>free</i> sugar, not no carbohydrate."],
      ["It contains starch, a carbohydrate whose glucose units are bonded into long chains instead of being free", 1, "Correct. Benedict's only reacts with free sugar, while iodine detects the coiled shape of a starch chain."],
      ["It is pure water with nothing dissolved in it", 0, "That was Unknown B, which stayed blue in Benedict's and showed no change with iodine."],
      ["It contains a simple sugar such as glucose", 0, "A simple sugar would have turned Benedict's green, yellow, or red. Unknown E stayed blue."]
    ]
  },
  {
    n: 11, topic: "Sugar Lab",
    stem: "In the Sugar Lab, Unknown B was distilled water with nothing added.<br><b>Why was it included in the set of unknowns?</b>",
    opts: [
      ["To use up the extra Benedict's solution", 0, "Reagent was limited, so no tube was included just to use some up."],
      ["It was the negative control, showing what both reagents look like with no sugar and no starch present", 1, "Correct. Having that comparison means a blue result on another tube can be trusted as a real zero rather than a failed test."],
      ["To show the highest possible sugar concentration", 0, "That was Unknown C at 8% glucose, the high end of the set."],
      ["To rinse the test tubes between trials", 0, "Unknown B was tested like every other sample, not used as a rinse."]
    ]
  },
  {
    n: 12, topic: "Sugar Lab",
    stem: "A group left their Benedict's tubes in the boiling bath far longer than 2 minutes, and afterward Unknowns A, C, and D all looked the same brick red.<br><b>Why did the longer time ruin their results?</b>",
    opts: [
      ["Given enough time even a small amount of sugar uses up all the copper, so the color stops showing how much sugar there was", 1, "Correct. The timer is what makes the test a measurement. Without it the color only tells you sugar was present, not how much."],
      ["The extra heat created new sugar in the tubes", 0, "Heating does not create sugar. The amount in each tube was fixed before it went into the bath."],
      ["The extra heat evaporated the Benedict's solution", 0, "Some water may evaporate, but that is not why the three tubes ended up matching."],
      ["Boiling turned the starch into glucose", 0, "Unknowns A, C, and D were glucose solutions to begin with. No starch was involved."]
    ]
  }
]};
