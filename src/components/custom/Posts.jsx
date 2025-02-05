import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

export const Posts = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const { data } = await res.json();

  if (data.length === 0) {
    return (
      <p className="text-center text-gray-500 p-6">No articles available.</p>
    );
  }

  const getRandomImage = () => Math.floor(Math.random() * 9) + 1;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      {data.length > 0 && (
        <Link
          href={`post/${data[0]._id}`}
          className="col-span-1 md:col-span-2 h-[32rem] relative rounded-xl overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/background-${getRandomImage()}.jpg)`,
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6">
            <h2 className="text-2xl font-bold text-white line-clamp-2">
              {data[0].title}
            </h2>
            <p className="text-sm text-gray-300">
              By {data[0].author} •{' '}
              {new Date(data[0].createdAt).toLocaleDateString()}
            </p>
          </div>
        </Link>
      )}

      {/* Scrollable Articles */}
      <ScrollArea className="md:col-span-1 h-[32rem] space-y-1">
        {data.slice(1).map((data) => (
          <React.Fragment key={data._id}>
            <Link
              key={data._id}
              href={`post/${data._id}`}
              className="flex gap-4 mr-2"
            >
              <img
                src={`/background-${getRandomImage()}.jpg`}
                alt={data.title}
                className="w-32 h-28 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg line-clamp-2">
                  {data.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  By {data.author} •{' '}
                  {new Date(data.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </ScrollArea>
    </div>
  );
};
