import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import crypto from "crypto";

const reportSchema = z.object({
  category: z.string(),
  description: z.string().min(10),
  entityInvolved: z.string().min(2),
  contactEmail: z.string().email().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = reportSchema.parse(body);

    // Generate unique cryptographic tracking code
    const randomBytes = crypto.randomBytes(8).toString("hex").toUpperCase();
    const trackingCode = `PLTR-HR-${randomBytes.slice(0, 4)}-${randomBytes.slice(4, 8)}`;

    const report = await prisma.ethicalReport.create({
      data: {
        trackingCode,
        category: validatedData.category,
        description: validatedData.description,
        entityInvolved: validatedData.entityInvolved,
        contactEmail: validatedData.contactEmail,
      },
    });

    // Create initial audit log
    await prisma.auditLog.create({
      data: {
        reportId: report.id,
        action: "REPORT_SUBMITTED",
        performedBy: "SYSTEM",
        details: JSON.stringify({ ip: "redacted" }),
      },
    });

    return NextResponse.json({ trackingCode }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 });
    }
    console.error("Error creating report:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
