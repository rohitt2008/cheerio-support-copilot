# 3-5 Minute Loom Walkthrough Script
## Cheerio AI Product Intern Assignment A — Customer Support at Scale

**Candidate:** Rohit Kumar  
**Audience:** Chetan, Abhiroop & Cheerio AI Hiring Team  
**Goal:** Deliver an energetic, articulate, and structured 4-minute walkthrough of the solution, clickable prototype, numbers, and AI transparency.

---

### Loom Recording Checklist Before You Hit Record
- [ ] Have the prototype running in your browser: `http://localhost:5173` (or live URL).
- [ ] Have the Google Sheet or `Cheerio_Support_Economics_Google_Sheet.csv` open in a second tab.
- [ ] Have your webcam positioned nicely in the bottom corner.
- [ ] Target duration: **3 minutes 45 seconds** (comfortably within the 3-5 min limit).

---

### Timestamped Script

#### [0:00 - 0:45] Intro: The Core Problem at Cheerio
**Screen:** Camera full screen or showing Cheerio Dashboard header.  
**What to say:**  
> *"Hi Chetan, Abhiroop, and the Cheerio team! I’m Rohit Kumar, and today I’m excited to walk you through my solution for Assignment A: Scaling customer support for non-technical users.*  
>  
> *Cheerio is an official Meta Business Solution Provider empowering over 5,000 businesses across India. But most of these users are D2C brand founders, clinic managers, or marketing leads—not software engineers. When they try to connect WhatsApp Cloud API, format message templates, or configure chatbot flows, they hit Meta’s strict technical guardrails—like parameter formatting errors or 2FA lockouts.  
>  
> *Right now, this triggers a massive influx of support tickets. If we hire more humans linearly, support costs eat up our margins on ₹1,999 plans. My solution is **Cheerio Copilot & Self-Healing Diagnostics Engine**: an in-context AI that doesn’t just answer questions, but inspects live system telemetry and executes 1-click auto-fixes directly in the product."*

---

#### [0:45 - 2:15] Prototype Demo: The 1-Click AutoFix Journey
**Screen:** Switch to the interactive prototype at `http://localhost:5173`.  
**What to say & click:**  
> *"Let's look at the prototype. Imagine I’m Ramesh, a D2C founder who just signed up to launch a Diwali flash sale.  
>  
> *First, notice this top banner: **Setup Health: 68%**. Instead of waiting for Ramesh to fail and open a ticket, Cheerio proactively flags: '1 Meta Template Rejected'.  
>  
> *(Click on 'Fix Template' button)*  
>  
> *When Ramesh clicks 'Fix Template', Cheerio Copilot pops up right over his workspace. Look at how it explains the problem: Meta’s API gave error `132000: Variable parameter count mismatch`. But Cheerio translates that into plain, reassuring language: 'Meta rejected this because parameter {{1}} has no sample value and appears at the very beginning of the message.'  
>  
> *(Point to the side-by-side diff preview)*  
>  
> *Even better, Ramesh doesn’t have to edit code or learn regex. The Copilot shows a side-by-side comparison with the fix already applied: it adds sample text, re-tags the category from Utility to Marketing, and offers a single button: **'Apply Auto-Fix & Resubmit to Meta'**.  
>  
> *(Click 'Apply Auto-Fix & Resubmit')*  
>  
> *In one click, the template is updated and approved by Meta. Ramesh is ready to send his campaign in 2 minutes instead of waiting 2 days for an L1 agent.  
>  
> *(Click to open the Smart Escalation Drawer)*  
>  
> *Now, what about edge cases? If a user asks about an account suspension or complex ERP webhook, Copilot doesn't hallucinate. It triggers our **Smart Escalation Protocol**: packaging the user’s WABA ID, error logs, and attempted actions into a pre-formatted Diagnostic Dossier for our human L2 specialist. The human agent starts at step 3 with zero back-and-forth."*

---

#### [2:15 - 3:00] The Numbers: Unit Economics & ₹48 Lakhs Annual Savings
**Screen:** Switch to Google Sheet tab showing the financial model.  
**What to say & highlight:**  
> *"Now let’s look at the numbers for our 5,000 active businesses.  
>  
> *We estimate 9,000 monthly support queries across onboarding and steady-state users.  
>  
> *Handling this purely with humans would require a 12-person L1 support team in India, costing **₹5.4 Lakhs per month** ($6,500/mo).  
>  
> *With Cheerio Copilot resolving 66% of queries autonomously and cutting human handling time from 18 minutes to 7 minutes with auto-dossiers, we only need 3 human agents.  
>  
> *Using `gpt-4o-mini` with prompt caching, our total AI token and infrastructure cost is just **₹4,250 per month**—less than 6 paise per query!  
>  
> *Our net monthly savings are **₹4 Lakhs per month**, which translates to **₹48.1 Lakhs (~$58,000) saved every single year**—a 74% reduction in support expenditure.*  
>  
> *And for monetization: we keep basic support 100% free because it drives WhatsApp messaging volume, but we offer a premium AI Campaign Copilot add-on at ₹999/month, boasting a 97% gross margin."*

---

#### [3:00 - 3:45] AI Transparency & Closing Pitch
**Screen:** Switch to `AI_Usage_Log_and_Prompts.md` or face camera.  
**What to say:**  
> *"Regarding AI usage: I used Claude 3.5 Sonnet to map out Meta Graph API error codes, GPT-4o to stress-test financial formulas, and Antigravity to pair-program the interactive prototype.  
>  
> *In my submission doc, I’ve documented 3 prompts that worked, 1 failed prompt where the AI fell into the 'generic FAQ bot' trap and how I corrected it, as well as where I caught the AI hallucinating on ticket volumes and Meta unban claims.  
>  
> *My North Star metric for this initiative is **Setup Completion & Activation Rate within 7 Days**, moving from 35% to 60% over the next 90 days.  
>  
> *I’m genuinely excited about what Cheerio is building as a Meta BSP. I would love the opportunity to join as a Product Intern and help turn this vision into reality. Thank you for your time, and I look forward to hearing from you!"*
