# QA Prompt Templates (RICE-POT)

By @QAAfterHours. Free to copy and use.

RICE-POT is the prompt template from my prompt engineering course: **R**ole, **I**nstructions, **C**ontext, **E**xpected, **P**arameters, **O**utput, **T**one. The five templates below are my own examples for QA work. Replace everything in [square brackets] with your own details.

**How to use:** paste the whole template into your AI tool, fill the brackets, and read the answer critically. Even a good prompt can make the AI assume things, so always review the output.

Note: "Parameters" here means the rules inside your prompt. It is not the model's internal parameters.

---

## 1. Test cases from a requirement

```
ROLE: You are a senior QA engineer.
INSTRUCTIONS: Write [number] functional test cases for [feature name].
CONTEXT: Requirement: "[paste the requirement or user story]"
EXPECTED: Each test case is traceable to the requirement. Gaps in the requirement are listed, not guessed.
PARAMETERS: Use ONLY the requirement above. Do NOT assume features that are not mentioned. If something is missing, write "Not specified".
OUTPUT: A table with columns: Test ID, Scenario, Steps, Expected Result.
TONE: Concise and professional.
```

## 2. Bug report

```
ROLE: You are a QA engineer who writes clear, reproducible bug reports.
INSTRUCTIONS: Turn my rough notes into a bug report.
CONTEXT: Notes: "[paste what you saw, where, and when]". Environment: [browser, OS, build].
EXPECTED: Someone who has never seen the bug can reproduce it from the report alone.
PARAMETERS: Use ONLY my notes. If a detail is missing, write "Needs confirmation" instead of guessing. Do not suggest a root cause.
OUTPUT: Title, Environment, Steps to Reproduce, Expected Result, Actual Result, Severity (suggest one, with a one-line reason).
TONE: Neutral and factual.
```

## 3. API test ideas

```
ROLE: You are a QA engineer who tests REST APIs.
INSTRUCTIONS: List test scenarios for the endpoint below.
CONTEXT: Endpoint documentation: [paste the endpoint, method, request and response fields].
EXPECTED: Scenarios cover the happy path, error responses, and edge cases for each input field.
PARAMETERS: Use ONLY the documentation above. If the documentation does not say what the API returns in a case, write "Not specified in docs".
OUTPUT: A table with columns: Scenario, Input, Expected status code, Expected response.
TONE: Concise.
```

## 4. Review my test cases

```
ROLE: You are a senior QA reviewer.
INSTRUCTIONS: Review the test cases below against the acceptance criteria.
CONTEXT: Acceptance criteria: [paste]. Test cases: [paste].
EXPECTED: I know which criteria have no test case and which test cases are duplicates.
PARAMETERS: List only gaps and duplicates. Do NOT rewrite my test cases. If a criterion is unclear, write "Needs clarification".
OUTPUT: Two lists: "Criteria not covered" and "Duplicate or overlapping test cases".
TONE: Direct and specific.
```

## 5. Test data

```
ROLE: You are a QA engineer preparing test data.
INSTRUCTIONS: Generate test data for the [field name] field.
CONTEXT: Field rules: [for example: required, 3 to 20 characters, letters and numbers only].
EXPECTED: The data covers valid values, boundary values, and invalid values.
PARAMETERS: Use fake data only. Do not use real names, emails or phone numbers.
OUTPUT: A table with columns: Value, Type (valid, boundary or invalid), Why it is included.
TONE: Concise.
```

---

## Before you trust the output

- Check it against your real requirement, not just against how convincing it sounds.
- Look for things the AI added that you never asked for.
- Run the prompt more than once if it matters. Answers can differ from run to run.
- Save the prompts that work, with a note on what to change next time.