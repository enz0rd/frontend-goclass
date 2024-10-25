import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-full">
      <h1 className="dark:text-primary text-9xl font-semibold">404</h1>
      <p className="text-gray-400">
        A página que você está procurando não está aqui!
      </p>
      <Button onClick={() => window.history.go(-1)}>
        Voltar
      </Button>
    </div>
  );
};

export default NotFound;
