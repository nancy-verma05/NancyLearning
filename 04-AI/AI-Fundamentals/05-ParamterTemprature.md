# Parameters and Temperature: Interview Summary

---

## Parameters

**Definition:** The numbers inside an LLM that training adjusts. Also called **weights**.

**Key points**
- Start of training: parameters are random, so the output is gibberish.
- Training tunes them until the model's predictions match real text.
- They store what the model **learned**, as a compressed, imperfect summary of its training data.
- Frozen after training. They don't change while you chat (that is inference).
- Modern models have **billions** of parameters (GPT-2 had about 1.6B, Llama 3.1's largest has 405B).
- Bigger means more capacity, but also more cost, memory and slower responses.

**Don't confuse with:**

| Parameters | Context window |
|---|---|
| What the model **learned** (fixed after training) | What the model can **see right now** (changes every chat) |

**Interview answer (30 seconds):**
> Parameters, or weights, are the numbers inside an LLM that training adjusts so its next-token predictions match real text. They hold what the model has learned and stay fixed during inference.

---

## Temperature

**Definition:** A setting that controls how **random** the model's next-token choice is.

| | Low temperature | High temperature |
|---|---|---|
| Picks | Mostly the most likely token | More variety |
| Output | Consistent, predictable | Creative, varied |
| Risk | Repetitive | More odd or wrong answers |

**Key points**
- Temperature **0** is the most repeatable, but not a guarantee of identical output.
- It is **not a truth setting**. Low temperature does not stop hallucinations.
- Chat apps usually set it for you. APIs let you change it.

**Interview answer (30 seconds):**
> Temperature controls how randomly the model picks the next token. Low gives consistent, predictable output. High gives more varied, creative output but more errors. It doesn't make answers more accurate.

---

## How they connect

> **Parameters** decide *which* next tokens are likely.
> **Temperature** decides *how* you pick from them.

---

## QA angle (one-liners)

- Run important prompts **several times** (say 10) to see how much answers vary.
- Use a **low temperature** for repeatable test runs.
- Test at the **setting real users get**, not only yours.
- Assert on **quality**, not exact text.
- A new model version means **new parameters**, so retest.

---

## Likely interview questions

1. **What are parameters in an LLM?** The numbers (weights) training adjusts. They hold what the model learned.
2. **Are parameters the same as the context window?** No. Parameters are learned and fixed. The context window is what the model sees now.
3. **What does temperature do?** Controls randomness in picking the next token.
4. **Does temperature 0 stop hallucinations?** No. It makes output more repeatable, not more true.
5. **Why can the same prompt give different answers?** The next token is sampled with weighted randomness.
6. **How would you test an AI feature with variable output?** Run prompts several times, assert on quality, and fix the temperature for repeatable runs.