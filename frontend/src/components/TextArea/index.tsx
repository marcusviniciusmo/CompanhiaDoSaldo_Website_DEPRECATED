type Props = {
  name: string;
  id: string;
  cols: number;
  rows: number;
}

function TextArea({ name, id, cols, rows }: Props) {
  return (
    <>
      TEXTAREA Component

      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
      />
    </>
  );
};

export default TextArea;