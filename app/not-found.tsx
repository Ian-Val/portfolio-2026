import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href="/" className="text font-bold underline text-blue-600 mb-2">
        www.ian-val.com
      </Link>
      <h1 className="text-5xl font-bold my-2">404 - Page Not Found</h1>
      <p className="text-xl my-4">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 button-primary">
        Return Home
      </Link>
    </div>
  );
}
