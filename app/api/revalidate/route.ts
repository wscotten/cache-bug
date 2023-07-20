import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const GET = () => {
  revalidateTag('poe-ninjas');

  return NextResponse.json({revalidated: true, date: Date.now()});
}
