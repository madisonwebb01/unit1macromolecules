// Unit 1, Part 4: Proteins
// Source: Proteins Doodle Note + Functions of Proteins Doodle Note. Format modeled on Quiz 1.
window.BANK_PROTEINS = {
  id: "proteins",
  title: "Proteins",
  questions: [
  {
    n: 1, topic: "Monomers and bonds",
    stem: "What are the <u>monomers</u> of <b>proteins</b>?",
    opts: [
      ["Monosaccharides", 0, "Those are the monomers of carbohydrates."],
      ["Fatty acids", 0, "Fatty acids are building blocks of lipids."],
      ["Amino acids", 1, "Correct. Amino acids link together by peptide bonds to build polypeptides and proteins."],
      ["Nucleotides", 0, "Those are the monomers of nucleic acids."]
    ]
  },
  {
    n: 2, topic: "Monomers and bonds",
    stem: "Which type of bond joins one amino acid to the next?",
    opts: [
      ["Hydrogen bond", 0, "Hydrogen bonds help hold the secondary structure in shape, but they are not what links amino acids into the chain."],
      ["Peptide bond", 1, "Correct. Amino acids are joined by peptide bonds. Two joined amino acids make a dipeptide, and many make a polypeptide."],
      ["Ionic bond", 0, "Ionic bonds are among the interactions in tertiary structure, but not the bond that builds the chain."],
      ["Glycosidic bond", 0, "Glycosidic bonds join sugars together in carbohydrates."]
    ]
  },
  {
    n: 3, topic: "Monomers and bonds",
    stem: "Fill in the blank:<br>A _______ is two amino acids joined together by a peptide bond.",
    opts: [
      ["polypeptide", 0, "A polypeptide is a chain of <i>many</i> amino acids. Poly- means many."],
      ["dipeptide", 1, "Correct. Di- means two, so a dipeptide is two amino acids joined by a peptide bond."],
      ["disaccharide", 0, "A disaccharide is two sugars joined together. That belongs to carbohydrates."],
      ["monomer", 0, "A monomer is a single building block. Two joined together is no longer a monomer."]
    ]
  },
  {
    n: 4, topic: "Monomers and bonds",
    stem: "<b>Essential amino acids</b> get their name because:",
    opts: [
      ["They are the only amino acids the body actually uses", 0, "The body uses all 20. Essential refers to where they come from, not whether they are used."],
      ["The body cannot make them, so they must come from the food a person eats", 1, "Correct. 9 of the 20 amino acids are essential, and they have to be obtained from the diet."],
      ["They are essential for building carbohydrates", 0, "Amino acids build proteins, not carbohydrates."],
      ["They are the amino acids found at the start of every protein", 0, "Position in the chain has nothing to do with the term essential."]
    ]
  },
  {
    n: 5, topic: "Protein structure",
    stem: "What statement best describes the <u>primary structure</u> of a protein?",
    opts: [
      ["It is the sequence of amino acids in the polypeptide chain", 1, "Correct. Primary structure is the order of amino acids, coded for by genes, and it determines the protein's final 3D shape."],
      ["It is when the chain coils into an alpha helix or folds into a beta pleated sheet", 0, "That describes secondary structure."],
      ["It is when the whole chain folds into a 3D shape based on R-group interactions", 0, "That describes tertiary structure."],
      ["It is when two or more chains bind together as subunits", 0, "That describes quaternary structure."]
    ]
  },
  {
    n: 6, topic: "Protein structure",
    stem: "What statement best describes the <u>tertiary structure</u> of a protein?",
    opts: [
      ["It is a straight sequence of amino acids joined by peptide bonds", 0, "That is primary structure."],
      ["It is the folding of the whole polypeptide into a 3D shape, driven mainly by interactions between R-groups", 1, "Correct. Hydrophobic R-groups hide on the inside, and disulfide bridges, ionic bonds, and hydrogen bonds help hold the shape."],
      ["It is the coiling of the chain into an alpha helix", 0, "Alpha helices and beta pleated sheets are secondary structure."],
      ["It is two or more polypeptide chains bound together", 0, "That is quaternary structure."]
    ]
  },
  {
    n: 7, topic: "Protein structure",
    stem: "In a protein's <b>tertiary structure</b>, where do the <b>hydrophobic</b> R-groups usually end up?",
    opts: [
      ["On the outside, facing the surrounding water", 0, "Hydrophobic means water-fearing, so these R-groups turn away from water rather than toward it."],
      ["Hidden on the inside of the folded structure", 1, "Correct. Hydrophobic R-groups hide on the inside while hydrophilic portions sit on the outside."],
      ["Spread evenly across the whole molecule", 0, "The arrangement is not even. Whether an R-group attracts or repels water decides where it ends up."],
      ["Attached to the peptide bonds along the backbone", 0, "R-groups branch off the backbone. Their position in the folded protein is what this question is about."]
    ]
  },
  {
    n: 8, topic: "Protein structure",
    stem: "Hemoglobin is made of four separate polypeptide chains bound together.<br><b>Which level of protein structure does this describe?</b>",
    opts: [
      ["Primary structure", 0, "Primary structure is the sequence within a single chain."],
      ["Secondary structure", 0, "Secondary structure is the coiling and folding within a chain, not the joining of separate chains."],
      ["Tertiary structure", 0, "Tertiary structure is the 3D folding of one polypeptide chain."],
      ["Quaternary structure", 1, "Correct. Quaternary structure is two or more polypeptide chains bound together, and each chain is called a subunit. Not all proteins have it."]
    ]
  },
  {
    n: 9, topic: "Protein structure",
    stem: "A gene is changed so that one amino acid in a protein's chain is swapped for a different one.<br><b>Which level of structure is affected first?</b>",
    opts: [
      ["Primary structure", 1, "Correct. Genes code for the amino acid sequence, which is the primary structure. Because the sequence determines the final shape, the other levels can be affected too, but primary changes first."],
      ["Secondary structure", 0, "Secondary structure can certainly change as a result, but only because the sequence changed first."],
      ["Tertiary structure", 0, "Tertiary folding may end up different, but the change begins with the sequence."],
      ["Quaternary structure", 0, "Not every protein even has quaternary structure, and any change there would follow from the sequence change."]
    ]
  },
  {
    n: 10, topic: "Protein functions",
    stem: "Hemoglobin binds to oxygen in red blood cells and carries it to tissues around the body.<br><b>Which protein function does this demonstrate?</b>",
    opts: [
      ["Transport", 1, "Correct. Transport proteins move substances around the body in the bloodstream or lymph."],
      ["Contractile", 0, "Contractile proteins let muscles move. Actin and myosin are the examples."],
      ["Defense", 0, "Defense proteins are antibodies, which target pathogens."],
      ["Storage", 0, "Storage proteins provide food for developing embryos or seedlings, like albumin in eggs."]
    ]
  },
  {
    n: 11, topic: "Protein functions",
    stem: "Actin and myosin are filaments that slide over each other so that muscles can move.<br><b>Which protein function does this demonstrate?</b>",
    opts: [
      ["Hormonal", 0, "Hormones regulate processes by traveling in the blood to target organs."],
      ["Contractile", 1, "Correct. Contractile proteins are what allow muscles to contract, using filaments that slide past one another."],
      ["Transport", 0, "Transport proteins move substances around the body. Hemoglobin is the example."],
      ["Defense", 0, "Defense proteins are antibodies produced by white blood cells."]
    ]
  },
  {
    n: 12, topic: "Protein functions",
    stem: "Insulin and glucagon travel in the blood to target organs and control blood glucose levels.<br><b>Which protein function does this demonstrate?</b>",
    opts: [
      ["Structural", 0, "Structural proteins form structures in cells, such as the cytoskeleton."],
      ["Hormonal", 1, "Correct. Hormones regulate processes in the body by traveling in the blood to target organs. Insulin and glucagon both control blood glucose levels."],
      ["Digestive enzyme", 0, "Digestive enzymes break food molecules down in the digestive system."],
      ["Storage", 0, "Storage proteins provide a source of food for developing embryos and seedlings."]
    ]
  },
  {
    n: 13, topic: "Protein functions",
    stem: "When a pathogen enters the body, white blood cells produce proteins that can neutralize it or mark it for destruction by other cells.<br><b>What are these proteins called?</b>",
    opts: [
      ["Enzymes", 0, "Enzymes speed up chemical reactions. They are not what white blood cells make to target pathogens."],
      ["Antibodies", 1, "Correct. Antibodies are defense proteins made by white blood cells to neutralize pathogens or mark them for destruction."],
      ["Hormones", 0, "Hormones regulate body processes. Insulin and glucagon are the examples."],
      ["Keratin", 0, "Keratin is a structural protein, found in hair and nails."]
    ]
  },
  {
    n: 14, topic: "Protein functions",
    stem: "<b>Why are proteins able to carry out so many different functions in living things?</b>",
    opts: [
      ["Because they are the largest macromolecule", 0, "Size is not what gives proteins their range. Some carbohydrate polymers are very large too."],
      ["Because the levels of protein structure give them a huge variety of shapes, and different shapes do different jobs", 1, "Correct. Proteins are incredibly varied in shape because of the levels of structure, and having many different shapes lets them carry out many different functions."],
      ["Because they all contain the same sequence of amino acids", 0, "The opposite is true. Different sequences are exactly what create different proteins."],
      ["Because they dissolve easily in water", 0, "Solubility varies between proteins and is not the source of their variety of functions."]
    ]
  }
]};
