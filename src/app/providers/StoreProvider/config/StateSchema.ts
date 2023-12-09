import type { CounterSchema } from 'src/entities/Counter';
import type { UserSchema } from 'src/entities/User';
import type { LoginSchema } from 'src/features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
}
