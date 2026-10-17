# API Learning Plan: Basic to Advanced (1 Day per Week)

**Learner:** Nancy Verma (QA Automation, 8+ years)
**Start:** Thursday, 1 Oct 2026 (Week 1)
**Cadence:** one focused session every Thursday, about 3 hours
**Duration:** 16 weeks (ends 14 Jan 2027)

## How each Thursday session works

| Block | Time | What to do |
|---|---|---|
| Learn | 60 min | Read or watch the listed resource |
| Practice | 90 min | Do the hands-on task (Postman first, then RestAssured/code) |
| Capture | 30 min | Write short notes or push the code to a GitHub repo |

Tip: keep one repo, `api-learning`, with a folder per week. By week 16 it doubles as a portfolio.

---

## Phase 1: Foundations (Weeks 1-4)

### Week 1 (1 Oct): How the web talks, HTTP basics
- **Learn:** MDN "An overview of HTTP" and "HTTP messages"
- **Concepts:** client/server, request and response anatomy, methods, status code families, headers, URL structure
- **Practice:** call `https://httpbin.org` endpoints in Postman, inspect every header, trigger 200, 201, 204, 400, 404 and 500
- **Deliverable:** one-page cheat sheet of methods and status codes
- **Check:** you can explain 401 vs 403 and 200 vs 201 vs 204

### Week 2 (8 Oct): REST principles and CRUD
- **Learn:** Postman Learning Center, "API fundamentals"; REST constraints (Roy Fielding's dissertation, chapter 5, skim only)
- **Concepts:** resources, URIs, statelessness, JSON structure, query vs path params, idempotent vs safe methods
- **Practice:** full CRUD against `https://restful-booker.herokuapp.com` and `https://jsonplaceholder.typicode.com`
- **Deliverable:** Postman collection with tests (status, schema, response time)
- **Check:** you can say which methods are idempotent and prove it with a test

### Week 3 (15 Oct): Postman to code, API automation basics
- **Learn:** RestAssured docs (Usage guide)
- **Concepts:** request specs, response specs, JSONPath, extracting values, chaining requests
- **Practice:** automate the Week 2 CRUD flow in RestAssured + TestNG
- **Deliverable:** small Maven project in your repo
- **Check:** tests run end to end and clean up their own data

### Week 4 (22 Oct): Test design for APIs
- **Learn:** your own experience, plus the Postman "Test scripts" docs
- **Concepts:** positive/negative/boundary cases, data-driven tests, test data strategy, assertions that matter
- **Practice:** build a test matrix for one endpoint (valid, missing field, wrong type, oversize, special characters)
- **Deliverable:** reusable API test checklist
- **Check:** each endpoint has at least 10 meaningful scenarios

---

## Phase 2: Intermediate (Weeks 5-8)

### Week 5 (29 Oct): HTTP in depth
- **Learn:** MDN "HTTP caching" and "Conditional requests"
- **Concepts:** ETag, Last-Modified, `If-None-Match`, Cache-Control, content negotiation, compression, CORS
- **Practice:** call `https://api.github.com/users/octocat`, capture the ETag, resend with `If-None-Match`, confirm 304; automate it
- **Deliverable:** caching test in RestAssured
- **Check:** you can explain ETag vs Last-Modified

### Week 6 (5 Nov): API specs, OpenAPI and Swagger
- **Learn:** learn.openapis.org (Getting Started)
- **Concepts:** paths, schemas, components, request/response definitions, examples
- **Practice:** open the Swagger Petstore spec in Swagger Editor, import it into Postman, write a small spec for a new endpoint
- **Deliverable:** your own `openapi.yaml`
- **Check:** you can generate tests or a mock from a spec

### Week 7 (12 Nov): Authentication and authorization
- **Learn:** oauth.com (Aaron Parecki, "OAuth 2.0 Simplified"); jwt.io introduction
- **Concepts:** Basic auth, API keys, bearer tokens, OAuth 2.0 flows, OIDC, JWT structure, scopes, token expiry and refresh
- **Practice:** decode a JWT, test expired/tampered/missing tokens, automate token fetch in RestAssured
- **Deliverable:** auth test suite covering 401 and 403 cases
- **Check:** you can explain authorization code flow vs client credentials

### Week 8 (19 Nov): Mocking and service virtualization
- **Learn:** WireMock docs (Getting Started, Stubbing)
- **Concepts:** stubs, request matching, simulating errors, delays, fault injection, stateful scenarios
- **Practice:** stub a third-party dependency and test how your client handles 500s and timeouts
- **Deliverable:** WireMock project with failure-scenario tests
- **Check:** you can test failure paths that the real service cannot produce on demand

---

## Phase 3: Advanced (Weeks 9-13)

### Week 9 (26 Nov): API security testing
- **Learn:** OWASP API Security Top 10 (2023); PortSwigger Web Security Academy, "API testing"
- **Concepts:** BOLA/IDOR, broken auth, mass assignment, excessive data exposure, rate limiting, injection
- **Practice:** use OWASP ZAP or Burp Community against a deliberately vulnerable app (crAPI or OWASP Juice Shop)
- **Deliverable:** security checklist mapped to the Top 10
- **Check:** you can demonstrate a BOLA test manually and automate it

### Week 10 (3 Dec): Contract testing
- **Learn:** Pact docs (Introduction, Consumer tests)
- **Concepts:** consumer-driven contracts, provider verification, backward compatibility, versioning strategies
- **Practice:** write a consumer test and verify it against a provider
- **Deliverable:** working Pact example in your repo
- **Check:** you can explain why contract tests catch what integration tests miss

### Week 11 (10 Dec): Performance and resilience
- **Learn:** k6 docs (Running k6, Test types)
- **Concepts:** load, stress, spike and soak tests, percentiles (p95/p99), timeouts, retries, circuit breakers
- **Practice:** load test a public or local API, set thresholds, review p95
- **Deliverable:** k6 script with pass/fail thresholds
- **Check:** you can read a result and say whether the API meets an SLA

### Week 12 (17 Dec): GraphQL
- **Learn:** graphql.org/learn
- **Concepts:** queries, mutations, schema and introspection, variables, N+1, depth/complexity attacks
- **Practice:** query the public Countries API in Postman, then automate with RestAssured
- **Deliverable:** GraphQL test suite including negative cases
- **Check:** you can test what REST testing habits tend to miss (partial errors in a 200 response)

### Week 13 (24 Dec): gRPC, WebSockets and async APIs
- **Learn:** grpc.io docs (Introduction, Core concepts); AsyncAPI "Getting started"
- **Concepts:** protobuf, streaming types, WebSockets, webhooks, event-driven APIs
- **Practice:** call a gRPC service with Postman or grpcurl, test a WebSocket echo server, receive a webhook using a public inspector
- **Deliverable:** notes comparing REST, GraphQL, gRPC and async
- **Check:** you can pick the right protocol for a given scenario

---

## Phase 4: Expert (Weeks 14-16)

### Week 14 (31 Dec): Scalable framework architecture
- **Learn:** Karate DSL docs (for comparison); your framework's design patterns
- **Concepts:** layered design, request builders, POJOs/serialization, config management, parallel runs, reporting
- **Practice:** refactor the Week 3 project into a clean, reusable framework
- **Deliverable:** framework README with architecture diagram
- **Check:** a new teammate could add a test in under 15 minutes

### Week 15 (7 Jan): CI/CD, observability and microservices
- **Learn:** Azure DevOps Pipelines docs; OpenTelemetry "Concepts"
- **Concepts:** pipeline stages, quality gates, correlation IDs, distributed tracing, API gateways, testing across service boundaries
- **Practice:** run your suite in an Azure DevOps pipeline with a published report
- **Deliverable:** working YAML pipeline
- **Check:** a failing API test blocks the build

### Week 16 (14 Jan): AI and APIs (capstone)
- **Learn:** Anthropic API docs (Messages API, tool use); docs.claude.com
- **Concepts:** LLM APIs, tool calling, structured output, testing non-deterministic responses, agents that call APIs
- **Practice:** build a small agent that calls a REST API and write tests for it
- **Deliverable:** capstone repo with README, plus a short write-up of everything you learned
- **Check:** you can explain how you would test an AI-powered API

---

## Progress tracker

| Week | Date | Topic | Done |
|---|---|---|---|
| 1 | 1 Oct | HTTP basics | [ ] |
| 2 | 8 Oct | REST and CRUD | [ ] |
| 3 | 15 Oct | RestAssured automation | [ ] |
| 4 | 22 Oct | API test design | [ ] |
| 5 | 29 Oct | HTTP in depth (caching) | [ ] |
| 6 | 5 Nov | OpenAPI / Swagger | [ ] |
| 7 | 12 Nov | Auth (OAuth, JWT) | [ ] |
| 8 | 19 Nov | Mocking (WireMock) | [ ] |
| 9 | 26 Nov | API security | [ ] |
| 10 | 3 Dec | Contract testing | [ ] |
| 11 | 10 Dec | Performance (k6) | [ ] |
| 12 | 17 Dec | GraphQL | [ ] |
| 13 | 24 Dec | gRPC and async | [ ] |
| 14 | 31 Dec | Framework architecture | [ ] |
| 15 | 7 Jan | CI/CD and observability | [ ] |
| 16 | 14 Jan | AI and APIs (capstone) | [ ] |

## If you miss a week

Don't double up. Shift the plan by one week and keep going. Weeks 5, 9 and 10 are the heaviest, so give them extra time if you need it.
