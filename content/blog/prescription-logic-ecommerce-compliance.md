---
title: "Prescription Logic in E-commerce: Handling Compliance in High-Stakes Builds"
excerpt: "How we implemented conditional 'Add to Cart' logic for regulated products in the Browns Pharmacy project."
tags: "Pharmacy, Compliance, Logic, E-commerce, Zoho"
region: "Kenya"
author: "Sephan"
publishedAt: "2026-05-25"
updatedAt: "2026-08-15"
image: "/blog/prescription-logic-ecommerce-compliance.svg"
imageAlt: "Prescription Logic in E-commerce: Handling Compliance in High-Stakes Builds"
---

Building an online pharmacy is vastly different from building a typical fashion or electronics store. In Kenya, the sale of pharmaceuticals is strictly regulated by the Pharmacy and Poisons Board (PPB). You cannot simply allow a customer to buy any medication with a single click. Some products require a physical prescription, while others have strict quantity limits. In this guide, we'll dive into the technical logic required to build a compliant pharmacy e-commerce system, drawing from lessons learned during the [Browns Pharmacy project](/case-studies/zoho-pharmacy-ecommerce).

### The Challenge of Conditional "Add to Cart"

In a standard e-commerce flow, the "Add to Cart" button is always active as long as the item is in stock. For a pharmacy, we need a "Gatekeeper" logic. In the Browns Pharmacy build, we managed over 4,200 SKUs. We had to categorize these into "General Sales" (OTC) and "Prescription Only" (POM).

Technically, this involved modifying the product template logic. Instead of a universal button, we implemented a conditional check:
```javascript
if (product.requires_prescription) {
  renderPrescriptionUploadUI();
} else {
  renderStandardAddToCart();
}
```
If a product was marked as "Prescription Only" in our Zoho Inventory backend, the frontend would hide the "Add to Cart" button and replace it with an "Upload Prescription" field. The customer could not proceed to the checkout until a valid document (PDF or Image) was attached to the session. This ensured the business remained 100% compliant with Kenyan law.

### Data Cleansing and Catalog Automation

Managing 4,200+ medical products manually is impossible. Most pharmacy data comes from messy supplier lists or legacy POS systems. For Browns Pharmacy, we built a custom Node.js scraping and cleansing pipeline. We used regex patterns to identify prescription-only keywords in product titles and automatically flagged them in our database.

By automating the data import into Zoho Commerce, we reduced the manual workload by over 90%. This allowed the pharmacy to go live in just three weeks. This focus on "Industrial-Grade" data management is a core part of my [E-commerce Engineering Services](/services). We don't just build the site; we build the pipes that feed it.

### Secure Document Handling

Handling prescriptions means handling sensitive medical data. Under Kenya's Data Protection Act, this information must be stored securely. In our architecture, uploaded prescriptions were never stored in a public folder. They were encrypted and sent directly to a private cloud bucket (managed via AWS S3 or DigitalOcean Spaces) with restricted access.

Only authorized pharmacists could view these documents through a secure admin portal. This "Security-First" approach is a non-negotiable standard in my work, as seen in the [Gap Recruitment Visitor System](/case-studies/gap-recruitment-visitor-checkin), where we handled confidential interviewee data.

### Integrating M-Pesa for Pharmacy Sales

In Kenya, trust is the currency of e-commerce. For a pharmacy, customers want to know their payment is secure and their order is being processed by a professional. By integrating the [Safaricom Daraja API](/blog/mpesa-api-integration-nodejs), we provided an automated STK Push checkout.

The logic was simple: once the pharmacist verified the uploaded prescription, the customer would receive a payment prompt. This prevented "Dead Orders" where a customer pays for a product they aren't legally allowed to buy. This seamless bridge between compliance and commerce is what makes a high-performance system.

### The Role of Technical SEO in Health E-commerce

Ranking for medical terms in Nairobi is highly competitive. We implemented advanced JSON-LD schema for "Pharmacy" and "Product" types, ensuring that Google understood the nature of the business. By focusing on site speed and mobile responsiveness, we ensured that a parent looking for medicine for a sick child in the middle of the night could find the store and complete the purchase without technical hurdles.

This commitment to technical SEO is a recurring theme in my [Case Studies](/case-studies). We build sites that are fast, secure, and—most importantly—findable.

### Conclusion: Compliance as a Feature

Technical compliance shouldn't be a hurdle; it should be a feature that builds trust. When a customer sees a professional prescription upload flow and a secure M-Pesa checkout, they know they are dealing with a legitimate pharmacy. 

If you are looking to move a regulated business online—whether it's health, finance, or legal services—you need an engineer who understands both the code and the law. Explore my [Technical Capabilities](/services) to see how we can build your compliant e-commerce engine.
