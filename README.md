# Unit 1 Exam Practice

Atoms, Properties of Water, and Macromolecules.

A self-contained practice quiz bank for 9th grade Biology. Students answer first, then
find out whether they were right and why each other choice does not work. Nothing is
submitted anywhere and no account is needed.

**74 questions in 6 sections**

| Section | Questions | Built from |
|---|---|---|
| Vocabulary & Root Words | 12 | Unit 1 Root Words & Vocab sheet |
| Atoms & Molecules | 10 | Marshmallow Molecules worksheet |
| Properties of Water | 14 | Properties of Water notes, 7-station Water Lab |
| Proteins | 14 | Proteins notes, Functions of Proteins notes |
| Carbohydrates | 12 | Carbohydrates notes, Sugar Lab |
| Lipids | 12 | Lipids notes |

Sections follow Parts 1 through 6 of the Unit 1 Study Guide. Content from the
Macromolecules in Diets stations is deliberately excluded. Nucleic acids are not taught
anywhere in the bank and have no flashcard, but they do appear as wrong answer choices,
the same way Quiz 1 uses them.

---

## Putting it on GitHub Pages

You need all 9 files listed below, and they all sit at the TOP level of the repository.
No build step, no dependencies, nothing to install.

```
index.html     the whole app
vocab.js  atoms.js  water.js  proteins.js  carbs.js  lipids.js      the 6 question banks
tools.js       flashcard decks, the sorting drill, review sources
README.md      this file (optional on the site, but worth keeping)
```

1. On github.com click **New repository**. Give it a short name with no spaces, for
   example `unit1practice`, since the name becomes part of the web address.
   **Set it to Public.** Free GitHub Pages does not work on a private repository.
2. On the new repo's page click **uploading an existing file**.
3. Unzip the folder first, then drag in **the 9 files themselves**, not the folder that
   contains them. If you drag the folder, everything lands one level too deep and the
   site will not load. Keep the file names exactly as they are, lowercase included.
4. Click **Commit changes**.
5. Go to **Settings**, then **Pages** in the left sidebar.
6. Under **Source** choose **Deploy from a branch**. Set the branch to **main** and the
   folder to **/ (root)**. Click **Save**.
7. Wait one to two minutes, then reload the Settings → Pages screen. It will show the
   live address, which looks like `https://YOURUSERNAME.github.io/unit1practice/`.
8. Open it yourself once to check, then share that link with students. It works on a
   Chromebook with no sign-in and no account.

**If the page loads but the questions never appear,** the .js files are in the wrong
place. Open the repo and confirm you can see `index.html` and all 7 .js files listed
directly on the front page of the repository, not inside a folder.

**To change something later,** open the file in the repo, click the pencil icon, edit,
and commit. Or upload a new copy of the file and let it overwrite. The live site
updates within about a minute. Students may need to refresh once.

---

## What students can do

- Practice one section at a time or all six at once
- Shuffle the question order and the answer order, independently
- Flag a question to come back to
- Move forward and back without losing answers
- Finish early and still get a score for what they answered
- Re-practice only what they missed, or only what they flagged
- See a per-topic breakdown, weakest topic first, so they know where to study

Progress saves in the browser only. It does not sync between devices, it does not
reach you, and clearing browser data erases it. There is a Clear my progress button.

---

## Adding or editing questions

Each section is one file: `vocab.js`, `atoms.js`, `water.js`, `proteins.js`,
`carbs.js`, `lipids.js`. To add a question, copy an existing block and change it.
Nothing else needs to change.

```js
{
  n: 15,                                    // number within its section, keep these unique
  topic: "Cohesion",                        // drives the "where to study first" table
  stem: "Context sentence.<br><b>Bolded question?</b>",
  opts: [
    ["The wrong choice", 0, "Why this one does not work."],
    ["The right choice",  1, "Correct. Why this one does."]
  ],
  note: "Optional flag shown after submitting."   // optional, leave it out if not needed
}
```

Rules the app depends on:

- Exactly **one** option carries the `1`. Every other option carries `0`.
- The third item is always the explanation, and it must not be empty. Wrong answers get
  a reason they fail, which is where most of the learning happens.
- `topic` is what groups the results table. Reuse an existing topic name to add to that
  row rather than creating a new one.
- `stem` and the option text accept plain HTML, so `<b>`, `<u>`, `<sub>`, and `<br>` all work.

After editing, open `index.html` in a browser and click through the section you changed.
A missing comma will show up as a blank section.

---

## Teacher notes

**Nothing here comes from Quiz 1 or the Unit Exam.** Every question was written fresh
from the notes, labs, and study guide, so students practicing on this are not seeing
assessment items in advance.

**Lipid building blocks.** The study guide lists "monomer of a lipid." Lipids are not
true polymers the way carbohydrates and proteins are, so strictly speaking they have no
monomer. These questions follow your materials and ask for the building blocks, glycerol
and fatty acids, without raising the distinction with students. Worth knowing in case a
student asks.

**Sugar Lab questions** assume the class ran the standard version: Unknown A 0.5%
glucose, B water as the negative control, C 8%, D 4%, E 1% starch. If your unknowns were
lettered differently in a given section, edit `carbs.js` items 10 through 12.

**No images.** Your Quiz 1 leans on photographs and diagrams. This bank is text only, so
questions that would need a figure were written to stand on their own instead. To add an
image later, put the file in this same folder and reference it from a stem with a plain
`<img src="filename.png">` tag.
