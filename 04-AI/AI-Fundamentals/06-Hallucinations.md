# AI Hallucinations and Anti-Hallucination Prompting

*My learning notes, in simple language with QA examples.*

---

# Part A: Understanding hallucinations

## 1. What is a hallucination?

When an AI states something **false in a confident, convincing way**.

**What it looks like**
- Made-up facts, people, products or features
- Fake sources, links or citations
- Wrong numbers, dates, error codes or IDs
- Code that calls functions or APIs that don't exist
- Invented UI elements or system behaviour (a big risk for test case generation)

---

## 2. Why it happens

| # | Reason | Simple explanation |
|---|---|---|
| 1 | It predicts **plausible text, not verified facts** | It picks the most likely next token. Likely is not the same as true |
| 2 | It was trained on **confident answers** | Training conversations show confident replies to "Who is X?", so it copies that tone even when it doesn't know |
| 3 | Its knowledge is a **vague summary** | Facts live in the parameters as a lossy compression. Common facts are strong, rare ones are fuzzy |
| 4 | It **doesn't look things up** by default | Without a tool, for anything after its knowledge cutoff it just guesses |

**Example from the Karpathy video:** an older model was asked "Who is Orson Kovats?" (a made-up name). It confidently said he was an author, then a TV character, then a baseball player. **Different confident answers each time is a sign it's guessing.**

---

## 3. Good behaviour looks like this

From my own test: I asked an AI "who is [made-up name]". It said it couldn't find reliable information and asked for context, instead of inventing a biography. That's what the "teach it to say I don't know" fix is meant to produce.

**Note:** that chat also referred to "previous conversations". That's a **memory feature**: saved notes from earlier chats are added to the model's input (context window). It is not training, and the parameters didn't change.

---

## 4. Three layers of defence

| Layer | Who does it | Examples |
|---|---|---|
| **Model** | The AI company | Train the model to say "I don't know" when it lacks the knowledge |
| **Product / tools** | The app builder | Web search, code execution, retrieval of documents (puts real information into the context window) |
| **Prompt** | **Us** | Give the source text, restrict the model to it, require "I don't know" answers (Part B) |

All three **reduce** hallucinations. None **eliminates** them.

---

# Part B: The anti-hallucination block

## 5. The idea

A **ROLE block** placed above any QA prompt that generates facts (test cases, bug summaries, requirement analysis). It does two things:

1. **Limits the model to the inputs you provide** (so everything it says is on the desk, in the context window).
2. **Gives a gap an exact name**, so missing information shows up as a fixed phrase instead of fluent invented text.

---

## 6. The block (from my notes)

```
ROLE: You are a QA assistant operating under strict verification rules.

## SCOPE OF KNOWLEDGE

You may ONLY use information explicitly provided in:
- PRD
- API documentation
- Logs
- Screenshots
- Test data
- User input

## STRICT RULES (MANDATORY)

1. DO NOT invent features, APIs, error codes, UI elements, or behavior.
2. DO NOT assume default or "typical" system behavior.
3. If information is missing or unclear, respond with:
   "Insufficient information to determine."
4. Every assertion must be traceable to provided input.
5. If a detail is inferred, label it explicitly as:
   "Inference (low confidence)".
6. Output must be deterministic and repeatable.

## PROCESS YOU MUST FOLLOW

**Step 1:** Extract verifiable facts from the input.

**Step 2:** List unknown or missing information.

**Step 3:** Generate output ONLY from Step 1 facts.

**Step 4:** Perform a self-check for hallucinations or contradictions.

## OUTPUT FORMAT (STRICT)

- Verified Facts:
- Missing / Unknown Information:
- Generated Output:
- Self-Validation Check:

---

**If you cannot complete a step, stop and report why.**
```

---

## 7. What each part does

| Part | Why it helps |
|---|---|
| **Scope of knowledge** | Restricts the model to the provided inputs, so it relies on the desk, not its vague memory |
| **Rule 1: no inventing** | Names the exact things QA outputs tend to invent (features, APIs, error codes, UI, behaviour) |
| **Rule 2: no "typical" behaviour** | Stops the model filling gaps with what *usually* happens in systems |
| **Rule 3: fixed fallback phrase** | Turns a gap into a visible, searchable signal |
| **Rule 4: traceable** | Every claim should point back to something provided |
| **Rule 5: label inferences** | Separates facts from guesses |
| **Rule 6: deterministic** | A request for consistency (see the limits in section 10) |
| **Process steps 1-4** | Forces facts first, then gaps, then output from the facts only, then a check |
| **Strict output format** | Makes the output easy to review and parse |

---

## 8. The fallback strings (the part a tester should care about most)

- `Insufficient information to determine.`
- `Inference (low confidence)`

They are **greppable**. A reviewer, or a script in a pipeline, can **count them** instead of trusting fluent text.

```bash
# how many gaps did the model admit?
grep -c "Insufficient information to determine." output.txt

# how many guesses did it flag?
grep -c "Inference (low confidence)" output.txt
```

*QA analogy:* like a log level. You don't read every line, you search for ERROR and WARN. These phrases are the model's ERROR and WARN.

---

## 9. The same rules as a RICE-POT "Parameters" block

For factual or technical output:

```
- Output must be deterministic (same input → same output).
- Every assertion must be traceable to a provided input.
- If information is missing or unclear, respond exactly: "Insufficient information to determine."
- If a detail is inferred, label it exactly: "Inference (low confidence)".
- Do not invent features, IDs, APIs, error codes, UI elements, or behavior.
- Do not assume default or "typical" system behavior.
```

**Don't get confused:** in a prompt template, "Parameters" means the **rules and constraints in the prompt**. It is **not** the same as an LLM's parameters (weights) from Part 7.

---

# Part C: Limits and how to test it

## 10. "Stated is not obeyed"

**The rules reduce invention. They do not prevent it.** Things to watch:

| Risk | What happens | What to do |
|---|---|---|
| **Still invents** | The model adds a plausible detail anyway | Review the output against the source |
| **Fake traceability** | It claims a fact comes from "section 3" when it doesn't | Spot-check that cited sections or quotes really exist |
| **Over-refusing** | It says "Insufficient information" even when the answer is in the input | Test with complete inputs too |
| **Inconsistent labels** | Inferences aren't always labelled | Compare the count of labels with a manual review |
| **Weak self-check** | Step 4 is the model checking its own work | Treat it as a hint, not proof. Verify independently |
| **"Deterministic" can't be forced** | A prompt can't guarantee identical output, because the next token is sampled | Use a low temperature (API), run several times, and compare |

---

## 11. Small illustrative example (made up by me)

**Input (PRD excerpt):** "Login accepts email and password. After 5 failed attempts the account is locked."

**Question:** "What happens after 3 failed attempts?"

**A good response would look like:**
- **Verified Facts:** login uses email and password; the account locks after 5 failed attempts.
- **Missing / Unknown Information:** behaviour after 3 attempts, lock duration, unlock method, error message text.
- **Generated Output:** "Insufficient information to determine." (The PRD only states the behaviour at 5 attempts.)
- **Self-Validation Check:** no invented behaviour; every statement maps to the PRD line.

A **bad response** would say "a warning message is shown after 3 attempts", which sounds typical but is **invented**.

---

## 12. How to test the block itself

1. **Missing-info test:** give a PRD that lacks a detail and ask about it. Expect the exact fallback phrase.
2. **Complete-input test:** give full information. Expect a real answer, not over-refusal.
3. **Trap test:** ask about a feature that isn't in the input. It must not describe it.
4. **Repeat test:** run the same prompt 5 to 10 times and compare facts and fallback counts.
5. **Traceability check:** ask for the source line for each claim and verify them.
6. **Contradiction test:** give two conflicting inputs. It should flag the conflict, not pick one silently.
7. **Count the strings:** use `grep -c` on the saved outputs to track gaps and inferences over time.

---

# Part D: QA angle and interview prep

## 13. QA checklist for hallucinations

- [ ] Ask about **things that don't exist** (fake person, product, API method). A good system should say it doesn't know.
- [ ] **Ask the same question several times.** Inconsistent answers suggest guessing.
- [ ] **Check every source or link** it gives.
- [ ] **Compare against a trusted answer set** and track how often it's wrong.
- [ ] **Run generated code.** Does it compile, and do the functions exist?
- [ ] Test **with and without** grounding documents or web search.
- [ ] Test near the **knowledge cutoff**.
- [ ] Run hallucination tests in a **clean session** (memory features can change answers).

---

## 14. Interview answers (30 seconds each)

**What are hallucinations and why do they happen?**
> Hallucinations are confident but false outputs. They happen because an LLM predicts plausible text rather than verified facts, was trained on confident-sounding answers, and holds only a lossy summary of its training data.

**How do you reduce them?**
> At the model level, by training it to say "I don't know". At the product level, with tools like search. At the prompt level, by supplying the source and restricting the model to it. None of these eliminate them, so outputs still need verification.

**How would you use prompts to reduce hallucinations in QA work?**
> I'd use an anti-hallucination block: restrict the model to the provided inputs, forbid inventing features, APIs or error codes, require a fixed phrase like "Insufficient information to determine." for gaps, and label inferences. Because those phrases are greppable, I can count them in a pipeline, and I still verify the output because instructions reduce invention but don't prevent it.

**Does temperature 0 stop hallucinations?**
> No. It makes output more repeatable, not more true.

---

## One-line recap

> Hallucinations come from predicting plausible text, not verified facts. We reduce them by giving the model its sources, restricting it to them, and naming gaps with fixed, greppable phrases, but "stated is not obeyed", so we always verify.

---

*Remaining from Day 1: how all of this matters for QA and AI testing, and the hands-on exercise.*