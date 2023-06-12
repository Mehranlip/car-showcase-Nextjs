"use client";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManuFacturerProps } from "@/types";

function SearchManuFacture({
  manuFacturer,
  setManuFacturer,
}: SearchManuFacturerProps) {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manuFacturer: string) => manuFacturer}
          />
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManuFacture;
