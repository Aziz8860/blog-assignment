'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useActionState, useState } from 'react';
import { createPostAction } from './_actions/post';

export default function Post() {
  const [state, formAction, pending] = useActionState(createPostAction, null); // most of the time initial bakal null

  return (
    <div className="min-h-screen">
      <div className="p-4 max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Write a post</h3>
        <form action={formAction} className="mb-4 space-y-3">
          <Input placeholder="Author" name="author" />
          <Input placeholder="Title" name="title" />
          <Textarea className="h-32" placeholder="Content" name="content" />
          <Button disabled={pending} type="submit">
            Create Post
          </Button>
          {state?.message && (
            <div className={state.error ? 'text-red-600' : 'text-black'}>
              {state.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
