// Unit 1, Part 3: Properties of Water
// Source: Properties of Water Doodle Note + the 7-station Water Lab. Format modeled on Quiz 1.
window.BANK_WATER = {
  id: "water",
  title: "Properties of Water",
  questions: [
  {
    n: 1, topic: "Polarity",
    stem: "<b>Polarity</b> in water refers to:",
    opts: [
      ["Water carrying a full positive charge on one end and a full negative charge on the other", 0, "The charges are partial, not full. A water molecule is neutral overall."],
      ["The shared electrons sitting closer to oxygen, making oxygen partially negative and the hydrogens partially positive", 1, "Correct. That uneven pull on the shared electrons creates a difference in charge across the molecule, which is what polarity means."],
      ["Water molecules breaking apart into hydrogen and oxygen gas", 0, "That would be a chemical reaction. Polarity describes how charge is spread within an intact molecule."],
      ["Water having no charge anywhere in the molecule", 0, "That describes a nonpolar molecule, like a fatty acid tail."]
    ]
  },
  {
    n: 2, topic: "Polarity",
    stem: "Which type of bond holds one water molecule to <b>another</b> water molecule?",
    opts: [
      ["Covalent bond", 0, "Covalent bonds hold the hydrogens to the oxygen <i>within</i> a single water molecule."],
      ["Hydrogen bond", 1, "Correct. The partially positive hydrogen of one molecule is attracted to the partially negative oxygen of another. These hydrogen bonds cause cohesion."],
      ["Ionic bond", 0, "Ionic bonds form between ions, such as in salt. Water molecules are neutral overall."],
      ["Peptide bond", 0, "Peptide bonds join amino acids in proteins. They have nothing to do with water molecules attracting each other."]
    ]
  },
  {
    n: 3, topic: "Polarity",
    stem: "Which type of bond holds the two hydrogen atoms to the oxygen <b>inside</b> a single water molecule?",
    opts: [
      ["Hydrogen bond", 0, "Hydrogen bonds form <i>between</i> separate water molecules, not within one."],
      ["Covalent bond", 1, "Correct. The atoms inside a water molecule share electrons in covalent bonds. The sharing is uneven, which is what makes water polar."],
      ["Disulfide bridge", 0, "Disulfide bridges form between cysteines in a protein's tertiary structure."],
      ["Ionic bond", 0, "Ionic bonds form when electrons are transferred between atoms, creating charged ions that then attract each other. The atoms inside water share electrons instead."]
    ]
  },
  {
    n: 4, topic: "Cohesion",
    stem: "At the penny station you kept adding drops and the water piled into a dome before it finally spilled over the edge.<br><b>Which property of water explains the dome?</b>",
    opts: [
      ["Adhesion, because the water was sticking to the metal of the penny", 0, "Adhesion is water sticking to a <i>different</i> substance. That is what holds the drop onto the penny, but it does not explain the dome piling upward."],
      ["Cohesion, because the water molecules were sticking to each other and resisting the force pulling them apart", 1, "Correct. Cohesion gives water a high surface tension, letting it resist outside forces and hold a dome shape."],
      ["Solvency, because the water was dissolving part of the penny", 0, "Nothing dissolved. The penny was unchanged when you dried it off."],
      ["High specific heat capacity, because the water resisted a change in temperature", 0, "Specific heat capacity is about temperature, not about the shape a drop holds."]
    ]
  },
  {
    n: 5, topic: "Cohesion",
    stem: "At the paperclip station, you dropped paperclips into a test tube that was already filled to the very top, and the water bulged above the rim before it spilled.<br><b>Which property of water allows this?</b>",
    opts: [
      ["Cohesion creates surface tension, letting the surface resist the force pushing it outward", 1, "Correct. This is the same property as the penny dome. Hydrogen bonds between water molecules hold the surface together."],
      ["Adhesion holds the water to the glass of the test tube", 0, "Adhesion does pull water up the glass, but the bulge above the rim is held together by water sticking to itself."],
      ["Water's density keeps the paperclips from sinking", 0, "The paperclips do sink. They are denser than water. The bulge is about the surface, not about floating."],
      ["Water's high specific heat capacity keeps the surface stable", 0, "Specific heat capacity concerns temperature change, not surface tension."]
    ]
  },
  {
    n: 6, topic: "Adhesion",
    stem: "At the climbing water station, you rested a strip of tissue paper so it just touched the colored water, and within a few minutes the color had traveled up above the water line.<br><b>Which property of water is mainly responsible?</b>",
    opts: [
      ["Cohesion, because water molecules stick to each other", 0, "Cohesion helps pull the column along, but the water only starts climbing because it is attracted to the paper itself."],
      ["Adhesion, because water is attracted to a different substance and climbs it", 1, "Correct. Water is more attracted to the paper than to itself, so it climbs. This is called capillary action."],
      ["Density, because water rises when it becomes less dense", 0, "The water did not change temperature or state, so density is not what moved it."],
      ["Solvency, because the food coloring dissolved in the water", 0, "The coloring dissolving is why you could <i>see</i> the movement, but it is not what caused the climb."]
    ]
  },
  {
    n: 7, topic: "Adhesion",
    stem: "Water travels from the roots of a tree all the way up to its highest leaves through the xylem.<br><b>Which combination of properties makes this possible?</b>",
    opts: [
      ["Cohesion and adhesion working together", 1, "Correct. Adhesion pulls water up along the walls of the xylem, and cohesion keeps the column of water connected so it moves as one."],
      ["Density and solvency working together", 0, "Water dissolves the nutrients it carries, but neither property pulls the column upward."],
      ["Specific heat capacity and latent heat of vaporization", 0, "Both of these concern heat energy rather than movement up a narrow tube."],
      ["Adhesion alone, with no help from other properties", 0, "Adhesion starts the climb, but without cohesion the column would break apart instead of rising as one."]
    ]
  },
  {
    n: 8, topic: "Density",
    stem: "<b>Why does ice float on liquid water?</b>",
    opts: [
      ["As water freezes, hydrogen bonds hold the molecules in a more open structure, so ice is less dense than liquid water", 1, "Correct. The lattice has more space between molecules, so the same amount of water takes up more room as a solid."],
      ["Freezing removes the hydrogen bonds entirely, making ice lighter", 0, "Freezing does the opposite. The hydrogen bonds become fixed in place, which is what creates the open structure."],
      ["Ice is warmer than the liquid water around it", 0, "Ice is colder. Temperature is not what makes it float."],
      ["Ice contains trapped air that makes it buoyant", 0, "Pure ice floats with no trapped air. The open arrangement of the molecules is the reason."]
    ]
  },
  {
    n: 9, topic: "Density",
    stem: "A pond in Boulder freezes over in January, but fish and insects go on living in the water underneath.<br><b>Why does ice floating matter for the organisms below it?</b>",
    opts: [
      ["The ice layer sits on top and keeps the pond from freezing solid all the way down", 1, "Correct. Because ice is less dense it forms a layer on the surface, and the organisms underneath can carry on living as normal."],
      ["The ice layer warms the water underneath it", 0, "Ice does not add heat. It insulates and, more importantly, it keeps the whole pond from becoming solid."],
      ["The ice dissolves oxygen into the water below", 0, "Solvency is a real property of water, but it is not why a floating ice layer helps."],
      ["The ice sinks and pushes warmer water to the surface", 0, "Ice does not sink. If it did, ponds would freeze from the bottom up and organisms would have nowhere to go."]
    ]
  },
  {
    n: 10, topic: "Specific heat capacity",
    stem: "The air temperature in a meadow can swing by 30 degrees over the course of a day, but the pond in the same meadow barely changes temperature.<br><b>Which property of water makes this possible?</b>",
    opts: [
      ["Water has a high specific heat capacity, so it takes a great deal of heat energy to change its temperature", 1, "Correct. Water acts as a buffer against temperature change, which creates a stable environment for the organisms living in the pond."],
      ["Water is cohesive, so the molecules hold together", 0, "Cohesion explains surface tension, not resistance to temperature change."],
      ["Water is a universal solvent, so it dissolves heat", 0, "Heat is energy, not a substance that dissolves."],
      ["Water is less dense as a solid than as a liquid", 0, "That explains why ice floats. It does not explain the pond's steady daytime temperature."]
    ]
  },
  {
    n: 11, topic: "Specific heat capacity",
    stem: "Living things are made mostly of water.<br><b>How does water's high specific heat capacity help a living organism?</b>",
    opts: [
      ["It helps the organism maintain a stable internal body temperature", 1, "Correct. Because water resists temperature change, being made mostly of water buffers an organism against swings in its surroundings."],
      ["It allows the organism to dissolve its own tissues", 0, "Water is an excellent solvent, but that is a different property and dissolving tissue is not a benefit."],
      ["It keeps the organism from freezing under any conditions", 0, "Organisms can still freeze. High specific heat capacity slows temperature change, it does not prevent it."],
      ["It makes the organism less dense than its surroundings", 0, "That relates to density. It is not what specific heat capacity does."]
    ]
  },
  {
    n: 12, topic: "Latent heat of vaporization",
    stem: "On a hot day you sweat, and as the sweat evaporates off your skin you feel cooler.<br><b>Which property of water explains why this cools you down?</b>",
    opts: [
      ["Water has a high latent heat of vaporization, so evaporating it takes a large amount of heat energy away from your skin", 1, "Correct. Breaking the hydrogen bonds to turn liquid water into gas requires a lot of heat, and that heat comes from your body."],
      ["Water is cohesive, so the sweat pulls heat along with it", 0, "Cohesion explains surface tension. It does not move heat off your skin."],
      ["Water is denser than air, so it sinks and carries heat downward", 0, "Density is not what makes evaporation cooling work."],
      ["Water dissolves the salt in sweat, which lowers your temperature", 0, "Solvency explains why sweat is salty, but the cooling comes from the energy needed to evaporate the water."]
    ]
  },
  {
    n: 13, topic: "Solvency",
    stem: "A spoonful of salt is stirred into a glass of water and disappears.<br><b>What are the water molecules doing to make this happen?</b>",
    opts: [
      ["They surround each ion and pull it away from the crystal", 1, "Correct. Because water is polar, its partially positive and partially negative ends surround each ion, dissolving the salt."],
      ["They chemically break each ion into smaller atoms", 0, "Dissolving is not the same as breaking the ions apart. The ions stay intact, just separated and surrounded."],
      ["They form hydrogen bonds with each other and push the salt to the bottom", 0, "The salt does not settle at the bottom once it dissolves. Water actively surrounds the ions."],
      ["They evaporate, leaving the salt behind", 0, "That is what happens when a salt solution dries out, which is the opposite of dissolving."]
    ]
  },
  {
    n: 14, topic: "Solvency",
    stem: "Water is often called the <b>universal solvent</b>.<br><b>Which types of substances does it dissolve best?</b>",
    opts: [
      ["Polar and ionic substances", 1, "Correct. Because water is polar, it dissolves other polar molecules and ionic compounds like salt. This is why it works as a transport medium inside cells."],
      ["Nonpolar substances like oils and fats", 0, "Water does not dissolve these. That is exactly why lipids form a separate layer in water."],
      ["Every substance equally well", 0, "The name is a bit misleading. Water dissolves a great many substances, but nonpolar ones resist it."],
      ["Only gases", 0, "Water does dissolve some gases, but its real strength is with polar and ionic substances."]
    ]
  }
]};
