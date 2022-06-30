interface CategoryCountProps {
  type: 'pilot' | 'atc' | 'observer';
  count: number;
}

export function CategoryCount({ type, count }: CategoryCountProps) {
  return (
    <div className="flex flex-col">
      <span className="font-extrabold text-2xl">{ count }</span>
      <span className="text-sm text-gray-400 uppercase">{ type }</span>
    </div>
  )
};
