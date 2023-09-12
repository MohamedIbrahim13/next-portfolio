export async function getData() {
  const res = await fetch("https://api.npoint.io/2e8b874cb210e4d800bc", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function getArticles() {
  const res = await fetch(
    "https://dev.to/api/articles?tag=react&top=130&state=rising&per_page=6",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function getJobs() {
  const res = await fetch(
    "https://remotive.io/api/remote-jobs?category=software-dev&limit=7",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
