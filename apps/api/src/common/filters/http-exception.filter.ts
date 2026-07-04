import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();

    const isHttp = exception instanceof HttpException;
    const status = isHttp ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const rawResponse = isHttp ? exception.getResponse() : null;

    let code = status === 400 ? 'bad_request' : 'internal_error';
    let message = 'Something went wrong';

    if (typeof rawResponse === 'string') {
      message = rawResponse;
    } else if (rawResponse && typeof rawResponse === 'object') {
      const anyResp = rawResponse as any;
      code = anyResp.code ?? anyResp.error?.code ?? code;
      message = anyResp.message ?? anyResp.error?.message ?? message;
    } else if (exception instanceof Error) {
      // Do NOT expose stack traces; just a safe message.
      message = status === 500 ? 'Internal server error' : exception.message;
    }

    res.status(status).json({
      success: false,
      error: { code, message },
    });
  }
}