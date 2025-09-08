import React, {useState} from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
    label: string,
    labelClassName?: string,
    items: string[]
}

export const DropDownMenu = ({label, items, labelClassName}: Props) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className='flex'>
                <div
                    className='relative text-left'
                >
                <span className={labelClassName}>
                    {label}
                </span>
                </div>
                <button
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ?
                        <ArrowDropUpIcon fontSize='large' className='text-[#04594D]'/> :
                        <ArrowDropDownIcon fontSize='large' className='text-[#04594D]'/>
                    }
                </button>
            </div>

            {open && (
                <div className='absolute let-0 bg-white ml-6 shadow-lg flex flex-col justify-end'>
                    <ul className='flex flex-col'>
                        {items.map((item, index) => (
                            <button
                                key={index}
                                className='px-20 hover:bg-[#04594D] focus:bg-[#04594D] transition-colors'
                            >
                                {item}
                            </button>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
    )
        ;
};
