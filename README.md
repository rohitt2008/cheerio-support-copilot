# Cheerio Copilot — Autonomous Support & Diagnostics Engine
## Interactive Prototype for Cheerio AI (Meta Business Solution Provider)

**Author:** Rohit Kumar  
**Live Interactive Prototype:** [https://rohitt2008.github.io/cheerio-support-copilot/](https://rohitt2008.github.io/cheerio-support-copilot/)  
**Financial Model (Google Sheet):** [https://docs.google.com/spreadsheets/d/1WnJ3bdVE5B9BosfFI6vvNWovTj7HoKby45zypw0_HpI/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1WnJ3bdVE5B9BosfFI6vvNWovTj7HoKby45zypw0_HpI/edit?usp=sharing)  

---

## 📌 Executive Overview

Cheerio AI is an official **Meta Business Solution Provider (BSP)** empowering thousands of businesses across WhatsApp, SMS, Email, and Instagram. However, non-technical merchants (D2C founders, clinics, coaching institutes) frequently hit Meta Cloud API technical hurdles during onboarding:
1. **WhatsApp Cloud API & Embedded Signup Failures** (Meta 2FA lockouts, Business Manager verification).
2. **Meta Template Rejections** (Parameter count mismatches, missing sample variables, Utility vs. Marketing category errors).
3. **Chatbot Flow Loops & Dead-Ends** (Broken conditional branches without fallback intent).
4. **E-commerce & Webhook Disconnects** (Shopify token expirations).

**Cheerio Copilot** transforms support from a reactive, human-intensive cost center into an **autonomous in-workflow diagnostics engine**:
- **Proactive Telemetry:** Reads Meta Graph API response payloads (e.g., Error 132000, 131031) and flags issues before the user even raises a ticket.
- **Bilingual Plain-Language Translation:** Explains errors in plain English & Hinglish without technical jargon.
- **1-Click AutoFix:** Mutates payloads, inserts sample values, re-tags categories, and resubmits to Meta programmatically with one click.
- **Warm Human Escalation:** Automatically bundles system logs and WABA credentials into a structured **Diagnostic Dossier** for human specialists, slashing Average Handling Time (AHT) from 18 to 7 minutes.

---

## 🚀 Live Prototype & Local Development

### Live URL
Open in your browser: **[https://rohitt2008.github.io/cheerio-support-copilot/](https://rohitt2008.github.io/cheerio-support-copilot/)**

### Running Locally
To run the prototype on your machine:
```bash
git clone https://github.com/rohitt2008/cheerio-support-copilot.git
cd cheerio-support-copilot/prototype
python3 -m http.server 3000
```
Then visit `http://localhost:3000`.

---

## 💰 Unit Economics & Impact (5,000 Active Businesses)

- **Total Inbound Queries:** 9,000 / month (1.8 queries / active business).
- **Autonomous AI Deflection Rate:** **66.0% (5,940 queries resolved by AI)**.
- **Support Staff Needed:** **3 Human Specialists vs. 12 Baseline Agents** (9 hires avoided).
- **AI Running Cost:** **₹0.054 / query** ($0.00064) using `gpt-4o-mini` with prompt caching.
- **Net Monthly Savings:** **₹4,00,761 / month (-74.2% support spend reduction)**.
- **Net Annualized Savings:** **₹48,09,128 / year (~$57,600 / year)**.
- **North Star Metric:** Lift 7-Day Onboarding Setup & Activation Rate from **35% to 60%** in 90 days.
