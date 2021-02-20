import {ApiDocPath} from "@/main/impl/ApiDocPath";
import {IApiDocPath} from "@/main/api/IApiDocPath";

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
    private readonly m_paths: Array<ApiDocPath>;


    /**
     *
     * @param data
     */
    public constructor(title: string, data:Array<ApiDocPath>) {
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
    public getPaths(): Array<ApiDocPath>
    {
        return this.m_paths;
    }
}
