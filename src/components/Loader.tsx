"use client";

interface LoaderProps {
  fullScreen?: boolean;
}

const Loader = ({ fullScreen = true }: LoaderProps) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white">
        <div className="h-[60px] w-[60px] animate-spin rounded-full border-[6px] border-solid border-primary/90 border-b-white border-t-white"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-[400px]">
      <div className="h-[60px] w-[60px] animate-spin rounded-full border-[6px] border-solid border-primary/90 border-b-white border-t-white"></div>
    </div>
  );
};

export default Loader;