import { HttpHeaders, HttpParams } from "@angular/common/http";

export type HttpServiceHeaders = HttpHeaders | { [header: string]: string | string[] };

export type HttpServiceObserve = 'body' | 'events' | 'response';

export type HttpServiceParams = HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
};

export type HttpServiceResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';

export interface HttpServiceOptions {
    headers?: HttpServiceHeaders, 
    params?: HttpServiceParams,
    observe?: HttpServiceObserve, 
    responseType?: HttpServiceResponseType
}
