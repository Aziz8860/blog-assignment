'use server';

import { revalidatePath } from 'next/cache';

export async function createPostAction(_, formData) {
  const author = formData.get('author');
  const title = formData.get('title');
  const content = formData.get('content');

  if (!title || !content || !author) {
    return { message: '⛔ All fields are required', error: true };
  }

  await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    body: JSON.stringify([{ author, title, content }]),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  revalidatePath('/');

  return { message: '✅ Post created', error: false };
}
