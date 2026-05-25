import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Simple hash function to get a consistent color for a slug
  const hash = slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const palettes = [
    { primary: "#10b981", secondary: "#059669", bg: "#020617", card: "#1e293b" }, // Emerald
    { primary: "#3b82f6", secondary: "#2563eb", bg: "#020617", card: "#1e293b" }, // Blue
    { primary: "#8b5cf6", secondary: "#7c3aed", bg: "#020617", card: "#1e293b" }, // Violet
    { primary: "#f43f5e", secondary: "#e11d48", bg: "#020617", card: "#1e293b" }, // Rose
    { primary: "#f59e0b", secondary: "#d97706", bg: "#020617", card: "#1e293b" }, // Amber
    { primary: "#06b6d4", secondary: "#0891b2", bg: "#020617", card: "#1e293b" }, // Cyan
  ];

  const theme = palettes[hash % palettes.length];

  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="${theme.bg}"/>
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${theme.primary}" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="${theme.primary}" stop-opacity="0"/>
        </radialGradient>
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="${theme.primary}" fill-opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="1200" height="630" fill="url(#grid)"/>
      <circle cx="600" cy="315" r="400" fill="url(#g)"/>
      
      <g transform="translate(600, 315)">
        <!-- Isometric Tech Box -->
        <path d="M0,-100 L100,-50 L0,0 L-100,-50 Z" fill="${theme.primary}" fill-opacity="0.8"/>
        <path d="M0,0 L100,-50 L100,50 L0,100 Z" fill="${theme.secondary}"/>
        <path d="M0,0 L-100,-50 L-100,50 L0,100 Z" fill="${theme.secondary}" fill-opacity="0.8"/>
        <path d="M0,-100 L100,-50 L0,0 L-100,-50 Z" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.2"/>
      </g>

      <text x="600" y="540" font-family="sans-serif" font-size="48" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="-1">SEPHAN</text>
      <text x="600" y="585" font-family="sans-serif" font-size="20" fill="${theme.primary}" text-anchor="middle" font-weight="600" letter-spacing="8">SYSTEMS · COMMERCE · AUTOMATION</text>
    </svg>
  `.trim();

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
