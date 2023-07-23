import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const GET = () => {
  revalidateTag('tag1');

  return NextResponse.json({ revalidated: true });
}
