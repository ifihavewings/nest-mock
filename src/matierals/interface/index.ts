export interface FileListParam {
    page: number,
    size: number,
    fileType?:string,
    batchNumber?: string,
    annexName?: string,
    stateDate?: string,
    endDate?: string,
    fileStatus?:string

}

export interface TraderListParam{
    page: number,
    size: number,
    tradeName?: string
    businessCode?: string
}