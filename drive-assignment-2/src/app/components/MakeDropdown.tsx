"use client";

import { Make } from "../hooks/useMakes";

type DropdownProps = {
  makes: Make[];
  selected: string;
  onChange: (val: string) => void;
  loading: boolean;
};

export default function MakeDropdown({ makes, selected, onChange, loading }: DropdownProps) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 w-full rounded-lg"
    >
      <option value="">
        {loading ? "Loading makes..." : "Select Make"}
      </option>
      {!loading && makes?.map((m) => (
        <option key={m?.Make_ID} value={m?.Make_Name}>
          {m?.Make_Name}
        </option>
      ))}
    </select>
  );
}