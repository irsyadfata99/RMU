"use client";

interface Article {
  id: number;
  status: "draft" | "published";
  featured: boolean;
}

interface StatCardsProps {
  articles: Article[];
}

const StatCards = ({ articles }: StatCardsProps) => {
  const stats = {
    total: articles.length,
    published: articles.filter((a) => a.status === "published").length,
    draft: articles.filter((a) => a.status === "draft").length,
    featured: articles.filter((a) => a.featured).length,
  };

  const statItems = [
    {
      title: "Total Artikel",
      value: stats.total,
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgColor: "bg-blue-100",
    },
    {
      title: "Dipublikasi",
      value: stats.published,
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      bgColor: "bg-green-100",
    },
    {
      title: "Draft",
      value: stats.draft,
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: "bg-yellow-100",
    },
    {
      title: "Featured",
      value: stats.featured,
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {statItems.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center">
            <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center`}>{item.icon}</div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              <p className="text-gray-600 text-sm">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
