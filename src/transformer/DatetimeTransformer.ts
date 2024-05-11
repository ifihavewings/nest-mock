
import { ValueTransformer } from 'typeorm';

export class DateTimeTransformer implements ValueTransformer {
  to(value: Date): string {
    // 将日期时间对象转换为你想要的格式，这里是 "YYYY-MM-DD HH:mm:ss" 格式
    return value ? value.toISOString().slice(0, 19).replace('T', ' ') : null;
  }

  from(value: string): Date {
    // 如果你需要从数据库中检索日期时间字符串并将其转换为 Date 对象，则在这里进行相应的转换
    return value ? new Date(value) : null;
  }
}