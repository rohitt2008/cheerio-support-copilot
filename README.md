# Cheerio AI — Product Intern Take-Home Assignment
## Scaling Customer Support for Non-Technical Users via Cheerio Copilot & Self-Healing Diagnostics

**Candidate:** Rohit Kumar  
**Target Role:** Product Intern, Cheerio AI  
**Assignment Track:** Assignment A — Make customer support scale for non-technical users  
**Submission Deadline:** 15th Oct, 2026 11:59 PM IST  
**Submission Form:** [Cheerio Assignment Submission Form](https://forms.gle/Doq6ouBNbjRFz5ur5)  

---

## 📁 Submission Deliverables & Directory Structure

All required components of the assignment have been designed, modeled, prototyped, and verified:

```text
cheerio-ai-assignment/
├── docs/
│   ├── Cheerio_Product_Intern_Assignment_A_Doc.md      # Part 1 to 4 Complete PM Document (Markdown)
│   ├── Cheerio_Product_Intern_Assignment_A_Doc.html    # Executive 4-Page Typeset Document (Ready to print to PDF)
│   ├── Cheerio_Support_Economics_Google_Sheet.csv      # Part 4 Financial Model (Formulas visible, ready for Google Sheets)
│   ├── Cheerio_Support_Cost_Billing_Audit_Model.md     # Cell-by-cell formula guide, token math & assumptions
│   ├── AI_Usage_Log_and_Prompts.md                     # Part 3 Mandatory AI Prompt Log & Transparency Report
│   └── Loom_Walkthrough_Script.md                      # Part 5 Optional 3-5 Min Loom Video Script for Founders
├── prototype/
│   ├── index.html                                      # Interactive Web Application UI
│   ├── styles.css                                      # Design System (Cheerio brand tokens, dark/light, glassmorphism)
│   └── app.js                                          # 1-Click AutoFix, Copilot Chat, & Diagnostics logic
├── screenshots/
│   ├── screen1_dashboard_setup_health.png              # Screen 1: Proactive Setup Health Banner (68% Health)
│   ├── screen2_autofix_modal_diff.png                  # Screen 2: Side-by-Side Diff & Plain Language Translation
│   ├── screen3_autofix_success_state.png               # Screen 3: Auto-Fixed State (94% Health, Approved by Meta)
│   ├── screen4_copilot_chat_drawer.png                 # Screen 4: Bilingual Copilot Chat (English & Hinglish)
│   ├── screen5_support_economics_drawer.png            # Screen 5: Support Unit Economics Model Drawer
│   └── prototype_full_walkthrough.webp                 # Full animated video recording of prototype walkthrough
└── README.md                                           # Master submission index & deployment guide
```

---

## 🚀 Part 2: Clickable Design Prototype

### 1. Running Locally (Instant Preview)
A local server is pre-configured and running in this workspace:
- URL: **`http://localhost:3000`**
- If you need to restart the server at any point, run:
  ```bash
  cd prototype
  python3 -m http.server 3000
  ```
  Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Publishing to Get a Public Link (For Google Form Submission)
The assignment requires a **clickable design prototype link**. You can deploy this prototype in 1 minute using any of the following free options:

* **Option A: GitHub Pages (Recommended)**
  1. Push this repository to your GitHub account (`git init`, `git add .`, `git commit -m "Cheerio AI Assignment"`, `git push`).
  2. Go to **Settings > Pages** and select the `/prototype` folder (or root) to publish.
  3. Your link will be: `https://<your-username>.github.io/<repo-name>/prototype/`.
* **Option B: Vercel / Netlify (Drag & Drop)**
  1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
  2. Drag and drop the `prototype` folder.
  3. Netlify will generate a live instant URL (e.g. `https://cheerio-copilot-rohit.netlify.app`) in 10 seconds!

---

## 📊 Part 4: Google Sheet Financial Model & Formulas

The complete financial model has been generated in `docs/Cheerio_Support_Economics_Google_Sheet.csv` with explicit formula syntax.

### Quick Setup in Google Sheets:
1. Open [Google Sheets](https://sheets.new).
2. Click **File > Import > Upload** and select `docs/Cheerio_Support_Economics_Google_Sheet.csv`.
3. Set sharing settings to **"Anyone with the link can view"** before submitting.

### Key Financial Highlights (5,000 Active Businesses):
* **Monthly Inbound Queries:** 9,000 (1.8 queries/SMB blended across new signups and established accounts).
* **Autonomous AI Resolution Rate:** **66.0% (5,940 queries resolved with 0 human touch)**.
* **Escalations to Humans:** 3,060 queries (with auto-generated Diagnostic Dossier reducing handling time from 18 to 7 minutes).
* **Support Team Size:** Slashed from **12 human agents to 3 human agents** (9 support hires avoided).
* **AI Running Cost:** **₹0.054 per query** ($0.000641) using `gpt-4o-mini` with prompt caching. Total monthly AI infrastructure: **₹4,239 / month ($51)**.
* **Baseline Human Cost:** ₹5,40,000 / month (12 agents @ ₹45,000/mo).
* **New Hybrid Support Cost:** ₹1,39,239 / month (3 agents + AI infra).
* **Net Annualized Savings:** **₹48,09,128 / year (~$57,600 / year)** — a **74.2% cost reduction**!

---

## 🤖 Part 3: AI Usage & Transparency Log

As mandated by Cheerio AI's submission guidelines, full attribution and prompt logs are documented in `docs/AI_Usage_Log_and_Prompts.md`:
* **Tools Used:** Claude 3.5 Sonnet (Meta API error taxonomy & boundary rubric), GPT-4o (financial model formulas & token pricing), and Antigravity IDE (interactive prototype UI/JS).
* **3 Successful Prompts:** Meta Graph API error code mapping, BPO unit economics with prompt caching, and escalation guardrails.
* **1 Failed Prompt & Iteration:** Initial "generic FAQ chatbot" prompt rejected and re-architected into an "autonomous in-workflow diagnostics engine".
* **Weak AI Answers Caught:** AI assumed 50,000 monthly tickets and frontier GPT-4 pricing ($15k/mo); human PM judgment corrected to realistic B2B SaaS frequency (9k tickets/mo) and lightweight cached models (₹4.2k/mo). AI also falsely claimed it could "unban WhatsApp numbers"; corrected to official Meta appeal packets.
* **Human Judgment:** User empathy for Indian SMBs facing festive deadlines, and the strategic decision to keep diagnostic support 100% free while monetizing campaign generation.

---

## 🎥 Part 5: Optional 3-5 Minute Loom Video Walkthrough

A complete, timestamped video script tailored for Chetan and Abhiroop (Cheerio founders) is provided in `docs/Loom_Walkthrough_Script.md`.
* **Duration:** 3 minutes 45 seconds.
* **Flow:** Problem Statement -> Live Prototype Demo (Diwali Template 1-Click AutoFix) -> Unit Economics (₹48L Savings) -> AI Transparency & Closing.

---

## 📋 Final Google Form Submission Checklist

Before submitting to [https://forms.gle/Doq6ouBNbjRFz5ur5](https://forms.gle/Doq6ouBNbjRFz5ur5), ensure:
- [ ] **Document Link:** Share link to Google Doc or PDF of `docs/Cheerio_Product_Intern_Assignment_A_Doc.md` / `docs/Cheerio_Product_Intern_Assignment_A_Doc.html` (Set to "Anyone with the link can view").
- [ ] **Clickable Prototype Link:** Share your Netlify / Vercel / GitHub Pages link of the `prototype` folder.
- [ ] **Google Sheet Link:** Share your uploaded Google Sheet with formulas visible (Set to "Anyone with the link can view").
- [ ] **AI Prompt Log:** Included inside the document and referenced in `docs/AI_Usage_Log_and_Prompts.md`.
- [ ] **Loom Video Link (Optional but highly recommended):** Record using the script in `docs/Loom_Walkthrough_Script.md`.
