import { HttpParams } from '@angular/common/http';
import { SortOrder } from '../../shared/models/sort-order.type';

export function initHttpParams(
    page: number,
    pageSize: number,
    search?: string,
    sortField?: string,
    sortOrder?: SortOrder
): HttpParams {
    let params: HttpParams = new HttpParams().appendAll({
        results: pageSize,
        page: page,
    });
    
    if (search) params = params.append('search', search);

    if (sortField) params = params.append('sortField', sortField);

    if (sortOrder) params = params.append('sortOrder', sortOrder);

    return params
}
