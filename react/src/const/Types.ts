// 入力データのタイプがStr型
export type InputStrType = {
  target: { value: React.SetStateAction<string> };
};
// onChange として定義したメソッドの型
export type onChangeProps = {
  onChange: Function;
  placeholder?: string;
};
