class EnvConfig {
    public readonly apiKey: string;
    public readonly devName: string;
    public readonly githubUrl: string;
    public readonly apiBaseUrl: string;
    public readonly isProduction: boolean;

    constructor() {
        const env = import.meta.env;

        this.apiKey = env.VITE_NEWS_API_KEY || "";
        this.apiBaseUrl = env.VITE_NEWS_API_BASE_URL || "https://newsapi.org/v2";
        this.devName = env.VITE_DEV_NAME || "Vaishnav Datir";
        this.githubUrl = env.VITE_GITHUB_URL || "https://github.com/VaishnavDatir";
        this.isProduction = env.MODE === "production";

        if (!this.isProduction && !this.apiKey) {
            console.error(
                "❌ EnvConfig Error: VITE_NEWS_API_KEY is undefined. " +
                "Ensure your .env file is in the root folder and variables start with VITE_"
            );
        }
    }
}

export const config = Object.freeze(new EnvConfig());