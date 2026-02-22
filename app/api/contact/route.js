import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Send to backend API (FastAPI)
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.cleantex.com';
    const response = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (!response.ok) {
      throw new Error('Backend API error');
    }

    const data = await response.json();

    return NextResponse.json(
      { message: 'Your request has been sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request) {
  return NextResponse.json({}, { status: 200 });
}
