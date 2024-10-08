import { useState } from 'react';

const ErrorDialog = ({ error, title, onClose }: { error: string, title: string, onClose: () => void }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[55]">
            <div className="bg-white dark:bg-zinc-900 group dark:text-zinc-50 shadow-lg rounded-lg p-6 relative">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => {
                        setIsOpen(false);
                        onClose();
                    }}
                >
                    &times;
                </button>
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="mt-2 text-sm text-gray-500">{error}</p>
            </div>
        </div>
    );
};

export default ErrorDialog;
