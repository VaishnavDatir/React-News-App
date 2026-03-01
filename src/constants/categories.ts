export interface Category {
    id: string;
    label: string;
    slug: string;
    path: string;
}

export const categories: Category[] = [
    { id: "top", label: "Top News", slug: "top-news", path: "/category/top-news" },
    { id: "politics", label: "Politics", slug: "politics", path: "/category/politics" },
    { id: "sports", label: "Sports", slug: "sports", path: "/category/sports" },
    { id: "economy", label: "Economy", slug: "economy", path: "/category/economy" },
    { id: "culture", label: "Culture", slug: "culture", path: "/category/culture" },
    { id: "tech", label: "Technology", slug: "technology", path: "/category/technology" },
    { id: "science", label: "Science", slug: "science", path: "/category/science" },
    { id: "health", label: "Health", slug: "health", path: "/category/health" },
    { id: "ent", label: "Entertainment", slug: "entertainment", path: "/category/entertainment" },
];