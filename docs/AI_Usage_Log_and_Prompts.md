# AI Usage Log & Prompt Engineering Report
## Cheerio AI Product Intern Assignment — Transparency & Attribution

**Candidate:** Rohit Kumar  
**Role:** Product Intern, Cheerio AI  
**Assignment:** Assignment A — Make customer support scale for non-technical users  
**Policy Compliance:** Cheerio AI Take-Home Prompt Log & AI Usage Disclosure  

---

## 1. AI Tools Utilized and Their Exact Applications

| Tool | Purpose in Assignment | How It Accelerated the Work |
|---|---|---|
| **Claude 3.5 Sonnet / Anthropic** | Solution Architecture & Edge-Case Modeling | Used to stress-test failure modes in Meta's WhatsApp Cloud API (Graph API error codes, 2-step verification lockouts, and template categorization rules). Synthesized complex Meta Developer docs into clear customer-facing workflows. |
| **OpenAI GPT-4o** | Financial Unit Economics & Formula Validation | Used to model token consumption, simulate prompt caching savings, and verify spreadsheet formula consistency across currency conversions (USD to INR). |
| **Antigravity IDE & AI Pair Programmer** | Interactive Prototype Development | Accelerated full-stack React/Tailwind/Vite implementation: building the responsive dashboard, simulated error states, live 1-click AutoFix state transitions, and interactive Copilot chat widget. |

---

## 2. Prompt Log: 3 High-Performing Prompts & 1 Failed Prompt

### High-Performing Prompt 1: Grounding Meta API Errors into Plain SMB Language
* **Context & Goal:** Translate technical Meta Graph API errors into plain-language diagnostics and programmatic auto-fixes for non-technical Indian SMBs.
* **Exact Prompt:**
  ```text
  You are the Lead Technical Product Manager at Cheerio AI, an official Meta Business Solution Provider in India.
  Analyze the top 10 reasons non-technical Indian SMB merchants (e.g. D2C founders, coaching institutes) fail during WhatsApp Cloud API onboarding and template creation.
  
  For each issue, create a structured 4-part table:
  1. Meta Graph API error code and official technical message (e.g. Error 132000).
  2. How the non-technical merchant describes the problem in colloquial Hindi/English (e.g. "Mera template reject ho gaya bina kisi reason ke").
  3. The exact root cause in plain English without technical jargon.
  4. The programmatic corrective action that an autonomous in-app Copilot could execute via API on behalf of the user with 1 click.
  
  Ensure the solutions are pragmatic and do not require the merchant to edit code or write regex.
  ```
* **Why it worked:** The 4-part structured constraint forced the AI to connect real Meta infrastructure errors to colloquial merchant language and actionable 1-click API mutations. This formed the exact logic behind our prototype's AutoFix engine.

---

### High-Performing Prompt 2: Support Unit Economics & BPO Comparison Model
* **Context & Goal:** Calculate realistic unit economics for 5,000 businesses, comparing human support teams in India against an AI Copilot using `gpt-4o-mini` with prompt caching.
* **Exact Prompt:**
  ```text
  Act as a SaaS CFO and Head of Customer Operations at an Indian B2B SaaS startup (Cheerio AI).
  We have 5,000 active businesses on our WhatsApp marketing platform.
  
  Build a comprehensive mathematical cost model comparing:
  Model A: Pure human L1 support team in India.
  Model B: Hybrid Cheerio Copilot (AI resolves Tier 1 setup issues, humans handle Tier 2/3 escalations with pre-packaged diagnostic dossiers).
  
  Assumptions to ground:
  - Ticket volume: split between new signups (high friction) and established SMBs.
  - Indian customer support salaries: ₹35,000 base + ₹10,000 overhead (laptops, software, PF, office) = ₹45,000/month per agent.
  - Human throughput: 35 tickets/day (18 mins AHT) baseline vs 55 tickets/day (7 mins AHT) when context is pre-packaged.
  - AI Model: GPT-4o-mini ($0.15/1M input, $0.60/1M output, 50% prompt caching discount).
  - Exchange rate: ₹83.50 / USD.
  
  Output the exact formulas for Google Sheets (e.g. =SUM, =ROUNDUP) and show net annual savings in both INR (Lakhs) and USD.
  ```
* **Why it worked:** Specifying real-world BPO metrics (AHT, agent throughput, overhead) and exact formula syntax eliminated generic estimates and generated an authentic, audit-ready financial model.

---

### High-Performing Prompt 3: Escalation Guardrail Rubric & Boundaries
* **Context & Goal:** Establish strict product boundaries for what the AI can do autonomously vs. what must be escalated to a human.
* **Exact Prompt:**
  ```text
  Define the boundary rubric for Cheerio Copilot (an in-app AI support assistant for a WhatsApp Business Solution Provider).
  Categorize system actions into 3 distinct operational buckets:
  1. Autonomous Actions: What the AI executes immediately without human intervention.
  2. One-Click Confirmation Actions: Actions requiring explicit user approval before execution (state changes, resubmissions).
  3. Mandatory Human Escalation: Scenarios where the AI MUST halt and hand off to an L2 human specialist with an auto-generated Diagnostic Dossier.
  
  Focus on regulatory compliance (Meta BSP rules), financial liability (billing/refunds), and customer sentiment.
  ```
* **Why it worked:** It prevented the AI from suggesting reckless capabilities (like auto-cancelling subscriptions or trying to bypass Meta fraud filters) and produced clear product governance boundaries.

---

### Failed Prompt: The Generic Chatbot Trap & Root Cause Iteration
* **Original (Failed) Prompt:**
  ```text
  Design an AI customer support chatbot for Cheerio AI to help users solve their setup problems. Give me the user flow and architecture.
  ```
* **Why It Failed:** 
  - The output was a generic, superficial chatbot that popped up in the bottom-right corner and answered user questions with static links: *"To fix template rejections, please visit docs.cheerio.in/templates."*
  - It completely missed the point of the problem: non-technical users do not want to read documentation. A passive chatbot does not scale support because users still cannot perform technical fixes themselves.
* **How It Was Fixed (Iterated Prompt):**
  ```text
  Reject the concept of a passive FAQ chatbot. Users do NOT want to read documentation links.
  Instead, design an "Autonomous In-Workflow Self-Healing Diagnostics Engine" for Cheerio.
  Requirements:
  1. It must be telemetry-driven: it reads the current page URL, Meta Graph API error response code, and draft template state.
  2. It must show a "Setup Health Scorecard" banner on the dashboard before the user even raises a ticket.
  3. Instead of explaining how to fix the error, it must present a side-by-side diff ("Current Draft" vs "Auto-Fixed Draft") and execute the fix in Meta's API with a single "1-Click AutoFix" button.
  4. Redo the architecture with this active, state-aware approach.
  ```
* **Result of Iteration:** This pivot gave birth to **Cheerio Copilot & 1-Click AutoFix**, shifting the entire solution from a standard chatbot into an active, high-leverage product feature.

---

## 3. Where AI Hallucinated / Provided Weak Answers & How It Was Caught

### Hallucination 1: Erroneous Ticket Volume & Frontier Model Pricing
* **Weak Answer:** In an early draft, the AI estimated that 5,000 businesses would generate 50,000 support tickets per month (10 tickets/user/month) and calculated costs using un-cached GPT-4 ($30/1M tokens), resulting in a projected AI cost of $15,000/month.
* **How It Was Caught:**
  - *Product Judgment:* A typical B2B SaaS serving SMBs has a monthly ticket frequency of 1.5 to 2.0 per account. 50,000 tickets would represent a broken, unusable product.
  - *Engineering Judgment:* Using GPT-4 for tier-1 classification is an architectural anti-pattern. Lightweight models like `gpt-4o-mini` or `claude-3-5-haiku` cost $0.15/1M tokens (99.5% cheaper) and deliver sub-second latency.
  - *Correction:* Adjusted the volume to a realistic 9,000 tickets/month (split across onboarding and established accounts) and applied `gpt-4o-mini` with prompt caching, bringing monthly AI costs down to ~₹4,250 ($51/month).

### Hallucination 2: Claiming AI Could "Instantly Unban WhatsApp Numbers"
* **Weak Answer:** The AI proposed an auto-fix capability where the Copilot would "automatically remove spam restrictions and unban phone numbers from Meta's database."
* **How It Was Caught:**
  - *Domain Knowledge:* Meta strictly controls WhatsApp Business Account compliance. No third-party BSP has an API endpoint to unilaterally overturn a Meta anti-spam restriction. Claiming this would mislead Cheerio's leadership.
  - *Correction:* Redefined the boundary: the Copilot diagnoses the reason for restriction, verifies if it was a false positive, generates a pre-formatted Meta Official Appeal package, and routes it to Cheerio's human Meta Partner Support liaison.

---

## 4. Which Parts Were Done Solely by Human Judgment (Without AI)

1. **User Empathy & Cultural Context for Indian SMBs:**
   - Understanding that an Indian merchant running a D2C saree brand or coaching academy in Surat or Jaipur panics when a campaign fails before Diwali. They don't want technical error strings; they want reassurance, voice/Hinglish instructions, and immediate visual confirmation that their messages are delivering.
2. **Product Strategy & Free vs. Paid Support Decision:**
   - AI models often instinctively suggest monetization ("Charge ₹50 per resolved ticket"). Deciding that basic support diagnostics must remain **100% free** was a human product strategy decision: support is an onboarding and retention enabler that fuels Cheerio's primary revenue engine (WhatsApp messaging volume).
3. **Information Architecture & Aesthetic Direction:**
   - Crafting the layout of the Cheerio Dashboard, the "Setup Health Scorecard", and the side-by-side diff modal was conceived and structured by human design thinking to ensure a cohesive, enterprise-grade feel.
