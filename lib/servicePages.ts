export type ServicePageConfig = {
  slug: string;
  path: string;
  market: string;
  eyebrow: string;
  title: string;
  description: string;
  outcome: string;
  heroImage: string;
  heroImageAlt: string;
  problems: string[];
  deliverables: { title: string; description: string }[];
  workflow: { step: string; title: string; description: string }[];
  integrations: string[];
  proof: { title: string; description: string; href: string };
  faqs: { question: string; answer: string }[];
};

export const servicePages = {
  kenyaAutomation: {
    slug: "ecommerce-automation-kenya",
    path: "/ke/ecommerce-automation",
    market: "Kenya",
    eyebrow: "E-commerce automation in Kenya",
    title: "Connect your store, payments and operations—without the daily copy-paste",
    description:
      "I design reliable e-commerce automations for Kenyan retailers: orders, M-Pesa status, inventory, fulfilment, CRM, customer messages and reporting moving through one monitored system.",
    outcome:
      "Your team handles exceptions and growth decisions instead of re-entering orders, checking payment screenshots or reconciling disconnected spreadsheets.",
    heroImage: "/service-heroes/ecommerce-automation-kenya.svg",
    heroImageAlt: "Store orders connected to M-Pesa, inventory, delivery and reporting through an automated commerce workflow",
    problems: [
      "Orders arrive through a store, WhatsApp and marketplaces but there is no single operational queue.",
      "M-Pesa confirmations and order status updates depend on a person checking transactions.",
      "Online and physical inventory drift apart, creating overselling and cancelled orders.",
      "Customer, fulfilment and finance teams repeatedly copy the same data between tools.",
      "Owners receive reports late and cannot see where an order or payment failed.",
    ],
    deliverables: [
      {
        title: "Operations map",
        description: "A documented view of triggers, systems, hand-offs, failure points and the highest-return automation opportunities.",
      },
      {
        title: "Reliable workflows",
        description: "API and n8n workflows with validation, idempotency, retries, alerts and an explicit manual recovery path.",
      },
      {
        title: "Connected commerce stack",
        description: "Store, M-Pesa or card payments, POS, inventory, delivery, CRM, accounting and reporting connected where the business case is sound.",
      },
      {
        title: "Handover and monitoring",
        description: "Runbooks, credentials guidance, workflow ownership, staff training and post-launch observation.",
      },
    ],
    workflow: [
      { step: "01", title: "Audit", description: "Measure order volume, handling time, error rates and the cost of each manual hand-off." },
      { step: "02", title: "Design", description: "Choose the system of record and define events, data contracts, exceptions and security boundaries." },
      { step: "03", title: "Build and test", description: "Implement against sandbox data, test duplicate and delayed events, and prove recovery paths." },
      { step: "04", title: "Launch and improve", description: "Release in controlled stages, monitor outcomes and automate the next constraint only when justified." },
    ],
    integrations: ["Shopify", "WooCommerce", "M-Pesa Daraja", "WhatsApp", "Zoho", "POS and ERP", "CRM", "Accounting", "Delivery APIs", "Google Workspace"],
    proof: {
      title: "Workflow automation systems with n8n",
      description: "See how self-hosted orchestration, API integrations and operational visibility are approached in a production system.",
      href: "/case-studies/n8n-workflow-automation-systems",
    },
    faqs: [
      { question: "What should a Kenyan e-commerce business automate first?", answer: "Start with a repetitive, high-volume hand-off that has a clear cost: payment confirmation, stock synchronization, order routing or status communication. The audit ranks candidates by hours saved, error reduction, implementation risk and payback." },
      { question: "Can you automate an existing store?", answer: "Yes. The work can integrate an existing Shopify, WooCommerce or custom store. A rebuild is recommended only when the current platform blocks reliable integration or conversion." },
      { question: "Will staff still be able to intervene?", answer: "Yes. Reliable automation has an exception queue, alerts, logs and a documented manual recovery path. It should not hide failed orders or lock the team out." },
      { question: "How long does an automation project take?", answer: "A contained workflow commonly takes two to four weeks after access and requirements are ready. Multi-system order, inventory and finance programmes are delivered in stages and may take four to eight weeks or more." },
    ],
  },
  mpesa: {
    slug: "mpesa-ecommerce-integration-kenya",
    path: "/ke/mpesa-ecommerce-integration",
    market: "Kenya",
    eyebrow: "M-Pesa e-commerce integration",
    title: "Turn M-Pesa payments into verified orders, not screenshots and guesswork",
    description:
      "Production-minded Daraja integrations for Kenyan stores: STK Push initiation, callback validation, transaction records, reconciliation, customer status and safe recovery when networks or callbacks fail.",
    outcome:
      "Customers get a clear checkout experience while operations and finance work from verified payment state rather than manual messages.",
    heroImage: "/service-heroes/mpesa-ecommerce-integration.svg",
    heroImageAlt: "M-Pesa phone payment verified against an e-commerce order and reconciliation record",
    problems: [
      "Customers send transaction screenshots and staff manually match them to orders.",
      "A successful customer payment does not always produce a successful callback.",
      "Repeated clicks can create duplicate requests or confusing order states.",
      "Finance cannot reconcile M-Pesa transactions cleanly against store orders.",
      "Sandbox demos work, but production monitoring, security and exception handling are missing.",
    ],
    deliverables: [
      { title: "Checkout integration", description: "Server-side STK Push initiation with controlled order states and useful customer feedback." },
      { title: "Callback and query handling", description: "Validated callbacks, idempotent updates and a query/recovery path for delayed or ambiguous results." },
      { title: "Reconciliation records", description: "Transaction references, timestamps, amounts and order relationships stored for operations and finance." },
      { title: "Security and observability", description: "Secret handling, minimal logs, error alerts, rate controls and a production runbook." },
    ],
    workflow: [
      { step: "01", title: "Merchant readiness", description: "Confirm Daraja access, shortcode type, callback domain, store platform and the intended payment lifecycle." },
      { step: "02", title: "State design", description: "Define pending, paid, failed, cancelled, timed-out and review states before writing integration code." },
      { step: "03", title: "Sandbox validation", description: "Test authentication, requests, callbacks, duplicate events, amount mismatches and unavailable dependencies." },
      { step: "04", title: "Controlled go-live", description: "Move credentials securely, monitor live transactions and reconcile the first production batch." },
    ],
    integrations: ["Safaricom Daraja", "Shopify", "WooCommerce", "Custom Node.js", "ERP and POS", "CRM", "Accounting", "WhatsApp notifications"],
    proof: {
      title: "Kenyan pharmacy e-commerce system",
      description: "Review a complex commerce build involving a large regulated catalogue, operational integrations and local-market requirements.",
      href: "/case-studies/zoho-pharmacy-ecommerce",
    },
    faqs: [
      { question: "Do I need a Paybill or Till number?", answer: "Your merchant setup and the Daraja product available to it determine the integration path. The technical audit confirms the shortcode, credentials and business process before implementation." },
      { question: "What happens if the callback is delayed?", answer: "The order remains in a non-paid state until verified. The integration can query transaction status, alert staff and provide a review path rather than marking an order paid from the browser alone." },
      { question: "Can M-Pesa work with Shopify or WooCommerce?", answer: "Yes, through an appropriate payment app, custom extension or middleware service. The best option depends on checkout constraints, ownership, expected volume and maintenance requirements." },
      { question: "Do you store customer M-Pesa PINs?", answer: "No. The PIN is entered on Safaricom-controlled prompts and must never be collected or stored by the store integration." },
    ],
  },
  n8n: {
    slug: "n8n-ecommerce-automation",
    path: "/services/n8n-ecommerce-automation",
    market: "Kenya and remote teams",
    eyebrow: "n8n e-commerce automation",
    title: "Own your commerce workflows without paying for every routine task",
    description:
      "I design, self-host and harden n8n workflows for order, inventory, customer support, fulfilment, catalogue and reporting operations—with monitoring and recovery built in.",
    outcome:
      "A maintainable orchestration layer connects the tools you already use while your team retains visibility and control.",
    heroImage: "/service-heroes/n8n-ecommerce-automation.svg",
    heroImageAlt: "Monitored n8n workflow connecting storefront, inventory, customer, fulfilment and reporting systems",
    problems: [
      "Per-task automation bills rise directly with order and catalogue volume.",
      "Important workflows live in one employee's account with no documentation or monitoring.",
      "Shopify, ERP, CRM and fulfilment data disagree after partial failures.",
      "A workflow works in a demo but duplicates orders or silently drops events in production.",
      "The team cannot tell what failed, replay it safely or update credentials.",
    ],
    deliverables: [
      { title: "n8n architecture", description: "Hosting, database, encryption, credentials, backups, access and environment boundaries matched to risk." },
      { title: "Production workflows", description: "Modular workflows with input validation, deduplication, retries, sub-workflows and clear ownership." },
      { title: "Operational visibility", description: "Failure alerts, useful logs, execution retention and documented replay or manual intervention." },
      { title: "Team handover", description: "Workflow diagrams, naming standards, credential rotation guidance and practical training." },
    ],
    workflow: [
      { step: "01", title: "Select the use case", description: "Prioritize a workflow with measurable volume and a stable process before introducing automation." },
      { step: "02", title: "Model events and failure", description: "Define triggers, identifiers, state, retry rules and what should happen when any dependency is unavailable." },
      { step: "03", title: "Build and observe", description: "Develop with test payloads, isolate secrets and prove normal, duplicate and failure paths." },
      { step: "04", title: "Transfer ownership", description: "Deploy, monitor, document and train the people who will approve changes and handle exceptions." },
    ],
    integrations: ["n8n", "Shopify", "WooCommerce", "Stripe", "M-Pesa", "Zoho", "HubSpot", "QuickBooks", "Xero", "PostgreSQL", "Redis", "Slack and email"],
    proof: {
      title: "n8n workflow automation systems",
      description: "Explore the case study on self-hosted automation, reliable execution and API orchestration.",
      href: "/case-studies/n8n-workflow-automation-systems",
    },
    faqs: [
      { question: "Is self-hosted n8n free to run?", answer: "Self-hosting removes per-execution SaaS pricing, but infrastructure, maintenance, backups, monitoring and engineering still have a cost. The audit compares total ownership cost with managed alternatives." },
      { question: "When should I not use n8n?", answer: "Do not use it to compensate for an undefined business process, as an unbounded high-throughput message broker, or where a small amount of application code is simpler and safer. Tool choice follows the workflow." },
      { question: "Can you improve existing workflows?", answer: "Yes. Existing workflows can be reviewed for security, duplicated executions, missing error paths, performance, maintainability and observability before targeted refactoring." },
      { question: "Will I be locked into your hosting?", answer: "No. Deployments are documented and designed for handover. Hosting, workflow exports, credentials ownership and backup responsibilities are agreed explicitly." },
    ],
  },
  shopify: {
    slug: "shopify-automation-consultant",
    path: "/services/shopify-automation",
    market: "Kenya and remote teams",
    eyebrow: "Shopify automation consultant",
    title: "Make Shopify the start of your workflow—not another inbox to manage",
    description:
      "Connect Shopify orders, products, inventory and customers with the operational systems behind the store: ERP, POS, 3PL, CRM, accounting, support and reporting.",
    outcome:
      "Store events become controlled operational actions, with fewer stock mistakes, faster fulfilment and a traceable record when something needs attention.",
    heroImage: "/service-heroes/shopify-automation.svg",
    heroImageAlt: "Shopify orders flowing into inventory, fulfilment and back-office operations",
    problems: [
      "Orders are retyped into fulfilment, accounting or ERP systems.",
      "Stock is updated in batches and overselling is discovered after checkout.",
      "App subscriptions overlap, yet gaps still require spreadsheets and manual checks.",
      "Customer support cannot see fulfilment or exception status without asking another team.",
      "Custom webhooks fail without alerts or safe replay.",
    ],
    deliverables: [
      { title: "Integration audit", description: "Review apps, webhooks, manual work, data ownership, subscription cost and the operational bottleneck." },
      { title: "Shopify event workflows", description: "Reliable handling for orders, fulfilments, refunds, inventory, products and customers." },
      { title: "Back-office connections", description: "ERP, POS, WMS/3PL, CRM, accounting, helpdesk and reporting integrations through APIs or middleware." },
      { title: "Supportable system", description: "Version-aware API use, logging, retries, documentation and a clear plan for platform changes." },
    ],
    workflow: [
      { step: "01", title: "Trace one order", description: "Follow a real order from checkout through payment, stock, fulfilment, support, finance and reporting." },
      { step: "02", title: "Choose the source of truth", description: "Assign ownership for products, inventory, customers, fulfilment and financial records." },
      { step: "03", title: "Integrate safely", description: "Use authenticated APIs and webhooks with stable identifiers, deduplication and staged rollout." },
      { step: "04", title: "Measure operations", description: "Track handling time, failed syncs, fulfilment delay, cancellations and staff intervention." },
    ],
    integrations: ["Shopify", "Shopify webhooks", "n8n", "ERP and POS", "3PL and WMS", "Zoho and HubSpot", "QuickBooks and Xero", "Helpdesk", "Data warehouse"],
    proof: {
      title: "High-performance commerce engineering",
      description: "Browse commerce and integration projects that demonstrate catalogue, workflow and platform engineering.",
      href: "/case-studies",
    },
    faqs: [
      { question: "Do you build Shopify stores or only automations?", answer: "Both are possible, but this service is focused on operations behind an existing or planned store: data flow, integrations, reliability and measurable process improvement." },
      { question: "Can Shopify connect to a custom ERP or POS?", answer: "Usually, if the system exposes a usable API, database interface or supported export/import process. Discovery confirms authentication, data quality, limits and ownership before committing to the design." },
      { question: "Should I use a Shopify app or custom integration?", answer: "Use a reputable app when it satisfies the workflow, security, ownership and cost requirements. Custom middleware is justified when business rules, scale or systems are not served reliably by an app." },
      { question: "Can you automate inventory across locations?", answer: "Yes, after defining the inventory system of record, reservation rules, update latency, bundles, returns and the behaviour required when a location or integration is unavailable." },
    ],
  },
} satisfies Record<string, ServicePageConfig>;
