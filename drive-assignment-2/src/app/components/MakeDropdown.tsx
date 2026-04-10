"use client";

type DropdownProps = {
  makes: any[];
  selected: string;
  onChange: (val: string) => void;
};

export default function MakeDropdown({ makes, selected, onChange }: DropdownProps) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 w-full"
    >
      <option value="">Select Make</option>
      {makes?.length >0 && makes?.map((m) => (
        <option key={m?.Make_ID} value={m?.Make_Name}>
          {m?.Make_Name}
        </option>
      ))}
    </select>
  );
}