import { prisma } from './prisma';

export const DEFAULT_TENANT_SLUG = 'karfamsoft-default';

export async function getTenantBySlug(slug = DEFAULT_TENANT_SLUG) {
  return prisma.tenant.findUnique({ where: { slug } });
}

export async function getSiteData(slug = DEFAULT_TENANT_SLUG) {
  const tenant = await prisma.tenant.findUnique({
    where: { slug },
    include: {
      siteSettings: true,
      navigationItems: {
        where: { isVisible: true },
        orderBy: { orderIndex: 'asc' },
      },
      footerItems: {
        where: { isVisible: true },
        orderBy: [{ columnKey: 'asc' }, { orderIndex: 'asc' }],
      },
    },
  });

  return tenant;
}

export async function getPages(slug = DEFAULT_TENANT_SLUG) {
  return prisma.page.findMany({
    where: { tenant: { slug } },
    orderBy: { slug: 'asc' },
  });
}

export async function getPageWithContent(pageSlug, tenantSlug = DEFAULT_TENANT_SLUG) {
  return prisma.page.findFirst({
    where: {
      slug: pageSlug,
      tenant: {
        slug: tenantSlug,
      },
    },
    include: {
      sections: {
        where: { isVisible: true },
        orderBy: { orderIndex: 'asc' },
        include: {
          content: true,
        },
      },
    },
  });
}
