/** @type {import('next').NextConfig} */

// IMPORTANTE: Cambia 'NOMBRE_DE_TU_REPO' por el nombre exacto de tu repositorio en GitHub
// Ejemplo: si tu repo es https://github.com/juan/mi-portfolio → basePath: '/mi-portfolio'
// Solo necesario para GitHub Pages. Para Vercel, comenta las dos lineas de output y basePath.

const isGithubPages = process.env.GITHUB_PAGES === "true"

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Permite acceso HMR desde la IP de red local (evita el warning de WebSocket cross-origin)
  allowedDevOrigins: ['192.168.16.43'],
  // Activar solo para GitHub Pages:
  ...(isGithubPages && {
    output: "export",
    basePath: "/NOMBRE_DE_TU_REPO",
    trailingSlash: true,
  }),
}

export default nextConfig
