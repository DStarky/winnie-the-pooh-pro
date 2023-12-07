import type { CounterSchema } from 'src/entities/Counter';
import type { UserSchema } from 'src/entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
