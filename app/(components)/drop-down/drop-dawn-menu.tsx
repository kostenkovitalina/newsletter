import React, {useState} from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';

type MenuItem = {
    label: string;
    href: string;
};

type DropDownMenuProps = {
    label: string;
    labelClassName?: string;
    items: MenuItem[];
};

export const DropDownMenu = ({label, items, labelClassName}: DropDownMenuProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='relative inline-block'>
            <div className='flex'>
                <div className='relative text-left'>
                <span className={labelClassName}>
                    {label}
                </span>
                </div>
                <button onClick={() => setOpen((prev) => !prev)}>
                    {open ?
                        <ArrowDropUpIcon fontSize='large' className='text-[#04594D]'/> :
                        <ArrowDropDownIcon fontSize='large' className='text-[#04594D]'/>
                    }
                </button>
            </div>

            {open && (
                <div className='absolute let-0 bg-white ml-6 shadow-lg flex flex-col justify-end z-50'>
                    <ul className='flex flex-col'>
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className='block px-20 py-2 hover:bg-[#04594D] hover:text-white transition-colors'
                            >
                                {item.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
    );
};
