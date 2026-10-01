// Additional Practice Tools: flashcard decks and a sorting drill.
// Vocabulary and root words come straight from the Unit 1 Root Words & Vocab sheet.
window.TOOLS = {

  // Where each topic is covered, shown after a student answers.
  reviewMap: {
    "Root words": "Unit 1 Root Words & Vocab sheet",
    "Vocabulary": "Unit 1 Root Words & Vocab sheet",
    "Counting atoms": "Marshmallow Molecules worksheet, Parts 2 and 4",
    "Coefficients": "Marshmallow Molecules worksheet, Part 5",
    "Element symbols": "Marshmallow Molecules worksheet, Part 1",
    "Molecular shape": "Marshmallow Molecules worksheet, Part 3",
    "Polarity": "Properties of Water notes",
    "Cohesion": "Properties of Water notes, and the penny and paperclip stations",
    "Adhesion": "Properties of Water notes, and the climbing water station",
    "Density": "Properties of Water notes",
    "Specific heat capacity": "Properties of Water notes",
    "Latent heat of vaporization": "Properties of Water notes, and the evaporative cooling station",
    "Solvency": "Properties of Water notes",
    "Monomers and bonds": "Proteins notes",
    "Protein structure": "Proteins notes, the four levels of structure",
    "Protein functions": "Functions of Proteins notes",
    "Monomers and polymers": "Carbohydrates notes",
    "Chemical reactions": "Carbohydrates notes, dehydration synthesis and hydrolysis",
    "Polysaccharides": "Carbohydrates notes, starch, glycogen and cellulose",
    "Sugar Lab": "Your Sugar Lab data table and analysis questions",
    "Building blocks": "Lipids notes",
    "Saturated and unsaturated": "Lipids notes, the fatty acid diagrams",
    "Lipids in water": "Lipids notes, triglycerides",
    "Phospholipids": "Lipids notes, phospholipids and the bilayer",
    "Functions and examples": "Lipids notes, waxes, steroids and cholesterol"
  },

  // ---- Flashcards: the 20 vocabulary terms students were asked to make cards for
  vocabCards: [
    ["Monomer", "A single molecular building block that can join with others to form a polymer."],
    ["Polymer", "A large molecule built from many monomers bonded together."],
    ["Monosaccharide", "A simple sugar, and the monomer of carbohydrates. Glucose, fructose, and galactose are examples."],
    ["Polysaccharide", "A long chain of many monosaccharides linked together. Starch, glycogen, and cellulose are examples."],
    ["Amino Acid", "The monomer of proteins. Amino acids join by peptide bonds to build polypeptides."],
    ["Fatty Acid Tail", "A long hydrocarbon chain attached to a carboxyl group. It is hydrophobic, and three of them attach to glycerol in a triglyceride."],
    ["Glucose", "The most common monosaccharide. Cells break it down to release energy."],
    ["Starch", "A polysaccharide made of long coiled chains of glucose. Plants use it to store energy."],
    ["Macromolecule", "A large molecule essential to living things. Carbohydrates, lipids, and proteins are the ones in this unit."],
    ["Polar", "Having an uneven distribution of charge across the molecule, with a partially positive end and a partially negative end. Water is polar."],
    ["Enzyme", "A protein that speeds up a chemical reaction. Lipase, amylase, pepsin, and lactase are digestive enzymes."],
    ["Hydrolysis", "A reaction that uses a water molecule to break a polymer apart into smaller molecules."],
    ["Dehydration Synthesis", "A reaction that removes a water molecule so two monomers can bond together into a larger molecule."],
    ["Hydrophobic", "Water fearing. A hydrophobic molecule repels water and will not mix with it."],
    ["Hydrophilic", "Water loving. A hydrophilic molecule is attracted to water and dissolves in it easily."],
    ["Lipid", "A macromolecule that is insoluble in water. Fats, oils, waxes, steroids, and phospholipids are lipids."],
    ["Protein", "A macromolecule made of one or more chains of amino acids. Proteins carry out many different functions."],
    ["Carbohydrate", "A macromolecule made of carbon, hydrogen, and oxygen, used for energy release and storage."],
    ["Glycerol", "The backbone molecule that three fatty acid tails attach to in a triglyceride."]
  ],

  // ---- Flashcards: the root word list
  rootCards: [
    ["-ase", "name of an enzyme"], ["bio-", "life, living"], ["-carbo-", "carbon"],
    ["cis-", "on the same side of"], ["co-", "together, with"], ["de-", "off, from"],
    ["di-", "two"], ["-hydro-", "water"], ["-lact-", "milk"],
    ["-lysis", "cut, break down, split"], ["macro-", "large"], ["-mer", "part, piece"],
    ["mono-", "one"], ["oligo-", "few"], ["-ose", "name of a sugar"],
    ["-oxy-", "oxygen"], ["-philic, -phile", "loving"], ["-phobic", "fearing"],
    ["-poly-", "many"], ["-sacch-", "sugar"], ["synth-", "to make"], ["trans-", "across"]
  ],

  // ---- Sorting drill: name the macromolecule
  sortItems: [
    ["Amino acids are its monomers", "Protein"],
    ["Glycerol plus three fatty acid tails", "Lipid"],
    ["Monosaccharides are its monomers", "Carbohydrate"],
    ["Insoluble in water, used for long-term energy storage", "Lipid"],
    ["Hemoglobin, which carries oxygen in the blood", "Protein"],
    ["Cellulose in a plant cell wall", "Carbohydrate"],
    ["Makes up the cell membrane as a bilayer", "Lipid"],
    ["Antibodies made by white blood cells", "Protein"],
    ["Glycogen stored in the liver and muscles", "Carbohydrate"],
    ["Cholesterol and other steroids", "Lipid"],
    ["Built from units joined by peptide bonds", "Protein"],
    ["Starch in a potato", "Carbohydrate"],
    ["Enzymes such as amylase and lactase", "Protein"],
    ["The wax coating on a leaf", "Lipid"],
    ["Contains only carbon, hydrogen, and oxygen, and provides quick energy", "Carbohydrate"],
    ["Keratin in hair and nails", "Protein"],
    ["Sucrose, the sugar in your kitchen", "Carbohydrate"],
    ["A triglyceride stored as body fat", "Lipid"],
    ["Insulin, which controls blood glucose", "Protein"],
    ["Has four levels of structure, from a sequence up to joined subunits", "Protein"]
  ],
  sortChoices: ["Carbohydrate", "Lipid", "Protein"]
};
