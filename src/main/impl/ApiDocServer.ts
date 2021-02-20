import {IApiDocServers} from "@/main/api/IApiDoc";

export class ApiDocServer {

    /**
     *
     * @private
     */
    private readonly m_url: string;

    /**
     *
     * @private
     */
    private readonly m_description: string;

    /**
     *
     * @param data
     */
    public constructor(data: IApiDocServers) {
        this.m_url = data.url;
        this.m_description = data.description;
    }

    /**
     *
     */
    public getServerUrl(): string
    {
        return this.m_url;
    }

    /**
     *
     */
    public getServerDescription(): string
    {
        return this.m_description;
    }
}
