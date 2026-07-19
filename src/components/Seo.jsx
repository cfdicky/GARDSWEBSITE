import { Helmet } from 'react-helmet-async'

/**
 * Drop this at the top of any page to set per-page meta tags.
 * Falls back to sensible defaults if a prop is omitted.
 */
export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} — Gards Creative` : 'Gards Creative — Creative Ideas. Digital Solutions.'
  const desc =
    description ||
    'Gards Creative adalah studio kreatif untuk Branding, UI/UX Design, Website Development, Content Creation, dan Digital Marketing.'
  const url = `https://www.gardscreative.com${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}
