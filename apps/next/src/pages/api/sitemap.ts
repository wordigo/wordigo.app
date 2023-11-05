export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://wordigo.app/</loc>
      <lastmod>2023-08-04</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://wordigo.app/library</loc>
      <lastmod>2023-08-04</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://wordigo.app/about</loc>
      <lastmod>2023-08-04</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  </urlset>`;

  res.end(xml);
}
