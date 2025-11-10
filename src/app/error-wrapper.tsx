"use client";
import React, { useState } from "react";

// симулятор ошибки
function ErrorSimulator({ message }: { message: string }) {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(message);
  }

  return (
    <button
      onClick={() => setError(true)}
      className="px-5 py-3 rounded border-black"
    >
      сгенерировать ошибку
    </button>
  );
}

export default function ErrorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 border-2 border-dashed border-amber-600">
      <ErrorSimulator message="тестовая ошибка в корневом layout" />
      {children}
    </div>
  );
}
