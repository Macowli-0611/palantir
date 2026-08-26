import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ trackingCode: string }> }
) {
  try {
    const trackingCode = (await params).trackingCode;

    if (!trackingCode) {
      return NextResponse.json({ error: "Missing tracking code" }, { status: 400 });
    }

    const report = await prisma.ethicalReport.findUnique({
      where: { trackingCode },
      select: {
        trackingCode: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json({ report }, { status: 200 });
  } catch (error) {
    console.error("Error fetching report:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
