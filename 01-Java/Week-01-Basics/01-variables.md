# ☕ Java for SDETs — 2-Week Posting Plan (Variables)

Starting point: 22 followers. Runs alongside the daily Claude 101 series and uses its own label and look, so it doesn't get mixed into the Claude 101 order.
Framing: "Java notes I'm making for my own SDET interview prep", so it reads as learning alongside the audience, not teaching as an expert.
Visual: separate template from Claude 101, e.g. a warm coffee/cream theme with code blocks in monospace.

## Week 1
| Day | Time (IST) | Format | Content | Hook on cover / first 2 sec |
|---|---|---|---|---|
| Tue 29 Sep | 9:00 pm | Carousel #1 | 4 types of variables (table + CLASS/METHOD tree) | "4 Java variables every SDET gets asked about" |
| Wed 30 Sep | Morning | Story | Quiz sticker: "Do local variables get default values?", then reshare Carousel #1 | — |
| Thu 1 Oct | 9:00 pm | Reel (voice-only, 15–20s) | `int count; System.out.println(count);`: does it compile? | "Does this compile? 🤔 Most people say yes." |
| Sat 3 Oct | Any | Stories only | Share the reel + poll "Static or instance: which is shared?" | — |
| Sun 4 Oct | 10:30 am | Carousel #2 | Default values: fields get them, locals don't (the default-values table) | "The 1 Java rule that trips people up in interviews" |

## Week 2
| Day | Time (IST) | Format | Content | Hook |
|---|---|---|---|---|
| Tue 6 Oct | 9:00 pm | Carousel #3 | Static vs instance + `static final` constants (TestConfig / FrameworkConfig examples) | "Why your DEFAULT_TIMEOUT should be static final" |
| Thu 8 Oct | 9:00 pm | Reel | "Can a local variable be static?" Show code → ❌ → one-line answer | "This line won't compile. Can you spot why?" |
| Sat 10 Oct | Any | Stories only | Quiz recap + poll: "Next Java topic? OOPs / Collections / Exceptions" | — |
| Sun 11 Oct | 10:30 am | Carousel #4 | "Spot the variable types" quiz on the LoginTest example + naming rules, answers on the last slide | "Name all 4 variable types in this test 👇" |

## Every post checklist
- 6–8 slides, one idea per slide
- Last slide: "Save this for your next interview 📌" + "Follow for more SDET notes"
- Caption ends with a question (e.g. "Which one did you get wrong?") to get comments
- Cross-post carousels to LinkedIn as a PDF document post
- Spend 15 min after posting commenting on 5–10 QA/SDET accounts

## Hashtags (pick 5–8)
#sdet #qaautomation #javaforsdet #javainterview #automationtesting #seleniumjava #softwaretesting #qaengineer #testautomation #javabasics

## Fix before posting (from the notes)
- LoginTest example: `@Test verifyLogin(String username)` fails in TestNG without `@Parameters`/`@DataProvider`. Add a DataProvider or drop `@Test`.
- `static int DEFAULT_TIMEOUT = 30;` should be `static final` (or be renamed `defaultTimeout`).

## Time budget
Batch-create on Sunday: 2 carousels (~40 min in Canva from a reusable template) + 2 reel scripts/voiceovers (~20 min). Stories take ~5 min each.

## After 2 weeks
Check insights: saves, shares, % reach from non-followers. Double down on the better-performing format, then run the next topic by poll result.