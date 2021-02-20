import {IApiDocPath} from "@/main/api/IApiDocPath";

export class ApiDocPath {

    /**
     *
     * @private
     */
    private readonly m_path: string;

    /**
     * TODO: create enum
     * The path type (GET; PUT; POST; DELETE)
     * @private
     */
    private readonly m_type: string;

    /**
     *
     * @private
     */
    private readonly m_data: any;//IApiDocPath;

    /**
     *
     * @param data
     */
    public constructor(path: string, type: string, data: any) {
        this.m_path = path;
        this.m_type = type;
        this.m_data = data;
    }

    /**
     *
     */
    public getPathUrl(): string {
        return this.m_path;
    }

    /**
     * The path type (GET; PUT; POST; DELETE)
     */
    public getPathType(): string
    {
        return this.m_type;
    }

    public getPathSummary(): string
    {
        if(this.m_data && this.m_data.summary) {
            return this.m_data.summary;
        }
        return "";
    }

    public getPathDescription(): string
    {
        if(this.m_data && this.m_data.description) {
            return this.m_data.description;
        }
        return "";
    }
}
