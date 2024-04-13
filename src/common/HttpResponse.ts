import { ApiProperty } from '@nestjs/swagger';

type HttpResponseBodyType = {
  message: string;
  friendlyMessage: string;
  entity?: any;
  token?: string;
  status?: string;
  payload?: object;
};

export class HttpResponse {
  @ApiProperty({ description: 'Status code' })
  public statusCode: number;
  @ApiProperty({ description: 'Response' })
  public body: HttpResponseBodyType;

  constructor(statusCode: number, body: HttpResponseBodyType) {
    this.statusCode = statusCode;
    this.body = body;
  }
  static create(respCode: number, body: HttpResponseBodyType): HttpResponse {
    return new HttpResponse(respCode, body);
  }
  static convertToExpress(resp, httpResponse: HttpResponse): object {
    return resp.status(httpResponse.statusCode).json(httpResponse.body);
  }
}
