# AI Parts 5 and 6: Context Window, Training vs Inference

*My learning notes, written in simple language with QA examples.*

---

# Part 5: Context Window

## 1. What is it?

The **maximum number of tokens** an LLM can process and consider **at one time** (input + output together).

**Examples** (older models, limits change, so check the provider's docs):
- GPT-4 = 128K tokens
- Claude 3 = 200K tokens
- Gemini 1.5 = 1M tokens

Rough scale: 128K tokens is about 96,000 words, so roughly a 200-300 page book.

**Small tweaks to remember:**
- Input and output **share** the window. Many models also have a separate limit on how long one answer can be.
- More than your message sits in the window (see section 3).

---

## 2. The desk analogy

| | What it is | Like a student's... |
|---|---|---|
| **Parameters** | What the model learned in training. Fixed afterwards, a *vague recollection* | Knowledge from reading last month |
| **Context window** | Everything the model can see right now. Its *working memory* | The desk |
| **Output** | The answer, written on the same desk | The answer sheet |

**Memory trick:**
- Parameters = what the model has **learned** 🧠
- Context window = what the model can **see and use right now** 👀

**Simple example:** ask an AI to summarise a famous book from memory and you get a vague summary. Paste the chapter into the chat and the summary gets better, because the text is now on the desk.

---

## 3. What sits on the desk?

- The hidden **system message**
- The **whole conversation so far**
- Your new message
- Any attached **files or web search results**
- The **answer written so far** (reasoning models also spend "thinking" tokens, which count too)

All of it is measured in **tokens** (Part 4).

---

## 4. The model has no memory between messages

Every time you press send, the app **resends the whole conversation**. The model reads it fresh.

*QA example:* like a stateless REST API. The server doesn't remember your last call, so every request must carry all the data. A new chat starts with an empty desk.

---

## 5. What happens when the desk is full?

- Depending on the app, the oldest content is **cut**, **summarised**, or you get an **error**.
- The model doesn't "forget". The old text is simply **no longer in the input**.

*QA example:* you start with "Always reply in English." Many messages later that line may have been cut, and replies start drifting. The rule wasn't ignored. It was gone.

---

## 6. A bigger window isn't free or perfect

- **Cost and speed:** more tokens cost more and take longer.
- **Missed details:** research has shown models can miss facts buried in the **middle** of very long inputs.
- **It fills quickly:** chats, files and search results add up.

---

## 7. Context window vs training

- Examples you give inside the window make the model follow a pattern. That's **in-context learning**.
- But it's **temporary**: nothing inside the model changes, and it's gone when the chat closes.
- Learning that *does* change the model happens in **training** (Part 6).

---

## 8. QA checklist (context window)

- [ ] **Long-conversation test:** does it still follow an instruction from message 1 after 50 messages?
- [ ] **Needle test:** hide a fact at the start, middle and end of a long document, then ask for it. Compare answers.
- [ ] **Boundary test:** what happens near or over the limit (cut off, error, or silently dropped content)?
- [ ] **Hidden cost:** the system prompt uses part of the window before the user types anything.
- [ ] **Reset check:** a new session shouldn't remember the old one (unless a memory feature is on).

---

## 9. Try it (10 minutes)

1. Paste a page of text into the tokenizer and note the token count. Work out how many pages fill 128K.
2. In a chat, hide a made-up fact ("the code word is pineapple") in the middle of a long paste, then ask for it.
3. Start a chat with a rule like "end every reply with DONE". Chat for a while and see if it keeps following it.

**One-line recap:** *The context window is the AI's desk: everything it can see and use right now, measured in tokens. If it isn't on the desk, the model can't use it.*

---

# Part 6: Training vs Inference

## 1. The one-line difference

| | **Training** | **Inference** |
|---|---|---|
| What is it? | **Building** the model | **Using** the model |
| Who does it? | The AI company, once, ahead of time | Every user, every time they chat |
| What changes? | The parameters get adjusted | Nothing. Parameters stay frozen |
| Cost | Huge (thousands of GPUs, weeks or months) | Small per request, but it adds up |

*QA analogy:* training is like **building and releasing** the software. Inference is users **running that release** in production. Your chat doesn't change the build.

---

## 2. Training: three stages

The video compares it to going to school.

| Stage | What happens | Like school | Result |
|---|---|---|---|
| **Pre-training** | Reads a huge amount of internet text, learns to predict the next token | Reading the textbook | A **base model** (internet-text autocomplete) |
| **Post-training (SFT)** | Trained on example conversations written by human labelers | Studying worked solutions | An **assistant** that answers questions |
| **Reinforcement learning** | Practises problems, answers that work are rewarded | Doing practice problems | Better **reasoning** ("thinking" models) |

**Key points from the video:**
- A **base model is not an assistant**. Ask "What is 2 plus 2?" and it just continues the text, like an expensive autocomplete.
- **Pre-training is by far the costliest stage.** The video's example: about three months on thousands of computers, versus about three hours for the post-training step.

---

## 3. What training actually does

A loop repeated an enormous number of times:

1. Take some text and hide the next token.
2. The model guesses (it gives probabilities, like "mat 78%" in Part 3).
3. Compare with the real next token.
4. **Nudge the parameters** so the right token gets a slightly higher probability.

Researchers watch one number, the **loss**. It goes down as predictions improve. At the start, the output is random gibberish, and it becomes more coherent as the loss falls.

**Scale from the video:** GPT-2 (2019) had about 1.6 billion parameters and cost around $40,000 to train. It was later reproduced for around $600, because data, hardware and software improved. Modern models are far bigger.

---

## 4. Inference: using the model

- Parameters are **frozen**. Tokens go in, tokens come out.
- The model predicts **one token at a time**, picking each with weighted randomness (why answers vary).
- Every ChatGPT, Claude or Gemini chat is **inference only**. The model was trained months earlier.
- Cost and speed are **per token** (Parts 4 and 5).

---

## 5. Common misunderstandings

| Myth | Reality |
|---|---|
| "The AI is learning from my chat" | Not inside that conversation. It only uses what's in the context window. Whether a provider uses chats for *future* training depends on its policy and your settings |
| "It knows today's news" | It only knows what it saw before its **knowledge cutoff**. Web search can add newer info by putting it into the context window |
| "It's the same model every day" | Providers release new versions, and behaviour can change between them |

---

## 6. QA checklist (training vs inference)

- [ ] **A model update is a new release.** Re-run regression tests when the model version changes.
- [ ] **Knowledge cutoff tests:** ask about recent events with and without web search, and check it doesn't invent facts.
- [ ] **Inference randomness:** the same prompt can vary, so assert on quality, not exact text.
- [ ] **Cost and latency** belong to inference: track tokens per request and response time under load.
- [ ] **Privacy checks:** confirm what the product says about using chat data, and test that one user's chat doesn't appear in another's.

---

## 7. Try it (10 minutes)

1. Ask a chatbot for its **knowledge cutoff**, then ask about something recent. Compare with and without web search.
2. Teach it a made-up fact in one chat ("my pet is called Bugsy"), then start a **new chat** and ask. Notice that nothing was kept.
3. Tell a chatbot to behave a certain way for the whole chat ("reply only in rhymes"), then notice it only holds while the instruction stays in the window.

**One-line recap:** *Training builds the model by adjusting its parameters over a huge amount of data. Inference uses the finished, frozen model to predict tokens, and your chat never changes it.*

---

## How Parts 5 and 6 connect

> **Training** sets the parameters (long-term knowledge, fixed afterwards).
> **Inference** uses them, with the **context window** as the working memory for the current chat.

---

*Next up: Part 7, Parameters.*