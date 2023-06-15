export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full fixed">
      <div className="w-60 bg-[#FAFBFC] border-r">
        <h1>Sidebar</h1>
      </div>
      <section>{children}</section>
    </div>
  );
}
