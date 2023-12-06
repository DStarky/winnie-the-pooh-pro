interface IDeepPartialArray<T> extends Array<DeepPartial<T>> {}

type DeepPartialObject<T> = {
  [Key in keyof T]?: DeepPartial<T[Key]>;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? IDeepPartialArray<U>
    : T extends object
      ? DeepPartialObject<T>
      : T | undefined;
