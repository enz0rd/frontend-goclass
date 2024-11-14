import { Image, Paperclip } from "lucide-react";

interface AttachmentType {
  type: "image" | "file";
  name: string;
  url?: string;
  bytes?: string;
}

const Attachment = ({ attachment }: { attachment: AttachmentType }) => {
  return (
    <>
      {attachment.type === "image" ? (
        <a
          href={attachment.url}
          target="_blank"
          className="flex cursor-pointer py-3 flex-col gap-2 align-middle bg-zinc-200 dark:bg-zinc-700 px-2 rounded-[.5rem]"
          title={attachment.name}
        >
          <Image className="w-5 h-5 m-auto text-zinc-500" />
          <span className="text-md m-auto font-normal text-center text-nowrap w-[10rem] text-ellipsis overflow-hidden dark:text-zinc-400 text-zinc-600">
            {attachment.name}
          </span>
        </a>
      ) : (
        <a
          href={attachment.url}
          target="_blank"
          className="flex cursor-pointer py-4 flex-col gap-2 align-middle  bg-zinc-200 dark:bg-zinc-700 px-2 rounded-[.5rem]"
          title={attachment.name}
        >
          <Paperclip className="w-5 h-5 m-auto text-zinc-500" />
          <span className="text-md m-auto text-center text-nowrap w-[10rem] font-normal text-ellipsis overflow-hidden dark:text-zinc-400 text-zinc-600">
            {attachment.name}
          </span>
        </a>
      )}
    </>
  );
};

export default Attachment;
