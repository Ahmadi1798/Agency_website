import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TENANT_SLUG = 'karfamsoft-default';

const pages = [
  { slug: 'home', title: 'Home', seoTitle: 'KarFamSoft | Home', seoDescription: 'Digital agency home page.' },
  { slug: 'about', title: 'About', seoTitle: 'KarFamSoft | About', seoDescription: 'About KarFamSoft agency.' },
  { slug: 'services', title: 'Services', seoTitle: 'KarFamSoft | Services', seoDescription: 'Agency services list.' },
  { slug: 'portfolio', title: 'Portfolio', seoTitle: 'KarFamSoft | Portfolio', seoDescription: 'Recent client projects.' },
  { slug: 'blog', title: 'Blog', seoTitle: 'KarFamSoft | Blog', seoDescription: 'Insights and updates.' },
  { slug: 'contact', title: 'Contact', seoTitle: 'KarFamSoft | Contact', seoDescription: 'Get in touch.' },
];

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: TENANT_SLUG },
    update: { name: 'KarFamSoft Agency' },
    create: { slug: TENANT_SLUG, name: 'KarFamSoft Agency' },
  });

  await prisma.siteSettings.upsert({
    where: { tenantId: tenant.id },
    update: {
      brandName: 'KarFamSoft Agency',
      primaryColor: '#4F46E5',
      secondaryColor: '#7C3AED',
      accentColor: '#EC4899',
      fontHeading: 'Poppins',
      fontBody: 'Poppins',
      contactEmail: 'support@karfamsoft.com',
      contactPhone: '+1 (555) 123-4567',
      contactAddress: '703 Bartley-Chester Rd, Virginia, USA',
    },
    create: {
      tenantId: tenant.id,
      brandName: 'KarFamSoft Agency',
      primaryColor: '#4F46E5',
      secondaryColor: '#7C3AED',
      accentColor: '#EC4899',
      fontHeading: 'Poppins',
      fontBody: 'Poppins',
      contactEmail: 'support@karfamsoft.com',
      contactPhone: '+1 (555) 123-4567',
      contactAddress: '703 Bartley-Chester Rd, Virginia, USA',
    },
  });

  const pageMap = new Map();

  for (const page of pages) {
    const row = await prisma.page.upsert({
      where: {
        tenantId_slug: {
          tenantId: tenant.id,
          slug: page.slug,
        },
      },
      update: {
        title: page.title,
        seoTitle: page.seoTitle,
        seoDescription: page.seoDescription,
      },
      create: {
        tenantId: tenant.id,
        slug: page.slug,
        title: page.title,
        seoTitle: page.seoTitle,
        seoDescription: page.seoDescription,
      },
    });

    pageMap.set(page.slug, row.id);
  }

  const sectionRows = [
    { pageSlug: 'home', sectionKey: 'hero', sectionType: 'Hero', orderIndex: 1, content: { heading: 'Elevate Your Brand with Exceptional Digital Experiences', ctaPrimary: { label: 'View Portfolio', href: '/portfolio' } } },
    { pageSlug: 'home', sectionKey: 'services', sectionType: 'Services', orderIndex: 2, content: { heading: 'Our Services' } },
    { pageSlug: 'home', sectionKey: 'portfolio', sectionType: 'Portfolio', orderIndex: 3, content: { heading: 'Featured Projects' } },
    { pageSlug: 'home', sectionKey: 'cta', sectionType: 'CTA', orderIndex: 4, content: { heading: 'Let us build your next digital product.' } },
    { pageSlug: 'about', sectionKey: 'about-hero', sectionType: 'Hero', orderIndex: 1, content: { heading: 'A Creative Partner for the Ambitious' } },
    { pageSlug: 'services', sectionKey: 'services-list', sectionType: 'Services', orderIndex: 1, content: { heading: 'What We Offer' } },
    { pageSlug: 'portfolio', sectionKey: 'projects-gallery', sectionType: 'Portfolio', orderIndex: 1, content: { heading: 'Our Work' } },
    { pageSlug: 'blog', sectionKey: 'blog-posts', sectionType: 'BlogPosts', orderIndex: 1, content: { heading: 'Insights and Ideas' } },
    { pageSlug: 'contact', sectionKey: 'contact-form', sectionType: 'Contact', orderIndex: 1, content: { heading: 'Let\'s Connect' } },
  ];

  for (const row of sectionRows) {
    const pageId = pageMap.get(row.pageSlug);
    if (!pageId) continue;

    const section = await prisma.pageSection.upsert({
      where: {
        pageId_sectionKey: {
          pageId,
          sectionKey: row.sectionKey,
        },
      },
      update: {
        sectionType: row.sectionType,
        orderIndex: row.orderIndex,
        isVisible: true,
      },
      create: {
        pageId,
        sectionKey: row.sectionKey,
        sectionType: row.sectionType,
        orderIndex: row.orderIndex,
        isVisible: true,
      },
    });

    await prisma.sectionContent.upsert({
      where: { pageSectionId: section.id },
      update: { content: row.content },
      create: {
        pageSectionId: section.id,
        content: row.content,
      },
    });
  }

  await prisma.navigationItem.deleteMany({ where: { tenantId: tenant.id } });
  await prisma.footerItem.deleteMany({ where: { tenantId: tenant.id } });

  await prisma.navigationItem.createMany({
    data: [
      { tenantId: tenant.id, label: 'Home', href: '/', orderIndex: 1 },
      { tenantId: tenant.id, label: 'About', href: '/about', orderIndex: 2 },
      { tenantId: tenant.id, label: 'Services', href: '/services', orderIndex: 3 },
      { tenantId: tenant.id, label: 'Portfolio', href: '/portfolio', orderIndex: 4 },
      { tenantId: tenant.id, label: 'Blog', href: '/blog', orderIndex: 5 },
    ],
  });

  await prisma.footerItem.createMany({
    data: [
      { tenantId: tenant.id, columnKey: 'company', label: 'About', href: '/about', orderIndex: 1 },
      { tenantId: tenant.id, columnKey: 'company', label: 'Meet the Team', href: '/team', orderIndex: 2 },
      { tenantId: tenant.id, columnKey: 'helpful-links', label: 'Contact', href: '/contact', orderIndex: 1 },
      { tenantId: tenant.id, columnKey: 'helpful-links', label: 'FAQs', href: '/faqs', orderIndex: 2 },
    ],
  });

  console.log('Seed completed for tenant:', TENANT_SLUG);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
