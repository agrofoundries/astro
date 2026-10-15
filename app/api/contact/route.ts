import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmail, QuoteEmailPayload, MailAttachment } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let payload: QuoteEmailPayload;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const name = formData.get("name")?.toString() || formData.get("fullName")?.toString() || "";
      const company = formData.get("company")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const phone = formData.get("phone")?.toString() || "";
      const category = formData.get("category")?.toString() || formData.get("categoryKey")?.toString() || "";
      const deliveryTimeline = formData.get("deliveryTimeline")?.toString() || formData.get("timeline")?.toString() || "";
      const projectType = formData.get("projectType")?.toString() || "";
      const location = formData.get("location")?.toString() || "";
      const requirements = formData.get("requirements")?.toString() || formData.get("specNotes")?.toString() || "";
      const formSource = formData.get("formSource")?.toString() || "Contractor RFQ Wizard";

      const productCategoriesRaw = formData.get("productCategories");
      let productCategories: string[] = [];
      if (productCategoriesRaw) {
        try {
          productCategories = JSON.parse(productCategoriesRaw.toString());
        } catch {
          productCategories = [productCategoriesRaw.toString()];
        }
      }

      // Check for file attachment
      const attachments: MailAttachment[] = [];
      const file = formData.get("file") as File | null;
      if (file && typeof file.arrayBuffer === "function" && file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: Buffer.from(arrayBuffer),
          contentType: file.type || "application/octet-stream",
        });
      }

      payload = {
        name,
        company,
        email,
        phone,
        category,
        productCategories,
        deliveryTimeline,
        projectType,
        location,
        requirements,
        formSource,
        attachments,
      };
    } else {
      const json = await req.json();
      payload = {
        name: json.name || json.fullName || "",
        company: json.company || "",
        email: json.email || "",
        phone: json.phone || "",
        category: json.category || json.categoryKey || "",
        productCategories: json.productCategories || [],
        deliveryTimeline: json.deliveryTimeline || json.timeline || "",
        projectType: json.projectType || "",
        location: json.location || "",
        requirements: json.requirements || json.specNotes || "",
        formSource: json.formSource || "Quote Form (JSON)",
      };
    }

    // Required validation
    if (!payload.name?.trim() || !payload.email?.trim()) {
      return NextResponse.json(
        { success: false, message: "Full name and work email are required." },
        { status: 400 }
      );
    }

    const result = await sendQuoteEmail(payload);
    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch (error: any) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to process quote request." },
      { status: 500 }
    );
  }
}
