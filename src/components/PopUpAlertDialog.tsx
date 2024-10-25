import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const PopUpAlertDialog = ({
  onClose,
  title,
  message,
  buttonSpan,
  children
}: {
  onClose: (isConfirmed: boolean) => void;
  title: string;
  message: string;
  buttonSpan: string | React.ReactElement;
  children?: React.ReactNode;
}) => {

  const handleClose = (isConfirmed: boolean) => {
    console.log("isConfirmed", isConfirmed);
    onClose(isConfirmed);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span>{buttonSpan}</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {message}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {children}
        </div>
        <DialogFooter>
          <Button onClick={() => handleClose(true)} variant={'destructive'}>Confirmar</Button>
          <Button onClick={() => handleClose(false)} variant={'ghost'}>Cancelar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};

export default PopUpAlertDialog;