import { NextResponse } from 'next/server';

const shopifyStoreDomain = 'ndeazm-s1.myshopify.com';

export async function POST(request: Request) {
  try {
    const {
      userId,
      productId,
      productName,
      licenseType,
      licenseLength,
      price,
      currency,
      variantId,
    } = await request.json();

    // Create a direct checkout URL with the variant ID and attributes
    const checkoutUrl = `https://${shopifyStoreDomain}/cart/${variantId}:1?attributes[userId]=${encodeURIComponent(userId)}&attributes[licenseType]=${encodeURIComponent(licenseType)}&attributes[licenseLength]=${encodeURIComponent(licenseLength)}&attributes[productId]=${encodeURIComponent(productId)}`;

    return NextResponse.json({ checkoutUrl });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { 
        message: 'Internal server error', 
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 