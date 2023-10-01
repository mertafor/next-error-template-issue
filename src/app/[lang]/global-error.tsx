"use client";

import { ErrorLayout } from "@/layouts/ErrorLayout/ErrorLayout";

export default function GlobalError({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ErrorLayout
          error={error}
          title="Something went wrong"
          description="Please refresh the page"
        />
      </body>
    </html>
  );
}
