"use client";

import { Size, Color } from "@/types";
import qs from "query-string";
import { useSearchParams, useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: current[valueKey] === id ? undefined : id, // Toggle filter
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.pathname, // Use pathname instead of full URL
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            key={filter.id}
            className={cn(
              "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
              selectedValue === filter.id && "bg-black text-white"
            )}
            onClick={() => onClick(filter.id)}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
