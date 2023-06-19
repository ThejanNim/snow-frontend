"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconTicket, IconAlignBoxLeftBottom, IconFileAnalytics, IconTornado, IconRotateRectangle } from '@tabler/icons-react';

type SidebarItems = {
  groupName: string;
  children: SidebarItem[];
};

type SidebarItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const slug = "octa";

const sidebarNavigation = [
  {
    groupName: "Planning",
    children: [
      {
        name: "Issues",
        href: `/projects/${slug}/planning/issues`,
        icon: IconTicket
      },
      {
        name: "Roadmap",
        href: `/projects/${slug}/planning/roadmap`,
        icon: IconTornado
      },
      {
        name: "Backlog",
        href: `/projects/${slug}/planning/backlog`,
        icon: IconAlignBoxLeftBottom
      },
      {
        name: "Active Sprints",
        href: `/projects/${slug}/planning/sprints`,
        icon: IconRotateRectangle
      },
      {
        name: "Reports",
        href: `/projects/${slug}/planning/reports`,
        icon: IconFileAnalytics
      },
    ],
  },
  {
    groupName: "Development",
    children: [
      {
        name: "Backlog",
        href: `/projects/${slug}/planning/backlog`,
        icon: IconAlignBoxLeftBottom
      },
      {
        name: "Reports",
        href: `/projects/${slug}/planning/reports`,
        icon: IconFileAnalytics
      },
    ],
  },
  {
    groupName: "Operations",
    children: [
      {
        name: "Backlog",
        href: `/projects/${slug}/planning/backlog`,
        icon: IconAlignBoxLeftBottom
      },
      {
        name: "Reports",
        href: `/projects/${slug}/planning/reports`,
        icon: IconFileAnalytics
      },
    ],
  },
] as SidebarItems[];

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-full fixed">
      <div className="bg-white w-72 px-6">
        {sidebarNavigation.map((item, index) => (
          <div key={index}>
            <h1
              key={index}
              className="text-[#000000de] text-xs/[26px] uppercase mt-6 mb-3 font-bold"
            >
              {item.groupName}
            </h1>

            {item.children.map((child, index) => {
              console.log(pathname, child.href)
              const linkClass = pathname == child.href ? "bg-[#5d87ff] text-white" : "bg-white text-[#000000de]";
              return (
                <Link
                  key={index}
                  href={child.href}
                  className={`h-[45px] mb-[2px] rounded-[7px] ${linkClass} flex items-center px-[10px] py-2`}
                >
                  <child.icon className="mr-[14px]"/>
                  {child.name}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <section>{children}</section>
    </div>
  );
}
