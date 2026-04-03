import { NextResponse } from 'next/server';
import { DEFAULT_TENANT_SLUG, getSiteData } from '../../../lib/content';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tenant = searchParams.get('tenant') || DEFAULT_TENANT_SLUG;

  try {
    const data = await getSiteData(tenant);

    if (!data) {
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
    }

    return NextResponse.json({
      tenant: { id: data.id, slug: data.slug, name: data.name },
      siteSettings: data.siteSettings,
      navigationItems: data.navigationItems,
      footerItems: data.footerItems,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load site settings', details: String(error) },
      { status: 500 }
    );
  }
}
