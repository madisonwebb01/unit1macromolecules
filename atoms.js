// Unit 1, Part 2: Atoms & Molecules
// Source: Marshmallow Molecules worksheet. Format modeled on Quiz 1.
window.BANK_ATOMS = {
  id: "atoms",
  title: "Atoms & Molecules",
  questions: [
  {
    n: 1, topic: "Counting atoms",
    stem: "The chemical formula for rubbing alcohol is <b>C<sub>3</sub>H<sub>8</sub>O</b>.<br>How many total atoms are there in one molecule of rubbing alcohol?",
    opts: [
      ["3", 0, "That counts only the carbon atoms. Every element in the formula counts toward the total."],
      ["11", 0, "This leaves out the oxygen. A symbol with no number after it means there is exactly 1 of that atom."],
      ["12", 1, "Correct. C = 3, H = 8, and O = 1, so 3 + 8 + 1 = 12 atoms."],
      ["24", 0, "The subscripts are added together, not multiplied by each other."]
    ]
  },
  {
    n: 2, topic: "Counting atoms",
    stem: "The chemical formula for butane is <b>C<sub>4</sub>H<sub>10</sub></b>.<br>How many total atoms are there in one molecule?",
    opts: [
      ["5", 0, "This reads the 10 as a 1 and a 0. The subscript after H is ten."],
      ["14", 1, "Correct. C = 4 and H = 10, so 4 + 10 = 14 atoms."],
      ["40", 0, "The subscripts are added, not multiplied by each other."],
      ["2", 0, "That counts how many different elements are present, not how many atoms."]
    ]
  },
  {
    n: 3, topic: "Coefficients",
    stem: "How many <b>hydrogen</b> atoms are in <b>2H<sub>2</sub>O</b>?",
    opts: [
      ["2", 0, "That is the subscript alone. The coefficient in front still has to be applied."],
      ["4", 1, "Correct. The coefficient 2 multiplies every atom in the molecule, so hydrogen is 2 x 2 = 4."],
      ["6", 0, "6 is the total number of atoms in 2H<sub>2</sub>O, counting both the hydrogen and the oxygen."],
      ["3", 0, "3 is the number of atoms in one whole H<sub>2</sub>O molecule: 2 hydrogen plus 1 oxygen. This question asks only about hydrogen, and the coefficient still has to be applied."]
    ]
  },
  {
    n: 4, topic: "Coefficients",
    stem: "How many total atoms are in <b>2NH<sub>3</sub></b>?",
    opts: [
      ["4", 0, "That is the atom count for a single NH<sub>3</sub> molecule. The coefficient 2 doubles it."],
      ["6", 0, "That counts only the hydrogen atoms: 2 x 3 = 6. The nitrogen still has to be added."],
      ["8", 1, "Correct. N: 2 x 1 = 2 and H: 2 x 3 = 6, so 8 atoms in total."],
      ["5", 0, "This adds the coefficient to the subscript instead of multiplying by it, and it leaves the nitrogen out."]
    ]
  },
  {
    n: 5, topic: "Coefficients",
    stem: "A student is told to build <b>2H<sub>2</sub>O</b> out of marshmallows, and a classmate builds <b>H<sub>2</sub>O<sub>2</sub></b> instead.<br><b>Which model contains more atoms in total?</b>",
    opts: [
      ["2H<sub>2</sub>O, with 6 atoms compared to 4", 1, "Correct. 2H<sub>2</sub>O is two separate water molecules: H is 2 x 2 = 4 and O is 2 x 1 = 2, giving 6 atoms. H<sub>2</sub>O<sub>2</sub> is one molecule with 2 H and 2 O, giving 4."],
      ["H<sub>2</sub>O<sub>2</sub>, because it has two subscripts", 0, "The number of subscripts does not decide the total. H<sub>2</sub>O<sub>2</sub> comes to 4 atoms, which is fewer than 6."],
      ["They contain the same number of atoms", 0, "They do not. Moving the 2 from the front to the back changes what gets multiplied."],
      ["H<sub>2</sub>O<sub>2</sub>, because a subscript counts more atoms than a coefficient", 0, "A coefficient multiplies every atom in the molecule, so it usually adds more than a single subscript does."]
    ]
  },
  {
    n: 6, topic: "Element symbols",
    stem: "Which element does the symbol <b>P</b> stand for?",
    opts: [
      ["Potassium", 0, "Potassium is K."],
      ["Phosphorus", 1, "Correct. P is phosphorus, one of the elements to know for this unit."],
      ["Protein", 0, "Protein is a macromolecule, not an element."],
      ["Platinum", 0, "Platinum is Pt. The single letter P is phosphorus."]
    ]
  },
  {
    n: 7, topic: "Element symbols",
    stem: "Which element does the symbol <b>S</b> stand for?",
    opts: [
      ["Sodium", 0, "Sodium is Na."],
      ["Silicon", 0, "Silicon is Si."],
      ["Sulfur", 1, "Correct. S is sulfur. It turns up in proteins, where disulfide bridges help hold the tertiary structure together."],
      ["Starch", 0, "Starch is a polysaccharide, not an element."]
    ]
  },
  {
    n: 8, topic: "Molecular shape",
    stem: "Which molecular shape accurately describes a molecule of <b>methane, CH<sub>4</sub></b>?",
    opts: [
      ["Bent", 0, "Bent has only two atoms attached to the center, like water. CH<sub>4</sub> has four hydrogens on the carbon."],
      ["Trigonal pyramidal", 0, "Trigonal pyramidal has three atoms attached to the center, like NH<sub>3</sub>."],
      ["Tetrahedral", 1, "Correct. Four atoms attach to the central carbon at 109.5 degrees, and no two of them sit directly opposite each other."],
      ["Linear", 0, "Linear means two atoms attached in a straight line at 180 degrees, like CO<sub>2</sub>."]
    ]
  },
  {
    n: 9, topic: "Molecular shape",
    stem: "Which molecular shape accurately describes a molecule of <b>carbon dioxide, CO<sub>2</sub></b>?",
    opts: [
      ["Linear", 1, "Correct. The two oxygen atoms sit directly opposite each other at 180 degrees, making a straight line."],
      ["Bent", 0, "Bent is the shape of water, at about 105 degrees. CO<sub>2</sub> is straight."],
      ["Trigonal planar", 0, "Trigonal planar needs three atoms attached to the center. CO<sub>2</sub> has two."],
      ["Flat 6-sided ring", 0, "A ring needs six centers joined in a closed loop, like the one inside a sugar."]
    ]
  },
  {
    n: 10, topic: "Molecular shape",
    stem: "H<sub>2</sub>O and CO<sub>2</sub> each contain exactly three atoms, but the two marshmallow models are not the same shape.<br><b>Besides the number of atoms, what else decides a molecule's shape?</b>",
    opts: [
      ["Which elements are bonded together and how they are arranged around the center atom", 1, "Correct. The central atom and the arrangement of bonds around it set the angles, which is why water is bent and carbon dioxide is linear."],
      ["The total mass of the molecule", 0, "Mass does not set bond angles. Two molecules of similar mass can have completely different shapes."],
      ["Whether the molecule dissolves in water", 0, "This has it backwards. Shape helps decide whether a molecule dissolves, not the other way around."],
      ["Nothing else, the two shapes should be identical", 0, "They are genuinely different. Water is bent at about 105 degrees and carbon dioxide is linear at 180 degrees."]
    ]
  }
]};
