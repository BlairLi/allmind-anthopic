import { initBigtable, storeApplication, getAllApplications } from '../../../lib/bigtable'

export async function POST(request: Request) {
  try {
    await initBigtable()
    
    const data = await request.json()
    const rowKey = await storeApplication(data)
    // console.log('Stored application:', { ...data, id: rowKey });
    
    return new Response(JSON.stringify({ success: true, id: rowKey }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Failed to store application' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export async function GET() {
  try {
    await initBigtable()
    
    const applications = await getAllApplications()
    return new Response(JSON.stringify(applications), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Failed to retrieve applications' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
} 