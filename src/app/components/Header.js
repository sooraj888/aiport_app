import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/about">
        <h1>Dashboard</h1>
      </Link>
      <Image
        src={
          "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"
        }
        height={300}
        width={600}
        style={{}}
      />
    </div>
  );
}
