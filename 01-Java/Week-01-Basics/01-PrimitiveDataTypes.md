# Java Notes: Primitive Types (QA Edition)

Source: dev.java, "Creating Primitive Type Variables in Your Programs"
https://dev.java/learn/language/constructs/basics/primitive-types/

---

## 1. Core idea

- Java is **statically typed**: declare the type before using a variable.
- A **primitive** is a built-in value type with a reserved keyword. It is not an object, so no `new`, and it can never be `null`.

## 2. The 8 primitives

| Type | Size | Range / Notes | QA use |
|---|---|---|---|
| `byte` | 8-bit | -128 to 127 | Raw bytes (file upload/download, response streams) |
| `short` | 16-bit | -32,768 to 32,767 | Rarely used |
| `int` | 32-bit | about +/- 2.1 billion | Status codes, counts, indexes, retries |
| `long` | 64-bit | about +/- 9.2 quintillion | Timestamps, big IDs, response time in ms |
| `float` | 32-bit | IEEE 754 | Avoid |
| `double` | 64-bit | IEEE 754, default for decimals | Percentages, non-money measurements |
| `boolean` | n/a | `true` / `false` | `isDisplayed()`, `isEnabled()` flags |
| `char` | 16-bit | One Unicode character | Single characters, input validation |

- **`String` is not a primitive.** It is a class with special language support (double-quote literals). Strings are **immutable**.
- **Money rule:** never use `float` or `double` for currency. Use `java.math.BigDecimal`.

## 3. Default values (fields only)

| Type | Default |
|---|---|
| `byte`, `short`, `int` | `0` |
| `long` | `0L` |
| `float` / `double` | `0.0f` / `0.0d` |
| `char` | `\u0000` |
| `boolean` | `false` |
| `String` / any object | `null` |

**Local variables get NO default.** Using one before assigning it is a compile-time error.

## 4. Literals

- Integer literals are `int` by default. Add `L` for `long` (use uppercase).
- Number systems: decimal, hex (`0x`), binary (`0b`).
- Floating literals are `double` by default. Add `F`/`f` for `float`. `E` notation works (`1.5e3`).
- `char` uses single quotes, `String` uses double quotes.
- Escapes: `\n`, `\t`, `\"`, `\\`, `\'`, `\r`, `\b`, `\f`, and Unicode escapes like `\u00ED`.
- `null` works for any reference type, never for primitives.
- Underscores in numbers (`1_000_000`) improve readability. Allowed only **between digits**, not at the start/end, next to a decimal point, or before an `F`/`L` suffix.

## 5. QA practical examples

**a) Status codes and counts (`int`) with RestAssured**
```java
int expectedStatus = 200;
int actualStatus = response.getStatusCode();
Assert.assertEquals(actualStatus, expectedStatus);

int maxRetries = 3;
```

**b) Timeouts and timestamps (`long`)**
```java
long startTime = System.currentTimeMillis();
// ... call the API ...
long responseTime = System.currentTimeMillis() - startTime;
Assert.assertTrue(responseTime < 2_000, "API too slow: " + responseTime + " ms");

long fileSizeBytes = 5_368_709_120L; // 5 GB, needs the L suffix
```

**c) Boolean flags in Selenium**
```java
boolean isLoginButtonEnabled = driver.findElement(By.id("login")).isEnabled();
boolean isErrorShown = !driver.findElements(By.className("error")).isEmpty();
Assert.assertTrue(isErrorShown);
```

**d) Money: why double fails**
```java
double total = 0.1 + 0.2;
System.out.println(total);            // 0.30000000000000004
Assert.assertEquals(total, 0.3);      // FAILS

// Fix 1: use a delta for non-money values
Assert.assertEquals(total, 0.3, 0.0001);

// Fix 2: BigDecimal for money (create from String, not double)
BigDecimal price = new BigDecimal("0.1").add(new BigDecimal("0.2"));
Assert.assertEquals(price, new BigDecimal("0.3"));
```

**e) Default values in test classes / page objects**
```java
public class LoginTest {
    private int retryCount;       // 0 (field default)
    private boolean loggedIn;     // false
    private String username;      // null

    @Test
    public void demo() {
        int attempts;             // local: no default
        // System.out.println(attempts); // compile error
        attempts = 1;
    }
}
```

**f) Underscores for readable test data**
```java
long phone = 98_7654_3210L;
int timeoutMs = 30_000;
```

**g) `char` and escape sequences**
```java
char grade = 'A';
String csvLine = "Name\tAge\tCity\nNancy\t30\tBengaluru";
String jsonBody = "{\"user\":\"nancy\",\"id\":101}";
```

## 6. Extra information (beyond the source)

1. **Overflow fails silently.**
   ```java
   int max = Integer.MAX_VALUE;   // 2,147,483,647
   System.out.println(max + 1);   // -2147483648
   ```
   Use `long`, or `Math.addExact()` to throw on overflow.
2. **Integer division truncates.**
   ```java
   int passed = 7, total = 10;
   double bad  = passed / total * 100;            // 0.0
   double good = (double) passed / total * 100;   // 70.0
   ```
3. **Widening is automatic, narrowing needs a cast.**
   ```java
   int i = 100;
   long l = i;        // OK
   int j = (int) l;   // explicit cast, may lose data
   ```
4. **Wrapper classes:** `int`->`Integer`, `boolean`->`Boolean`, `double`->`Double`. Collections, generics, and TestNG `@DataProvider` use wrappers (`List<Integer>`, not `List<int>`). Wrappers can be `null`, and unboxing a `null` throws `NullPointerException`.
5. **`==` vs `.equals()`:** `==` is fine for primitives. For wrappers and Strings use `.equals()`. `Integer` values outside -128 to 127 can fail `==`.
6. **`Integer.parseInt()` / `Double.parseDouble()`** convert UI/API text to numbers. They throw `NumberFormatException` on input like `"₹499"` or `"1,200"`, so clean the text first.
7. **`var` (Java 10+)** is in the next lesson. The type is still static, just inferred.

## 7. Practice questions

**Conceptual**
1. Why does Java need you to declare types before using variables?
2. Which primitive would you choose for HTTP status code, response time in ms, and an "is element visible" check?
3. Why shouldn't you use `double` for prices? What do you use instead?
4. Is `String` a primitive? Give two properties that show it's special.
5. What's the default value of an `int` field vs an `int` local variable?

**Code output / find the bug**

6. What happens here?
```java
long big = 3_000_000_000;
```
7. What does this print?
```java
int a = 5, b = 2;
System.out.println(a / b);
System.out.println((double) a / b);
```
8. Which are valid literals? `1_000` | `_1000` | `1000_` | `3.14_f` | `0b1010` | `0xFF` | `10L`
9. Does this compile? Why or why not?
```java
public class Test {
    static boolean flag;
    public static void main(String[] args) {
        int count;
        System.out.println(flag);
        System.out.println(count);
    }
}
```
10. Why can `Assert.assertEquals(0.1 + 0.2, 0.3)` fail?

**Scenario (QA)**

11. An API returns a file size of 4,500,000,000 bytes. Which type holds it, and what literal suffix do you need if you hard-code it?
12. A report shows `passRate = 0` even though 8 of 10 tests passed. Likely cause and fix?

## 8. Answers

1. Static typing lets the compiler catch type errors early, before the code runs.
2. `int` for status code, `long` for response time, `boolean` for visibility.
3. Binary floating point can't represent values like 0.1 exactly. Use `BigDecimal`, created from a String.
4. No. It's a class with special support: double-quote literals create objects automatically, and Strings are immutable.
5. `0` for the field. The local has no default, and using it before assignment is a compile error.
6. Compile error: the literal exceeds `int` range. Fix: `3_000_000_000L`.
7. `2` (integer division truncates), then `2.5`.
8. Valid: `1_000`, `0b1010`, `0xFF`, `10L`. Invalid: `_1000`, `1000_`, `3.14_f`.
9. Does not compile. `flag` is a static field (defaults to `false`), but `count` is a local variable that was never initialized.
10. `0.1 + 0.2` evaluates to `0.30000000000000004`. Use a delta, or `BigDecimal`.
11. `long`, since it exceeds the `int` max. Hard-coded: `4_500_000_000L`.
12. Integer division: `8 / 10` gives `0`. Cast first: `(double) passed / total * 100`.

## 9. Quick takeaways

- `int` for whole numbers, `double` for decimals, `long` for timestamps/big values, `boolean` for flags.
- Money uses `BigDecimal`. Non-money decimal assertions use a delta.
- Fields get defaults, locals don't.
- Literals default to `int` and `double`. Add `L` or `F` when needed.
- Watch for silent overflow and integer division in test calculations.

---

# Instagram Post Ideas (@qaafterhours): From This Lecture

Tone: learning alongside the audience, fun and relatable, no "expert" voice. Hooks start with "I just learned..." or "Did you know my test failed because...".

## Carousels (main posts)

1. **"My assertion failed on 0.1 + 0.2"**
   - Slides: hook ("Java says 0.1 + 0.2 isn't 0.3") > code > output `0.30000000000000004` > why (binary floating point) > fix 1 (delta) > fix 2 (`BigDecimal` for money) > "Have you hit this in a test?"
2. **"Integer.MAX_VALUE + 1 = negative?!"**
   - Overflow story: a counter or ID test that went negative, with the `long` / `Math.addExact()` fix.
3. **"Why my pass rate showed 0%"**
   - Integer division bug in a report calculation. Relatable meme energy: "8 out of 10 passed... 0%."
4. **"8 primitives, as a QA would use them"**
   - Cheat-sheet carousel built from the table in section 2 (status code = `int`, response time = `long`, flag = `boolean`).
5. **"NullPointerException: origin story"**
   - Fields default to `null`, locals have no default. Show a page-object field that was never initialized.

## Stories / quick posts

6. **Java interview question stories** (fits the existing orange-pink series):
   - Is `String` a primitive?
   - Default value of a local variable?
   - What's the difference between `int` and `Integer`?
   - `==` vs `.equals()`: when does it bite?
7. **Poll/quiz story:** "What does `long big = 3_000_000_000;` do?" (options: prints / compile error / overflows / null)
8. **Tiny trick:** underscores in numbers (`int timeoutMs = 30_000;`), a one-slide "Java trick I wish I knew earlier."

## Voice-only reel (no face)

9. **"5 Java things I learned this week as a QA"**: record a ~45-second voiceover over screen/code visuals. Pick the top 5 from section 6.

## Memes

10. "Me: double is fine for prices. Production: 19.990000000000002."
11. "Local variable: *uninitialized*. Compiler: absolutely not."

## Suggested series styling

- Java interview question stories: keep the existing warm orange-pink gradient with cream card.
- Carousels from these lecture notes: a new series, so give it its own new colour (e.g. violet/indigo) to keep it distinct from the orange-pink and teal-blue series.
- Handwritten version: pair a photo of your handwritten notes (like your earlier study-note posts) with one typed "key takeaway" slide.

## Fits the 1 hour/week budget

- Pick **one** carousel (idea 1, 2, or 3) + **three** interview-question stories (idea 6).
- Batch it: ~20 min write/script, ~30 min design in Canva/AI images, ~10 min caption + schedule.
- Save the rest as a backlog for upcoming weeks.

## Caption starters

- "Learning Java as a QA, and my first 'wait, what?' moment: 0.1 + 0.2 isn't 0.3."
- "Still learning, so correct me in the comments if I got this wrong."
- "Save this for your next interview or your next flaky assertion."