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
  { name: "Filter", href: "/dashboards" },
  { name: "App", href: "/dashboards" },
  { name: "Issues", href: "/dashboards" },
] as NavMenuItem[];

type HeaderProps = React.PropsWithChildren<{}>;
export default function Header({ children }: HeaderProps) {
  return (
    <>
      <div className="flex dark:shadow-[0_5px_20px_rgba(160,160,160,.02)] h-[74px] px-7 bg-white">
        <Link href="/" className="w-[230px] items-center flex">
          <h1>Snow project</h1>
        </Link>
        <div className="flex-auto justify-between flex">
          <div className="flex items-center">
            {navigation.map((item, index) => (
              <Link
                className="text-[#747474] mr-9 font-medium text-[15px] font-sans"
                key={index}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Image
              className="mx-3"
              src="/img/notification.svg"
              width={16}
              height={20}
              alt="notification icon"
            />
            <Image
              className="mx-3"
              src="/img/settings.svg"
              width={24}
              height={24}
              alt="notification icon"
            />
            <Image
              className="mx-3"
              src="/img/email.svg"
              width={20}
              height={16}
              alt="notification icon"
            />
            <div className="mx-4">
              <a className="flex items-center">
                <span>
                  <Image src="/img/profile.png" alt="profile" width={32} height={32}/>
                </span>
                <span className="ml-3 mr-2 font-medium text-black/75 text-sm">Thejan</span>
                <Image src="/img/arrow.svg" width={16} height={16} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <main>{children}</main> */}
    </>
  );
}
