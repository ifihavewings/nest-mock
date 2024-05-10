interface Pageable {
    page: number,
    size: number,
}
export interface FileListParam extends Pageable {
    fileType?: string,
    batchNumber?: string,
    annexName?: string,
    stateDate?: string,
    endDate?: string,
    fileStatus?: string
}

export interface TraderListParam extends Pageable {
    tradeName?: string
    businessCode?: string
}