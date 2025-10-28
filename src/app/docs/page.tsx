"use client";
import { useState } from "react";
import Link from "next/link";

function Documentation() {
  const [slugPath, setSlugPath] = useState<string[]>([]);
  const [currentSegment, setCurrentSegment] = useState("");

  const addSegment = () => {
    if (currentSegment.trim()) {
      setSlugPath([...slugPath, currentSegment.trim()]);
      setCurrentSegment("");
    }
  };

  const removeLastSegment = () => {
    setSlugPath(slugPath.slice(0, -1));
  };

  const clearAll = () => {
    setSlugPath([]);
  };

  const fullPath = `/docs${
    slugPath.length > 0 ? "/" + slugPath.join("/") : ""
  }`;

  return (
    <div className="flex justify-center items-center flex-col p-10 gap-5">
      {/* header */}
      <div className="w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">Документация к проекту</h1>
        <p className="text-xl">
          Здесь реализована маршрутизация с помощью slug: Вы можете составить
          свой путь URL с любой вложенностью!
        </p>
      </div>

      {/* ----- конструктор URL ------ */}
      <div className="flex justify-center items-center flex-col p-10 gap-5 w-300">
        {/* Конструктор URL */}
        <div className=" bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Конструктор URL
          </h2>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={currentSegment}
              onChange={(e) => setCurrentSegment(e.target.value)}
              placeholder="Введите сегмент URL"
              className="flex-1 px-4 py-2 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400"
            />
            <button
              onClick={addSegment}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all"
            >
              Добавить
            </button>
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={removeLastSegment}
              disabled={slugPath.length === 0}
              className="px-4 py-2 bg-yellow-700 hover:bg-yellow-800 disabled:bg-yellow-900 text-white rounded transition-all"
            >
              Удалить последний
            </button>
            <button
              onClick={clearAll}
              disabled={slugPath.length === 0}
              className="px-4 py-2 bg-red-700 hover:bg-red-800 disabled:bg-red-900 text-white rounded transition-all"
            >
              Очистить все
            </button>
          </div>

          {/* Отображение текущего пути */}
          <div className="mb-4 p-3 bg-gray-900 rounded">
            <p className="text-gray-400 text-sm">Текущий URL:</p>
            <p className="text-green-400 font-mono text-lg break-all">
              {fullPath}
            </p>
          </div>

          {/* Визуализация пути */}
          {/* {slugPath.length > 0 && (
            <div className="mb-4">
              <p className="text-gray-400 text-sm mb-2">Структура пути:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 text-white rounded">
                  docs
                </span>
                {slugPath.map((segment, index) => (
                  <span key={index} className="flex items-center">
                    <span className="text-gray-500 mx-1">/</span>
                    <span className="px-2 py-1 bg-blue-600 text-white rounded">
                      {segment}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )} */}

          {/* Кнопка перехода */}
          <div className="text-center">
            <Link
              href={fullPath}
              className={`inline-block px-6 py-3 text-xl rounded transition-all ${
                slugPath.length > 0
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              Перейти по созданному URL
            </Link>
          </div>
        </div>

        {/* примеры */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Быстрые примеры:
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setSlugPath(["js"])}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-all"
            >
              /js
            </button>
            <button
              onClick={() => setSlugPath(["js", "react"])}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-all"
            >
              /js/react
            </button>
            <button
              onClick={() => setSlugPath(["js", "react", "next"])}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-all"
            >
              /js/react/next
            </button>
          </div>
        </div>
      </div>

      {/* ----- nav ----- */}
      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="/"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-red-900 hover:bg-red-700 transition-all"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

export default Documentation;
