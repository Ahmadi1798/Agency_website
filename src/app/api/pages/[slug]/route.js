import { NextResponse } from 'next/server';
import { DEFAULT_TENANT_SLUG, getPageWithContent } from '../../../../lib/content';

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const tenant = searchParams.get('tenant') || DEFAULT_TENANT_SLUG;

  try {
    const page = await getPageWithContent(params.slug, tenant);

    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }

    return NextResponse.json({ page });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load page content', details: String(error) },
      { status: 500 }
    );
  }
}
