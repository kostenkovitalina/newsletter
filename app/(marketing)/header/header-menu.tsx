import React from 'react';
import {DropDownMenu} from "@/app/(components)/drop-down/drop-dawn-menu";
import Link from 'next/link';

export const HeaderMenu = () => {

    return (
        <div>
            <DropDownMenu
                label={
                    <button>
                        <Link href={`/`}>
                            NEWSLETTER
                        </Link>
                    </button>
                }
                labelClassName='text-4xl font-extrabold text-white tracking-wide ml-1 sm:ml-6'
                items={[
                    {label: 'My Account', href: '/account'},
                    {label: 'My News', href: '/my-news'},
                    {label: 'Weather', href: '/weather'},
                    {label: 'Save News', href: '/saved'},
                ]}
            />
        </div>
    );
};

