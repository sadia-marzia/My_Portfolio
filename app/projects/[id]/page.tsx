import { notFound } from "next/navigation";
import ProjectDetailsClient from "./ProjectDetailsClient";

export default async function ProjectDetails({
  params,
  searchParams,
}: {
  params: Promise<{ id?: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  // ✅ Await params & searchParams (REQUIRED in Next.js 16)
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const locale = resolvedSearchParams.locale || "en";
  const projectId = resolvedParams.id;

  let translations;

  try {
    translations = await import(`../../../locales/${locale}.json`);
  } catch (error) {
    console.error("Error loading translations:", error);
    return notFound();
  }

  if (!projectId) {
    return notFound();
  }

  const project = translations.projects.projectDetails[projectId];

  if (!project) {
    return notFound();
  }

  // Pass all necessary props to the client component
  return (
    <ProjectDetailsClient
      project={{
        tools: project.tools,
        significance: project.significance,
        description: project.description,
        github: project.github,
        images: project.images,
      }}
      title={translations.projects.projectTitles[projectId]}
    />
  );
}