"use client";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white">
      <div
        className="h-[60px] w-[60px] animate-spin rounded-full border-[6px] border-solid border-primary/90 border-b-white border-t-white"
      ></div>
    </div>
  );
};

export default Loader;