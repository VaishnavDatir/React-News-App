import { useQuery } from "@tanstack/react-query";
import { fetchNews, searchNews } from "../services/newsService";

export const useNewsCategory = (category: string) => {
    return useQuery({
        queryKey: ["news", category],
        queryFn: () => fetchNews(category),
        staleTime: 1000 * 60 * 60,
    });
};

export const useNewsSearch = (query: string) => {
    return useQuery({
        queryKey: ["search", query],
        queryFn: () => searchNews(query),
        enabled: !!query,
    });
};