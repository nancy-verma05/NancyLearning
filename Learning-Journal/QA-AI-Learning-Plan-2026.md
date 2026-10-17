# QA + AI Learning Roadmap --- 2026

## Master Goal

Build strong, practical expertise as a **Senior QA Automation Engineer +
AI QA Engineer**.

The focus is not on collecting courses or learning every tool. The goal
is to develop the ability to:

-   Design and maintain reliable automation frameworks
-   Write clean Java and TypeScript automation code
-   Test UI, APIs, mobile and backend integrations
-   Understand Git, Jenkins, TeamCity and CI/CD deeply
-   Use AI effectively in QA
-   Build AI-powered QA tools and agents
-   Evaluate and test LLM/RAG/Agent systems
-   Build portfolio projects that demonstrate real engineering ability

------------------------------------------------------------------------

# 1. Weekly Learning Schedule

Target: **7--9 hours/week**

  Day               Time Focus
  ----------- ---------- ----------------------------
  Monday          45 min Java + Coding
  Tuesday         60 min Playwright
  Wednesday       45 min API Testing
  Thursday        60 min AI / GenAI
  Friday          30 min Revision + Git/VCS + CI/CD
  Saturday      2--3 hrs Project
  Sunday        1--2 hrs Project + Weekly Review

## Busy Week Version

If work or family commitments are heavy:

-   Monday--Thursday: 20 minutes each
-   Saturday: 1 hour project work
-   Sunday: optional review

**Never compensate for a missed day by doubling the next day.**

------------------------------------------------------------------------

# 2. Learning Method

Use this cycle:

``` text
LEARN
  ↓
PRACTICE
  ↓
BUILD
  ↓
REVIEW
  ↓
APPLY AT WORK / PROJECT
```

For each topic:

1.  Learn the concept.
2.  Practice a small example.
3.  Build something.
4.  Explain it without looking at notes.
5.  Record doubts.
6.  Revisit only what is weak.

## Course Rule

Use:

-   One primary course
-   Official documentation
-   One practice source/project

Do not collect multiple courses for the same topic.

------------------------------------------------------------------------

# 3. Java Roadmap

## Phase 1 --- Core Java

Topics:

-   Variables
-   Data types
-   Operators
-   Conditions
-   Loops
-   Methods
-   Arrays
-   Strings
-   Classes
-   Objects
-   Constructors
-   `this`
-   `static`
-   `final`

## Phase 2 --- OOP

Learn deeply:

-   Encapsulation
-   Inheritance
-   Polymorphism
-   Abstraction
-   Interfaces
-   Composition
-   Association
-   Dependency

Understand:

> When should I use inheritance vs composition?

## Phase 3 --- Collections

Learn:

-   List
-   Set
-   Map
-   Queue
-   Deque
-   ArrayList
-   LinkedList
-   HashSet
-   LinkedHashSet
-   TreeSet
-   HashMap
-   LinkedHashMap
-   TreeMap

For each collection understand:

-   Ordering
-   Duplicates
-   Performance
-   Searching
-   Sorting
-   Iteration
-   Real QA use cases

## Phase 4 --- Streams + Lambda

Learn:

-   Lambda expressions
-   Functional interfaces
-   Predicate
-   Function
-   Consumer
-   Supplier
-   `map`
-   `filter`
-   `reduce`
-   `sorted`
-   `distinct`
-   `collect`
-   `groupingBy`
-   `partitioningBy`
-   `flatMap`

Practice with test-data problems.

## Phase 5 --- Exception Handling

Learn:

-   Checked exceptions
-   Unchecked exceptions
-   `try`
-   `catch`
-   `finally`
-   `throw`
-   `throws`
-   Custom exceptions
-   Framework-level error handling

## Phase 6 --- Generics

Learn:

-   Generic classes
-   Generic methods
-   Wildcards
-   `extends`
-   `super`

## Phase 7 --- Files + JSON

Learn:

-   JSON
-   Jackson
-   Gson
-   JSON ↔ POJO
-   CSV
-   Excel
-   Properties files
-   Environment variables

## Phase 8 --- Concurrency

Learn:

-   Threads
-   ExecutorService
-   Callable
-   Future
-   Synchronization
-   Thread safety
-   Parallel test execution

## Phase 9 --- Design Patterns

Learn practically:

-   Singleton
-   Factory
-   Builder
-   Strategy
-   Factory Method
-   Dependency Injection
-   Page Object

Focus on trade-offs, not memorization.

## Java Practice

Use:

-   Dev.java
-   HackerRank
-   LeetCode selectively for coding practice

------------------------------------------------------------------------

# 4. Playwright Roadmap

## Phase 1 --- TypeScript Essentials

Learn only what you need:

-   Variables
-   Types
-   Interfaces
-   Functions
-   Classes
-   Objects
-   Arrays
-   Generics basics
-   Modules
-   Async/await
-   Promises
-   Error handling

## Phase 2 --- Playwright Fundamentals

Learn:

-   Browser
-   BrowserContext
-   Page
-   Locator
-   Test
-   Expect
-   Configuration

Understand:

``` text
Browser
   ↓
Context
   ↓
Page
   ↓
Locator
   ↓
Action
   ↓
Assertion
```

## Phase 3 --- Locators

Master:

-   `getByRole`
-   `getByText`
-   `getByLabel`
-   `getByPlaceholder`
-   `getByTestId`
-   CSS
-   XPath

Learn how to select stable locators.

## Phase 4 --- Interactions

Practice:

-   Click
-   Fill
-   Check
-   Select
-   Hover
-   Drag/drop
-   Keyboard
-   Mouse
-   Upload
-   Download
-   Dialogs
-   Frames
-   Tabs/windows

## Phase 5 --- Assertions

Learn:

-   Visibility
-   Text
-   Value
-   Attribute
-   URL
-   Title
-   Count
-   State
-   Soft assertions
-   Auto-retry

## Phase 6 --- Synchronization

Understand:

-   Auto-waiting
-   Actionability
-   Assertion retries
-   Network synchronization
-   Explicit waits

Avoid unnecessary:

``` text
waitForTimeout()
```

## Phase 7 --- Fixtures

Learn:

-   Built-in fixtures
-   Custom fixtures
-   Fixture scope
-   Authentication fixtures
-   Test-data fixtures
-   Page fixtures

## Phase 8 --- Page Object Model

Build:

``` text
tests/
pages/
components/
fixtures/
utils/
data/
config/
```

Then move toward component-based architecture.

## Phase 9 --- API Testing with Playwright

Learn:

-   APIRequestContext
-   GET
-   POST
-   PUT
-   DELETE
-   Authentication
-   API setup
-   API cleanup
-   UI + API workflows

## Phase 10 --- Network

Learn:

-   Intercept
-   Mock
-   Modify
-   Block
-   Route
-   Network logs

## Phase 11 --- Authentication

Learn:

-   Cookies
-   Tokens
-   Storage state
-   `storageState`
-   Session reuse

## Phase 12 --- Parallelism

Learn:

-   Workers
-   Projects
-   Retries
-   Sharding
-   Isolation

## Phase 13 --- Advanced Testing

Learn:

-   Visual testing
-   Accessibility testing
-   Mobile emulation
-   Cross-browser testing
-   Trace Viewer
-   Screenshots
-   Videos
-   Reports

## Phase 14 --- CI/CD

Integrate Playwright with:

-   GitHub
-   Jenkins
-   GitHub Actions
-   Environment variables
-   Secrets
-   Artifacts

## Playwright Project

Build:

**Playwright E-commerce Automation Framework**

Include:

-   UI automation
-   API setup/cleanup
-   POM
-   Components
-   Fixtures
-   Authentication
-   Parallel execution
-   Accessibility
-   Reporting
-   CI/CD

------------------------------------------------------------------------

# 5. API Testing Roadmap

## Phase 1 --- HTTP Fundamentals

Learn:

-   Client/server
-   Request
-   Response
-   URL
-   Endpoint
-   HTTP methods
-   Headers
-   Cookies
-   Query parameters
-   Path parameters
-   Request body
-   Response body

Understand:

``` text
Client
   ↓
HTTP Request
   ↓
API
   ↓
Backend
   ↓
HTTP Response
```

## Phase 2 --- HTTP Methods

Master:

  Method   Purpose
  -------- ----------------
  GET      Retrieve
  POST     Create
  PUT      Replace/update
  PATCH    Partial update
  DELETE   Delete

Understand idempotency.

## Phase 3 --- Status Codes

Master:

### Success

-   200
-   201
-   204

### Client errors

-   400
-   401
-   403
-   404
-   409
-   422
-   429

### Server errors

-   500
-   502
-   503
-   504

## Phase 4 --- REST

Learn:

-   Resources
-   Endpoints
-   CRUD
-   Statelessness
-   Resource-oriented design
-   Path/query parameters

## Phase 5 --- Postman

Learn:

-   Collections
-   Environments
-   Variables
-   Pre-request scripts
-   Tests
-   Assertions
-   Collection Runner
-   Authentication
-   API chaining
-   Newman

## Phase 6 --- REST Assured

Master:

``` java
given()
    .when()
    .then();
```

Learn:

-   RequestSpecification
-   ResponseSpecification
-   Headers
-   Query parameters
-   Path parameters
-   Cookies
-   Authentication
-   JSONPath
-   Logging
-   Assertions
-   Serialization
-   Deserialization
-   POJO
-   Schema validation

## Phase 7 --- Advanced API Testing

Learn:

-   Positive testing
-   Negative testing
-   Boundary testing
-   Data-driven testing
-   API chaining
-   Dependency handling
-   Error handling
-   Pagination
-   File upload/download
-   Async APIs
-   Webhooks
-   Mocking
-   Service virtualization

## Phase 8 --- API Security

Learn the basics of:

-   Authentication
-   Authorization
-   Broken access control
-   Injection
-   Sensitive data exposure
-   Rate limiting

## Phase 9 --- Contract Testing

Learn:

-   Consumer/provider
-   Contracts
-   Breaking changes
-   Pact concepts

## Phase 10 --- API Performance

Understand:

-   Load testing
-   Stress testing
-   Spike testing
-   Endurance testing
-   Throughput
-   Latency
-   Response time

Later explore:

-   JMeter
-   k6

## API Resources

### Primary course

**Rahul Shetty Academy --- REST API Testing (Automation) from Scratch --
Rest Assured Java**

Use it as your structured course.

### Official resources

-   Postman Learning Hub
-   Postman Documentation
-   REST Assured documentation/wiki

### Additional focused course

**REST Assured Fundamentals --- James Willett**

Use this for deeper REST Assured practice.

## API Project

Build:

**Enterprise API Automation Framework**

Technology:

``` text
Java
REST Assured
TestNG
Maven
POJO
JSON Schema
Authentication
API Chaining
Data-driven testing
Logging
Reporting
GitHub
Jenkins
```

------------------------------------------------------------------------

# 6. Git / VCS Roadmap

## Fundamentals

Learn:

``` text
Working Directory
      ↓
Staging Area
      ↓
Local Repository
      ↓
Remote Repository
```

Commands:

-   `git init`
-   `git clone`
-   `git status`
-   `git add`
-   `git commit`
-   `git push`
-   `git pull`
-   `git fetch`
-   `git log`
-   `git diff`

## Branching

Learn:

-   Create branch
-   Switch branch
-   Merge
-   Branch strategies

## Conflicts

Practice:

-   Conflict identification
-   Conflict resolution
-   Commit after resolution

## Rebase

Learn:

-   Merge vs rebase
-   Interactive rebase
-   Clean commit history

## Pull Requests

Understand:

``` text
Branch
 ↓
Commit
 ↓
Push
 ↓
Pull Request
 ↓
Code Review
 ↓
CI Checks
 ↓
Merge
```

## Advanced Git

Learn:

-   Cherry-pick
-   Revert
-   Reset
-   Stash
-   Tags
-   Git workflows

------------------------------------------------------------------------

# 7. CI/CD Roadmap

## CI/CD Fundamentals

Understand:

-   CI
-   Continuous delivery
-   Continuous deployment
-   Build
-   Test
-   Package
-   Deploy
-   Artifact

## Jenkins

Learn:

-   Controller
-   Agent
-   Executor
-   Workspace
-   Job
-   Build
-   Pipeline
-   Freestyle
-   Pipeline job
-   Multibranch pipeline

## Jenkinsfile

Learn:

-   Pipeline
-   Agent
-   Stages
-   Steps
-   Environment
-   Parameters
-   Credentials
-   Secrets
-   Artifacts
-   Test reports
-   Parallel execution
-   Conditions

Understand:

``` text
Git
 ↓
Jenkins
 ↓
Checkout
 ↓
Build
 ↓
Test
 ↓
Report
 ↓
Artifact
```

## Jenkins Troubleshooting

Learn how to investigate:

-   Checkout failure
-   Dependency failure
-   Compilation failure
-   Test failure
-   Environment issue
-   Credentials issue
-   Agent issue
-   Workspace issue
-   Network issue
-   Report failure

## TeamCity

Learn:

-   Projects
-   Build configurations
-   Build steps
-   Agents
-   Agent pools
-   VCS roots
-   Triggers
-   Parameters
-   Artifacts

Advanced:

-   Build chains
-   Snapshot dependencies
-   Artifact dependencies
-   Templates
-   Kotlin DSL
-   Secrets
-   Parallel execution
-   Failure conditions

## Your Workplace as a Learning Lab

For every pipeline you work with, understand:

1.  What triggered the build?
2.  Which branch was used?
3.  What is the VCS root?
4.  Which agent ran it?
5.  What is the workspace?
6.  What command actually runs the tests?
7.  Where are reports generated?
8.  Where are artifacts stored?
9.  What caused a failure?

Do not copy confidential company code, credentials or customer
information into external AI tools.

------------------------------------------------------------------------

# 8. AI / GenAI Roadmap

## Phase 1 --- LLM Fundamentals

Understand:

-   AI
-   Machine Learning
-   Deep Learning
-   Generative AI
-   LLM
-   Tokens
-   Context window
-   Parameters
-   Temperature
-   Model
-   Inference

## Phase 2 --- Prompt Engineering

Learn:

-   Role
-   Instructions
-   Context
-   Constraints
-   Examples
-   Zero-shot
-   Few-shot
-   Structured output
-   JSON output
-   Prompt chaining

## Phase 3 --- Context Engineering

Learn:

-   Context selection
-   Context relevance
-   Context compression
-   Instructions vs context
-   Tool results
-   Conversation state

## Phase 4 --- Embeddings

Understand:

-   Embeddings
-   Vector representation
-   Semantic similarity
-   Vector search

## Phase 5 --- RAG

Understand:

``` text
Documents
   ↓
Chunking
   ↓
Embeddings
   ↓
Vector Database
   ↓
Retrieval
   ↓
LLM
   ↓
Answer
```

Learn:

-   Chunking
-   Metadata
-   Top-k
-   Retrieval quality
-   Reranking
-   Grounding
-   Citations

## Phase 6 --- Function / Tool Calling

Understand:

``` text
User
 ↓
LLM
 ↓
Tool decision
 ↓
Tool execution
 ↓
Tool result
 ↓
LLM
 ↓
Response
```

## Phase 7 --- AI Agents

Learn:

-   Agent
-   Tools
-   Planning
-   Memory
-   Observation
-   Action
-   Agent loop
-   Human-in-the-loop
-   Guardrails

## Phase 8 --- n8n

Learn:

-   Workflow
-   Trigger
-   AI Agent
-   LLM
-   Tools
-   HTTP Request
-   Structured output
-   Data transformation
-   Memory
-   Conditional logic
-   Error handling

------------------------------------------------------------------------

# 9. LLM Evaluation

Learn how to evaluate:

-   Accuracy
-   Relevance
-   Groundedness
-   Faithfulness
-   Hallucination
-   Consistency
-   Completeness
-   Toxicity
-   Safety
-   Latency
-   Cost

Build evaluation datasets and compare outputs.

------------------------------------------------------------------------

# 10. AI Security

Learn:

-   Prompt injection
-   Jailbreaks
-   Data leakage
-   Sensitive information exposure
-   Insecure output handling
-   Excessive agency
-   Tool abuse
-   Permission boundaries

------------------------------------------------------------------------

# 11. AI Testing

This is one of your most important specialization areas.

## Prompt Testing

Test:

-   Regression
-   Robustness
-   Ambiguity
-   Boundary cases
-   Adversarial prompts

## Response Testing

Evaluate:

-   Quality
-   Accuracy
-   Hallucination
-   Consistency
-   Grounding
-   Completeness

## RAG Testing

Test:

-   Missing context
-   Wrong context
-   Irrelevant context
-   Retrieval quality
-   Citation accuracy
-   Grounded responses

## Agent Testing

Test:

-   Wrong tool
-   Wrong parameters
-   Unexpected actions
-   Permission violations
-   Infinite loops
-   Tool failures
-   Recovery behavior

------------------------------------------------------------------------

# 12. AI Learning Resources

Use official/structured resources selectively:

### OpenAI

Prompt engineering and model/tool documentation.

### Anthropic

Prompt engineering and Claude documentation.

### DeepLearning.AI

Short courses for:

-   Generative AI
-   Prompt engineering
-   Agents
-   RAG
-   LLM applications

### n8n

Official documentation for workflow and AI Agent implementation.

### Microsoft Learn

Use for Generative AI application evaluation concepts.

Do not try to complete every AI course. Choose one topic at a time.

------------------------------------------------------------------------

# 13. Project Roadmap

## Project 1 --- Playwright E-commerce Framework

Build:

-   UI automation
-   POM
-   Components
-   Fixtures
-   Authentication
-   API setup
-   API cleanup
-   Parallel execution
-   Accessibility
-   Reporting
-   CI/CD

------------------------------------------------------------------------

## Project 2 --- API Automation Framework

Build:

``` text
Java
 ↓
REST Assured
 ↓
TestNG
 ↓
Maven
 ↓
POJO
 ↓
Schema Validation
 ↓
Authentication
 ↓
API Chaining
 ↓
Reports
 ↓
Jenkins
```

------------------------------------------------------------------------

## Project 3 --- AI Test Case Generator

Input:

``` text
Requirement
```

Output:

``` text
Requirement
 ↓
LLM
 ↓
Requirement Analysis
 ↓
Test Scenarios
 ↓
Test Cases
 ↓
Structured JSON
 ↓
Excel
```

Guardrails:

-   Do not invent requirements
-   Clearly identify assumptions
-   Avoid duplicate test cases
-   Maintain traceability
-   Human review required

------------------------------------------------------------------------

## Project 4 --- AI Failure Analyzer

Input:

-   Failed test
-   Screenshot
-   DOM
-   Logs
-   Error message

AI output:

``` text
Failure
 ↓
Classification
 ↓
Locator issue
Application issue
Environment issue
Test-data issue
Timing issue
Infrastructure issue
 ↓
Suggested next investigation
```

------------------------------------------------------------------------

## Project 5 --- AI QA Agent

Final capstone:

``` text
Requirement
      ↓
AI QA Agent
      ↓
Requirement Analysis
      ↓
Risk Analysis
      ↓
Test Plan
      ↓
Test Cases
      ↓
Automation Code
      ↓
Test Execution
      ↓
Failure Analysis
      ↓
Test Report
```

This becomes the major portfolio project.

------------------------------------------------------------------------

# 14. Suggested 12-Month Progression

## Months 1--2

### Foundation

-   Java
-   Collections
-   Streams
-   Exceptions
-   Git
-   HTTP
-   REST
-   Postman

## Months 3--4

### Modern Automation

-   TypeScript
-   Playwright
-   Locators
-   Assertions
-   Fixtures
-   POM
-   Authentication
-   API integration

## Months 5--6

### API + CI/CD

-   REST Assured
-   API framework
-   Schema validation
-   Contract testing
-   Jenkins
-   TeamCity
-   Pipeline design
-   Troubleshooting

## Months 7--8

### GenAI

-   LLM fundamentals
-   Prompt engineering
-   Context engineering
-   Embeddings
-   RAG
-   Tool calling
-   AI Agents

## Months 9--10

### AI for QA

-   AI test generation
-   AI failure analysis
-   LLM evaluation
-   RAG testing
-   Agent testing
-   AI security
-   n8n

## Months 11--12

### Advanced AI QA + Portfolio

Build and polish:

1.  Playwright framework
2.  API framework
3.  AI Test Case Generator
4.  AI Failure Analyzer
5.  AI QA Agent

Prepare:

-   GitHub repositories
-   README files
-   Architecture diagrams
-   Demo videos
-   LinkedIn posts
-   Resume updates
-   Interview stories

------------------------------------------------------------------------

# 15. Weekly Journal

Create:

``` text
Learning-Journal/
└── Week-XX.md
```

Template:

``` markdown
# QA + AI Learning Journal

## Week XX

### Weekly Goal

---

## Monday — Java

Topic:

What I learned:

What I practiced:

Questions:

---

## Tuesday — Playwright

Topic:

What I learned:

What I built:

Questions:

---

## Wednesday — API

Topic:

What I learned:

What I practiced:

Questions:

---

## Thursday — AI

Topic:

What I learned:

What I practiced:

Questions:

---

## Friday — Revision + Git/CI-CD

What I remember without notes:

What I still don't understand:

Git/CI-CD topic:

---

## Saturday — Project

What I built:

What worked:

What didn't work:

---

## Sunday — Review

Biggest learning:

Biggest doubt:

What I want to improve:

---

# Weekly Reflection

## 1. What did I learn?

## 2. What did I actually build?

## 3. What was difficult?

## 4. What should I revise?

## 5. What should I learn next week?
```

------------------------------------------------------------------------

# 16. Rules to Prevent Burnout

## Rule 1 --- Do not chase course completion

A 30-hour course is not a 30-hour achievement.

The achievement is:

> "I can build and explain this."

## Rule 2 --- Don't restart after missing days

If Wednesday is missed:

``` text
Wrong:
Missed Wednesday → double Thursday

Correct:
Missed Wednesday → continue Wednesday topic next available session
```

## Rule 3 --- Don't learn everything simultaneously

Maintain a:

``` text
LATER
```

list for interesting tools and technologies.

## Rule 4 --- Build while learning

Every major topic should eventually become part of a project.

## Rule 5 --- Use work as learning

When you encounter Jenkins, TeamCity, Git, automation failures or API
issues at work, use them as opportunities to understand the underlying
engineering concepts.

## Rule 6 --- Measure capability, not hours

Instead of:

> "I studied 8 hours."

Measure:

> "I built an API framework."

> "I can explain Git rebase."

> "I created a Playwright fixture."

> "I can evaluate an LLM response."

------------------------------------------------------------------------

# 17. Current Week --- Week 1

## Monday --- Java

**Topic:** Collections

Status: ✅ Completed

## Tuesday --- Playwright

**Topic:** Setup + First Test

Status: ✅ Completed

## Wednesday --- API

**Topic:** HTTP + REST Fundamentals

Status: ⏭️ Missed

Move this to the next available API session.

## Thursday

Continue with the adjusted schedule rather than adding extra hours.

## Saturday/Sunday

Use the project block to reinforce the week's topics.

------------------------------------------------------------------------

# 18. Current API Session

## 45 Minutes

### 5 minutes

Recall:

> What happens when a UI action calls an API?

### 10 minutes

Learn:

-   Request
-   Response
-   URL
-   Endpoint
-   Headers
-   Parameters
-   Body

### 10 minutes

Learn:

-   GET
-   POST
-   PUT
-   PATCH
-   DELETE

### 10 minutes

Learn status codes:

-   200
-   201
-   204
-   400
-   401
-   403
-   404
-   409
-   422
-   429
-   500
-   502
-   503
-   504

### 10 minutes

Use Postman to send requests and inspect:

``` text
Request
 ↓
Response
 ↓
Status
 ↓
Headers
 ↓
Body
```

------------------------------------------------------------------------

# 19. Final Career Direction

The long-term profile is:

``` text
                    QA ENGINEERING
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
   Automation           API             CI/CD
        │                │                │
   Playwright       REST Assured      Jenkins
   Selenium         Postman           TeamCity
        │                │                │
        └────────────────┼────────────────┘
                         ↓
                       AI
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
       LLM              RAG             Agents
        │                │                │
        └────────────────┼────────────────┘
                         ↓
                     AI TESTING
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
      LLM Eval       AI Security    Agent Testing
          │              │              │
          └──────────────┼──────────────┘
                         ↓
                    AI QA ENGINEER
```

## The target is not to become an expert in every tool.

The target is to become someone who can:

> **Understand the system → design the test strategy → automate it → run
> it in CI/CD → analyze failures → use AI intelligently → validate AI
> systems themselves.**

------------------------------------------------------------------------

# 20. One Sentence to Remember

**Learn less, understand deeper, build more, and keep going
consistently.**
