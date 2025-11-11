import { Auth } from "@/components/auth";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <h1>Welcome to the Dashboard</h1>
    <Link href="/dashboard/admin" className="text-blue-500 hover:underline">Go to Admin Dashboard</Link>
    <Link href="/dashboard/teacher" className="text-blue-500 hover:underline ml-4">Go to Teacher Dashboard</Link>
    <Link href="/dashboard/student" className="text-blue-500 hover:underline ml-4">Go to Student Dashboard</Link>
    <Link href="/dashboard/parent" className="text-blue-500 hover:underline ml-4">Go to Parent Dashboard</Link>
    </>
  );
}
