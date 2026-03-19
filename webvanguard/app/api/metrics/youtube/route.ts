import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || process.env.YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) {
    // Return mock data if not configured
    return NextResponse.json({
      views: '12,403',
      avgViewDuration: '4:32',
      subscribers: '1,240',
      lastUpdated: new Date().toISOString(),
      source: 'mock'
    })
  }

  try {
    // Fetch channel statistics
    const channelRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`)
    const channelData = await channelRes.json()
    const stats = channelData.items?.[0]?.statistics || {}

    // For demo, we return raw stats. In production you would aggregate analytics over date range.
    return NextResponse.json({
      views: stats.viewCount || '0',
      subscribers: stats.subscriberCount || '0',
      videoCount: stats.videoCount || '0',
      lastUpdated: new Date().toISOString(),
      source: 'youtube_api'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch YouTube data' }, { status: 500 })
  }
}
