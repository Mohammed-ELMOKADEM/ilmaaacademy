import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "يرجى تعبئة جميع الحقول المطلوبة." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "يرجى إدخال بريد إلكتروني صالح." },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      return NextResponse.json(
        {
          error:
            "لم يتم وضع مفتاح Web3Forms في ملف .env.local. يرجى الحصول على مفتاح مجاني وإضافته كـ WEB3FORMS_ACCESS_KEY.",
        },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[رسالة تواصل]: ${subject}`,
        message,
        from_name: `موقع أكاديمية إلماع (${name})`,
        replyto: email,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "تم إرسال رسالتك بنجاح!" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          error:
            result.message ||
            "حدث خطأ أثناء إرسال الرسالة، يرجى التحقق من المفتاح.",
        },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error("Web3Forms error:", err);
    return NextResponse.json(
      {
        error: "حدث خطأ غير متوقع أثناء معالجة الطلب.",
        details: process.env.NODE_ENV === "development" ? err.message : undefined,
      },
      { status: 500 }
    );
  }
}
