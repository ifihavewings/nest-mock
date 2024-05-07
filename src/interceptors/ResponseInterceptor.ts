import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({
        "returnCode": "000000",
            "message": "success",
            "path": "",
            data,
            "extra": {},
            "timestamp": Date.now()
      })),
      catchError(error => {
        // 将错误转换为 Observable
        return throwError(() => ({
          success: false,
          message: error.message || '请求处理失败',
        }));
      }),
    );
  }
}
