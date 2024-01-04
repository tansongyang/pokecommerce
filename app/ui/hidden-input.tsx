type Props = {
  name: string
  value: string
}

export default function HiddenInput({ name, value }: Props) {
  return <input name={name} value={value} readOnly hidden />
}
