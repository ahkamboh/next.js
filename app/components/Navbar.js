"use client"

import React, { useState } from 'react';
import Image from 'next/image';
// import { TagsInput } from 'react-tag-input-component';

function Navbar() {
  // Define state for selected tags
  const [selected, setSelected] = useState("asasa");

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 h">
        <Image
          src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
          width={70}
          height={70}
          alt="Google Logo"
        />
      </nav>
      

    </>
  );
}

export default Navbar;
