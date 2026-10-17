# AI Part 4: Tokens and Tokenization

*My learning notes, written in simple language with QA examples.*

---

## 1. Token vs Tokenization (the difference)

| | **Token** | **Tokenization** |
|---|---|---|
| What is it? | A small **chunk of text** (a word, part of a word, or a space plus a word) | The **process** of splitting text into tokens and giving each one a number |
| Think of it as | The **output** (the pieces) | The **action** (the splitting) |
| Example | `"hello"`, `" world"` | `"hello world"` → `["hello", " world"]` → `[15339, 11917]` |

**The tool that does tokenization is called a tokenizer.**

| Term | Meaning |
|---|---|
| **Token** | The unit (the piece) |
| **Tokenization** | The process of making the pieces |
| **Tokenizer** | The tool or algorithm that does it |
| **Detokenization** | The reverse: turning token numbers back into text |

**QA analogy (Cucumber):**
- **Token** = one step, like `Given I open the app`
- **Tokenization** = parsing the feature file and splitting it into steps
- **Tokenizer** = the Gherkin parser that does the splitting

**One-line memory trick:** *Tokenization* creates *tokens*.

---

## 2. What is a token?

- A small chunk of text that the AI reads as **one unit**.
- Usually a word, part of a word, or a space plus a word.
- Each token gets an **ID number** (like a test case ID: TC_101). The number is only a label, so nearby numbers are not "similar".

---

## 3. Why tokens and not letters?

The AI needs its input as a **sequence of symbols from a fixed list**.

| Approach | Symbols | Sequence length |
|---|---|---|
| Raw bits (0 and 1) | 2 | Extremely long |
| Bytes (groups of 8 bits) | 256 | 8x shorter |
| **Tokens** (what LLMs use) | ~100,000 | Much shorter still |

- Sequence length is a **precious resource** (it costs compute and limits the context window).
- So LLMs use a **bigger vocabulary to get shorter sequences**.

*QA example:* writing every mouse movement in a test is too long. Writing "click Login" is shorter and reusable.

---

## 4. How the token list is built: BPE (Byte Pair Encoding)

1. Start with bytes.
2. Find the pair of neighbours that appears **most often**.
3. Replace it with a **new symbol**.
4. Repeat until the list reaches about 100k tokens.

Result: **common chunks** (" the", "ing", " world") become single tokens, and **rare words** are split into pieces.

*QA example:* like turning two steps you always use together into one reusable keyword in a keyword-driven framework.

**Numbers worth knowing:**
- GPT-4's tokenizer has **100,277** tokens.
- The FineWeb training data is about 44 TB of text, roughly **15 trillion tokens**.
- Different models use different tokenizers, so token counts differ between models.

---

## 5. Small differences change the tokens

From the tokenizer demo:
- `"hello world"` is **2 tokens**: `"hello"` and `" world"` (the space belongs to the next word).
- **Two spaces** between words make a new, separate token.
- It is **case-sensitive**: "Hello" and "hello" are different.

*QA example:* in code, `"Login"` and `"login"` are different strings, so `assertEquals` fails. The AI is similar: small typing differences can become different tokens.

---

## 6. Special and hidden tokens

- Chat apps add **special tokens** that mark who is speaking (user or assistant).
- The **system prompt** and the **conversation history** are added too.
- Everything becomes **one token sequence**.
- Tool use (like web search) also works through special tokens.
- Images and audio can also be cut into tokens.

*QA example:* like hidden API headers (`Authorization`, `Content-Type`). The user never sees them, but the system reads them every time. To reproduce a bug, you need the **full request**, not just what the user typed.

---

## 7. Why the AI struggles with spelling and counting

The AI sees **chunks**, not letters.

| Task | Why it fails |
|---|---|
| Print every third letter of "ubiquitous" | It sees 3 chunks, not letters |
| Count the "r"s in "strawberry" | Letters are hidden inside tokens |
| Count 177 dots | Dots are grouped into tokens |

*QA example:* like asking someone to count screws in a sealed bag when they can only see the label.

**Fix:** ask the AI to **use code**. A program counts reliably, like running `SELECT COUNT(*)` instead of counting rows by eye.

---

## 8. Cost and limits

- AI is billed and limited by **tokens**.
- Rough rule for English: **1 token is about 4 characters, or ¾ of a word**.
- Non-English text, emoji, code and unusual number formats often use **more tokens**, so less fits and it costs more.

---

## 9. QA checklist

- [ ] Test the same input with **extra spaces, different casing, emoji and other languages**.
- [ ] Test **very long inputs** and check where it cuts off (limits are in tokens, not characters).
- [ ] Check **multilingual** input for quality, cost and truncation.
- [ ] Never use the AI as the oracle for **exact counts or spelling**. Check with code.
- [ ] Try typing **special-token text** (like `<|im_start|>`) into chat fields as an injection test.
- [ ] Track **tokens per request**. A sudden jump can signal a prompt change or cost issue.

---

## 10. Hands-on exercise (tokenizer)

Open **tiktokenizer.vercel.app** and try:
1. `Hello world`, `hello world`, `helloworld`, `hello  world` (two spaces)
2. `ubiquitous` and `strawberry`
3. `9.11` vs `9.9`
4. A Hindi or Kannada sentence vs its English version
5. An emoji

Note the token count and how each one splits.

---

## One-line summary

> The AI reads text as small numbered chunks (**tokens**), made by a process called **tokenization**, not as letters. That is why spacing, language and length can change its behaviour, and why it is bad at counting and spelling.

---

*Next up: Part 5, Context window.*