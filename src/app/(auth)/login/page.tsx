import Link from "next/link";

function Login() {
  return (
    <div className="flex justify-center items-center flex-col gap-30 p-20">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className=" text-4xl font-bold ">Login Page</h1>
      </div>

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

export default Login;
