import { DeleteButton } from '@/components/custom/DeleteButton';
import { EditButton } from '@/components/custom/EditButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { revalidatePath } from 'next/cache';

export default async function Post({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
  const data = await res.json();

  async function updatePostAction(formData) {
    'use server';

    const author = formData.get('author');
    const title = formData.get('title');
    const content = formData.get('content');

    await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: 'PUT',
      body: JSON.stringify({ _id: id, title, author, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    revalidatePath(`/post/${id}`);
  }

  if (data.error) {
    return (
      <main className="p-6 min-h-screen">
        <div className="space-y-2 p-6">
          <h3 className="text-2xl font-bold tracking-tight">
            Post has been deleted
          </h3>
        </div>
      </main>
    );
  }

  return (
    <main className="p-6 min-h-screen">
      <form className="space-y-3 p-6" action={updatePostAction}>
        <div className="flex flex-row justify-between">
          <Input
            name="title"
            className="text-2xl font-bold tracking-tight max-w-3xl"
            defaultValue={data.title}
          />
          <div>
            <EditButton type="submit" />
            <DeleteButton id={id} />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600 text-white font-bold">
            {data.author.at(0)}
          </div>
          <Input
            name="author"
            className="text-sm font-semibold max-w-md"
            defaultValue={data.author}
          />
        </div>
        <Textarea
          name="content"
          className="text-sm text-neutral-500 whitespace-pre-line h-[60vh]"
          defaultValue={data.content}
        />
      </form>
    </main>
  );
}
