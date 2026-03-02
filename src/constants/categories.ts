export interface Category {
    id: string;
    label: string;
    slug: string;
    path: string;
}

export const categories: Category[] = [
    { id: "home", label: "Home", slug: "home", path: "/" },
    { id: "business", label: "Business", slug: "business", path: "/category/business" },
    { id: "ent", label: "Entertainment", slug: "entertainment", path: "/category/entertainment" },
    { id: "sports", label: "Sports", slug: "sports", path: "/category/sports" },
    { id: "tech", label: "Technology", slug: "technology", path: "/category/technology" },
    { id: "science", label: "Science", slug: "science", path: "/category/science" },
    { id: "health", label: "Health", slug: "health", path: "/category/health" },
];