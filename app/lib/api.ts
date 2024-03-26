import { unstable_noStore as noStore } from 'next/cache';

const MAIN_URL = 'https://jsonplaceholder.typicode.com';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchPosts() {
  noStore();

  try {
    const res = await fetch(`${MAIN_URL}/posts`);
    const data: Post[] = await res.json();

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch posts data.');
  }
}
