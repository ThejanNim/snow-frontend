export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full fixed">
      <div className="bg-white w-72">
        <h1 className="text-black/40">Sidebar</h1>
      </div>
      <section>{children}</section>
    </div>
  );
}
