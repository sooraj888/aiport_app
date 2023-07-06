import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container-fluid bg-dark bg-dark">
      <Link href="/">
        <h1>Dashboard</h1>
      </Link>
    </div>
  );
}
