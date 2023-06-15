import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type NavMenuItem = {
  name: string;
  href: string;
};
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Dashboard", href: "/dashboards" },
] as NavMenuItem[];

type HeaderProps = React.PropsWithChildren<{}>;
export default function Header({ children }: HeaderProps) {
  return (
    <div className="bg-white">
      <div className="flex border h-16 items-center justify-between px-7">
        <Link href="/">
          <h1>Snow project</h1>
        </Link>
        <div>
          {navigation.map((item, index) => (
            <Link className="mx-2" key={index} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex">
          <Image className="mr-3" src="/img/Notification.svg" width={28} height={28} alt="notification icon"/>
          <Image className="mr-3" src="/img/Notification.svg" width={28} height={28} alt="notification icon"/>
          <Image className="mr-3" src="/img/Notification.svg" width={28} height={28} alt="notification icon"/>
          <Image src="/img/Notification.svg" width={28} height={28} alt="notification icon"/>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
