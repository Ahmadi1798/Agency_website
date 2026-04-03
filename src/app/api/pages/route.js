import { NextResponse } from 'next/server';
import { DEFAULT_TENANT_SLUG, getPages } from '../../../lib/content';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tenant = searchParams.get('tenant') || DEFAULT_TENANT_SLUG;

  try {
    const pages = await getPages(tenant);

    return NextResponse.json({ pages });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load pages', details: String(error) },
      { status: 500 }
    );
  }
}
