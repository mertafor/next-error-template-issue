import React from "react";

export const ErrorLayout = ({
  error,
  title,
  description,
}: {
  title?: string;
  description?: string;
  error?: Error;
}) => {
  return (
    <div className="container">
      <div className="flex h-[max(65vh,400px)] flex-col items-center justify-center">
        <h1 className="mb-2 text-4xl font-semibold">{title}</h1>
        {error && (
          <p className="max-w-sm text-center text-sm text-secondary-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
