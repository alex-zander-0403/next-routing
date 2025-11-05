"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Вход", href: "/login" },
  { name: "Регистрация", href: "/register" },
  { name: "Восстановление", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center flex-col p-3 gap-3">
      {navLinks.map((link, i) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href);

        return (
          <Link
            key={i}
            href={link.href}
            className={`text-xl hover:text-blue-500 ${
              isActive ? "text-blue-700" : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      <div>{children}</div>
    </div>
  );
}
