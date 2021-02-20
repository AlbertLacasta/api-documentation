import {ApiDocEndpoint} from "@/main/impl/ApiDocEndpoint";
import {IApiDocEndpoint} from "@/main/api/IApiDocEndpoint";

export class ApiDocGroup {

    /**
     *
     * @private
     */
    private readonly m_title: string;

    /**
     *
     * @private
     */
    private readonly m_paths: Array<ApiDocEndpoint>;


    /**
     *
     * @param data
     */
    public constructor(title: string, data:Array<ApiDocEndpoint>) {
        this.m_title = title;
        this.m_paths = data;
    }

    /**
     *
     */
    public getTitle() {
        return this.m_title;
    }

    /**
     *
     */
    public getPaths(): Array<ApiDocEndpoint>
    {
        return this.m_paths;
    }
}
