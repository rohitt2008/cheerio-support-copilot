// Cheerio AI Prototype — Interactive Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const body = document.body;

  // Modals & Drawers
  const autoFixModal = document.getElementById('autoFixModal');
  const closeAutoFixModalBtn = document.getElementById('closeAutoFixModalBtn');
  const cancelAutoFixBtn = document.getElementById('cancelAutoFixBtn');
  const executeAutoFixBtn = document.getElementById('executeAutoFixBtn');
  const autoFixProgress = document.getElementById('autoFixProgress');
  const progressStepTitle = document.getElementById('progressStepTitle');
  const progressStepDesc = document.getElementById('progressStepDesc');

  const escalationModal = document.getElementById('escalationModal');
  const closeEscalationModalBtn = document.getElementById('closeEscalationModalBtn');
  const cancelEscalationBtn = document.getElementById('cancelEscalationBtn');
  const confirmEscalationBtn = document.getElementById('confirmEscalationBtn');
  const testEscalateBtn = document.getElementById('testEscalateBtn');

  const copilotDrawer = document.getElementById('copilotDrawer');
  const copilotLauncherBtn = document.getElementById('copilotLauncherBtn');
  const closeCopilotDrawerBtn = document.getElementById('closeCopilotDrawerBtn');
  const openCopilotDrawerBtn = document.getElementById('openCopilotDrawerBtn');
  const copilotInput = document.getElementById('copilotInput');
  const sendCopilotMsgBtn = document.getElementById('sendCopilotMsgBtn');
  const chatMessages = document.getElementById('chatMessages');

  const economicsDrawer = document.getElementById('economicsDrawer');
  const toggleEconomicsBtn = document.getElementById('toggleEconomicsBtn');
  const closeEconomicsDrawerBtn = document.getElementById('closeEconomicsDrawerBtn');

  // Trigger buttons
  const btnDiagnoseDiwali = document.getElementById('btnDiagnoseDiwali');
  const triggerTemplateAutoFixBannerBtn = document.getElementById('triggerTemplateAutoFixBannerBtn');
  const openTemplateAutoFixDirectBtn = document.getElementById('openTemplateAutoFixDirectBtn');
  const openTelemetryDrawerBtn = document.getElementById('openTelemetryDrawerBtn');
  const simulateErrorBtn = document.getElementById('simulateErrorBtn');
  const fixFlowBtn = document.getElementById('fixFlowBtn');
  const orphanFlowNode = document.getElementById('orphanFlowNode');

  // Status elements
  const rowDiwali = document.getElementById('rowDiwali');
  const badgeDiwaliStatus = document.getElementById('badgeDiwaliStatus');
  const diagnosticDiwaliText = document.getElementById('diagnosticDiwaliText');
  const tagCategory = document.getElementById('tagCategory');
  const templateKpiBadge = document.getElementById('templateKpiBadge');
  const templateKpiCount = document.getElementById('templateKpiCount');
  const templateKpiFooter = document.getElementById('templateKpiFooter');
  const kpiTemplateCard = document.getElementById('kpiTemplateCard');
  const templateBadgeCount = document.getElementById('templateBadgeCount');
  const healthBanner = document.getElementById('healthBanner');

  // 1. Theme Toggle
  themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('theme-dark')) {
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
    } else {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
    }
  });

  // 2. Tab Navigation
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = item.getAttribute('data-tab');
      if (!targetTab) return;

      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      tabPanes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === `${targetTab}Tab`) {
          pane.classList.add('active');
        }
      });
    });
  });

  // 3. AutoFix Modal Controls
  function openAutoFixModal() {
    autoFixModal.classList.add('show');
  }

  function closeAutoFixModal() {
    autoFixModal.classList.remove('show');
    autoFixProgress.style.display = 'none';
    executeAutoFixBtn.disabled = false;
    executeAutoFixBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      Apply Auto-Fix & Resubmit to Meta
    `;
  }

  if (btnDiagnoseDiwali) btnDiagnoseDiwali.addEventListener('click', openAutoFixModal);
  if (triggerTemplateAutoFixBannerBtn) triggerTemplateAutoFixBannerBtn.addEventListener('click', openAutoFixModal);
  if (openTemplateAutoFixDirectBtn) openTemplateAutoFixDirectBtn.addEventListener('click', openAutoFixModal);
  if (closeAutoFixModalBtn) closeAutoFixModalBtn.addEventListener('click', closeAutoFixModal);
  if (cancelAutoFixBtn) cancelAutoFixBtn.addEventListener('click', closeAutoFixModal);

  // 4. Execution of 1-Click AutoFix
  executeAutoFixBtn.addEventListener('click', () => {
    executeAutoFixBtn.disabled = true;
    autoFixProgress.style.display = 'flex';

    // Step 1: Reformatting
    progressStepTitle.innerText = "Step 1/3: Reformatting Template Payload...";
    progressStepDesc.innerText = "Adding greeting prefix and sample variable value: 'Ramesh'";

    setTimeout(() => {
      // Step 2: Meta API Call
      progressStepTitle.innerText = "Step 2/3: Calling Meta Graph API v20.0...";
      progressStepDesc.innerText = "POST /v20.0/104829104928192/message_templates (Category: MARKETING)";

      setTimeout(() => {
        // Step 3: Approval Received
        progressStepTitle.innerText = "Step 3/3: Meta Automated Review Passed!";
        progressStepDesc.innerText = "Template Status updated to: APPROVED";

        setTimeout(() => {
          closeAutoFixModal();
          applyTemplateResolutionSuccess();
        }, 900);

      }, 1100);
    }, 1000);
  });

  function applyTemplateResolutionSuccess() {
    // Update Row in Table
    if (rowDiwali) rowDiwali.classList.remove('highlight-row');
    if (badgeDiwaliStatus) {
      badgeDiwaliStatus.className = 'status-badge success';
      badgeDiwaliStatus.innerHTML = '<span class="dot"></span> APPROVED';
    }
    if (tagCategory) {
      tagCategory.className = 'tag tag-purple';
      tagCategory.innerText = 'Marketing';
    }
    if (diagnosticDiwaliText) {
      diagnosticDiwaliText.className = 'diagnostic-pill success';
      diagnosticDiwaliText.innerHTML = '<strong>Auto-Fixed by Copilot:</strong> Sample parameters registered & approved by Meta Graph API';
    }
    if (btnDiagnoseDiwali) {
      btnDiagnoseDiwali.className = 'btn btn-outline btn-sm';
      btnDiagnoseDiwali.innerText = 'Ready to Send';
      btnDiagnoseDiwali.disabled = true;
    }

    // Update KPI Card
    if (kpiTemplateCard) kpiTemplateCard.classList.remove('error-glow');
    if (templateKpiBadge) {
      templateKpiBadge.className = 'status-badge success';
      templateKpiBadge.innerText = 'All Approved';
    }
    if (templateKpiCount) templateKpiCount.innerText = '4 of 4 Approved';
    if (templateKpiFooter) {
      templateKpiFooter.className = 'kpi-footer text-success';
      templateKpiFooter.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 100% templates ready for Diwali';
    }
    if (templateBadgeCount) {
      templateBadgeCount.className = 'badge badge-success badge-pill';
      templateBadgeCount.innerText = 'All Good';
      templateBadgeCount.style.backgroundColor = 'var(--success)';
    }

    // Update Health Banner
    if (healthBanner) {
      healthBanner.innerHTML = `
        <div class="health-banner-content">
          <div class="health-score-ring">
            <svg viewBox="0 0 36 36" class="circular-chart" style="stroke: #10B981;">
              <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              <path class="circle" stroke="#10B981" stroke-dasharray="94, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              <text x="18" y="20.35" class="percentage" style="fill: #10B981;">94%</text>
            </svg>
          </div>
          <div class="health-details">
            <div class="health-header">
              <h3 style="color: #10B981;">Setup Health: Ready to Launch Campaigns!</h3>
              <span class="tag" style="background: rgba(16,185,129,0.15); color: #10B981;">Self-Healing AutoFix Complete</span>
            </div>
            <p>All Meta templates are approved and WhatsApp Cloud API connection is delivering normally. <strong>diwali_flash_sale_v1</strong> can now be broadcasted to your contact list.</p>
            <div class="health-actions">
              <a href="#campaigns" class="btn btn-primary" onclick="alert('Navigating to Campaign Broadcast Scheduler!');">
                Schedule Diwali Broadcast
              </a>
              <button class="btn btn-ghost" id="revertDemoBtn">Reset Demo State</button>
            </div>
          </div>
        </div>
      `;

      // Allow resetting for demo purposes
      const revertBtn = document.getElementById('revertDemoBtn');
      if (revertBtn) {
        revertBtn.addEventListener('click', () => {
          location.reload();
        });
      }
    }

    // Add Copilot chat confirmation
    appendMessage('ai', `Awesome news, Ramesh! 🎉 Your template <strong>diwali_flash_sale_v1</strong> was updated with sample variables and approved by Meta. It is now 100% ready for broadcasting.`);
  }

  // 5. Chatbot Flow Auto-Link Fallback
  if (fixFlowBtn && orphanFlowNode) {
    fixFlowBtn.addEventListener('click', () => {
      orphanFlowNode.className = 'flow-node';
      orphanFlowNode.style.borderColor = 'var(--success)';
      orphanFlowNode.style.backgroundColor = 'rgba(16, 185, 129, 0.08)';
      orphanFlowNode.innerHTML = `
        <div class="node-badge" style="color: var(--success);">AI SMART FALLBACK</div>
        <div class="node-title">Intent Recognizer & Fuzzy Matcher</div>
        <div style="font-size: 0.72rem; color: var(--success); margin-top: 4px;">Handles Hinglish / Typos ("yes pls", "ha")</div>
      `;
      fixFlowBtn.innerText = 'Fallback Linked ✔';
      fixFlowBtn.disabled = true;

      appendMessage('ai', `I have linked an <strong>AI Fallback Intent Node</strong> to your WhatsApp flow. Now, if leads reply with typos or Hinglish phrases like "ha bhai", the bot will recognize their intent and deliver the coupon!`);
    });
  }

  // 6. Escalation Modal
  function openEscalationModal() {
    escalationModal.classList.add('show');
  }

  function closeEscalationModal() {
    escalationModal.classList.remove('show');
  }

  if (testEscalateBtn) testEscalateBtn.addEventListener('click', openEscalationModal);
  if (closeEscalationModalBtn) closeEscalationModalBtn.addEventListener('click', closeEscalationModal);
  if (cancelEscalationBtn) cancelEscalationBtn.addEventListener('click', closeEscalationModal);
  if (confirmEscalationBtn) {
    confirmEscalationBtn.addEventListener('click', () => {
      alert("Diagnostic Dossier #CH-8921 dispatched to L2 Support Specialist Amit S. Response SLA: 4 mins.");
      closeEscalationModal();
    });
  }

  // 7. Copilot Drawer Controls
  function toggleCopilotDrawer() {
    if (economicsDrawer.classList.contains('open')) {
      economicsDrawer.classList.remove('open');
    }
    copilotDrawer.classList.toggle('open');
  }

  if (copilotLauncherBtn) copilotLauncherBtn.addEventListener('click', toggleCopilotDrawer);
  if (closeCopilotDrawerBtn) closeCopilotDrawerBtn.addEventListener('click', () => {
    copilotDrawer.classList.remove('open');
  });
  if (openCopilotDrawerBtn) openCopilotDrawerBtn.addEventListener('click', () => {
    if (economicsDrawer.classList.contains('open')) {
      economicsDrawer.classList.remove('open');
    }
    copilotDrawer.classList.add('open');
  });

  // Economics Drawer Controls
  if (toggleEconomicsBtn) {
    toggleEconomicsBtn.addEventListener('click', () => {
      if (copilotDrawer.classList.contains('open')) {
        copilotDrawer.classList.remove('open');
      }
      economicsDrawer.classList.toggle('open');
    });
  }
  if (closeEconomicsDrawerBtn) {
    closeEconomicsDrawerBtn.addEventListener('click', () => {
      economicsDrawer.classList.remove('open');
    });
  }

  if (openTelemetryDrawerBtn) {
    openTelemetryDrawerBtn.addEventListener('click', () => {
      const diagNav = document.querySelector('[data-tab="diagnostics"]');
      if (diagNav) diagNav.click();
    });
  }

  // 8. Chat Message Appender
  function appendMessage(sender, htmlText) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    if (sender === 'ai') {
      bubble.innerHTML = `
        <div class="bubble-header">Cheerio Copilot</div>
        <div class="bubble-text">${htmlText}</div>
      `;
    } else {
      bubble.innerHTML = `<div class="bubble-text">${htmlText}</div>`;
    }
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Quick Chips interaction
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      handleUserQuery(prompt);
    });
  });

  // Handle Input Submission
  function submitInput() {
    const val = copilotInput.value.trim();
    if (!val) return;
    copilotInput.value = '';
    handleUserQuery(val);
  }

  if (sendCopilotMsgBtn) sendCopilotMsgBtn.addEventListener('click', submitInput);
  if (copilotInput) {
    copilotInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitInput();
    });
  }

  // Knowledge & Action Engine for Demo
  function handleUserQuery(query) {
    appendMessage('user', query);
    const q = query.toLowerCase();

    setTimeout(() => {
      if (q.includes('template') && (q.includes('reject') || q.includes('why') || q.includes('diwali'))) {
        appendMessage('ai', `
          Meta rejected your template <strong>diwali_flash_sale_v1</strong> due to two reasons:
          <br>1. <strong>Missing Sample Value:</strong> Parameter <code>{{1}}</code> needs sample text (e.g. "Ramesh").
          <br>2. <strong>Category Mismatch:</strong> It was labeled "Utility", but contains discount offers, so Meta requires it to be "Marketing".
          <div style="margin-top: 8px;">
            <button class="btn btn-primary btn-xs" onclick="document.getElementById('btnDiagnoseDiwali').click();">
              Click here to Auto-Fix & Resubmit
            </button>
          </div>
        `);
      } else if (q.includes('hindi') || q.includes('samjhao') || q.includes('hinglish')) {
        appendMessage('ai', `
          Haan Ramesh ji! Meta ne aapka template isliye reject kiya kyunki:
          <br>1. <code>{{1}}</code> ke sath sample name nahi diya tha (jaise "e.g. Ramesh").
          <br>2. Category "Utility" select thi jabki message me 30% discount offer tha jo Meta ke rules me "Marketing" category me aata hai.
          <br><br>Aapko bas ek click karna hai, hum ise theek karke Meta ko re-submit kar denge!
          <div style="margin-top: 8px;">
            <button class="btn btn-primary btn-xs" onclick="document.getElementById('btnDiagnoseDiwali').click();">
              Abhi 1-Click AutoFix Karein
            </button>
          </div>
        `);
      } else if (q.includes('shopify') || q.includes('webhook')) {
        appendMessage('ai', `
          Inspecting Shopify integration...
          <br>✔ Webhook <code>orders/create</code>: <strong>Active (HTTP 200)</strong>
          <br>✔ Abandoned Cart Trigger: <strong>Connected</strong>
          <br>✔ Phone formatting rule: Automatically appending <code>+91</code> prefix.
          <br><span style="color: var(--success); font-weight:600;">Shopify is healthy! 148 orders synced this week.</span>
        `);
      } else if (q.includes('blocked') || q.includes('banned') || q.includes('spam') || q.includes('phone')) {
        appendMessage('ai', `
          ⚠️ <strong>Meta Policy Guardrail:</strong> Cheerio cannot directly unban numbers blocked by Meta for spam or policy violations.
          <br><br>However, I have verified your WABA status. I can generate an <strong>Official Meta Appeal Packet</strong> with your business registration documents and route this to our Meta Partner Liaison desk.
          <div style="margin-top: 8px;">
            <button class="btn btn-secondary btn-xs" onclick="document.getElementById('testEscalateBtn').click();">
              Generate Meta Appeal & Escalate
            </button>
          </div>
        `);
      } else if (q.includes('human') || q.includes('agent') || q.includes('support') || q.includes('call')) {
        appendMessage('ai', `
          I'm preparing your workspace diagnostic dossier and connecting you with an L2 Support Engineer.
          <div style="margin-top: 8px;">
            <button class="btn btn-primary btn-xs" onclick="document.getElementById('testEscalateBtn').click();">
              Open Escalation Drawer (Dossier #CH-8921)
            </button>
          </div>
        `);
      } else {
        appendMessage('ai', `
          I understand you're asking about "${query}". I have checked your active Cheerio configuration. WhatsApp API connection is healthy and ready. Is there a specific template, flow, or broadcast you'd like me to diagnose?
        `);
      }
    }, 600);
  }

  // Pre-bound chat button triggers
  const chatFixTemplateBtn = document.getElementById('chatFixTemplateBtn');
  if (chatFixTemplateBtn) {
    chatFixTemplateBtn.addEventListener('click', () => {
      openAutoFixModal();
    });
  }

  const chatExplainHinglishBtn = document.getElementById('chatExplainHinglishBtn');
  if (chatExplainHinglishBtn) {
    chatExplainHinglishBtn.addEventListener('click', () => {
      handleUserQuery("Hindi me samjhao");
    });
  }

  // Simulate Meta Error Button
  if (simulateErrorBtn) {
    simulateErrorBtn.addEventListener('click', () => {
      alert("Simulated Meta Webhook Event received: 'Template diwali_flash_sale_v1 state updated to REJECTED (Code 132000)'. Telemetry active.");
    });
  }
});
