'use client'
import { Flex } from '@radix-ui/themes';
import Form from './Components/Form';
import { useState } from 'react';
import Display from './Components/Display';
import Link from 'next/link';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value:string) => {
    setInputValue(value); 
  };

  return (
    <>
      <h1><Form inputValue={inputValue} onInputChange={handleInputChange} /></h1>
      <h2><Display value={inputValue} /></h2>
    </>
  );
}