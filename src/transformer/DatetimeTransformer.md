在 Nest.js 中使用 TypeORM，你可以使用 TypeORM 的自定义转换器（custom transformers）来实现日期时间格式的自动转换。你可以创建一个自定义的转换器，以确保在从数据库中检索数据时将日期时间字段转换为所需的格式。

以下是一个示例，演示如何创建一个自定义的转换器来将日期时间格式从 ISO 格式转换为指定的格式：

```typescript
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
```

然后，在你的实体类中使用这个转换器：

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DateTimeTransformer } from './DateTimeTransformer';

@Entity()
export class YourEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime', transformer: new DateTimeTransformer() })
  createTime: Date;
}
```

现在，当你从数据库中检索数据时，`createTime` 字段将自动以指定的格式返回日期时间字符串。