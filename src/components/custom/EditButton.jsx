import { Pencil2Icon } from '@radix-ui/react-icons';
import React from 'react';
import { Button } from '../ui/button';

export const EditButton = () => {
  return (
    <Button className="h-7 w-4 my-2 mr-2">
      <Pencil2Icon />
    </Button>
  );
};
