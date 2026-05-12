import Link from "next/link"
import JsonLd from "./JsonLd"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://panharmon.com${item.href}`,
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 flex-wrap font-mono text-xs tracking-wider text-iris list-none m-0 p-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-veil" aria-hidden="true">/</span>
                )}
                {isLast ? (
                  <span className="text-lavender/60" aria-current="page">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
