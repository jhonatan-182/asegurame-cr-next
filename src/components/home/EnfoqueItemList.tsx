type EnfoqueItemListProps = {
  titulo: string;
  parrafo: string;
};

export default function EnfoqueItemList({
  titulo,
  parrafo,
}: EnfoqueItemListProps) {
  return (
    <>
      <li className="text-[13px] text-white font-semibold">{titulo}</li>
      <span className="text-[13px] text-white">{parrafo}</span>
    </>
  );
}
