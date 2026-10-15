import nodemailer, { type SendMailOptions } from "nodemailer";
import { COMPANY } from "@/lib/constants";

export interface MailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

export interface QuoteEmailPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  category?: string;
  productCategories?: string[];
  deliveryTimeline?: string;
  projectType?: string;
  location?: string;
  requirements?: string;
  formSource?: string;
  attachments?: MailAttachment[];
}

export interface SendMailResult {
  success: boolean;
  simulated: boolean;
  message: string;
  messageId?: string;
  error?: string;
}

/**
 * Creates Nodemailer transport using environment variables.
 * Returns null if SMTP credentials are missing.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Formats a clean HTML email with Astro Precast corporate branding.
 */
function generateHtmlEmail(payload: QuoteEmailPayload): string {
  const categoriesList = payload.productCategories && payload.productCategories.length > 0
    ? payload.productCategories.join(", ")
    : payload.category || "General Precast Infrastructure";

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Precast Quote Request - Astro Precast</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f4f6f9;
      color: #1e293b;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      max-width: 640px;
      margin: 24px auto;
      background-color: #ffffff;
      border: 1px solid #dce5f0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(1, 64, 136, 0.05);
    }
    .header {
      background-color: #014088;
      background: linear-gradient(135deg, #014088 0%, #0c82c4 100%);
      padding: 28px 32px;
      color: #ffffff;
    }
    .header-badge {
      display: inline-block;
      padding: 4px 10px;
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #7dd3fc;
      margin-bottom: 8px;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 800;
      line-height: 1.25;
      color: #ffffff;
    }
    .header p {
      margin: 6px 0 0;
      font-size: 13px;
      color: #e0f2fe;
    }
    .content {
      padding: 28px 32px;
    }
    .section-title {
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #014088;
      border-bottom: 2px solid #e0f2fe;
      padding-bottom: 6px;
      margin: 22px 0 12px 0;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13.5px;
      margin-bottom: 8px;
    }
    .data-table td {
      padding: 8px 10px;
      vertical-align: top;
      border-bottom: 1px solid #f1f5f9;
    }
    .data-table td.label {
      width: 32%;
      font-weight: 700;
      color: #64748b;
      background-color: #f8fafd;
      border-radius: 4px;
    }
    .data-table td.val {
      color: #0f172a;
      font-weight: 500;
    }
    .data-table a {
      color: #014088;
      text-decoration: none;
      font-weight: 600;
    }
    .callout-box {
      background-color: #f8fafd;
      border-left: 4px solid #0e96e1;
      border-radius: 6px;
      padding: 14px 16px;
      margin: 12px 0;
      font-size: 13.5px;
      line-height: 1.6;
      color: #334155;
    }
    .attachment-card {
      background-color: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      padding: 12px 16px;
      margin-top: 10px;
      font-size: 13px;
      color: #166534;
      display: flex;
      align-items: center;
    }
    .footer {
      background-color: #f8fafd;
      border-top: 1px solid #e2e8f0;
      padding: 20px 32px;
      font-size: 12px;
      color: #64748b;
      line-height: 1.5;
    }
    .footer strong {
      color: #014088;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <!-- Header -->
    <div class="header">
      <div class="header-badge">Astro Precast &bull; Estimating Desk</div>
      <h1>New Project RFQ &amp; Quote Request</h1>
      <p>Submitted via ${payload.formSource || "Website Portal"} on ${submittedAt} EST</p>
    </div>

    <!-- Content -->
    <div class="content">
      <!-- Contractor Details -->
      <div class="section-title">1. Contractor &amp; Contact Information</div>
      <table class="data-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="val"><strong>${payload.name}</strong></td>
        </tr>
        <tr>
          <td class="label">Company / GC</td>
          <td class="val"><strong>${payload.company}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="val"><a href="mailto:${payload.email}">${payload.email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="val">${payload.phone ? `<a href="tel:${payload.phone.replace(/[^0-9+]/g, '')}">${payload.phone}</a>` : "Not provided"}</td>
        </tr>
      </table>

      <!-- Project Scope -->
      <div class="section-title">2. Scope &amp; Delivery Schedule</div>
      <table class="data-table">
        <tr>
          <td class="label">Precast Category</td>
          <td class="val"><strong>${categoriesList}</strong></td>
        </tr>
        <tr>
          <td class="label">Target Timeline</td>
          <td class="val">${payload.deliveryTimeline || "Standard Delivery"}</td>
        </tr>
        ${payload.projectType ? `
        <tr>
          <td class="label">Project Sector</td>
          <td class="val">${payload.projectType}</td>
        </tr>
        ` : ""}
        ${payload.location ? `
        <tr>
          <td class="label">Jobsite Location</td>
          <td class="val">${payload.location}</td>
        </tr>
        ` : ""}
      </table>

      <!-- Requirements / Specifications -->
      <div class="section-title">3. Project Specs &amp; Requirements</div>
      <div class="callout-box">
        ${(payload.requirements || "No additional written notes provided.").replace(/\n/g, "<br/>")}
      </div>

      <!-- File Attachments Notice -->
      ${payload.attachments && payload.attachments.length > 0 ? `
      <div class="section-title">4. Attached CAD / Drawing Files</div>
      ${payload.attachments.map(att => `
        <div class="attachment-card">
          📎 <strong>${att.filename}</strong> &nbsp;(${(att.content.length / (1024 * 1024)).toFixed(2)} MB attached to this email)
        </div>
      `).join("")}
      ` : ""}
    </div>

    <!-- Footer -->
    <div class="footer">
      <strong>${COMPANY.name}</strong> &bull; ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.zip}<br/>
      Phone: ${COMPANY.phoneDisplay} &bull; Email: ${COMPANY.email} &bull; Web: ${COMPANY.website}<br/>
      5,000+ PSI Certified Precast &bull; A.A.S.H.T.O. HS20-44 Loading &bull; Stamped PE Calculations
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Plain-text version of quote email.
 */
function generateTextEmail(payload: QuoteEmailPayload): string {
  const categoriesList = payload.productCategories && payload.productCategories.length > 0
    ? payload.productCategories.join(", ")
    : payload.category || "General Precast";

  return `
=====================================================
NEW PRECAST QUOTE REQUEST - ASTRO PRECAST
=====================================================

Source: ${payload.formSource || "Website Portal"}
Timestamp: ${new Date().toISOString()}

1. CONTRACTOR INFORMATION:
-----------------------------------------------------
- Name: ${payload.name}
- Company: ${payload.company}
- Email: ${payload.email}
- Phone: ${payload.phone || "N/A"}

2. PROJECT SCOPE & SCHEDULE:
-----------------------------------------------------
- Category / Products: ${categoriesList}
- Delivery Timeline: ${payload.deliveryTimeline || "Standard"}
${payload.projectType ? `- Project Sector: ${payload.projectType}\n` : ""}${payload.location ? `- Jobsite Location: ${payload.location}\n` : ""}
3. PROJECT SPECIFICATIONS / REQUIREMENTS:
-----------------------------------------------------
${payload.requirements || "No written specs provided."}

${payload.attachments && payload.attachments.length > 0 ? `
4. ATTACHED FILES:
-----------------------------------------------------
${payload.attachments.map(a => `- ${a.filename} (${(a.content.length / 1024).toFixed(1)} KB)`).join("\n")}
` : ""}

=====================================================
Astro Precast Engineering & Masonry
Plant: ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state}
Phone: ${COMPANY.phone} | Email: ${COMPANY.email}
=====================================================
  `.trim();
}

/**
 * Dispatches form data to email using Nodemailer.
 * If SMTP environment variables are missing, performs a clean developer simulation
 * and logs all details to the console without failing.
 */
export async function sendQuoteEmail(payload: QuoteEmailPayload): Promise<SendMailResult> {
  const transporter = createTransporter();

  // If no SMTP configured, run in simulation mode
  if (!transporter) {
    console.log("\n=======================================================");
    console.log("📬 [ASTRO MAILER - SIMULATION MODE]");
    console.log("-------------------------------------------------------");
    console.log(`To configure live emails, set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local.`);
    console.log(`From:    ${payload.name} <${payload.email}> [${payload.company}]`);
    console.log(`Phone:   ${payload.phone || "N/A"}`);
    console.log(`Product: ${payload.category || (payload.productCategories || []).join(", ")}`);
    console.log(`Timeline:${payload.deliveryTimeline || "N/A"}`);
    if (payload.location) console.log(`Location:${payload.location}`);
    console.log(`Specs:   ${payload.requirements || "N/A"}`);
    if (payload.attachments && payload.attachments.length > 0) {
      console.log(`Files:   ${payload.attachments.map(a => `${a.filename} (${(a.content.length / 1024).toFixed(1)} KB)`).join(", ")}`);
    }
    console.log("=======================================================\n");

    return {
      success: true,
      simulated: true,
      message: "Quote request received and logged (Simulated mode). Configure SMTP in .env.local to dispatch live emails.",
    };
  }

  const mailTo = process.env.MAIL_TO || COMPANY.email || "sales@astromasonry.com";
  const mailFrom = process.env.MAIL_FROM || `"${payload.company || "Astro Portal"}" <${process.env.SMTP_USER}>`;

  const mailOptions: SendMailOptions = {
    from: mailFrom,
    to: mailTo,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject: `[Precast RFQ] ${payload.company} - ${payload.category || (payload.productCategories?.[0]) || "Precast Quote Request"}`,
    text: generateTextEmail(payload),
    html: generateHtmlEmail(payload),
    attachments: payload.attachments?.map((att) => ({
      filename: att.filename,
      content: att.content,
      contentType: att.contentType,
    })),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ [ASTRO MAILER] Email successfully dispatched. Message ID: ${info.messageId}`);
    return {
      success: true,
      simulated: false,
      message: "Your quote request and drawings have been successfully dispatched to Astro Precast estimators.",
      messageId: info.messageId,
    };
  } catch (error: any) {
    console.error("❌ [ASTRO MAILER ERROR]", error);
    return {
      success: false,
      simulated: false,
      message: "An error occurred while sending the email. Please try again or call our plant directly.",
      error: error?.message || "Unknown mail error",
    };
  }
}
