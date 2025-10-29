//app/api/todo/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    // Return the JSON response
    return NextResponse.json(data, { status: 200 });

  } catch (error: unknown) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data', message: (error as Error).message },
      { status: 500 }
    );
  }
}
