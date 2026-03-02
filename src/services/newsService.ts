import axios from "axios";
import { config } from "../config/env.config";
import type { NewsResponse } from "../types/news";

const apiClient = axios.create({
    baseURL: config.apiBaseUrl,
    headers: {
        "X-Api-Key": config.apiKey,
    },
});

/**
 * Types for API Parameters to avoid using 'any'
 */
interface BaseParams {
    language: string;
    country?: string;
    category?: string;
    pageSize?: number;
}

export const fetchNews = async (categorySlug: string = "general"): Promise<NewsResponse> => {
    const params: BaseParams = {
        language: "en",
    };

    const isDefaultCategory = ["home", "general", ""].includes(categorySlug.toLowerCase());

    if (!isDefaultCategory) {
        params.category = categorySlug;
    }

    const { data } = await apiClient.get<NewsResponse>("/top-headlines", { params });
    return data;
};

export const searchNews = async (query: string): Promise<NewsResponse> => {
    const { data } = await apiClient.get<NewsResponse>("/everything", {
        params: {
            q: query,
            sortBy: "publishedAt",
            language: "en",
        },
    });
    return data;
};