// Unit 1, Part 6: Lipids
// Source: Lipids Doodle Note. Format modeled on Quiz 1.
window.BANK_LIPIDS = {
  id: "lipids",
  title: "Lipids",
  questions: [
  {
    n: 1, topic: "Building blocks",
    stem: "What are the building blocks of a <b>triglyceride</b>?",
    opts: [
      ["Three amino acids joined by peptide bonds", 0, "Amino acids and peptide bonds belong to proteins."],
      ["One glycerol and three fatty acids", 1, "Correct. Glycerol + 3 fatty acids gives a triglyceride, which is where the tri- in the name comes from."],
      ["Three monosaccharides joined in a chain", 0, "Chains of monosaccharides build carbohydrates, not lipids."],
      ["One glycerol and two phosphate groups", 0, "Glycerol is right, but a triglyceride carries three fatty acid tails, not phosphate groups."]
    ]
  },
  {
    n: 2, topic: "Building blocks",
    stem: "Label the two parts of a <b>fatty acid</b>.",
    opts: [
      ["A carboxyl group joined to a hydrocarbon chain", 1, "Correct. A fatty acid is a carboxyl group joined to a hydrocarbon chain of variable length."],
      ["An amino group joined to an R-group", 0, "Amino groups and R-groups are parts of an amino acid."],
      ["A phosphate head joined to two hydrocarbon tails", 0, "That describes a phospholipid, which is built from fatty acids rather than being one."],
      ["Two glucose rings joined by a bond", 0, "That describes a disaccharide, which is a carbohydrate."]
    ]
  },
  {
    n: 3, topic: "Building blocks",
    stem: "Glycerol bonds with three fatty acids to form a triglyceride, and three water molecules are released.<br><b>What is this type of reaction called?</b>",
    opts: [
      ["Hydrolysis", 0, "Hydrolysis adds water to break molecules apart. Here water is being released."],
      ["Dehydration synthesis", 1, "Correct. Water is removed so the pieces can bond, which is the same reaction that builds disaccharides and polypeptides."],
      ["Vaporization", 0, "Vaporization turns liquid water into gas. It is not how molecules bond together."],
      ["Denaturing", 0, "Denaturing is when a protein loses its shape."]
    ]
  },
  {
    n: 4, topic: "Saturated and unsaturated",
    stem: "What is the difference between a <b>saturated</b> and an <b>unsaturated</b> fatty acid?",
    opts: [
      ["A saturated fatty acid has carbon-carbon double bonds and an unsaturated one does not", 0, "This is backwards. The double bonds are what make a fatty acid unsaturated."],
      ["An unsaturated fatty acid has one or more carbon-carbon double bonds and a saturated one has none", 1, "Correct. On the doodle note you highlighted the carbon-carbon double bonds to identify the unsaturated fatty acids."],
      ["A saturated fatty acid contains water and an unsaturated one does not", 0, "Neither type contains water. The difference is in the bonds along the carbon chain."],
      ["An unsaturated fatty acid is always longer than a saturated one", 0, "Chain length varies in both types. Length is not what the terms describe."]
    ]
  },
  {
    n: 5, topic: "Lipids in water",
    stem: "Olive oil is poured into a glass of water and, no matter how much it is stirred, it separates back out into its own layer.<br><b>Why does this happen?</b>",
    opts: [
      ["Lipids are insoluble in water, so they do not mix and instead form a separate layer", 1, "Correct. Lipids are hydrophobic, which is why triglycerides form an insoluble layer in water."],
      ["Lipids are polar, so they are repelled by the polar water molecules", 0, "Lipids are nonpolar. Two polar substances would mix, not separate."],
      ["Lipids dissolve completely but become invisible", 0, "The oil stays visible as a separate layer, which shows it has not dissolved."],
      ["The oil is denser than water and sinks to the bottom", 0, "Oil floats on top of water. Either way, density is not what keeps the two from mixing."]
    ]
  },
  {
    n: 6, topic: "Lipids in water",
    stem: "Triglycerides are stored in the body as fat.<br><b>Why does being insoluble in water make them good for storage?</b>",
    opts: [
      ["Because they do not dissolve, they do not affect the water potential of a cell", 1, "Correct. Triglycerides can be stored in large amounts without interfering with the cell's water balance."],
      ["Because they do not dissolve, they cannot be broken down for energy", 0, "They can be broken down. Their long hydrocarbon tails release a lot of energy when broken."],
      ["Because they do not dissolve, they float out of the body", 0, "Stored fat stays in the body. Insolubility is about mixing with water, not leaving the body."],
      ["Because they do not dissolve, they can pass through the cell membrane freely", 0, "A triglyceride is far too large to slip through the membrane, and a storage molecule that leaked out of the cell would be no use. Insolubility helps because stored fat does not disturb the cell's water balance."]
    ]
  },
  {
    n: 7, topic: "Phospholipids",
    stem: "The diagram of a cell membrane shows phospholipids arranged in a bilayer, with the tails pointing inward and the heads pointing outward.<br><b>Why are the tails turned inward?</b>",
    opts: [
      ["The tails are hydrophilic, so they are attracted to the water inside the membrane", 0, "The tails are hydrophobic, and there is no water inside the membrane for them to be attracted to."],
      ["The tails are hydrophobic, so they turn away from the water on both sides of the membrane", 1, "Correct. The hydrophilic heads face the water and the hydrophobic tails face inward, away from it."],
      ["The tails carry a positive charge that pulls them together", 0, "The tails are nonpolar hydrocarbon chains, so they carry no charge."],
      ["The tails are made of glycerol, which cannot touch water", 0, "Glycerol is part of the head region, and the arrangement is explained by the tails repelling water."]
    ]
  },
  {
    n: 8, topic: "Phospholipids",
    stem: "Because of the phospholipid bilayer, most water-soluble molecules cannot pass straight through the cell membrane.<br><b>What does this allow the membrane to do?</b>",
    opts: [
      ["Control what enters and leaves the cell", 1, "Correct. The membrane regulates what can enter and exit the cell, which is possible because the nonpolar tails block most water-soluble molecules."],
      ["Store energy for long-term use", 0, "Long-term energy storage is the job of triglycerides, not of the membrane."],
      ["Speed up chemical reactions inside the cell", 0, "That is what enzymes do, and enzymes are proteins."],
      ["Dissolve nutrients so the cell can absorb them", 0, "Dissolving is a property of water. The membrane's job here is regulating passage."]
    ]
  },
  {
    n: 9, topic: "Functions and examples",
    stem: "Animals living in cold habitats often carry a thick layer of fat.<br><b>Which function of lipids does this demonstrate?</b>",
    opts: [
      ["Insulation", 1, "Correct. Stored fat provides insulation, which is why it is useful for animals in cold habitats."],
      ["Carrying genetic information", 0, "That is the job of nucleic acids."],
      ["Speeding up chemical reactions", 0, "Enzymes do that, and they are proteins."],
      ["Providing immediate energy for a quick burst of activity", 0, "Simple sugars release energy quickly. Lipids are a long-term store."]
    ]
  },
  {
    n: 10, topic: "Functions and examples",
    stem: "Plants coat their leaves with a waxy layer.<br><b>What does this wax do for the plant?</b>",
    opts: [
      ["It prevents water loss from the leaf", 1, "Correct. Waxes are very water insoluble and solid at room temperature, which makes them useful for keeping water in."],
      ["It absorbs extra water from the air", 0, "The wax does the opposite. It keeps water from escaping."],
      ["It provides the plant with a quick source of glucose", 0, "Glucose comes from carbohydrates, not from the waxy coating."],
      ["It speeds up photosynthesis", 0, "Waxes form a protective barrier. They are not involved in the reactions of photosynthesis."]
    ]
  },
  {
    n: 11, topic: "Functions and examples",
    stem: "<b>Steroids</b> can be identified by which structural feature?",
    opts: [
      ["A single long hydrocarbon chain", 0, "That describes a fatty acid tail or a wax, not a steroid."],
      ["Four rings of carbon atoms", 1, "Correct. Steroids have a basic structure of four rings of carbon atoms. They are still hydrophobic and insoluble in water."],
      ["A phosphate head with two tails", 0, "That describes a phospholipid."],
      ["A glycerol backbone with three tails", 0, "That describes a triglyceride."]
    ]
  },
  {
    n: 12, topic: "Functions and examples",
    stem: "A doctor tells a patient that his LDL cholesterol is too high.<br><b>Why is that a concern?</b>",
    opts: [
      ["High LDL causes fatty deposits to build up in the arteries, raising the risk of heart disease and stroke", 1, "Correct. To bring LDL down, a diet should be low in saturated fats and trans fats."],
      ["High LDL means the patient has no cholesterol in his cell membranes", 0, "Cholesterol is a key component of cell membranes, and high LDL does not remove it from them."],
      ["High LDL prevents the body from making any hormones", 0, "Steroids are the basis of many hormones, but high LDL does not shut hormone production down."],
      ["High LDL causes the blood to become too thin", 0, "The concern is fatty deposits narrowing the arteries, not thin blood."]
    ]
  }
]};
