'use client';
import { useState } from 'react';
import { Form } from 'radix-ui';

export default function SearchForm({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Form.Root className="bg-slate-500 p-8" onSubmit={handleSubmit}>
      <Form.Field className="mb-4 grid" name="search">
        <Form.Control asChild>
          <input
            className="box-border inline-flex h-[40px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-3 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="text"
            placeholder="Search for a movie"
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button
          type="submit"
          className="mt-2.5 box-border inline-flex h-[40px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        >
          Search
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
