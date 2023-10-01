import React from "react";

export const NotFoundLayout = async () => {
  return (
    <div className="container">
      <div className="flex h-[max(65vh,400px)] flex-col items-center justify-center text-center">
        <h2 className="mb-2 font-semibold">title</h2>
        <p className="max-w-sm text-center text-sm text-secondary-foreground md:text-lg">
          desc
        </p>
      </div>
    </div>
  );
};
