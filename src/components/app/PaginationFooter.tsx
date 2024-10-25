import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const PaginationFooter = ({ page, totalPages, onPrevious, canGetPrevious, onNext, canGetNextPage } : {
    page: number;
    totalPages: number;
    onPrevious: () => void;
    canGetPrevious: boolean;
    onNext: () => void;
    canGetNextPage: boolean;
}) => {
  
    return (
    <div className="flex flex-row justify-between py-4">
      <p className="text-sm text-center">
        Página {page} de {totalPages}
      </p>
      <div className="flex items-center justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrevious}
          disabled={canGetPrevious}
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={canGetNextPage}
        >
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PaginationFooter;
