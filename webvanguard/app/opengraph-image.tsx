import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Web Vanguard — Dubai Web Design Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#F0EDE8', fontSize: '22px', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            WEB<span style={{ color: '#D4956B' }}>V</span>
          </span>
          <span style={{ color: '#5A5450', fontSize: '14px', marginLeft: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Dubai
          </span>
        </div>

        {/* Center: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ color: '#F0EDE8', fontSize: '72px', fontWeight: 900, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            YOUR WEBSITE
          </div>
          <div style={{ color: '#F0EDE8', fontSize: '72px', fontWeight: 900, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            SHOULD BE YOUR
          </div>
          <div style={{ color: '#D4956B', fontSize: '72px', fontWeight: 900, lineHeight: 1, fontStyle: 'italic', letterSpacing: '-0.02em' }}>
            best salesperson.
          </div>
        </div>

        {/* Bottom: tagline + domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ color: '#A09890', fontSize: '18px', letterSpacing: '0.05em' }}>
            Web design · SEO · Branding · Dubai
          </span>
          <span style={{ color: '#D4956B', fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>
            webvanguard.co
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
